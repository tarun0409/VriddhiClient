$(document).ready(function(){

  var getLastHundredTransactions = getTransactions(null);
  getLastHundredTransactions.done(function(transactionData){
      if(transactionData!=null)
      {
          var getTransactionsForWelcomePage = getTransactionsForUI(transactionData);
          getTransactionsForWelcomePage.done(function(transactionDataForUI){
              displayTransactionSelect('#transactionSelect',transactionDataForUI);
          });
      }
  });


});
