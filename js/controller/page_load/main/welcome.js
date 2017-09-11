$(document).ready(function(){

  var getLastTenTransactions = getRecords("transactions",10);
  getLastTenTransactions.done(function(transactionData){
      if(transactionData!=null)
      {
          var getTransactionsForWelcomePage = getTransactionsForUI(transactionData);
          getTransactionsForWelcomePage.done(function(transactionDataForUI){
              displayTransactionTable('#l10thead','#l10tbody',transactionDataForUI);
          });
      }
  });


$.get("http://localhost:8080/Vriddhi/v1/functions/profit", function(data, status){

    if(data!=null)
    {
        if("profit" in data)
        {
            var profit = data["profit"];
            var profitString = "Profit on current transactions: "+profit+"%";
            $('#profit').append(profitString);

        }
    }

});

});
