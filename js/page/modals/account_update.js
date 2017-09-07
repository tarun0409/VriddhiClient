$(document).ready(function(){
    var accountId = updateAccountId;
    console.log(accountId);
    var getOneAccountById = getAccountsByIds(accountId, null);
    getOneAccountById.done(function(accountData){
        if(accountData!=null)
        {
            var accountObj = accountData["accounts"];
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
    var updateOneAccount = putAccount(accounts);
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
