// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent("item.tooltip", tooltip => {
    tooltip.add('tac:uncommon_material', '§a子弹伤害+1%')
	tooltip.add('tac:rare_material', '§9子弹伤害+5%')
	tooltip.add('tac:epic_material', '§5子弹伤害+25%')
	tooltip.add('tac:legendary_material', ["§6子弹伤害+100%","§6附带5s缓慢II"])
	tooltip.add('tac:ultimate_material', ["§c子弹伤害+500%","§c附带20s缓慢III"])
})