import { PartialMultiNoiseIndexes } from "../../BuilderData/BiomeBuilder";
import { Grid } from "../../BuilderData/Grid";
import { GridElement } from "../../BuilderData/GridElement";
import { GridElementRenderer } from "./ElementRenderer";
export declare class BiomeGridRenderer implements GridElementRenderer {
    private highlight_x;
    private highlight_y;
    private grid;
    private aImg;
    private bImg;
    constructor(grid: Grid);
    lookup(x: number, y: number): GridElement;
    getSize(): [number, number];
    draw(ctx: CanvasRenderingContext2D, minX: number, minY: number, sizeX: number, sizeY: number, indexes: PartialMultiNoiseIndexes, indicateRecursive?: boolean, isIcon?: boolean, drawGridWithBorder?: boolean): void;
    getIdsFromPosition(minX: number, minY: number, sizeX: number, sizeY: number, x: number, y: number): {
        indexes: PartialMultiNoiseIndexes;
        local_t: number;
        local_h: number;
        mode: "A" | "B";
    } | undefined;
    setHighlight(y_idx: number, x_idx: number): void;
}
//# sourceMappingURL=BiomeGridRenderer.d.ts.map