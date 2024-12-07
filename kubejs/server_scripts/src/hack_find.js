
let tickCounter = 0;

onEvent('player.tick', event => {
    var player = event.player;

    if (player.mainHandItem != 'minecraft:spyglass') return; // 望远镜用来找
    let targets = new Set(['the_vault:monolith', 'the_vault:obelisk'])

    var hori_radius = 16*4;
    var vert_radius = 16*2;

    tickCounter++;

    if (tickCounter >= 100) {
        tickCounter = 0;
        // Get the player and their current position
        
        let posX = parseInt(player.x);
        let posY = parseInt(player.y);
        let posZ = parseInt(player.z);

        for (let x = posX - hori_radius; x <= posX + hori_radius; x++) {
            for (let y = posY - vert_radius; y <= posY + vert_radius; y++) {
                for (let z = posZ - hori_radius; z <= posZ + hori_radius; z++) {

                    if ( y < 0 || y > 255) continue; // 避免搜索到不在世界范围
                    // x = -909; y = 73; z = 390;
                    let block = player.level.getBlock(x, y, z);

                    // if ( targets.has(block.id) ) {
                    if (block.id == 'the_vault:monolith' || block.id == 'the_vault:obelisk') {
                        player.server.runCommandSilent(`/say 方块【${block.id}】位于坐标: ${x}, ${y}, ${z}`)
                        //生成指示粒子
                        // console.log(`玩家位置：${player.x} ${player.y} ${player.z}`)
                        // console.log(`方块位置：${x} ${y} ${z}`)
                        let deltaX = x - player.x;
                        let deltaY = y - (player.y+2); // 升高到大约眼睛的位置
                        let deltaZ = z - player.z;
                        let length = Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);
                        let scale = 3 / length;
                        let particleX = player.x + deltaX*scale;
                        let particleY = (player.y+2) + deltaY*scale;
                        let particleZ = player.z + deltaZ*scale;
                        // console.log(`粒子位置：${particleX} ${particleY} ${particleZ}`)
                        // console.log(`/particle minecraft:dust 1.0 0.0 0.0 1.0 ${particleX} ${particleY} ${particleZ} 0 0 0 0 1`)
                        player.server.runCommandSilent(`/particle minecraft:dust 1.0 0.0 0.0 1.0 ${particleX} ${particleY} ${particleZ} 0 0 0 0 1`)
                    }
                }
            }
        }
    }
})