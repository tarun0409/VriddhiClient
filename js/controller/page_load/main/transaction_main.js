$(document).ready(function(){

  var getAllTransactions = getRecords("transactions",null);
  getAllTransactions.done(function(transactionData){
      if(transactionData!=null)
      {
          var getTransactionsForTransactionPage = getTransactionsForUI(transactionData);
          getTransactionsForTransactionPage.done(function(transactionDataForUI){
              var transactionObj = new Object();
              transactionObj["transactions"] = transactionDataForUI;
              displayRecordsSelectList("transactions",'#transactionSelect',transactionObj);
          });
      }
  });
});
