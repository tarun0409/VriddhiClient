var insertAccount = function() {
    var accountObj = getAccountObjectFromUI('#accountName','#accountOwner','#accountManager','#accountBalance');
    var accounts = new Array();
    accounts.push(accountObj);
    var insertOneAccount = postAccounts(accounts);
    insertOneAccount.done(function(response){
        if(response!=null)
        {
            status = response["status"];
            if(status=="SUCCESS")
            {
                alert("Account inserted successfully!");
                window.location.replace("../Account.html");
            }
        }
    });
}
