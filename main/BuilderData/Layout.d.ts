import { GridElementRenderer } from "../UI/Renderer/ElementRenderer";
import { Biome } from "./Biome";
import { BiomeBuilder, MultiNoiseIndexes, PartialMultiNoiseIndexes } from "./BiomeBuilder";
import { GridElement, Mode } from "./GridElement";
import { Slice } from "./Slice";
export declare class Layout implements GridElement {
    allowEdit: boolean;
    name: string;
    type_id: number;
    hidden: boolean;
    private array;
    private builder;
    private renderer;
    private undoActions;
    private key;
    private constructor();
    static create(builder: BiomeBuilder, name: string, array?: string[][], key?: string): Layout;
    static fromJSON(builder: BiomeBuilder, json: any): Layout;
    toJSON(): {
        key: string;
        name: string;
        array: string[][];
    };
    set(indexes: PartialMultiNoiseIndexes, element: string, recordUndo?: boolean): void;
    undo(): void;
    deleteParam(param: "humidity" | "temperature", id: number): void;
    splitParam(param: "humidity" | "temperature", id: number): void;
    deleteGridElement(key: string): void;
    lookupKey(indexes: PartialMultiNoiseIndexes, _mode: Mode): string;
    lookup(indexes: PartialMultiNoiseIndexes, mode: Mode): GridElement;
    lookupRecursive(indexes: MultiNoiseIndexes, mode: Mode, stopAtHidden?: boolean): GridElement;
    lookupRecursiveWithTracking(indexes: PartialMultiNoiseIndexes, mode: Mode, stopAtHidden?: boolean): {
        slice: Slice;
        layout: Layout;
        biome: Biome;
    };
    getSize(): [number, number];
    getRenderer(): GridElementRenderer;
    cellToIds(x: number, y: number): PartialMultiNoiseIndexes;
    idsToCell(indexes: PartialMultiNoiseIndexes): [number, number] | "all";
    getKey(): string;
    has(key: string, limit: PartialMultiNoiseIndexes): boolean;
}
//# sourceMappingURL=Layout.d.ts.map