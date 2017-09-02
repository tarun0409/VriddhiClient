var getContacts = function(limit)
{
    var url = "http://localhost:8080/Vriddhi/v1/contacts";
    if(limit!=null)
    {
        url+="?limit="+limit;
    }
    return $.get(url);
}

var getContactsByIds = function(ids,limit)
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
            var url = "http://localhost:8080/Vriddhi/v1/contacts?";
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
