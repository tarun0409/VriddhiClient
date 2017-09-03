var displayItemNamesInSelectList = function(selectListIds, itemNames)
{
    var allOptions = "";
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
            allOptions+=optionString;

        }
        for(var j=0; j<selectListIds.length; j++)
        {
            var selectListId = selectListIds[j];
            $(selectListId).append(allOptions);
        }
    }
}
