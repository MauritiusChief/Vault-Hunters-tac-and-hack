
onEvent('entity.hurt', event => {
    if (event.source.actual && event.entity.isLiving() && event.source.actual.isPlayer() && event.source.type === 'bullet') {
        let {entity,  source} = event;
        let actual = source.actual;
        let damage = event.damage;
        let lv1_count = actual.inventory.count('tac:uncommon_material');
        let lv2_count = actual.inventory.count('tac:rare_material');
        let lv3_count = actual.inventory.count('tac:epic_material');
        let lv4_count = actual.inventory.count('tac:legendary_material');
        let lv5_count = actual.inventory.count('tac:ultimate_material');
        // console.log(`lv1_count:${lv1_count} lv2_count:${lv2_count} lv3_count:${lv3_count} lv4_count:${lv4_count} lv5_count:${lv5_count} `)

        let extra_damage = 0;
        extra_damage += damage*(lv1_count*0.01) // 1%加成
        extra_damage += damage*(lv2_count*0.05) // 5%加成
        extra_damage += damage*(lv3_count*0.25) // 25%加成
        extra_damage += damage*(lv4_count*1.00) // 100%加成
        extra_damage += damage*(lv5_count*5.00) // 500%加成
        // console.log(`damage:${damage} extra_damage:${extra_damage}`)
        event.server.scheduleInTicks(1, () => {
            entity.attack(event.source, extra_damage);
        })
    }
})