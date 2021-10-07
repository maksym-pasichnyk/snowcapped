import { Spline, TerrainShaper } from "deepslate";
import { ABElement } from "../BuilderData/ABBiome";
import { Biome } from "../BuilderData/Biome";
import { BiomeBuilder } from "../BuilderData/BiomeBuilder";
import { Layout } from "../BuilderData/Layout";
import { LayoutElement } from "../BuilderData/LayoutElement";
import { LayoutElementUnassigned } from "../BuilderData/LayoutElementUnassigned";
import { Slice } from "../BuilderData/Slice";
import { MenuManager } from "./MenuManager";
import { LayoutGridRenderer } from "./Renderer/LayoutGridRenderer";
import { UI } from "./UI";


function lerp(a: number, b: number, l: number) {
    return ((1 - l) * a + l * b)
}
export class LayoutEditor {
    private builder: BiomeBuilder
    private title: HTMLInputElement
    private canvas: HTMLCanvasElement

    private mouse_position: { mouse_x: number, mouse_y: number }
    layout: Layout | Slice

    constructor(builder: BiomeBuilder) {
        this.builder = builder

        this.title = document.getElementById("layoutName") as HTMLInputElement
        this.canvas = document.getElementById("layoutEditorCanvas") as HTMLCanvasElement

        const tooltip = document.getElementById("layoutEditorTooltip")
        const tooltip_name = tooltip.getElementsByClassName("name")[0] as HTMLElement

        this.title.onchange = (evt: Event) => {
            this.layout.name = this.title.value
            this.builder.hasChanges = true
            UI.getInstance().refresh()
        }

        this.canvas.onmousemove = (evt: MouseEvent) => {

            const renderer = this.layout.getRenderer() as LayoutGridRenderer
            this.mouse_position = this.getMousePosition(evt)
            const ids = renderer.getIdsFromPosition(0, 0, this.canvas.width, this.canvas.height, this.mouse_position.mouse_x, this.mouse_position.mouse_y)
            if (ids === undefined) {
                tooltip.classList.add("hidden")
                MenuManager.toggleAction("paint", false)
                MenuManager.toggleAction("paint-mode", false)
                MenuManager.toggleAction("open", false)
                return
            }


            MenuManager.toggleAction("paint", true)

            this.canvas.focus()

            tooltip.style.left = (Math.min(evt.pageX + 20, document.body.clientWidth - tooltip.clientWidth)) + "px"
            tooltip.style.top = (evt.pageY + 15) + "px"
            tooltip.classList.remove("hidden")
  
            let element = this.layout.lookup(ids.t_idx, ids.h_idx)

            if (this.layout instanceof Layout) {
                if (element instanceof ABElement) {
                    MenuManager.toggleAction("paint-mode", false)
                    element = element.getElement(ids.mode)
                } else {
                    MenuManager.toggleAction("paint-mode", true)
                }
            } else {
                MenuManager.toggleAction("paint-mode", false)
            }

            if (element instanceof Biome) {
                tooltip_name.innerHTML = element.name
                MenuManager.toggleAction("open", false)
                MenuManager.toggleAction("remove", true)
            } else if (element instanceof Layout) {
                tooltip_name.innerHTML = "&crarr; " + element.name + " (Layout)"
                MenuManager.toggleAction("open", true)
                MenuManager.toggleAction("remove", true)
            } else if (element instanceof LayoutElementUnassigned) {
                tooltip_name.innerHTML = "Unassigned"
                MenuManager.toggleAction("open", false)
                MenuManager.toggleAction("remove", false)
            }

            if (this.layout instanceof Slice){
                const cont = builder.continentalnesses[ids.t_idx][1]
                const c = lerp(cont.min, cont.max, ids.local_t)
    
                const ero = builder.erosions[ids.h_idx][1]
                const e = lerp(ero.min, ero.max, ids.local_h)

                UI.getInstance().splineDisplayManager.setPos({c: c, e: e})
                UI.getInstance().splineDisplayManager.refresh()
            }
        }

        this.canvas.onmouseleave = (evt: MouseEvent) => {
            tooltip.classList.add("hidden")
            UI.getInstance().splineDisplayManager.setPos(undefined)
            UI.getInstance().splineDisplayManager.refresh()

            MenuManager.toggleAction("paint", false)
            MenuManager.toggleAction("paint-mode", false)
            MenuManager.toggleAction("open", false)
            MenuManager.toggleAction("remove", false)

        }

        this.canvas.onclick = (evt: MouseEvent) => {
            const renderer = this.layout.getRenderer() as LayoutGridRenderer
            const mouse_position = this.getMousePosition(evt)
            const ids = renderer.getIdsFromPosition(0, 0, this.canvas.width, this.canvas.height, mouse_position.mouse_x, mouse_position.mouse_y)
            if (ids === undefined) {
                return
            }

            this.handleInteraction(ids.t_idx, ids.h_idx, ids.mode, evt.ctrlKey ? "add_alt" : evt.altKey ? "pick" : "add")
        }

        this.canvas.onauxclick = (evt: MouseEvent) => {
            if (evt.button === 1) {
                const renderer = this.layout.getRenderer() as LayoutGridRenderer
                const mouse_position = this.getMousePosition(evt)
                const ids = renderer.getIdsFromPosition(0, 0, this.canvas.width, this.canvas.height, mouse_position.mouse_x, mouse_position.mouse_y)
                if (ids === undefined) {
                    return
                }

                this.handleInteraction(ids.t_idx, ids.h_idx, ids.mode, "pick")
            }
        }




        this.canvas.oncontextmenu = (evt: MouseEvent) => {
            const renderer = this.layout.getRenderer() as LayoutGridRenderer
            const mouse_position = this.getMousePosition(evt)
            const ids = renderer.getIdsFromPosition(0, 0, this.canvas.width, this.canvas.height, mouse_position.mouse_x, mouse_position.mouse_y)
            if (ids === undefined) {
                return
            }

            this.handleInteraction(ids.t_idx, ids.h_idx, ids.mode, "open")
            evt.preventDefault()
        }

        this.canvas.onkeydown = (evt: KeyboardEvent) => {
            if (evt.key === "z" && evt.ctrlKey) {
                this.undo()
                UI.getInstance().refresh()
            }
        }

        this.canvas.onkeyup = (evt: KeyboardEvent) => {
            if (evt.key === "Delete") {
                const renderer = this.layout.getRenderer() as LayoutGridRenderer
                const mouse_position = this.mouse_position
                const ids = renderer.getIdsFromPosition(0, 0, this.canvas.width, this.canvas.height, mouse_position.mouse_x, mouse_position.mouse_y)
                if (ids === undefined) {
                    return
                }

                this.handleInteraction(ids.t_idx, ids.h_idx, ids.mode, "remove")
                evt.preventDefault
            }
        }
    }

