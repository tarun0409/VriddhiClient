var displayRecordNamesInSelectList = function(moduleName, selectListIds, recordNames)
{
    var allOptions = "";
    if(recordNames!=null)
    {
        for(var i=0; i<recordNames.length; i++)
        {
            var recordObj = recordNames[i];
            var optionString = '<option';
            if("ID" in recordObj)
            {
                var id = recordObj["ID"];
                optionString+=' value="'+id+'"';
            }
            optionString+='>';
            var nameField = moduleToNameFieldMap[moduleName];
            if(nameField in recordObj)
            {
                var recordName = recordObj[nameField];
                optionString+=recordName;
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


var displayRecordsSelectList = function(moduleName,selectListId, recordObj){
    if(recordObj!=null)
    {
        var records = recordObj[moduleName];
        if(records!=null)
        {
            var tValueLengths = new Object();
            var moduleHeaders = moduleToHeadersMap[moduleName];
            for(var j=0; j<moduleHeaders.length; j++)
            {
                var header = moduleHeaders[j];
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
            for(var i=0; i<records.length;i++)
            {
                var record = records[i];
                for(var k=0; k<moduleHeaders.length; k++)
                {
                    var header = moduleHeaders[k];
                    if(header in record)
                    {
                        var value = record[header];
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
            for(var j=0; j<moduleHeaders.length; j++)
            {
                var header = moduleHeaders[j];
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
            for(var i=0; i<records.length; i++)
            {
                var record = records[i];
                var optionString = '<option class="multiSelectOptionTabs';
                if(moduleName=="transactions" && "Transaction Type" in record)
                {
                    var tType = record["Transaction Type"];
                    optionString+=" "+tType;
                }
                optionString+='"';
                if("ID" in record)
                {
                    var aId = record["ID"];
                    optionString+=' value="'+aId+'"';
                }

                optionString+=">";
                for(var j=0; j<moduleHeaders.length; j++)
                {
                    var recordKey = moduleHeaders[j];
                    if(recordKey in record)
                    {
                        var value = record[recordKey];
                        var spaces = 5;
                        var allowedLen = tValueLengths[recordKey];
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
                        var allowedLen = tValueLengths[recordKey];
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
