$(document).ready(function(){

  var getAllAccounts = getRecords("accounts",null);
  getAllAccounts.done(function(accountData){
      if(accountData!=null)
      {
          displayRecordsSelectList("accounts",'#accountSelect',accountData);
      }
      else
      {
          $("#noRecordsShow").append('<h4 class="noRecordsText"> There are no accounts to show</h4>');
          $("#accountEditButton").hide();
          $("#accountSelect").hide();
      }
  });
});
