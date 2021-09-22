import { Slice } from "../../BuilderData/Slice";
export declare class SliceGridRenderer {
    private slice;
    private highlight_c;
    private highlight_e;
    constructor(slice: Slice);
    draw(ctx: CanvasRenderingContext2D, minX: number, minY: number, sizeX: number, sizeY: number, _t_idx?: number, _h_idx?: number, indicateRecursive?: boolean, isIcon?: boolean): void;
    getIdsFromPosition(minX: number, minY: number, sizeX: number, sizeY: number, x: number, y: number): {
        t_idx: number;
        h_idx: number;
        local_t: number;
        local_h: number;
        mode: "A" | "B";
    } | undefined;
    setHighlight(c_idx: number, e_idx: number): void;
}
//# sourceMappingURL=SliceGridRenderer.d.ts.map