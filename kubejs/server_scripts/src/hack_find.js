
onEvent('player.tick', event => {

    var hori_radius = 32;
    var vert_radius = 32;

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

                    // x = -909; y = 73; z = 390;
                    let block = player.level.getBlock(x, y, z);

                    if (block.id === 'minecraft:spawner') {
                        player.server.runCommandSilent(`/say ${block.id} at ${x} ${y} ${z}`)
                    }
                }
            }
        }
    }
})