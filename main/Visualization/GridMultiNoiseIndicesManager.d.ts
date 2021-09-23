import * as L from "leaflet";
import { BiomeBuilder, MultiNoiseIndexes } from "../BuilderData/BiomeBuilder";
import { GridMultiNoise } from "./GridMultiNoise";
export declare class GridMultiNoiseIndicesManager {
    private noisevalues_cache;
    private indices_cache;
    readonly resolution = 6;
    private size;
    private midPoint;
    private multiNoise;
    private builder;
    constructor(builder: BiomeBuilder, multiNoise: GridMultiNoise);
    get(coords: L.Coords): Promise<MultiNoiseIndexes[][]> | MultiNoiseIndexes[][];
    invalidateIndices(): void;
    private _tileCoordsToKey;
}
//# sourceMappingURL=GridMultiNoiseIndicesManager.d.ts.map