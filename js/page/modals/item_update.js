$(document).ready(function(){
    var itemId = localStorage.getItem("updateItemId");
    var getOneItemById = getItemsByIds(itemId, null);
    getOneItemById.done(function(itemData){
        if(itemData!=null)
        {
            var itemArray = itemData["items"];
            var itemObj = itemArray[0];
            var itemFieldToTagIdMap = {
                "Saree":"#saree",
                "Chudidhar":"#chudidhar",
                "Item Name":"#itemName"
            };
            var itemUpdateHeaders = ["Item Type","Item Name"];
            var itemType = itemObj["Item Type"];
            localStorage.setItem("selectedItemType",itemType);
            var typeTagId = itemFieldToTagIdMap[itemType];
            $(typeTagId).attr("selected","");
            var itemName = itemObj["Item Name"];
            var nameTagId = itemFieldToTagIdMap["Item Name"];
            $(nameTagId).attr("placeholder",itemName);
        }
    });
});
var updateItem = function()  {
    var itemObj = getItemUpdateObjectFromUI('#itemType','#itemName');
    var items = new Array();
    items.push(itemObj);
    var itemId = localStorage.getItem("updateItemId");
    var updateOneItem = putItem(itemId,items);
    updateOneItem.done(function(response){
        if(response!=null)
        {
            status = response["status"];
            if(status=="SUCCESS")
            {
                alert("Item updated successfully!");
                window.location.replace("../Item.html");
            }
        }
    });
}
