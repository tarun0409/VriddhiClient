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
