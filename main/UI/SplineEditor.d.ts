import { BiomeBuilder } from "../BuilderData/BiomeBuilder";
export declare class SplineEditor {
    private builder;
    private title;
    zoom: number;
    constructor(builder: BiomeBuilder);
    draw(pos?: {
        row: number;
        col: number;
    }): void;
    refresh(): void;
    hide(): void;
}
//# sourceMappingURL=SplineEditor.d.ts.map