var displayAccountNamesInSelectList = function(selectListId, accountNames)
{
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
            $(selectListId).append(optionString);
        }
    }
}
