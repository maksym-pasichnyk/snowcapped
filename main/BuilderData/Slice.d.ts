import { BiomeGridRenderer } from '../UI/Renderer/BiomeGridRenderer';
import { Biome } from './Biome';
import { BiomeBuilder, MultiNoiseIndexes, PartialMultiNoiseIndexes } from './BiomeBuilder';
import { GridElement, Mode } from './GridElement';
import { Layout } from './Layout';
export declare class Slice implements GridElement {
    allowEdit: boolean;
    name: string;
    type_id: number;
    hidden: boolean;
    private array;
    private builder;
    private renderer;
    private key;
    private undoActions;
    private constructor();
    static create(builder: BiomeBuilder, name: string, fill: string): Slice;
    static fromJSON(builder: BiomeBuilder, json: any): Slice;
    toJSON(): {
        key: string;
        name: string;
        array: string[][];
    };
    getSize(): [number, number];
    set(indexes: PartialMultiNoiseIndexes, element: string): void;
    undo(): void;
    deleteParam(param: "continentalness" | "erosion", id: number): void;
    splitParam(param: "continentalness" | "erosion", id: number): void;
    deleteGridElement(key: string): void;
    lookupKey(indexes: PartialMultiNoiseIndexes, _mode: Mode): string;
    lookup(indexes: PartialMultiNoiseIndexes, mode: Mode): GridElement;
    lookupRecursive(indexes: MultiNoiseIndexes, mode: Mode, stopAtHidden?: boolean, stopAtLayout?: boolean): GridElement;
    lookupRecursiveWithTracking(indexes: PartialMultiNoiseIndexes, mode: Mode, stopAtHidden?: boolean): {
        slice: Slice;
        layout: Layout;
        biome: Biome;
    };
    getRenderer(): BiomeGridRenderer;
    cellToIds(x: number, y: number): PartialMultiNoiseIndexes;
    idsToCell(indexes: PartialMultiNoiseIndexes): [number, number] | "all";
    getKey(): string;
    has(key: string, limit: PartialMultiNoiseIndexes): boolean;
}
//# sourceMappingURL=Slice.d.ts.map