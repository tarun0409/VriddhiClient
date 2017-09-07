$(document).ready(function(){
    var accountId = localStorage.getItem("updateAccountId");
    var getOneAccountById = getAccountsByIds(accountId, null);
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
var updateAccount = function()  {
    var accountObj = getAccountUpdateObjectFromUI('#accountName','#accountOwner','#accountManager','#accountBalance');
    var accounts = new Array();
    accounts.push(accountObj);
    var acctId = localStorage.getItem("updateAccountId");
    var updateOneAccount = putAccount(acctId,accounts);
    updateOneAccount.done(function(response){
        if(response!=null)
        {
            status = response["status"];
            if(status=="SUCCESS")
            {
                alert("Account updated successfully!");
                window.location.replace("../Account.html");
            }
        }
    });
}
