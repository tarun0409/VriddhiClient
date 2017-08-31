$(document).ready(function(){

  $.get("http://localhost:8080/Vriddhi/v1/transactions?limit=10", function(data, status){

      if(data!=null)
      {
        transactions = data["transactions"];
        if(transactions!=null)
        {
          var firstLine = true;
          for(int i=0; i<transactions.length; i++)
          {
            var transaction = transactions[i];
            var rowString = '';
            if(firstLine)
            {
              var headString='';

            }
          }
        }
      }

});

});
