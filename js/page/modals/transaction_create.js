$(document).ready(function(){

  var getAllItems = getItems(null);
  getAllItems.done(function(itemData){
      if(itemData!=null)
      {
          var itemNames = getItemNames(itemData);
          displayItemNamesInSelectList('#itemsSelect',itemNames);
      }
  });

  var getAllAccounts = getAccounts(null);
  getAllAccounts.done(function(accountData){
      if(accountData!=null)
      {
          var accountNames = getAccountNames(accountData);
          displayAccountNamesInSelectList('#accountsSelect',accountNames);
      }

  });

});
