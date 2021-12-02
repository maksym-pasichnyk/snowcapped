import { GridElementRenderer } from '../UI/Renderer/ElementRenderer';
import { Biome } from './Biome';
import { BiomeBuilder, MultiNoiseIndexes, PartialMultiNoiseIndexes } from './BiomeBuilder';
import { Grid } from './Grid';
import { GridElement, Mode } from './GridElement';
export declare class ABElement implements GridElement {
    readonly allowEdit: boolean;
    readonly elementA: string;
    readonly elementB: string;
    type_id: number;
    hidden: boolean;
    private builder;
    private renderer;
    readonly name: string;
    private constructor();
    static create(builder: BiomeBuilder, elementA: string, elementB: string): ABElement;
    lookupKey(indexes: MultiNoiseIndexes, mode: Mode): string;
    lookup(indexes: PartialMultiNoiseIndexes, mode: Mode): GridElement;
    lookupRecursive(indexes: PartialMultiNoiseIndexes, mode: Mode, stopAtHidden?: boolean): GridElement;
    lookupRecursiveWithTracking(indexes: PartialMultiNoiseIndexes, mode: Mode, stopAtHidden?: boolean): {
        slice: Grid;
        layout: Grid;
        biome: Biome;
    };
    getElement(mode: "A" | "B"): GridElement;
    getRenderer(): GridElementRenderer;
    getKey(): string;
    has(key: string, limit: PartialMultiNoiseIndexes): boolean;
}
//# sourceMappingURL=ABBiome.d.ts.map