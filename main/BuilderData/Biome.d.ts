import { ElementRenderer } from '../UI/Renderer/ElementRenderer';
import { BiomeBuilder } from './BiomeBuilder';
import { LayoutElement, Mode } from './LayoutElement';
export declare class Biome implements LayoutElement {
    name: string;
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
    lookupKey(temperatureIndex: number, humidityIndex: number): string;
    lookup(temperatureIndex: number, humidityIndex: number): Biome;
    lookupRecursive(temperatureIndex: number, humidityIndex: number, mode: Mode): Biome;
    getRenderer(): ElementRenderer;
    getKey(): string;
}
//# sourceMappingURL=Biome.d.ts.map