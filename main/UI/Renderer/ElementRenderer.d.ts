import { ABElement } from "../../BuilderData/ABBiome";
import { Biome } from "../../BuilderData/Biome";
import { PartialMultiNoiseIndexes } from "../../BuilderData/BiomeBuilder";
export interface GridElementRenderer {
    draw(ctx: CanvasRenderingContext2D, minX: number, minY: number, sizeX: number, sizeY: number, indexes: PartialMultiNoiseIndexes, indicateRecursive: boolean, isIcon: boolean, gradGridWithBorder: boolean): void;
    setHighlight(x_idx: number, y_idx: number): void;
}
export declare class BiomeRenderer implements GridElementRenderer {
    biome: Biome;
    constructor(biome: Biome);
    setHighlight(x_idx: number, y_idx: number): void;
    draw(ctx: CanvasRenderingContext2D, minX: number, minY: number, sizeX: number, sizeY: number, indexes: PartialMultiNoiseIndexes, indicateRecursive: boolean, isIcon: boolean, gradGridWithBorder: boolean): void;
    getIdsFromPosition(minX: number, minY: number, sizeX: number, sizeY: number, x: number, y: number): {
        t_idx: number;
        h_idx: number;
        mode: "A" | "B";
    } | undefined;
}
export declare class UnassignedRenderer implements GridElementRenderer {
    setHighlight(x_idx: number, y_idx: number): void;
    draw(ctx: CanvasRenderingContext2D, minX: number, minY: number, sizeX: number, sizeY: number, indexes: PartialMultiNoiseIndexes, indicateRecursive: boolean, isIcon: boolean, gradGridWithBorder: boolean): void;
}
export declare class ABBiomeRenderer implements GridElementRenderer {
    ab_biome: ABElement;
    private parentType;
    constructor(ab_biome: ABElement);
    setHighlight(x_idx: number, y_idx: number): void;
    setParentType(type: string): void;
    draw(ctx: CanvasRenderingContext2D, minX: number, minY: number, sizeX: number, sizeY: number, indexes: PartialMultiNoiseIndexes, indicateRecursive: boolean, isIcon: boolean, gradGridWithBorder: boolean): void;
}
//# sourceMappingURL=ElementRenderer.d.ts.map