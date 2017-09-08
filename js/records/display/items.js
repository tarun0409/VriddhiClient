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

var displayItemsSelectList = function(selectListId, itemObj){
    if(itemObj!=null)
    {
        items = itemObj["items"];
        if(items!=null)
        {
            var tValueLengths = new Object();
            for(var i=0; i<items.length;i++)
            {
                var item = items[i];
                for(var k=0; k<itemHeaders.length; k++)
                {
                    var header = itemHeaders[k];
                    if(header in item)
                    {
                        var value = item[header];
                        if(value!=null)
                        {
                            var valueString = ""+value;
                            var valLen = valueString.length;
                            if(header in tValueLengths)
                            {
                                var oldLen = tValueLengths[header];
                                if(valLen>oldLen)
                                {
                                    tValueLengths[header] = valLen;
                                }
                            }
                            else
                            {
                                tValueLengths[header] = valLen;
                            }
                        }
                    }
                }
            }
            for(var i=0; i<items.length; i++)
            {
                var item = items[i];
                var optionString = '<option class="multiSelectOptionTabs"';
                if("ID" in item)
                {
                    var aId = item["ID"];
                    optionString+=' value="'+aId+'"';
                }
                optionString+=">";
                for(var j=0; j<itemHeaders.length; j++)
                {
                    var itemKey = itemHeaders[j];
                    if(itemKey in item)
                    {
                        var value = item[itemKey];
                        var spaces = 5;
                        var allowedLen = tValueLengths[itemKey];
                        var optionValueString = "";
                        if(value!=null)
                        {
                            optionValueString+=value;
                            var valString = ""+value;
                            var valLen = valString.length;
                            spaces += (allowedLen-valLen);
                        }
                        else
                        {
                            spaces+=allowedLen;
                        }
                        for(var k=0; k<spaces; k++)
                        {
                            optionValueString+="&nbsp;";
                        }
                        optionString+=optionValueString;
                    }
                }
                optionString+="</option>";
                $(selectListId).append(optionString);
            }
        }
    }
}
