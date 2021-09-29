import { ElementRenderer } from '../UI/Renderer/ElementRenderer';
import { BiomeBuilder } from './BiomeBuilder';
import { LayoutElement, Mode } from './LayoutElement';
export declare class ABElement implements LayoutElement {
    readonly allowEdit: boolean;
    readonly elementA: string;
    readonly elementB: string;
    hidden: boolean;
    private builder;
    private renderer;
    readonly name: string;
    private constructor();
    static create(builder: BiomeBuilder, elementA: string, elementB: string): ABElement;
    lookupKey(temperatureIndex: number, humidityIndex: number): string;
    lookup(temperatureIndex: number, humidityIndex: number): ABElement;
    lookupRecursive(temperatureIndex: number, humidityIndex: number, mode: Mode, stopAtHidden?: boolean): LayoutElement;
    getElement(mode: "A" | "B"): LayoutElement;
    getRenderer(): ElementRenderer;
    getKey(): string;
}
//# sourceMappingURL=ABBiome.d.ts.map