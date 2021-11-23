import { BiomeBuilder, PartialMultiNoiseIndexes } from "../BuilderData/BiomeBuilder";
import { Grid } from "../BuilderData/Grid";
export declare class BiomeGridEditor {
    private builder;
    private title;
    private canvas;
    private backButton;
    private mouse_position;
    layout: Grid;
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