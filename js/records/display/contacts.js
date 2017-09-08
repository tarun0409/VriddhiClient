var displayContactNamesInSelectList = function(selectListIds, contactNames)
{
    var allOptions = "";
    if(contactNames!=null)
    {
        for(var i=0; i<contactNames.length; i++)
        {
            var contactObj = contactNames[i];
            var optionString = '<option';
            if("ID" in contactObj)
            {
                var id = contactObj["ID"];
                optionString+=' value="'+id+'"';
            }
            optionString+='>';
            if("Contact Name" in contactObj)
            {
                var contactName = contactObj["Contact Name"];
                optionString+=contactName;
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

var displayContactsSelectList = function(selectListId, contactObj){
    if(contactObj!=null)
    {
        contacts = contactObj["contacts"];
        if(contacts!=null)
        {
            var tValueLengths = new Object();
            for(var i=0; i<contacts.length;i++)
            {
                var contact = contacts[i];
                for(var k=0; k<contactHeaders.length; k++)
                {
                    var header = contactHeaders[k];
                    if(header in contact)
                    {
                        var value = contact[header];
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
            for(var i=0; i<contacts.length; i++)
            {
                var contact = contacts[i];
                var optionString = '<option class="multiSelectOptionTabs"';
                if("ID" in contact)
                {
                    var aId = contact["ID"];
                    optionString+=' value="'+aId+'"';
                }
                optionString+=">";
                for(var j=0; j<contactHeaders.length; j++)
                {
                    var contactKey = contactHeaders[j];
                    if(contactKey in contact)
                    {
                        var value = contact[contactKey];
                        var spaces = 5;
                        var allowedLen = tValueLengths[contactKey];
                        var optionValueString = "";
                        if(value!=null && value!="")
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
                        var allowedLen = tValueLengths[contactKey];
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
