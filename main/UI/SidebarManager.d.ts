import * as d3 from "d3";
import { BiomeBuilder } from "../BuilderData/BiomeBuilder";
import { LayoutElement } from "../BuilderData/LayoutElement";
import { Slice } from "../BuilderData/Slice";
export declare class SidebarManager {
    private builder;
    private dragType;
    private dragKey;
    private lastDragedOverDiv;
    private openedElement;
    private selectedElement;
    constructor(builder: BiomeBuilder);
    private resizeBottomSpacer;
    openElement(openElement?: {
        type: string;
        key?: string;
    }): void;
    selectElement(selectElement?: {
        type: string;
        key: string;
    }): void;
    refresh(): void;
    handleElementDivs(list: (Slice | LayoutElement)[], c: string, selection: d3.Selection<d3.BaseType, unknown, HTMLElement, unknown>, fixed: boolean, use_color_picker: boolean): void;
    dragover<T extends Slice | LayoutElement>(element: HTMLElement, c: string, list: T[], d: T): boolean;
    drop<T extends Slice | LayoutElement>(element: HTMLElement, c: string, list: T[], d: T): boolean;
}
//# sourceMappingURL=SidebarManager.d.ts.map