import { ABElement } from "../../BuilderData/ABBiome";
import { Biome } from "../../BuilderData/Biome";
export interface ElementRenderer {
    draw(ctx: CanvasRenderingContext2D, minX: number, minY: number, sizeX: number, sizeY: number, t_idx: number, h_idx: number, indicateRecursive: boolean, isIcon: boolean): void;
    setHighlight(x_idx: number, y_idx: number): void;
}
export declare class BiomeRenderer implements ElementRenderer {
    biome: Biome;
    constructor(biome: Biome);
    setHighlight(x_idx: number, y_idx: number): void;
    draw(ctx: CanvasRenderingContext2D, minX: number, minY: number, sizeX: number, sizeY: number, t_idx: number, h_idx: number, indicateRecursive?: boolean, isIcon?: boolean): void;
    getIdsFromPosition(minX: number, minY: number, sizeX: number, sizeY: number, x: number, y: number): {
        t_idx: number;
        h_idx: number;
        mode: "A" | "B";
    } | undefined;
}
export declare class UnassignedRenderer implements ElementRenderer {
    setHighlight(x_idx: number, y_idx: number): void;
    draw(ctx: CanvasRenderingContext2D, minX: number, minY: number, sizeX: number, sizeY: number, t_idx: number, h_idx: number, indicateRecursive?: boolean, isIcon?: boolean): void;
}
export declare class ABBiomeRenderer implements ElementRenderer {
    ab_biome: ABElement;
    constructor(ab_biome: ABElement);
    setHighlight(x_idx: number, y_idx: number): void;
    draw(ctx: CanvasRenderingContext2D, minX: number, minY: number, sizeX: number, sizeY: number, t_idx: number, h_idx: number, indicateRecursive?: boolean, isIcon?: boolean): void;
}
//# sourceMappingURL=ElementRenderer.d.ts.map