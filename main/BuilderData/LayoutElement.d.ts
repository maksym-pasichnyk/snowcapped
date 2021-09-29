import { ElementRenderer } from "../UI/Renderer/ElementRenderer";
export declare type Mode = "A" | "B" | "Any";
export interface LayoutElement {
    name: string;
    hidden: boolean;
    readonly allowEdit: boolean;
    lookupKey(temperatureIndex: number, humidityIndex: number): string;
    lookup(temperatureIndex: number, humidityIndex: number): LayoutElement;
    lookupRecursive(temperatureIndex: number, humidityIndex: number, mode: Mode, stopAtHidden?: boolean): LayoutElement;
    getRenderer(): ElementRenderer;
    getKey(): string;
}
//# sourceMappingURL=LayoutElement.d.ts.map