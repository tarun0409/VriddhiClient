var displayAccountNamesInSelectList = function(selectListIds, accountNames)
{
    var allOptions = "";
    if(accountNames!=null)
    {
        for(var i=0; i<accountNames.length; i++)
        {
            var accountObj = accountNames[i];
            var optionString = '<option';
            if("ID" in accountObj)
            {
                var id = accountObj["ID"];
                optionString+=' value="'+id+'"';
            }
            optionString+='>';
            if("Account Name" in accountObj)
            {
                var accountName = accountObj["Account Name"];
                optionString+=accountName;
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

var displayAccountsSelectList = function(selectListId, accountObj){
    if(accountObj!=null)
    {
        accounts = accountObj["accounts"];
        if(accounts!=null)
        {
            var tValueLengths = new Object();
            for(var j=0; j<accountHeaders.length; j++)
            {
                var header = accountHeaders[j];
                var headerValueString = ""+header;
                var headerLen = headerValueString.length;
                if(header in tValueLengths)
                {
                    var oldLen = tValueLengths[header];
                    if(headerLen>oldLen)
                    {
                        tValueLengths[header] = headerLen;
                    }
                }
                else
                {
                    tValueLengths[header] = headerLen;
                }
            }
            for(var i=0; i<accounts.length;i++)
            {
                var account = accounts[i];
                for(var k=0; k<accountHeaders.length; k++)
                {
                    var header = accountHeaders[k];
                    if(header in account)
                    {
                        var value = account[header];
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
            var headerOptionString = '<option class="multiSelectOptionTabs" disabled>';
            for(var j=0; j<accountHeaders.length; j++)
            {
                var header = accountHeaders[j];
                var spaces = 5;
                var allowedLen = tValueLengths[header];
                var optionValueString = "";
                if(header!=null)
                {
                    optionValueString+=header;
                    var valString = ""+header;
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
                headerOptionString+=optionValueString;
            }
            headerOptionString+="</option>";
            $(selectListId).append(headerOptionString);
            for(var i=0; i<accounts.length; i++)
            {
                var account = accounts[i];
                var optionString = '<option class="multiSelectOptionTabs"';
                if("ID" in account)
                {
                    var aId = account["ID"];
                    optionString+=' value="'+aId+'"';
                }
                optionString+=">";
                for(var j=0; j<accountHeaders.length; j++)
                {
                    var accountKey = accountHeaders[j];
                    if(accountKey in account)
                    {
                        var value = account[accountKey];
                        var spaces = 5;
                        var allowedLen = tValueLengths[accountKey];
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
                    else
                    {
                        var spaces = 5;
                        var allowedLen = tValueLengths[accountKey];
                        spaces+=allowedLen;
                        for(var k=0; k<spaces; k++)
                        {
                            optionString+="&nbsp;";
                        }

                    }
                }
                optionString+="</option>";
                $(selectListId).append(optionString);
            }
        }
    }
}
