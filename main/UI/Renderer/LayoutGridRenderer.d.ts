import { Layout } from "../../BuilderData/Layout";
import { ElementRenderer } from "./ElementRenderer";
export declare class LayoutGridRenderer implements ElementRenderer {
    private layout;
    private highlight_t;
    private highlight_h;
    constructor(layout: Layout);
    draw(ctx: CanvasRenderingContext2D, minX: number, minY: number, sizeX: number, sizeY: number, _t_idx?: number, _h_idx?: number, indicateRecursive?: boolean, isIcon?: boolean): void;
    getIdsFromPosition(minX: number, minY: number, sizeX: number, sizeY: number, x: number, y: number): {
        t_idx: number;
        h_idx: number;
        local_t: number;
        local_h: number;
        mode: "A" | "B";
    } | undefined;
    setHighlight(t_idx: number, h_idx: number): void;
}
//# sourceMappingURL=LayoutGridRenderer.d.ts.map