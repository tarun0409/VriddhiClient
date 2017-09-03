$(document).ready(function(){

  var getAllItems = getItems(null);
  getAllItems.done(function(itemData){
      if(itemData!=null)
      {
          var itemNames = getItemNames(itemData);
          var itemSelectIds = ['#itemsSelect'];
          displayItemNamesInSelectList(itemSelectIds,itemNames);
      }
  });

  var getAllAccounts = getAccounts(null);
  getAllAccounts.done(function(accountData){
      if(accountData!=null)
      {
          var accountNames = getAccountNames(accountData);
          var accountSelectIds = ['#sourceAccountSelect','#fromAccountSelect','#toAccountSelect'];
          displayAccountNamesInSelectList(accountSelectIds,accountNames);
      }

  });


  var getAllContacts = getContacts(null);
  getAllContacts.done(function(contactData){
      if(contactData!=null)
      {
          var contactNames = getContactNames(contactData);
          var contactSelectIds = ['#buyerSelect','#sellerSelect'];
          displayContactNamesInSelectList(contactSelectIds,contactNames);
      }

  });


});
