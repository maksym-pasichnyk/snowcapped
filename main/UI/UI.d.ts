import { BiomeBuilder } from "../BuilderData/BiomeBuilder";
import { AssignSlicesManager } from "./AssignSlicesManager";
import { LayoutEditor } from "./LayoutEditor";
import { SidebarManager } from "./SidebarManager";
import { SplineDisplayManager } from "./SplineDisplayManager";
import { VisualizationManger } from "./VisualizationManager";
export declare class UI {
    private static instance;
    static create(builder: BiomeBuilder): void;
    static getInstance(): UI;
    readonly sidebarManager: SidebarManager;
    readonly layoutEditor: LayoutEditor;
    readonly assignSlicesEditor: AssignSlicesManager;
    readonly splineDisplayManager: SplineDisplayManager;
    readonly visualizationManager: VisualizationManger;
    readonly builder: BiomeBuilder;
    selectedElement: string;
    openElement: string;
    private constructor();
    refresh(): void;
}
//# sourceMappingURL=UI.d.ts.map