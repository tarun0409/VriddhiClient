var displayTransactionTable = function(tableId, transactions)
{
  var headerString = "<tr>";
  for(var k=0; k<transactionHeaders.length; k++)
  {
    var header = transactionHeaders[k];
    headerString+="<th>"+header+"</th>";
  }
  headerString+="</tr>";
  $(tableId).append(headerString);
  for(var i=0; i<transactions.length; i++)
  {
    var transaction = transactions[i];
    rowString = "<tr";
    if("Transaction Type" in transaction)
    {
        var val = transaction["Transaction Type"];
        if(val!=null)
        {
            rowString+=' class="';
            rowString+=val+'"';
        }
    }
    dataString = "";
    for(var k=0; k<transactionHeaders.length; k++)
    {
        var header = transactionHeaders[k];
        var myData=""
        var myData="<td>"
        if(header in transaction)
        {
            var val = transaction[header];
            if(val!=null)
            {
                if(header=="Transaction Amount")
                {
                    myData+="&#8377; ";
                }
                myData+=val;
            }
        }
        myData+="</td>";
        dataString+=myData;
    }
    rowString+=">"+dataString+"</tr>";
    $(tableId).append(rowString);

  }
}
