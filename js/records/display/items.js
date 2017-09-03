var displayItemNamesInSelectList = function(selectListId, itemNames)
{
    if(itemNames!=null)
    {
        for(var i=0; i<itemNames.length; i++)
        {
            var itemObj = itemNames[i];
            var optionString = '<option';
            if("ID" in itemObj)
            {
                var id = itemObj["ID"];
                optionString+=' value="'+id+'"';
            }
            optionString+='>';
            if("Item Name" in itemObj)
            {
                var itemName = itemObj["Item Name"];
                optionString+=itemName;
            }
            optionString+='</option>';
            $(selectListId).append(optionString);
        }
    }
}
