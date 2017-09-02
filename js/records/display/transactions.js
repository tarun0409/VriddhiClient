var displayTransactionTable = function(tableId, transactions)
{
  var headers = [];
  var firstLine = true;
  var headerString = "<tr>";
  for(var i=0; i<transactions.length; i++)
  {
    var transaction = transactions[i];
    if(firstLine)
    {
      headers = Object.keys(transaction);
      for(var k=0; k<headers.length; k++)
      {
        var header = headers[k];
        if(header=="Transaction Type")
        {
            continue;
        }
        headerString+="<th>"+header+"</th>";
      }
      headerString+="</tr>";
      console.log(headerString);
      $(tableId).append(headerString);
      firstLine=false;
    }
    rowString = "<tr";
    dataString = "";
    for(var k=0; k<headers.length; k++)
    {
        header = headers[k];
        var myData=""
        if(header=="Transaction Type")
        {
            var val = transaction[header];
            if(val!=null)
            {
                rowString+=' class="';
                rowString+=val+'"';
            }
        }
        else
        {
            var myData="<td>"
            if(header=="Transaction Amount")
            {
                myData+="&#8377; ";
            }
            var val = transaction[header];
            myData+=val+"</td>";
        }
        dataString+=myData;
    }
    rowString+=">"+dataString+"</tr>";
    $(tableId).append(rowString);

  }
}


var displayTransactionSelect = function(selectListId, transactions) {

    if(transactions!=null)
    {
        var firstLine = true;
        var transactionKeys = null;
        var tValueLengths = new Object();
        for(var i=0; i<transactions.length;i++)
        {
            var transaction = transactions[i];
            for(var key in transaction)
            {
                var value = transaction[key];
                if(value!=null)
                {
                    var valueString = ""+value;
                    var valLen = valueString.length;
                    if(key in tValueLengths)
                    {
                        var oldLen = tValueLengths[key];
                        if(valLen>oldLen)
                        {
                            tValueLengths[key] = valLen;
                        }
                    }
                    else
                    {
                        tValueLengths[key] = valLen;
                    }
                }

            }
        }
        for(var i=0; i<transactions.length; i++)
        {
            var transaction = transactions[i];
            if(firstLine)
            {
                transactionKeys = Object.keys(transaction);
                firstLine = false;
            }
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
            if(transactionKeys!=null)
            {
                for(var j=0; j<transactionKeys.length; j++)
                {
                    var transactionKey = transactionKeys[j];
                    if(transactionKey=="ID" || transactionKey=="Transaction Type")
                    {
                        continue;
                    }
                    var value = transaction[transactionKey];
                    var spaces = 5;
                    var allowedLen = tValueLengths[transactionKey];
                    var optionValueString = ""+value;
                    if(value!=null)
                    {
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
                optionString+="</option>";
                $(selectListId).append(optionString);

            }
        }
    }

}
