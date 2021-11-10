import { Climate } from "deepslate";
import { Biome } from "./Biome";
import { GridSpline } from "./GridSpline";
import { Layout } from "./Layout";
import { GridElement } from "./GridElement";
import { GridElementUnassigned } from "./GridElementUnassigned";
import { Slice } from "./Slice";
export declare type MultiNoiseParameters = {
    weirdness: number;
    continentalness: number;
    erosion: number;
    humidity: number;
    temperature: number;
    depth: number;
};
export declare type MultiNoiseIndexes = {
    w_idx: number;
    c_idx: number;
    e_idx: number;
    h_idx: number;
    t_idx: number;
};
export declare type PartialMultiNoiseIndexes = {
    w_idx?: number;
    c_idx?: number;
    e_idx?: number;
    h_idx?: number;
    t_idx?: number;
};
export declare type NoiseSetting = {
    firstOctave: number;
    amplitudes: number[];
};
export declare class BiomeBuilder {
    hasChanges: boolean;
    continentalnesses: [string, Climate.Param][];
    erosions: [string, Climate.Param][];
    weirdnesses: [string, Climate.Param, string, "A" | "B"][];
    temperatures: [string, Climate.Param][];
    humidities: [string, Climate.Param][];
    splines: {
        [key: string]: GridSpline;
    };
    gridElements: Map<string, GridElement>;
    vanillaBiomes: Map<string, Biome>;
    slices: Slice[];
    layouts: Layout[];
    biomes: Biome[];
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
        continentalnesses: [string, Climate.Param][];
        erosions: [string, Climate.Param][];
        weirdnesses: [string, Climate.Param, string, "A" | "B"][];
        temperatures: [string, Climate.Param][];
        humidities: [string, Climate.Param][];
        layouts: Layout[];
        slices: Slice[];
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
    };
    getSlice(name: string): GridElement;
    getLayoutElement(name: string): GridElement;
    registerVanillaBiome(biome: Biome): void;
    registerGridElement(element: GridElement): void;
    removeGridElement(element: GridElement): void;
    private findIndex;
    getIndexes(params: MultiNoiseParameters): MultiNoiseIndexes;
    lookup(indexes: MultiNoiseIndexes): {
        slice?: Slice;
        mode?: "A" | "B";
        layout?: Layout;
        biome?: Biome;
    };
    deleteParam(param: "humidity" | "temperature" | "continentalness" | "erosion" | "weirdness", id: number): void;
    splitParam(param: "humidity" | "temperature" | "continentalness" | "erosion" | "weirdness", id: number): void;
    getNumTemperatures(): number;
    getNumHumidities(): number;
    getNumContinentalnesses(): number;
    getNumErosions(): number;
}
//# sourceMappingURL=BiomeBuilder.d.ts.map