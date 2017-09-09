$(document).ready(function(){

  var getAllItems = getRecords("items",null);
  getAllItems.done(function(itemData){
      if(itemData!=null)
      {
          var itemNames = getNames("items",itemData);
          var itemSelectIds = ['#itemsSelect'];
          displayRecordNamesInSelectList("items",itemSelectIds,itemNames);
      }
  });

  var getAllAccounts = getRecords("accounts",null);
  getAllAccounts.done(function(accountData){
      if(accountData!=null)
      {
          var accountNames = getNames("accounts",accountData);
          var accountSelectIds = ['#sourceAccountSelect','#fromAccountSelect','#toAccountSelect'];
          displayRecordNamesInSelectList("accounts",accountSelectIds,accountNames);
      }

  });

  var getAllContacts = getRecords("contacts",null);
  getAllContacts.done(function(contactData){
      if(contactData!=null)
      {
          var contactNames = getNames("contacts",contactData);
          var contactSelectIds = ['#buyerSelect','#sellerSelect'];
          displayRecordNamesInSelectList("contacts",contactSelectIds,contactNames);
      }

  });


});
