import * as d3 from "d3";
import { BiomeBuilder } from "../BuilderData/BiomeBuilder";
import { GridElement } from "../BuilderData/GridElement";
export declare class SidebarManager {
    private builder;
    private dragType;
    private dragKey;
    private lastDragedOverDiv;
    parentElements: {
        type: string;
        key?: string;
    }[];
    openedElement: {
        type: string;
        key?: string;
    };
    selectedElement: {
        type: string;
        key: string;
    };
    constructor(builder: BiomeBuilder);
    private resizeBottomSpacer;
    openElement(openElement?: {
        type: string;
        key?: string;
    }, asChild?: boolean, __from_back?: boolean): void;
    back(): void;
    selectElement(selectElement?: {
        type: string;
        key: string;
    }): void;
    refresh(): void;
    handleElementDivs(list: (GridElement)[], c: string, selection: d3.Selection<d3.BaseType, unknown, HTMLElement, unknown>, gridSize: number, fixed: boolean, use_color_picker: boolean): void;
    dragover<T extends GridElement>(element: HTMLElement, c: string, list: T[], d: T): boolean;
    drop<T extends GridElement>(element: HTMLElement, c: string, list: T[], d: T): boolean;
}
//# sourceMappingURL=SidebarManager.d.ts.map