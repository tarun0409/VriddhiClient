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


var displayTransactionSelect = function(selectListId, transactions) {
    if(transactions!=null)
    {
        var tValueLengths = new Object();
        for(var i=0; i<transactions.length;i++)
        {
            var transaction = transactions[i];
            for(var k=0; k<transactionHeaders.length; k++)
            {
                var header = transactionHeaders[k];
                if(header in transaction)
                {
                    var value = transaction[header];
                    if(value!=null)
                    {
                        var valueString = ""+value;
                        var valLen = valueString.length;
                        if(header in tValueLengths)
                        {
                            var oldLen = tValueLengths[header];
                            if(valLen>oldLen)
                            {
                                tValueLengths[header] = valLen;
                            }
                        }
                        else
                        {
                            tValueLengths[header] = valLen;
                        }
                    }
                }

            }
        }
        for(var i=0; i<transactions.length; i++)
        {
            var transaction = transactions[i];
            var optionString = '<option class="transactionOptions"';
            if("ID" in transaction)
            {
                var tId = transaction["ID"];
                optionString+=' value="'+tId+'"';
            }
            else if("Transaction Type" in transaction)
            {
                var tType = transaction["Transaction Type"];
                optionString+=' class="'+tType+'"';
            }
            optionString+=">";
            for(var j=0; j<transactionHeaders.length; j++)
            {
                var transactionKey = transactionHeaders[j];
                if(transactionKey in transaction)
                {
                    var value = transaction[transactionKey];
                    var spaces = 5;
                    var allowedLen = tValueLengths[transactionKey];
                    var optionValueString = "";
                    if(value!=null)
                    {
                        optionValueString+=value;
                        var valString = ""+value;
                        var valLen = valString.length;
                        spaces += (allowedLen-valLen);
                    }
                    else
                    {
                        spaces+=allowedLen;
                    }
                    for(var k=0; k<spaces; k++)
                    {
                        optionValueString+="&nbsp;";
                    }
                    optionString+=optionValueString;
                }
            }
            optionString+="</option>";
            $(selectListId).append(optionString);
        }
    }

}
