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
        localStorage.setItem("updateAccountId",selectedAccount[0]);
        window.location.href = 'modals/AccountUpdate.html';
    }
}
