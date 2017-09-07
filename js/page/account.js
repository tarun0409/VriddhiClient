$(document).ready(function(){

  var getAllAccounts = getAccounts(null);
  getAllAccounts.done(function(accountData){
      if(accountData!=null)
      {
          displayAccountsSelectList('#accountSelect',accountData);
      }
  });


});

var startUpdateProcess = function(accountSelectListId)
{
    var selectedAccount = $(accountSelectListId).val();
    if(selectedAccount!=null && selectedAccount.length==1)
    {
        console.log(JSON.stringify(selectedAccount));
        updateAccountId = selectedAccount[0];
        window.location.replace('modals/AccountUpdate.html')
    }
}
