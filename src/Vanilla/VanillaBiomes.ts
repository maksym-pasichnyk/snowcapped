import { Biome } from "../BuilderData/Biome";
import { BiomeBuilder } from "../BuilderData/BiomeBuilder";



export class VanillaBiomes{
    private static biomes = [
        {name: "minecraft:ocean", color: "rgb(50, 50, 255)"},
        {name: "minecraft:plains", color: "rgb(61, 196, 12)"},
        {name: "minecraft:desert", color: "rgb(247, 237, 40)"},
        {name: "minecraft:extreme_hills", color: "rgb(66, 66, 66)"},
        {name: "minecraft:forest", color: "rgb(21, 107, 23)"},
        {name: "minecraft:taiga", color: "rgb(105, 69, 19)"},
        {name: "minecraft:swamp", color: "rgb(60, 130, 96)"},
        {name: "minecraft:river", color: "rgb(53, 116, 232)"},
        {name: "minecraft:nether_wastes", color: "rgb(163, 62, 62)"},
        {name: "minecraft:the_end", color: "rgb(252, 244, 121)"},
        {name: "minecraft:frozen_ocean", color: "rgb(209, 237, 255)"},
        {name: "minecraft:frozen_river", color: "rgb(166, 212, 255)"},
        {name: "minecraft:snowy_tundra", color: "rgb(239, 255, 235)"},
        {name: "minecraft:snowy_mountains", color: "rgb(239, 255, 235)"},
        {name: "minecraft:mushroom_fields", color: "rgb(250, 145, 248)"},
        {name: "minecraft:mushroom_field_shore", color: "rgb(240, 187, 252)"},
        {name: "minecraft:beach", color: "rgb(255, 249, 138)"},
        {name: "minecraft:desert_hills", color: "rgb(181, 174, 33)"},
        {name: "minecraft:wooded_hills", color: "rgb(17, 69, 18)"},
        {name: "minecraft:taiga_hills", color: "rgb(30, 69, 8)"},
        {name: "minecraft:mountain_edge", color: "rgb(110, 109, 109)"},
        {name: "minecraft:jungle", color: "rgb(45, 227, 5)"},
        {name: "minecraft:jungle_hills", color: "rgb(33, 184, 0)"},
        {name: "minecraft:jungle_edge", color: "rgb(66, 207, 35)"},
        {name: "minecraft:deep_ocean", color: "rgb(5, 10, 82)"},
        {name: "minecraft:stone_shore", color: "rgb(166, 166, 166)"},
        {name: "minecraft:snowy_beach", color: "rgb(211, 212, 193)"},
        {name: "minecraft:birch_forest", color: "rgb(31, 145, 33)"},
        {name: "minecraft:birch_forest_hills", color: "rgb(28, 97, 29)"},
        {name: "minecraft:dark_forest", color: "rgb(7, 46, 7)"},
        {name: "minecraft:snowy_taiga", color: "rgb(179, 207, 163)"},
        {name: "minecraft:snowy_taiga_hills", color: "rgb(103, 117, 95)"},
        {name: "minecraft:giant_tree_taiga", color: "rgb(46, 23, 6)"},
        {name: "minecraft:giant_tree_taiga_hills", color: "rgb(23, 15, 3)"},
        {name: "minecraft:wooded_mountains", color: "rgb(37, 64, 36)"},
        {name: "minecraft:savanna", color: "rgb(179, 242, 61)"},
        {name: "minecraft:savanna_plateau", color: "rgb(132, 181, 40)"},
        {name: "minecraft:badlands", color: "rgb(212, 82, 42)"},
        {name: "minecraft:wooded_badlands_plateau", color: "rgb(230, 171, 62)"},
        {name: "minecraft:badlands_plateau", color: "rgb(120, 83, 42)"},
        {name: "minecraft:small_end_islands", color: "rgb(234, 247, 52)"},
        {name: "minecraft:end_midlands", color: "rgb(170, 179, 55)"},
        {name: "minecraft:end_highlands", color: "rgb(112, 117, 46)"},
        {name: "minecraft:end_barrens", color: "rgb(199, 204, 137)"},
        {name: "minecraft:warm_ocean", color: "rgb(95, 70, 224)"},
        {name: "minecraft:lukewarm_ocean", color: "rgb(80, 40, 212)"},
        {name: "minecraft:cold_ocean", color: "rgb(120, 188, 222)"},
        {name: "minecraft:deep_warm_ocean", color: "rgb(64, 54, 99)"},
        {name: "minecraft:deep_lukewarm_ocean", color: "rgb(49, 35, 87)"},
        {name: "minecraft:deep_cold_ocean", color: "rgb(59, 84, 102)"},
        {name: "minecraft:deep_frozen_ocean", color: "rgb(116, 133, 145)"},
        {name: "minecraft:the_void", color: "rgb(0, 0, 0)"},
        {name: "minecraft:sunflower_plains", color: "rgb(198, 255, 92)"},
        {name: "minecraft:desert_lakes", color: "rgb(97, 179, 186)"},
        {name: "minecraft:gravelly_hills", color: "rgb(85, 101, 102)"},
        {name: "minecraft:flower_forest", color: "rgb(172, 252, 33)"},
        {name: "minecraft:taiga_mountains", color: "rgb(46, 30, 8)"},
        {name: "minecraft:swamp_hills", color: "rgb(32, 66, 50)"},
        {name: "minecraft:ice_spikes", color: "rgb(194, 237, 255)"},
        {name: "minecraft:modified_jungle", color: "rgb(11, 227, 37)"},
        {name: "minecraft:modified_jungle_edge", color: "rgb(71, 237, 91)"},
        {name: "minecraft:tall_birch_forest", color: "rgb(31, 173, 34)"},
        {name: "minecraft:tall_birch_hills", color: "rgb(4, 74, 6)"},
        {name: "minecraft:dark_forest_hills", color: "rgb(0, 31, 1)"},
        {name: "minecraft:snowy_taiga_mountains", color: "rgb(74, 99, 74)"},
        {name: "minecraft:giant_spruce_taiga", color: "rgb(25, 61, 15)"},
        {name: "minecraft:giant_spruce_taiga_hills", color: "rgb(13, 36, 7)"},
        {name: "minecraft:modified_gravelly_mountains", color: "rgb(82, 89, 99)"},
        {name: "minecraft:shattered_savanna", color: "rgb(171, 219, 81)"},
        {name: "minecraft:shattered_savanna_plateau", color: "rgb(124, 158, 60)"},
        {name: "minecraft:eroded_badlands", color: "rgb(110, 44, 24)"},
        {name: "minecraft:modified_wooded_badlands_plateau", color: "rgb(128, 98, 54)"},
        {name: "minecraft:modified_badlands_plateau", color: "rgb(145, 101, 600)"},
        {name: "minecraft:bamboo_jungle", color: "rgb(158, 224, 83)"},
        {name: "minecraft:bamboo_jungle_hills", color: "rgb(98, 140, 49)"},
        {name: "minecraft:soul_sand_valley", color: "rgb(140, 132, 108)"},
        {name: "minecraft:crimson_forest", color: "rgb(68, 171, 171)"},
        {name: "minecraft:warped_forest", color: "rgb(219, 60, 46)"},
        {name: "minecraft:basalt_deltas", color: "rgb(79, 73, 66)"},
        {name: "minecraft:snowy_slopes", color: "rgb(140, 195, 222)"},
        {name: "minecraft:lofty_peaks", color: "rgb(196, 168, 193)"},
        {name: "minecraft:snowcapped_peaks", color: "rgb(200, 198, 200)"},
        {name: "minecraft:stony_peaks", color: "rgb(82, 92, 103)"},
        {name: "minecraft:grove", color: "rgb(150, 150, 189)"},
        {name: "minecraft:meadow", color: "rgb(169, 197, 80)"},
        {name: "minecraft:lush_caves", color: "rgb(112, 255, 79)"},
        {name: "minecraft:dripstone_caves", color: "rgb(140, 124, )"}
    ]

    static registerVanillaBiomes(builder: BiomeBuilder){
        for (let biome of VanillaBiomes.biomes) {
            Biome.create(builder, biome.name, biome.color)
        }
    }

}