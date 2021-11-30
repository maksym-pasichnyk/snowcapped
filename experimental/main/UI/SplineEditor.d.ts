import { BiomeBuilder } from "../BuilderData/BiomeBuilder";
export declare class SplineEditor {
    private builder;
    private title;
    zoom: number;
    private snapModeValue;
    private snapModeLocation;
    private dragRow;
    private dragCol;
    private dragValue;
    private dragLocation;
    private hover;
    private copy;
    constructor(builder: BiomeBuilder);
    private dragLocationValue;
    draw(pos?: {
        row: number;
        col: number;
    }): void;
    refresh(): void;
    hide(): void;
}
//# sourceMappingURL=SplineEditor.d.ts.map