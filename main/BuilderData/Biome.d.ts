import { GridElementRenderer } from '../UI/Renderer/ElementRenderer';
import { BiomeBuilder, MultiNoiseIndexes, PartialMultiNoiseIndexes } from './BiomeBuilder';
import { GridElement, Mode } from './GridElement';
import { Layout } from './Layout';
import { Slice } from './Slice';
export declare class Biome implements GridElement {
    name: string;
    hidden: boolean;
    type_id: number;
    readonly allowEdit: boolean;
    color: string;
    private renderer;
    private isVanilla;
    private key;
    private constructor();
    static create(builder: BiomeBuilder, name: string, color: string, key?: string, isVanilla?: boolean): Biome;
    static fromJSON(builder: BiomeBuilder, json: any): Biome;
    toJSON(): {
        key: string;
        name: string;
        color: string;
    };
    lookupKey(indexes: MultiNoiseIndexes, mode: Mode): string;
    lookup(indexes: MultiNoiseIndexes, mode: Mode): Biome;
    lookupRecursive(indexes: MultiNoiseIndexes, mode: Mode): Biome;
    lookupRecursiveWithTracking(indexes: PartialMultiNoiseIndexes, mode: Mode, stopAtHidden?: boolean): {
        slice: Slice;
        layout: Layout;
        biome: Biome;
    };
    getRenderer(): GridElementRenderer;
    getKey(): string;
    has(key: string, _limit: PartialMultiNoiseIndexes): boolean;
}
//# sourceMappingURL=Biome.d.ts.map