$(document).ready(function(){
    var itemId = localStorage.getItem("updateRecordId");
    var itemIdArray = new Array();
    itemIdArray.push(itemId);
    var getOneItemById = getRecordsByIds("items",itemIdArray, null);
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
