events.listen('item.tags', function (event) {
    event.get('forge:seeds').add('immersiveengineering:seed');
    event.get('forge:seeds/hemp').add('immersiveengineering:seed');
});
