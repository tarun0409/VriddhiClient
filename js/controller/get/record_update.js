var getAccountUpdateObjectFromUI = function(nameId,ownerId,managerId,balanceId) {
      var accountObj = new Object();
      if(nameId!=null)
      {
          var namePh = $(nameId).attr('placeholder');
          var nameValue = $(nameId).val();
          if(nameValue!=null && nameValue!="" && (namePh!=nameValue))
          {
              accountObj["Account Name"] = nameValue;
          }
      }
      if(ownerId!=null)
      {
          var ownerPh = $(ownerId).attr('placeholder');
          var ownerValue = $(ownerId).val();
          if(ownerValue!=null && ownerValue!="" && (ownerPh!=ownerValue))
          {
              accountObj["Account Owner"] = ownerValue;
          }
      }
      if(managerId!=null)
      {
          var managerPh = $(managerId).attr('placeholder');
          var managerValue = $(managerId).val();
          if(managerValue!=null && managerValue!="" && (managerPh!=managerValue))
          {
              accountObj["Account Manager"] = managerValue;
          }
      }
      if(balanceId!=null)
      {
          var balancePh = parseFloat($(balanceId).attr('placeholder'));
          var balanceValue = parseFloat($(balanceId).val());
          if(balanceValue!=null && !isNaN(balanceValue) && balancePh!=null && !isNaN(balancePh) && (balancePh!=balanceValue))
          {
              accountObj["Account Balance"] = balanceValue;
          }
      }
      return accountObj;
}

var getContactUpdateObjectFromUI = function(nameId, primaryPhoneId, secondaryPhoneId, emailId, primaryAddressId, secondaryAddressId) {
      var contactObj = new Object();
      if(nameId!=null)
      {
          var phValue = $(nameId).attr('placeholder');
          var value = $(nameId).val();
          if(value!=null && value!="" && (phValue!=value))
          {
              contactObj["Contact Name"] = value;
          }
      }
      if(primaryPhoneId!=null)
      {
          var phValue = $(primaryPhoneId).attr('placeholder');
          var value = $(primaryPhoneId).val();
          if(value!=null && value!="" && (phValue!=value))
          {
              contactObj["Primary Phone"] = value;
          }
      }
      if(secondaryPhoneId!=null)
      {
          var phValue = $(secondaryPhoneId).attr('placeholder');
          var value = $(secondaryPhoneId).val();
          if(value!=null && value!="" && (phValue!=value))
          {
              contactObj["Secondary Phone"] = value;
          }
      }
      if(emailId!=null)
      {
          var phValue = $(emailId).attr('placeholder');
          var value = $(emailId).val();
          if(value!=null && value!="" && (phValue!=value))
          {
              contactObj["Email"] = value;
          }
      }
      if(primaryAddressId!=null)
      {
          var phValue = $(primaryAddressId).attr('placeholder');
          var value = $(primaryAddressId).val();
          if(value!=null && value!="" && (phValue!=value))
          {
              contactObj["Primary Address"] = value;
          }
      }
      if(secondaryAddressId!=null)
      {
          var phValue = $(secondaryAddressId).attr('placeholder');
          var value = $(secondaryAddressId).val();
          if(value!=null && value!="" && (phValue!=value))
          {
              contactObj["Secondary Address"] = value;
          }
      }


      return contactObj;
}

var getItemUpdateObjectFromUI = function(itemTypeId,itemNameId) {
      var itemObj = new Object();
      if(itemTypeId!=null)
      {
          var typePh = localStorage.getItem("selectedItemType");
          var typeValue = $(itemTypeId).val();
          if(typeValue!=null && typeValue!="" && (typePh!=typeValue))
          {
              itemObj["Item Type"] = typeValue;
          }
      }
      if(itemNameId!=null)
      {
          var namePh = $(itemNameId).attr('placeholder');
          var nameValue = $(itemNameId).val();
          if(nameValue!=null && nameValue!="" && (namePh!=typeValue))
          {
              itemObj["Item Name"] = nameValue;
          }
      }
      return itemObj;
}
