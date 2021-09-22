import { SliceGridRenderer } from '../UI/Renderer/SliceGridRenderer';
import { BiomeBuilder } from './BiomeBuilder';
import { LayoutElement } from './LayoutElement';
export declare class Slice {
    allowEdit: boolean;
    name: string;
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
    set(continentalnessIndex: number, erosionIndex: number, element: string): void;
    undo(): void;
    lookupKey(continentalnessIndex: number, erosionIndex: number): string;
    lookup(continentalnessIndex: number, erosionIndex: number): LayoutElement;
    getRenderer(): SliceGridRenderer;
    getKey(): string;
}
//# sourceMappingURL=Slice.d.ts.map