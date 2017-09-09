var startUpdateProcess = function(moduleName,selectListId)
{
    var selectedRecord = $(selectListId).val();
    if(selectedRecord!=null && selectedRecord.length==1)
    {
        localStorage.setItem("updateRecordId",selectedRecord[0]);
        window.location.href = 'modals/'+moduleName+'Update.html';
    }
}

var updateAccount = function(moduleName)  {
    var accountObj = getAccountUpdateObjectFromUI('#accountName','#accountOwner','#accountManager','#accountBalance');
    var accounts = new Array();
    accounts.push(accountObj);
    var acctId = localStorage.getItem("updateRecordId");
    var updateOneAccount = putRecord("accounts",acctId,accounts);
    updateOneAccount.done(function(response){
        if(response!=null)
        {
            status = response["status"];
            if(status=="SUCCESS")
            {
                alert("Account updated successfully!");
                window.location.replace("../"+moduleName+".html");
            }
        }
    });
}

var updateContact = function()  {
    var contactObj = getContactUpdateObjectFromUI('#contactName','#primaryPhone','#secondaryPhone','#email','#primaryAddress','#secondaryAddress');
    var contacts = new Array();
    contacts.push(contactObj);
    var cntId = localStorage.getItem("updateRecordId");
    var updateOneContact = putRecord("contacts",cntId,contacts);
    updateOneContact.done(function(response){
        if(response!=null)
        {
            status = response["status"];
            if(status=="SUCCESS")
            {
                alert("Contact updated successfully!");
                window.location.replace("../Contact.html");
            }
        }
    });
}

var updateItem = function()  {
    var itemObj = getItemUpdateObjectFromUI('#itemType','#itemName');
    var items = new Array();
    items.push(itemObj);
    var itemId = localStorage.getItem("updateRecordId");
    var updateOneItem = putRecord("items",itemId,items);
    updateOneItem.done(function(response){
        if(response!=null)
        {
            status = response["status"];
            if(status=="SUCCESS")
            {
                alert("Item updated successfully!");
                window.location.replace("../Item.html");
            }
        }
    });
}
