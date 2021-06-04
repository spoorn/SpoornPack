events.listen('jei.hide.items', (event) => {
    materialsToUnify.forEach((material) => {
        if (material == 'iesnium' || material == 'graphite' || material == 'hop_graphite') {
            return;
        }
        itemsToHide.push(
            'occultism:' + material + '_ingot',
            'occultism:' + material + '_ore',
            'occultism:' + material + '_dust',
            'occultism:' + material + '_nugget',
            'occultism:' + material + '_block',
            'immersiveengineering:ingot_' + material,
            'immersiveengineering:dust_' + material,
            'immersiveengineering:nugget_' + material,
            'mekanism:nugget_' + material,
            'mekanism:dust_' + material,
            'mekanism:ingot_' + material,
            'mekanism:block_' + material,
            'eidolon:ingot_' + material,
            'eidolon:nugget_' + material,
            'eidolon:block_' + material,
            'iceandfire:' + material + '_ingot',
            'iceandfire:' + material + '_ore',
            'iceandfire:' + material + '_dust',
            'iceandfire:' + material + '_nugget',
            'iceandfire:' + material + '_block',
            'simpleores:' + material + '_ingot',
            'simpleores:' + material + '_ore',
            'simpleores:' + material + '_dust',
            'simpleores:' + material + '_nugget',
            'simpleores:' + material + '_block',
            'mysticalworld:' + material + '_ingot',
            'mysticalworld:' + material + '_ore',
            'mysticalworld:' + material + '_dust',
            'mysticalworld:' + material + '_nugget',
            'mysticalworld:' + material + '_block',
            'better_diving:' + material + '_ingot'
        );
    });

    itemsToHide.forEach((disabledItem) => {
        if (!item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });

    disabledItems.forEach((disabledItem) => {
        if (!item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });

    colors.forEach((color) => {
        event.hide('/refinedstorage:' + color + '\\w/');
    });

    regexHide.forEach((regexExpression) => {
        event.hide(regexExpression);
    });
});
