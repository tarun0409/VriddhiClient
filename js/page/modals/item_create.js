var insertItem = function() {
    var itemObj = getItemObjectFromUI('#itemType','#itemName');
    var items = new Array();
    items.push(itemObj);
    var insertOneItem = postItems(items);
    insertOneItem.done(function(response){
        if(response!=null)
        {
            status = response["status"];
            if(status=="SUCCESS")
            {
                alert("Item inserted successfully!");
                window.location.replace("../Item.html");
            }
        }
    });
}
