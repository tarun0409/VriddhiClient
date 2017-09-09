$(document).ready(function(){
    var accountId = localStorage.getItem("updateRecordId");
    var accountIdArray = new Array();
    accountIdArray.push(accountId);
    var getOneAccountById = getRecordsByIds("accounts",accountIdArray, null);
    getOneAccountById.done(function(accountData){
        if(accountData!=null)
        {
            var accountArray = accountData["accounts"];
            var accountObj = accountArray[0];
            var accountFieldToTagIdMap = {
                "Account Name":"#accountName",
                "Account Owner":"#accountOwner",
                "Account Manager":"#accountManager",
                "Account Balance":"#accountBalance"
            };
            for(var i=0; i<accountHeaders.length; i++)
            {
                var accountHeader = accountHeaders[i];
                var value = accountObj[accountHeader];
                if(value!=null)
                {
                    var tagId = accountFieldToTagIdMap[accountHeader];
                    $(tagId).attr("placeholder",value);
                }
            }
        }
    });
});
