import * as L from "leaflet";
import { BiomeBuilder } from "../BuilderData/BiomeBuilder";
export declare class ContourLayer extends L.GridLayer {
    private builder;
    private gridIndicesManager;
    constructor(builder: BiomeBuilder);
    protected createTile(coords: L.Coords, done: L.DoneCallback): HTMLElement;
}
//# sourceMappingURL=ContourLayer.d.ts.map