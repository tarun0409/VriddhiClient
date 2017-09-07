var putAccount = function(id, accounts){
    if(accounts!=null)
    {
        var putUrl = 'http://localhost:8080/Vriddhi/v1/accounts/'+id;
        var accountObj = new Object();
        accountObj["accounts"] = accounts;
        return $.ajax({
        type: 'PUT',
        url:putUrl,
        data: JSON.stringify(accountObj),
        contentType: 'application/json',
        dataType: 'json'
      });
    }
}
