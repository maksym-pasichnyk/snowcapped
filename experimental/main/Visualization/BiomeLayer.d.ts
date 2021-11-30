import * as L from "leaflet";
import { BiomeBuilder } from "../BuilderData/BiomeBuilder";
import { GridMultiNoiseIndicesManager } from "./GridMultiNoiseIndicesManager";
export declare class BiomeLayer extends L.GridLayer {
    private builder;
    private gridIndicesManager;
    constructor(builder: BiomeBuilder, gridIndicesManager: GridMultiNoiseIndicesManager);
    protected createTile(coords: L.Coords, done: L.DoneCallback): HTMLElement;
}
//# sourceMappingURL=BiomeLayer.d.ts.map