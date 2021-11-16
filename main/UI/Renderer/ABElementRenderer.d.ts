import { ABElement } from "../../BuilderData/ABBiome";
import { PartialMultiNoiseIndexes } from "../../BuilderData/BiomeBuilder";
import { GridElementRenderer } from "./ElementRenderer";
export declare class ABElementRenderer implements GridElementRenderer {
    ab_element: ABElement;
    private parentType;
    constructor(ab_biome: ABElement);
    setHighlight(x_idx: number, y_idx: number): void;
    setParentType(type: string): void;
    draw(ctx: CanvasRenderingContext2D, minX: number, minY: number, sizeX: number, sizeY: number, indexes: PartialMultiNoiseIndexes, isIcon: boolean): void;
    drawOverlay(ctx: CanvasRenderingContext2D, minX: number, minY: number, sizeX: number, sizeY: number, indexes: PartialMultiNoiseIndexes): void;
}
//# sourceMappingURL=ABElementRenderer.d.ts.map