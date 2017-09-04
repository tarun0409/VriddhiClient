var postTransactions = function(transactions){
    if(transactions!=null)
    {
        var transactionObj = new Object();
        transactionObj["transactions"] = transactions;
        return $.ajax({
        type: 'post',
        url:'http://localhost:8080/Vriddhi/v1/transactions',
        data: JSON.stringify(transactionObj),
        contentType: 'application/json',
        dataType: 'json'
      });
    }
}
