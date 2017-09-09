var getAccountObjectFromUI = function(nameId, ownerId, managerId, balanceId) {
      var accountObj = new Object();
      var accountName = $(nameId).val();
      accountObj["Account Name"] = accountName;
      var ownerName = $(ownerId).val();
      accountObj["Account Owner"] = ownerName;
      var managerName = $(managerId).val();
      accountObj["Account Manager"] = managerName;
      if(balanceId!=null)
      {
          var acctBalance = parseFloat($(balanceId).val());
          if(acctBalance!=null && !isNaN(acctBalance))
          {
              accountObj["Account Balance"] = acctBalance;
          }
      }
      return accountObj;
}

var getContactObjectFromUI = function(nameId, primaryPhoneId, secondaryPhoneId, emailId, primaryAddressId, secondaryAddressId) {
      var contactObj = new Object();
      if(nameId!=null)
      {
          var value = $(nameId).val();
          if(value!=null && value!="")
          {
              contactObj["Contact Name"] = value;
          }
      }
      if(primaryPhoneId!=null)
      {
          var value = $(primaryPhoneId).val();
          if(value!=null && value!="")
          {
              contactObj["Primary Phone"] = value;
          }
      }
      if(secondaryPhoneId!=null)
      {
          var value = $(secondaryPhoneId).val();
          if(value!=null && value!="")
          {
              contactObj["Secondary Phone"] = value;
          }
      }
      if(emailId!=null)
      {
          var value = $(emailId).val();
          if(value!=null && value!="")
          {
              contactObj["Email"] = value;
          }
      }
      if(primaryAddressId!=null)
      {
          var value = $(primaryAddressId).val();
          if(value!=null && value!="")
          {
              contactObj["Primary Address"] = value;
          }
      }
      if(secondaryAddressId!=null)
      {
          var value = $(secondaryAddressId).val();
          if(value!=null && value!="")
          {
              contactObj["Secondary Address"] = value;
          }
      }
      return contactObj;
}

var getItemObjectFromUI = function(itemTypeId,itemNameId) {
    var itemObj = new Object();
    var itemType = $(itemTypeId).val();
    var itemName = $(itemNameId).val();
    itemObj["Item Type"] = itemType;
    itemObj["Item Name"] = itemName;
    return itemObj;

}

var getTransactionObjectFromUI = function(dateId, tTypeName, itemSelectId, tQuantityId,
  tAmountId, sourceAccountId, buyerSelectId, sellerSelectId, fromAccountId, toAccountId, notesId){
    var transObj = new Object();
    var date = new Date($(dateId).val());
    var transDay = date.getDate();
    var transMonth = date.getMonth() + 1;
    var transYear = date.getFullYear();
    var transDate = ""+transYear+"-"+transMonth+"-"+transDay;
    transObj["Transaction Date"] = transDate;
    if(tTypeName!=null)
    {
        var tType =  $("input[name='"+tTypeName+"']:checked").val();
        transObj["Transaction Type"] = tType;
    }
    if(itemSelectId!=null)
    {
        var itemId = $(itemSelectId).val();
        transObj["Item ID"] = itemId;
    }
    if(tQuantityId!=null)
    {
        var tQuantity = parseInt($(tQuantityId).val());
        transObj["Quantity"] = tQuantity;
    }
    if(tAmountId!=null)
    {
        var tAmount = parseFloat($(tAmountId).val());
        transObj["Transaction Amount"] = tAmount;
    }
    if(sourceAccountId!=null)
    {
        var accountId = $(sourceAccountId).val();
        transObj["Account ID"] = accountId;
    }
    if(buyerSelectId!=null)
    {
        var buyerId = $(buyerSelectId).val();
        transObj["Buyer"] = buyerId;
    }
    if(sellerSelectId!=null)
    {
        var sellerId = $(sellerSelectId).val();
        transObj["Seller"] = sellerId;
    }
    if(fromAccountId!=null)
    {
        var fromId = $(fromAccountId).val();
        transObj["From Account"] = fromId;
    }
    if(toAccountId!=null)
    {
        var toId = $(toAccountId).val();
        transObj["To Account"] = toId;
    }
    if(notesId!=null)
    {
        var note = $(notesId).val();
        transObj["Notes"] = note;
    }
    return transObj;

}
