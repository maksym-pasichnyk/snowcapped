import { Climate } from "deepslate";
import { BiomeBuilder } from "../BuilderData/BiomeBuilder";
export declare class SplineDisplayManager {
    private builder;
    private splineCanvas;
    private pos?;
    private weirdnesses;
    constructor(builder: BiomeBuilder);
    setPos(pos?: {
        c: number;
        e: number;
    }): void;
    setWeirdnesses(weirdnesses: Climate.Param[]): void;
    refresh(): void;
}
//# sourceMappingURL=SplineDisplayManager.d.ts.map