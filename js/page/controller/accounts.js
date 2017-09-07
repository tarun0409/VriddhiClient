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


var deleteAccountsByIds = function(accountSelectListId){
    var selectedAccounts = $(accountSelectListId).val();
    var deleteAccountsByGivenIds = deleteAccounts(selectedAccounts);
    deleteAccountsByGivenIds.done(function(response){
        if(response!=null)
        {
            var status = response["status"];
            if(status=="SUCCESS")
            {
                alert("Accounts deleted successfully!");
                window.location.reload();
            }
        }
    });
}
