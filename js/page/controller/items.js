var getItemObjectFromUI = function(itemTypeId,itemNameId) {
    var itemObj = new Object();
    var itemType = $(itemTypeId).val();
    var itemName = $(itemNameId).val();
    itemObj["Item Type"] = itemType;
    itemObj["Item Name"] = itemName;
    return itemObj;

}

var getItemUpdateObjectFromUI = function(itemTypeId,itemNameId) {
      var itemObj = new Object();
      if(itemTypeId!=null)
      {
          var typePh = localStorage.getItem("selectedItemType");
          var typeValue = $(itemTypeId).val();
          if(typeValue!=null && typeValue!="" && (typePh!=typeValue))
          {
              itemObj["Item Type"] = typeValue;
          }
      }
      if(itemNameId!=null)
      {
          var namePh = $(itemNameId).attr('placeholder');
          var nameValue = $(itemNameId).val();
          if(nameValue!=null && nameValue!="" && (namePh!=typeValue))
          {
              itemObj["Item Name"] = nameValue;
          }
      }
      return itemObj;
}