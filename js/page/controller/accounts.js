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
