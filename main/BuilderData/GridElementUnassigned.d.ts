import { GridElementRenderer, UnassignedRenderer } from "../UI/Renderer/ElementRenderer";
import { Biome } from "./Biome";
import { BiomeBuilder, MultiNoiseIndexes, PartialMultiNoiseIndexes } from "./BiomeBuilder";
import { GridElement, Mode } from "./GridElement";
import { Layout } from "./Layout";
import { Slice } from "./Slice";
export declare class GridElementUnassigned implements GridElement {
    allowEdit: boolean;
    name: string;
    type_id: number;
    hidden: boolean;
    renderer: UnassignedRenderer;
    private constructor();
    static create(builder: BiomeBuilder): GridElementUnassigned;
    lookupKey(indexes: MultiNoiseIndexes, mode: Mode): string;
    lookup(indexes: MultiNoiseIndexes, mode: Mode): GridElement;
    lookupRecursive(indexes: MultiNoiseIndexes, mode: Mode): GridElement;
    lookupRecursiveWithTracking(indexes: PartialMultiNoiseIndexes, mode: Mode, stopAtHidden?: boolean): {
        slice: Slice;
        layout: Layout;
        biome: Biome;
    };
    getRenderer(): GridElementRenderer;
    getKey(): string;
    has(key: string, _limit: PartialMultiNoiseIndexes): boolean;
}
//# sourceMappingURL=GridElementUnassigned.d.ts.map