import { BiomeBuilder } from "../BuilderData/BiomeBuilder";
export declare class VisualizationManger {
    builder: BiomeBuilder;
    private map;
    private biomeSource;
    private biomeLayer;
    private contourLayer;
    private indicesManger;
    private closeContainer;
    private toggleIsolinesButton;
    constructor(builder: BiomeBuilder);
    private getPos;
    private getIdxs;
    updateNoises(): void;
    invalidateIndices(): void;
    refresh(): Promise<void>;
}
//# sourceMappingURL=VisualizationManager.d.ts.map