//priority: 900
events.listen('recipes', function (event) {
    materialsToUnify.forEach(function (material) {
        typesToUnify.forEach(function (type) {
            if (!entryIsBlacklisted(material, type)) {
                var tagString = '#forge:' + type + 's/' + material;
                var tag = ingredient.of(tagString);
                if (tag.stacks.size() > 1) {
                    var prefItem = getPreferredItemInTag(tag);
                    console.info('### Tag: ' + tag);
                    console.info('### Prefered item: ' + prefItem);
                    event.replaceOutput({}, tagString, prefItem);
                }
            }
        });
    });
});
