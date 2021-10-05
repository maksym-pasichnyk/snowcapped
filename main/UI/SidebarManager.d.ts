import { BiomeBuilder } from "../BuilderData/BiomeBuilder";
export declare class SidebarManager {
    private sidebar;
    private builder;
    private layout_divs;
    private biome_divs;
    private bottom_spacer;
    private search_bar;
    private dragType;
    private dragKey;
    private lastDragedOverDiv;
    constructor(builder: BiomeBuilder);
    refresh(): void;
    private updateBiomeSearch;
    private createElementDiv;
}
//# sourceMappingURL=SidebarManager.d.ts.map