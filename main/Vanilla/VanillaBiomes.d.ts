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
        name: string;
        r: number;
        g: number;
        b: number;
        key?: undefined;
        color?: undefined;
    })[];
    static registerVanillaBiomes(builder: BiomeBuilder): void;
    private static colorToHex;
}
//# sourceMappingURL=VanillaBiomes.d.ts.map