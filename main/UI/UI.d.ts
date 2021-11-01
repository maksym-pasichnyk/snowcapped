import { BiomeBuilder } from "../BuilderData/BiomeBuilder";
import { AssignSlicesManager } from "./AssignSlicesManager";
import { GridEditor } from "./GridEditor";
import { LayoutEditor } from "./LayoutEditor";
import { SettingsManager } from "./SettingsManager";
import { SidebarManager } from "./SidebarManager";
import { SplineDisplayManager } from "./SplineDisplayManager";
import { SplineEditor } from "./SplineEditor";
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
    readonly gridEditor: GridEditor;
    readonly splineEditor: SplineEditor;
    readonly settingsManager: SettingsManager;
    readonly builder: BiomeBuilder;
    private constructor();
    refresh(): void;
}
//# sourceMappingURL=UI.d.ts.map