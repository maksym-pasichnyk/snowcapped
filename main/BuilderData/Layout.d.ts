import { ElementRenderer } from "../UI/Renderer/ElementRenderer";
import { BiomeBuilder } from "./BiomeBuilder";
import { LayoutElement, Mode } from "./LayoutElement";
export declare class Layout implements LayoutElement {
    allowEdit: boolean;
    name: string;
    private array;
    private builder;
    private renderer;
    private undoActions;
    private key;
    private constructor();
    static create(builder: BiomeBuilder, name: string, array?: string[][], key?: string): Layout;
    static fromJSON(builder: BiomeBuilder, json: any): Layout;
    toJSON(): {
        key: string;
        name: string;
        array: string[][];
    };
    set(temperatureIndex: number, humidityIndex: number, element: string, recordUndo?: boolean): void;
    undo(): void;
    lookupKey(temperatureIndex: number, humidityIndex: number): string;
    lookup(temperatureIndex: number, humidityIndex: number): LayoutElement;
    lookupRecursive(temperatureIndex: number, humidityIndex: number, mode: Mode): LayoutElement;
    getSize(): [number, number];
    getRenderer(): ElementRenderer;
    getKey(): string;
}
//# sourceMappingURL=Layout.d.ts.map