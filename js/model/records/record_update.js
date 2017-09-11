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

var startContactUpdateProcess = function(modalId,selectListId){
  var selectedRecord = $(selectListId).val();
  updateRecordId = selectedRecord[0];
  var contactIdArray = new Array();
  contactIdArray.push(updateRecordId);
  var getOneContactById = getRecordsByIds("contacts",contactIdArray, null);
  getOneContactById.done(function(contactData){
      if(contactData!=null)
      {
        var contactArray = contactData["contacts"];
        var contactObj = contactArray[0];
        var contactFieldToTagIdMap = {
            "Contact Name":"#updateContactName",
            "Primary Phone":"#updatePrimaryPhone",
            "Secondary Phone":"#updateSecondaryPhone",
            "Email":"#updateEmail",
            "Primary Address":"#updatePrimaryAddress",
            "Secondary Address":"#updateSecondaryAddress"
        };
        for(var i=0; i<contactHeaders.length; i++)
        {
            var contactHeader = contactHeaders[i];
            var value = contactObj[contactHeader];
            if(value!=null)
            {
                var tagId = contactFieldToTagIdMap[contactHeader];
                $(tagId).attr("placeholder",value);
            }
        }
      }
  });
  $(modalId).modal('show');
}

var startItemUpdateProcess = function(modalId,selectListId){
  var selectedRecord = $(selectListId).val();
  updateRecordId = selectedRecord[0];
  var itemIdArray = new Array();
  itemIdArray.push(updateRecordId);
  var getOneItemById = getRecordsByIds("items",itemIdArray, null);
  getOneItemById.done(function(itemData){
      if(itemData!=null)
      {
          var itemArray = itemData["items"];
          var itemObj = itemArray[0];
          var itemFieldToTagIdMap = {
              "Saree":"#saree",
              "Chudidhar":"#chudidhar",
              "Item Name":"#updateItemName"
          };
          var itemUpdateHeaders = ["Item Type","Item Name"];
          var itemType = itemObj["Item Type"];
          localStorage.setItem("selectedItemType",itemType);
          var typeTagId = itemFieldToTagIdMap[itemType];
          $(typeTagId).attr("selected","");
          var itemName = itemObj["Item Name"];
          var nameTagId = itemFieldToTagIdMap["Item Name"];
          $(nameTagId).attr("placeholder",itemName);
      }
  });
  $(modalId).modal('show');
}

var updateAccount = function()  {
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
                window.location.replace("Account.html");
            }
        }
    });
}

var updateContact = function()  {
    var contactObj = getContactUpdateObjectFromUI('#updateContactName','#updatePrimaryPhone','#updateSecondaryPhone','#updateEmail','#updatePrimaryAddress','#updateSecondaryAddress');
    var contacts = new Array();
    contacts.push(contactObj);
    var cntId = updateRecordId;
    var updateOneContact = putRecord("contacts",cntId,contacts);
    updateOneContact.done(function(response){
        if(response!=null)
        {
            status = response["status"];
            if(status=="SUCCESS")
            {
                alert("Contact updated successfully!");
                window.location.replace("Contact.html");
            }
        }
    });
}

var updateItem = function()  {
    var itemObj = getItemUpdateObjectFromUI('#updateItemType','#updateItemName');
    var items = new Array();
    items.push(itemObj);
    var itemId = updateRecordId;
    var updateOneItem = putRecord("items",itemId,items);
    updateOneItem.done(function(response){
        if(response!=null)
        {
            status = response["status"];
            if(status=="SUCCESS")
            {
                alert("Item updated successfully!");
                window.location.replace("Item.html");
            }
        }
    });
}
