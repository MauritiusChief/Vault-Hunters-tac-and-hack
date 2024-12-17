onEvent("block.right_click", event => {
    // List of flower names
    const flowerNames = [
        'dandelion','poppy','blue_orchid','allium','azure_bluet','red_tulip','orange_tulip','white_tulip','pink_tulip','oxeye_daisy','cornflower','lily_of_the_valley'
    ];

    // Check if the player is holding bonemeal
    if (event.item.id == 'minecraft:bone_meal') {
        // Loop through flower names to check for potted flower
        flowerNames.forEach(flowerName => {
            let flowerPot = `minecraft:potted_${flowerName}`;
            if (event.block.id == flowerPot) {
                // Construct the flower item ID
                let flower = `minecraft:${flowerName}`;

                // Drop the corresponding flower item at the player's position
                event.server.runCommandSilent(`summon item ${event.block.x + 0.5} ${event.block.y + 0.5} ${event.block.z + 0.5} {Item:{id:'${flower}',Count:1b}}`);
                
                // Play the bone meal sound
                event.player.playSound('minecraft:item.bone_meal.use', 1.0, 1.0);
                
                // Spawn bone meal particles
                event.server.runCommandSilent(`particle minecraft:happy_villager ${event.block.x + 0.5} ${event.block.y + 0.5} ${event.block.z + 0.5} 0.5 0.5 0.5 0.1 10`);
                
                // Decrease the bonemeal item stack by 1
                event.player.mainHandItem.count--;
                
                // Cancel the default event to prevent further processing
                event.cancel();
            }
        });
    }
});
