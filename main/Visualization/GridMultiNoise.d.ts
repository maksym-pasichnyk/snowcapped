import { NoiseParams, TerrainShaper } from "deepslate";
import { BiomeBuilder, MultiNoiseParameters } from "../BuilderData/BiomeBuilder";
export declare class GridMultiNoise {
    private readonly temperature;
    private readonly humidity;
    private readonly continentalness;
    private readonly erosion;
    private readonly weirdness;
    private readonly offset;
    private readonly builder;
    private worker;
    private messageHandlers;
    constructor(seed: bigint, builder: BiomeBuilder, temperatureParams: NoiseParams, humidityParams: NoiseParams, continentalnessParams: NoiseParams, erosionParams: NoiseParams, weirdnessParams: NoiseParams, offsetParams: NoiseParams);
    getNoiseValueArray(x: number, z: number, size: number, step: number): Promise<MultiNoiseParameters[][]>;
    getTerrainShape(x: number, z: number): TerrainShaper.Shape;
    getOffset(x: number, y: number, z: number): number;
}
//# sourceMappingURL=GridMultiNoise.d.ts.map