$(document).ready(function(){

  var getAllTransactions = getTransactions(null);
  getAllTransactions.done(function(transactionData){
      if(transactionData!=null)
      {
          var getTransactionsForTransactionPage = getTransactionsForUI(transactionData);
          getTransactionsForTransactionPage.done(function(transactionDataForUI){
              displayTransactionSelect('#transactionSelect',transactionDataForUI);
          });
      }
  });


});
