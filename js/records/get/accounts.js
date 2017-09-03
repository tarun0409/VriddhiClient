var getAccounts = function(limit)
{
    var url = "http://localhost:8080/Vriddhi/v1/accounts";
    if(limit!=null)
    {
        url+="?limit="+limit;
    }
    return $.get(url);
}

var getAccountsByIds = function(ids,limit)
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
            var url = "http://localhost:8080/Vriddhi/v1/accounts?";
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

var getAccountNames = function(accountData){
    var accountNames = [];
    if(accountData!=null)
    {
        var accounts = accountData["accounts"];
        if(accounts!=null)
        {
            for(var i=0; i<accounts.length; i++)
            {
                var account = accounts[i];
                var accountObj = new Object();
                if("Account Name" in account)
                {
                    accountObj["Account Name"] = account["Account Name"];
                }
                if("ID" in account)
                {
                    accountObj["ID"] = account["ID"];
                }
                accountNames.push(accountObj);
            }
        }
    }
    return accountNames;
}