    highlight(x_idx: number, y_idx: number){
        const element = this.builder.getRenderedElement(UI.getInstance().openElement)
        if (element instanceof Slice || element instanceof Layout)
            this.layout = element
        this.layout.getRenderer().setHighlight(x_idx, y_idx)
    }

    getMousePosition(evt: MouseEvent): { mouse_x: number, mouse_y: number } {
        const rect = this.canvas.getBoundingClientRect()
        const scaleX = this.canvas.width / rect.width
        const scaleY = this.canvas.height / rect.height

        const canvasMouseX = (evt.clientX - rect.left) * scaleX
        const canvasMouseY = (evt.clientY - rect.top) * scaleY

        return { mouse_x: canvasMouseX, mouse_y: canvasMouseY }
    }

    handleInteraction(t_idx: number, h_idx: number, mode: "A" | "B", action: "add" | "add_alt" | "pick" | "open" | "remove") {
        const element = this.layout.lookup(t_idx, h_idx)

        let exact_element = element
        if (exact_element instanceof ABElement) {
            if (mode === "A") {
                exact_element = this.builder.getLayoutElement(exact_element.elementA)
            } else {
                exact_element = this.builder.getLayoutElement(exact_element.elementB)
            }
        }

        var selectedElement = UI.getInstance().selectedElement;

        if (action === "remove") {
            selectedElement = "unassigned"
            action = "add"
        }

        if (action === "pick") {
            UI.getInstance().selectedElement = exact_element.getKey()
            UI.getInstance().refresh()
        } else if ((action === "add" || action === "add_alt") && selectedElement !== "") {
            //Cycle Check
            const se = this.builder.layoutElements.get(selectedElement)
            if (se instanceof Layout && this.layout instanceof Layout) {
                this.layout.set(t_idx, h_idx, this.builder.layoutElementDummy.getKey(), false)
                if (se.lookupRecursive(t_idx, h_idx, "A") === this.builder.layoutElementDummy || se.lookupRecursive(t_idx, h_idx, "B") === this.builder.layoutElementDummy) {
                    //Cycle found
                    this.layout.set(t_idx, h_idx, element.getKey(), false)
                    return
                } else {
                    this.layout.set(t_idx, h_idx, element.getKey(), false)
                }
            }

            if (!se && this.builder.vanillaBiomes.has(selectedElement)) {
                this.builder.registerLayoutElement(this.builder.vanillaBiomes.get(selectedElement))
            }

            if (action === "add_alt" && !(element instanceof ABElement) && this.layout instanceof Layout) {
                // add alternate
                if (mode === "A") {
                    this.layout.set(t_idx, h_idx, selectedElement + "/" + element.getKey())
                } else {
                    this.layout.set(t_idx, h_idx, element.getKey() + "/" + selectedElement)
                }
            } else {
                if (element instanceof ABElement) {
                    if (mode === "A") {
                        if (selectedElement === element.elementB) {
                            this.layout.set(t_idx, h_idx, selectedElement)
                        } else {
                            this.layout.set(t_idx, h_idx, selectedElement + "/" + element.elementB)
                        }
                    } else {
                        if (selectedElement === element.elementA) {
                            this.layout.set(t_idx, h_idx, selectedElement)
                        } else {
                            this.layout.set(t_idx, h_idx, element.elementA + "/" + selectedElement)
                        }
                    }
                } else {
                    this.layout.set(t_idx, h_idx, selectedElement)
                }
            }
            UI.getInstance().refresh()
        } else if (action === "open") {
            // Right mouse button
            // open

            if (exact_element instanceof Layout) {
                UI.getInstance().openElement = exact_element.getKey()
                UI.getInstance().refresh()
            }
        }
    }

    undo() {
        this.layout.undo()
    }

    refresh() {
        this.canvas.parentElement.classList.remove("hidden")
        this.title.readOnly = false
        const element = this.builder.getRenderedElement(UI.getInstance().openElement)
        if (element instanceof Slice || element instanceof Layout)
            this.layout = element
        this.title.value = this.layout.name

        if (this.layout instanceof Slice){
            UI.getInstance().splineDisplayManager.setWeirdnesses(this.builder.weirdnesses.filter(w => (w[2] === this.layout.getKey())).map(w => w[1]))
        } else {
            UI.getInstance().splineDisplayManager.setWeirdnesses([])
            UI.getInstance().splineDisplayManager.setPos(undefined)            
        }

        const ctx = this.canvas.getContext('2d')
        this.layout.getRenderer().draw(ctx, 0, 0, this.canvas.width, this.canvas.height, -1, -1, true, false)
    }

    hide() {
        this.canvas.parentElement.classList.add("hidden")
    }
}

