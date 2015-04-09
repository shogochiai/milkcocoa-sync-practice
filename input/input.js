(function(){

    var milkcocoa = new MilkCocoa();
    var ds = milkcocoa.dataStore("something");

    $(document).keydown(function(e){
        switch(e.keyCode){
        case 38:
            ds.send({arrow: "up"});
            break;
        case 40:
            ds.send({arrow: "down"});
            break;
        case 37:
            ds.send({arrow: "left"});
            break;
        case 39:
            ds.send({arrow: "right"});
            break;
        }
    });
}());
