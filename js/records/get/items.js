var getItems = function(limit)
{
    var url = "http://localhost:8080/Vriddhi/v1/items";
    if(limit!=null)
    {
        url+="?limit="+limit;
    }
    return $.get(url);
}

var getItemsByIds = function(ids,limit)
{
    var failedAction = $.Deferred();
    if(ids==null)
    {
        failedAction.resolve();
        return failedAction.promise();
    }
    else
    {
        if(ids.length<=0)
        {
            failedAction.resolve();
            return failedAction.promise();
        }
        else
        {
            var url = "http://localhost:8080/Vriddhi/v1/items?";
            url+="ids=";
            var cnt = 1;
            for(var i=0; i<ids.length; i++)
            {
                id = ids[i];
                url+=id;
                if(cnt!=ids.length)
                {
                  url+=",";
                }
                cnt++;
            }
            if(limit!=null)
            {
                url+="&limit="+limit;
            }
            return $.get(url);
        }
    }
}

var getItemNames = function(itemData){
    var itemNames = [];
    if(itemData!=null)
    {
        var items = itemData["items"];
        if(items!=null)
        {
            for(var i=0; i<items.length; i++)
            {
                var item = items[i];
                var itemObj = new Object();
                if("Item Name" in item)
                {
                    itemObj["Item Name"] = item["Item Name"];
                }
                if("ID" in item)
                {
                    itemObj["ID"] = item["ID"];
                }
                itemNames.push(itemObj);
            }
        }
    }
    return itemNames;
}
