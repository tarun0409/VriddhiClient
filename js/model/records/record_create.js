var startCreateProcess = function(modalId)
{
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

var insertItem = function(moduleName) {
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

    var transactionObject = getTransactionObjectFromUI('#tDate','Transaction Type','#itemsSelect',
    '#transactionQuantity','#transactionAmount','#sourceAccountSelect','#buyerSelect','#sellerSelect',
    '#fromAccountSelect','#toAccountSelect','#transactionNotes');
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
                window.location.replace("../Transaction.html");
            }
        }
    });

}
