var updateRecordId = 0;

var startAccountUpdateProcess = function(modalId,selectListId){
  var selectedRecord = $(selectListId).val();
  updateRecordId = selectedRecord[0];
  var accountIdArray = new Array();
  accountIdArray.push(updateRecordId);
  var getOneAccountById = getRecordsByIds("accounts",accountIdArray, null);
  getOneAccountById.done(function(accountData){
      if(accountData!=null)
      {
          var accountArray = accountData["accounts"];
          var accountObj = accountArray[0];
          var accountFieldToTagIdMap = {
              "Account Name":"#updateAccountName",
              "Account Owner":"#updateAccountOwner",
              "Account Manager":"#updateAccountManager",
              "Account Balance":"#updateAccountBalance"
          };
          for(var i=0; i<accountHeaders.length; i++)
          {
              var accountHeader = accountHeaders[i];
              var value = accountObj[accountHeader];
              if(value!=null)
              {
                  var tagId = accountFieldToTagIdMap[accountHeader];
                  $(tagId).attr("placeholder",value);
              }
          }
      }
  });
  $(modalId).modal('show');
}

var updateAccount = function(moduleName)  {
    var accountObj = getAccountUpdateObjectFromUI('#updateAccountName','#updateAccountOwner','#updateAccountManager','#updateAccountBalance');
    var accounts = new Array();
    accounts.push(accountObj);
    var acctId = updateRecordId;
    var updateOneAccount = putRecord("accounts",acctId,accounts);
    updateOneAccount.done(function(response){
        if(response!=null)
        {
            status = response["status"];
            if(status=="SUCCESS")
            {
                alert("Account updated successfully!");
                window.location.replace(moduleName+".html");
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
