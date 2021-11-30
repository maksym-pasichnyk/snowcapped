import { PartialMultiNoiseIndexes } from "../../BuilderData/BiomeBuilder";
import { GridElementRenderer } from "./ElementRenderer";
export declare class UnassignedRenderer implements GridElementRenderer {
    setHighlight(x_idx: number, y_idx: number): void;
    draw(ctx: CanvasRenderingContext2D, minX: number, minY: number, sizeX: number, sizeY: number, indexes: PartialMultiNoiseIndexes, isIcon: boolean): void;
}
//# sourceMappingURL=UnassignedRenderer.d.ts.map