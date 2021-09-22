import { BiomeBuilder } from "../BuilderData/BiomeBuilder";
export declare class VisualizationManger {
    builder: BiomeBuilder;
    private map;
    private biomeSource;
    private biomeLayer;
    private indicesManger;
    private closeContainer;
    constructor(builder: BiomeBuilder);
    private getIdxs;
    refresh(): Promise<void>;
}
//# sourceMappingURL=VisualizationManager.d.ts.map