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
