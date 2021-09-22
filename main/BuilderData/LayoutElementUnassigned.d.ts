import { ElementRenderer, UnassignedRenderer } from "../UI/Renderer/ElementRenderer";
import { BiomeBuilder } from "./BiomeBuilder";
import { LayoutElement, Mode } from "./LayoutElement";
export declare class LayoutElementUnassigned implements LayoutElement {
    allowEdit: boolean;
    name: string;
    renderer: UnassignedRenderer;
    private constructor();
    static create(builder: BiomeBuilder): LayoutElementUnassigned;
    lookupKey(temperatureIndex: number, humidityIndex: number): string;
    lookup(temperatureIndex: number, humidityIndex: number): LayoutElement;
    lookupRecursive(temperatureIndex: number, humidityIndex: number, mode: Mode): LayoutElement;
    getRenderer(): ElementRenderer;
    getKey(): string;
}
//# sourceMappingURL=LayoutElementUnassigned.d.ts.map