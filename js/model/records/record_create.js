var startCreateProcess = function(moduleName,modalId)
{
    if(moduleName=="transactions")
    {
      var getAllItems = getRecords("items",null);
      getAllItems.done(function(itemData){
          if(itemData!=null)
          {
              var itemNames = getNames("items",itemData);
              var itemSelectIds = ['#tItemsSelect'];
              displayRecordNamesInSelectList("items",itemSelectIds,itemNames);
          }
      });

      var getAllAccounts = getRecords("accounts",null);
      getAllAccounts.done(function(accountData){
          if(accountData!=null)
          {
              var accountNames = getNames("accounts",accountData);
              var accountSelectIds = ['#tSourceAccountSelect','#tFromAccountSelect','#tToAccountSelect'];
              displayRecordNamesInSelectList("accounts",accountSelectIds,accountNames);
          }

      });

      var getAllContacts = getRecords("contacts",null);
      getAllContacts.done(function(contactData){
          if(contactData!=null)
          {
              var contactNames = getNames("contacts",contactData);
              var contactSelectIds = ['#tBuyerSelect','#tSellerSelect'];
              displayRecordNamesInSelectList("contacts",contactSelectIds,contactNames);
          }

      });

    }
    $(modalId).modal('show');
}
var insertAccount = function() {
    var accountObj = getAccountObjectFromUI('#accountName','#accountOwner','#accountManager','#accountBalance');
    var accounts = new Array();
    accounts.push(accountObj);
    var insertOneAccount = postRecords("accounts",accounts);
    insertOneAccount.done(function(response){
        if(response!=null)
        {
            status = response["status"];
            if(status=="SUCCESS")
            {
                alert("Account inserted successfully!");
                window.location.replace("Account.html");
            }
        }
    });
}

var insertContact = function() {
    var contactObj = getContactObjectFromUI('#contactName','#primaryPhone','#secondaryPhone','#email','#primaryAddress','#secondaryAddress');
    var contacts = new Array();
    contacts.push(contactObj);
    var insertOneContact = postRecords("contacts",contacts);
    insertOneContact.done(function(response){
        if(response!=null)
        {
            status = response["status"];
            if(status=="SUCCESS")
            {
                alert("Contact inserted successfully!");
                window.location.replace("Contact.html");
            }
        }
    });
}

var insertItem = function() {
    var itemObj = getItemObjectFromUI('#itemType','#itemName');
    var items = new Array();
    items.push(itemObj);
    var insertOneItem = postRecords("items",items);
    insertOneItem.done(function(response){
        if(response!=null)
        {
            status = response["status"];
            if(status=="SUCCESS")
            {
                alert("Item inserted successfully!");
                window.location.replace("Item.html");
            }
        }
    });
}

var insertTransaction = function(){

    var transactionObject = getTransactionObjectFromUI('#tDate','Transaction Type','#tItemsSelect',
    '#transactionQuantity','#transactionAmount','#tSourceAccountSelect','#tBuyerSelect','#tSellerSelect',
    '#tFromAccountSelect','#tToAccountSelect','#transactionNotes');
    var transactions = new Array();
    transactions.push(transactionObject);
    var insertOneTransaction = postRecords("transactions",transactions);
    insertOneTransaction.done(function(respData){
        if(respData!=null)
        {
            status = respData["status"];
            if(status=="SUCCESS")
            {
                alert("Transaction inserted successfully!");
                window.location.replace("Transaction.html");
            }
        }
    });

}
