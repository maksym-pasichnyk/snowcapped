import { BiomeBuilder, PartialMultiNoiseIndexes } from "../BuilderData/BiomeBuilder";
import { Layout } from "../BuilderData/Layout";
import { Slice } from "../BuilderData/Slice";
export declare class BiomeGridEditor {
    private builder;
    private title;
    private canvas;
    private mouse_position;
    layout: Layout | Slice;
    constructor(builder: BiomeBuilder);
    highlight(x_idx: number, y_idx: number): void;
    getMousePosition(evt: MouseEvent): {
        mouse_x: number;
        mouse_y: number;
    };
    handleInteraction(indexes: PartialMultiNoiseIndexes, mode: "A" | "B", action: "add" | "add_alt" | "pick" | "open" | "remove"): void;
    undo(): void;
    refresh(): void;
    hide(): void;
}
//# sourceMappingURL=BiomeGridEditor.d.ts.map