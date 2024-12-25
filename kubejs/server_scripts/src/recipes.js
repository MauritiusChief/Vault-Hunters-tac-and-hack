
onEvent('recipes', event => {
    const materials = [
        { output: 'tac:uncommon_material', S: 'minecraft:iron_ingot', A: 'minecraft:lime_dye', B: 'minecraft:green_dye' },
        { output: 'tac:rare_material', S: 'tac:uncommon_material', A: 'minecraft:cyan_dye', B: 'minecraft:light_blue_dye' },
        { output: 'tac:epic_material', S: 'tac:rare_material', A: 'minecraft:magenta_dye', B: 'minecraft:purple_dye' },
        { output: 'tac:legendary_material', S: 'tac:epic_material', A: 'minecraft:orange_dye', B: 'minecraft:white_dye' },
        { output: 'tac:ultimate_material', S: 'tac:legendary_material', A: 'minecraft:blue_dye', B: 'minecraft:red_dye' }
    ];
	materials.forEach(material => {
        event.shaped(material.output, [
            'BSB',
            'SAS',
            'BSB'
        ], {
            S: material.S,
            A: material.A,
            B: material.B
        });
    });

    const x4_gems = [
        { output: 'the_vault:gem_larimar', clay_count: 1, dye: 'minecraft:light_blue_dye'},
        { output: 'the_vault:gem_benitoite', clay_count: 1, dye: 'minecraft:blue_dye'},
        { output: 'the_vault:gem_alexandrite', clay_count: 2, dye: 'minecraft:magenta_dye'},
        { output: 'the_vault:gem_wutodie', clay_count: 2, dye: 'minecraft:purple_dye'},
        { output: 'the_vault:gem_painite', clay_count: 3, dye: 'minecraft:red_dye'},
        { output: 'the_vault:gem_black_opal', clay_count: 3, dye: 'minecraft:black_dye'}
    ]
    x4_gems.forEach(gem => {
        // 使用 Array.fill() 动态生成 clay_count 数量的 'minecraft:clay_ball'
        let ingredients = Array(gem.clay_count).fill('minecraft:clay_ball');
        // console.log(ingredients)
        ingredients.push(gem.dye); // 合并 clayBalls 和染料
        // console.log(ingredients)
        event.shapeless(gem.output, ingredients);
    });

    const x9_gems = [
        { output: 'the_vault:gem_tubium', dye1: 'green_dye', dye2: 'green_dye'},
        { output: 'the_vault:gem_bomignite', dye1: 'blue_dye', dye2: 'red_dye'},
        { output: 'the_vault:gem_ashium', dye1: 'orange_dye', dye2: 'orange_dye'},
        { output: 'the_vault:gem_sparkletine', dye1: 'yellow_dye', dye2: 'yellow_dye'},
        { output: 'the_vault:gem_gorginite', dye1: 'magenta_dye', dye2: 'magenta_dye'},
        { output: 'the_vault:gem_iskallium', dye1: 'lime_dye', dye2: 'lime_dye'},
        { output: 'the_vault:gem_upaline', dye1: 'pink_dye', dye2: 'pink_dye'},
        { output: 'the_vault:gem_petzanite', dye1: 'cyan_dye', dye2: 'cyan_dye'},
        { output: 'the_vault:gem_xenium', dye1: 'purple_dye', dye2: 'blue_dye'}
    ]
    x9_gems.forEach(gem => {
        event.shapeless(gem.output, ['minecraft:flint', 'minecraft:flint', `minecraft:${gem.dye1}`, `minecraft:${gem.dye2}`])
    });

    event.shaped('the_vault:chromatic_iron_block', [
        'SSS',
        'SBS',
        'SSS'
    ], {
        B: 'minecraft:iron_nugget',
        S: 'the_vault:chromatic_iron_nugget'
    });
    event.shaped('the_vault:vault_ingot', [
        'SSS',
        'SBS',
        'SSS'
    ], {
        S: 'minecraft:gold_nugget',
        B: 'the_vault:vault_nugget'
    });

    event.shapeless('the_vault:vault_dust', ['minecraft:glass_bottle', 'supplementaries:ash'])
    event.smelting('the_vault:vault_essence', 'the_vault:vault_dust')
    event.blasting('create:brass_ingot', 'architects_palette:nether_brass_ingot')

    // 知识之星buster配方
    event.blasting('the_vault:knowledge_star_essence', 'minecraft:paper')
    event.shaped('the_vault:knowledge_star_core', [
        'SSS',
        'SBS',
        'SSS'
    ], {
        S: 'minecraft:book',
        B: 'supplementaries:blackboard'
    });
    // 热力膨胀 知识之星buster配方
    // event.recipes.thermal.crystallizer('the_vault:knowledge_star_shard',['the_vault:knowledge_star_essence',Fluid.of('minecraft:water',250)])
    // event.recipes.thermal.crystallizer('the_vault:knowledge_star_core',['supplementaries:blackboard',Fluid.of('minecraft:water',1000)])

    event.recipes.createSandpaperPolishing(['the_vault:vault_stone'], 'the_vault:vault_cobblestone')
    event.shapeless('the_vault:vault_diamond', ['minecraft:diamond', 'the_vault:vault_essence'])
    event.shapeless('the_vault:magic_silk', ['minecraft:paper', 'the_vault:vault_dust'])

    event.smoking('the_vault:carbon_nugget', 'minecraft:charcoal')
    event.recipes.createFilling('the_vault:driftwood_planks', [
        '#minecraft:planks',
        Fluid.of('minecraft:water', 250)
    ])

    event.shapeless('the_vault:spicy_hearty_burger', ['the_vault:burger_chili', 'the_vault:cheese_burger_feast'])

    event.recipes.createCutting(['2x the_vault:burger_patty'], 'minecraft:cooked_beef')
    event.recipes.createCutting(['2x the_vault:burger_bun'], 'minecraft:bread')
    event.recipes.createCutting(['2x the_vault:burger_lettuce'], 'farmersdelight:cabbage')
    event.recipes.createCutting(['2x the_vault:burger_tomato'], 'farmersdelight:tomato')
    event.recipes.createCutting(['2x the_vault:burger_pickles'], 'farmersdelight:onion')

    event.shapeless('the_vault:burger_cheese', ['farmersdelight:milk_bottle']).replaceIngredient('farmersdelight:milk_bottle', 'minecraft:glass_bottle')
    event.shapeless('the_vault:burger_sauce', ['farmersdelight:tomato_sauce', 'minecraft:honey_bottle']).replaceIngredient('farmersdelight:tomato_sauce', 'minecraft:bowl')

    // 热力膨胀
    event.recipes.thermal.smelter('the_vault:chromatic_steel_ingot', ['the_vault:chromatic_iron_ingot', 'the_vault:carbon'])

    event.recipes.thermal.sawmill('2x the_vault:burger_patty', 'minecraft:cooked_beef')
    event.recipes.thermal.sawmill('2x the_vault:burger_bun', 'minecraft:bread')
    event.recipes.thermal.sawmill('2x the_vault:burger_lettuce', 'farmersdelight:cabbage')
    event.recipes.thermal.sawmill('2x the_vault:burger_tomato', 'farmersdelight:tomato')
    event.recipes.thermal.sawmill('2x the_vault:burger_pickles', 'farmersdelight:onion')

    event.recipes.thermal.refinery(['the_vault:burger_cheese'],Fluid.of('minecraft:milk',100))

    event.recipes.thermal.centrifuge(['minecraft:diamond', 'the_vault:vault_essence'], 'the_vault:vault_diamond')
})