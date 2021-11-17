import { Climate } from "deepslate";
import { Biome } from "./Biome";
import { GridSpline } from "./GridSpline";
import { GridElement, Mode } from "./GridElement";
import { GridElementUnassigned } from "./GridElementUnassigned";
import { Grid } from "./Grid";
export declare type MultiNoiseParameters = {
    w: number;
    c: number;
    e: number;
    h: number;
    t: number;
    d: number;
};
export declare type MultiNoiseIndexes = {
    d: number;
    w: number;
    c: number;
    e: number;
    h: number;
    t: number;
};
export declare type PartialMultiNoiseIndexes = {
    d?: number;
    w?: number;
    c?: number;
    e?: number;
    h?: number;
    t?: number;
};
export declare type NoiseSetting = {
    firstOctave: number;
    amplitudes: number[];
};
export declare class BiomeBuilder {
    hasChanges: boolean;
    continentalnesses: Climate.Param[];
    erosions: Climate.Param[];
    weirdnesses: Climate.Param[];
    temperatures: Climate.Param[];
    humidities: Climate.Param[];
    depths: Climate.Param[];
    splines: {
        [key: string]: GridSpline;
    };
    gridElements: Map<string, GridElement>;
    vanillaBiomes: Map<string, Biome>;
    slices: Grid[];
    layouts: Grid[];
    biomes: Biome[];
    dimension: Grid;
    modes: ("A" | "B")[];
    layoutElementUnassigned: GridElementUnassigned;
    noiseSettings: {
        "continentalness": NoiseSetting;
        "erosion": NoiseSetting;
        "weirdness": NoiseSetting;
        "humidity": NoiseSetting;
        "temperature": NoiseSetting;
        "shift": NoiseSetting;
    };
    fixedNoises: {
        [key: string]: number;
    };
    vis_y_level: number | "surface";
    seed: bigint;
    dimensionName: string;
    useLegacyRandom: boolean;
    constructor(json: any);
    loadJSON(json: any): void;
    toJSON(): {
        dimensionName: string;
        seed: string;
        noiseSettings: {
            continentalness: NoiseSetting;
            erosion: NoiseSetting;
            weirdness: NoiseSetting;
            humidity: NoiseSetting;
            temperature: NoiseSetting;
            shift: NoiseSetting;
        };
        useLegacyRandom: boolean;
        continentalnesses: Climate.Param[];
        erosions: Climate.Param[];
        weirdnesses: Climate.Param[];
        temperatures: Climate.Param[];
        humidities: Climate.Param[];
        depths: Climate.Param[];
        dimension: Grid;
        modes: ("A" | "B")[];
        layouts: Grid[];
        slices: Grid[];
        biomes: Biome[];
        splines: {
            offset: {
                continentalnesses: number[];
                erosions: number[];
                splines: {
                    coordinate: string;
                    points: {
                        location: number;
                        value: number;
                        derivative: number;
                    }[];
                }[][];
            };
            factor: {
                continentalnesses: number[];
                erosions: number[];
                splines: {
                    coordinate: string;
                    points: {
                        location: number;
                        value: number;
                        derivative: number;
                    }[];
                }[][];
            };
            jaggedness: {
                continentalnesses: number[];
                erosions: number[];
                splines: {
                    coordinate: string;
                    points: {
                        location: number;
                        value: number;
                        derivative: number;
                    }[];
                }[][];
            };
        };
        version: number;
    };
    getSlice(name: string): GridElement;
    getLayoutElement(name: string): GridElement;
    registerVanillaBiome(biome: Biome): void;
    registerGridElement(element: GridElement): void;
    registerSlice(element: Grid): void;
    registerLayout(element: Grid): void;
    registerBiome(element: Biome): void;
    removeGridElement(element: GridElement): void;
    private findIndex;
    getIndexes(params: MultiNoiseParameters): MultiNoiseIndexes;
    lookupRecursive(indexes: MultiNoiseIndexes): Biome;
    lookupRecursiveWithTracking(indexes: MultiNoiseIndexes): {
        slice?: Grid;
        mode?: Mode;
        layout?: Grid;
        biome?: Biome;
    };
    deleteParam(param: "humidity" | "temperature" | "continentalness" | "erosion" | "weirdness" | "depth", id: number): void;
    splitParam(param: "humidity" | "temperature" | "continentalness" | "erosion" | "weirdness" | "depth", id: number): void;
    getNumTemperatures(): number;
    getNumHumidities(): number;
    getNumContinentalnesses(): number;
    getNumErosions(): number;
    getNumWeirdnesses(): number;
    getNumDepths(): number;
}
//# sourceMappingURL=BiomeBuilder.d.ts.map