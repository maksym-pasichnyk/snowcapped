import { Biome } from "../../BuilderData/Biome";
import { PartialMultiNoiseIndexes } from "../../BuilderData/BiomeBuilder";
import { GridElementRenderer } from "./ElementRenderer";
export declare class BiomeRenderer implements GridElementRenderer {
    biome: Biome;
    constructor(biome: Biome);
    setHighlight(x_idx: number, y_idx: number): void;
    draw(ctx: CanvasRenderingContext2D, minX: number, minY: number, sizeX: number, sizeY: number, indexes: PartialMultiNoiseIndexes, isIcon: boolean): void;
    getIdsFromPosition(minX: number, minY: number, sizeX: number, sizeY: number, x: number, y: number): {
        t_idx: number;
        h_idx: number;
        mode: "A" | "B";
    } | undefined;
}
//# sourceMappingURL=BiomeRenderer.d.ts.map