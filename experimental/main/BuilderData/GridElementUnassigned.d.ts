import { GridElementRenderer } from "../UI/Renderer/ElementRenderer";
import { UnassignedRenderer } from "../UI/Renderer/UnassignedRenderer";
import { Biome } from "./Biome";
import { BiomeBuilder, MultiNoiseIndexes, PartialMultiNoiseIndexes } from "./BiomeBuilder";
import { Grid } from "./Grid";
import { GridElement, Mode } from "./GridElement";
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
        slice: Grid;
        layout: Grid;
        biome: Biome;
    };
    getRenderer(): GridElementRenderer;
    getKey(): string;
    has(key: string, _limit: PartialMultiNoiseIndexes): boolean;
}
//# sourceMappingURL=GridElementUnassigned.d.ts.map