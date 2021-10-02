import { BiomeBuilder } from "../BuilderData/BiomeBuilder";
export declare class VanillaBiomes {
    static biomes: ({
        key: string;
        name: string;
        color: string;
        r?: undefined;
        g?: undefined;
        b?: undefined;
    } | {
        key: string;
        name: string;
        r: number;
        g: number;
        b: number;
        color?: undefined;
    })[];
    static registerVanillaBiomes(builder: BiomeBuilder): void;
    private static colorToHex;
}
//# sourceMappingURL=VanillaBiomes.d.ts.map