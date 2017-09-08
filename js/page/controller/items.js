var getItemObjectFromUI = function(itemTypeId,itemNameId) {
    var itemObj = new Object();
    var itemType = $(itemTypeId).val();
    var itemName = $(itemNameId).val();
    itemObj["Item Type"] = itemType;
    itemObj["Item Name"] = itemName;
    return itemObj;

}
