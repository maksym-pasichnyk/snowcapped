import { ElementRenderer } from "../UI/Renderer/ElementRenderer";
import { BiomeBuilder } from "./BiomeBuilder";
import { LayoutElement, Mode } from "./LayoutElement";
export declare class LayoutElementDummy implements LayoutElement {
    hidden: boolean;
    allowEdit: boolean;
    name: string;
    static create(builder: BiomeBuilder): LayoutElementDummy;
    lookupKey(temperatureIndex: number, humidityIndex: number): string;
    lookup(temperatureIndex: number, humidityIndex: number): LayoutElement;
    lookupRecursive(temperatureIndex: number, humidityIndex: number, mode: Mode): LayoutElement;
    getRenderer(): ElementRenderer;
    getKey(): string;
}
//# sourceMappingURL=LayoutElementDummy.d.ts.map