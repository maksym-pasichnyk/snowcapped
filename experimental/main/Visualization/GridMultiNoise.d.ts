import { BiomeBuilder, MultiNoiseParameters } from "../BuilderData/BiomeBuilder";
export declare class GridMultiNoise {
    private readonly builder;
    private worker;
    private messageHandlers;
    constructor(seed: bigint, builder: BiomeBuilder);
    getNoiseValueArray(x: number, z: number, size: number, step: number): Promise<MultiNoiseParameters[][]>;
    updateNoiseSettings(): void;
}
//# sourceMappingURL=GridMultiNoise.d.ts.map