class contestant{

    constructor(){

    }
    getCount(){
        var contestantCountref = database.ref('contestantCount');
        contestantCountref.on("value",function(data){
            contestantCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            contestantCount:count
        })
    }

    update(name){
        var contestantIndex = "contentant" + contentantCount;
        database.ref(contentantIndex).set( {
            name:name
        })
    }
}