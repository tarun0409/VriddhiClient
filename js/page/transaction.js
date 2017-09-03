$(document).ready(function(){

  var getAllTransactions = getTransactions(null);
  getAllTransactions.done(function(transactionData){
      if(transactionData!=null)
      {
          var getTransactionsForWelcomePage = getTransactionsForUI(transactionData);
          getTransactionsForWelcomePage.done(function(transactionDataForUI){
              displayTransactionSelect('#transactionSelect',transactionDataForUI);
          });
      }
  });


});
