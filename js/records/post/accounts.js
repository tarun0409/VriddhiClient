var postAccounts = function(accounts){
    if(accounts!=null)
    {
        var accountObj = new Object();
        accountObj["accounts"] = accounts;
        return $.ajax({
        type: 'post',
        url:'http://localhost:8080/Vriddhi/v1/accounts',
        data: JSON.stringify(accountObj),
        contentType: 'application/json',
        dataType: 'json'
      });
    }
}
