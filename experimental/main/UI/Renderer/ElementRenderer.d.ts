import { PartialMultiNoiseIndexes } from "../../BuilderData/BiomeBuilder";
export interface GridElementRenderer {
    draw(ctx: CanvasRenderingContext2D, minX: number, minY: number, sizeX: number, sizeY: number, indexes: PartialMultiNoiseIndexes, isIcon: boolean): void;
    setHighlight(x_idx: number, y_idx: number): void;
}
//# sourceMappingURL=ElementRenderer.d.ts.map