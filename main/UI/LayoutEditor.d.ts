import { BiomeBuilder } from "../BuilderData/BiomeBuilder";
import { Layout } from "../BuilderData/Layout";
import { Slice } from "../BuilderData/Slice";
export declare class LayoutEditor {
    private builder;
    private title;
    private canvas;
    private mouse_position;
    private splineCanvas;
    layout: Layout | Slice;
    constructor(builder: BiomeBuilder);
    highlight(x_idx: number, y_idx: number): void;
    getMousePosition(evt: MouseEvent): {
        mouse_x: number;
        mouse_y: number;
    };
    handleInteraction(t_idx: number, h_idx: number, mode: "A" | "B", action: "add" | "add_alt" | "pick" | "open" | "remove"): void;
    undo(): void;
    refresh(): void;
    hide(): void;
}
//# sourceMappingURL=LayoutEditor.d.ts.map