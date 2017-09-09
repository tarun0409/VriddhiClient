$(document).ready(function(){

  var getAllAccounts = getRecords("accounts",null);
  getAllAccounts.done(function(accountData){
      if(accountData!=null)
      {
          displayRecordsSelectList("accounts",'#accountSelect',accountData);
      }
  });
});
