$(document).ready(function(){

  var getAllAccounts = getAccounts(null);
  getAllAccounts.done(function(accountData){
      if(accountData!=null)
      {
          displayAccountsSelectList('#accountSelect',accountData);
      }
  });


});
