$(document).ready(function(){

  $.get("http://localhost:8080/Vriddhi/v1/transactions?limit=10", function(data, status){

      if(data!=null)
      {
        transactions = data["transactions"];
        if(transactions!=null)
        {
          var itemIdString = "";
          var contactIdString = "";
          var accountIdString = "";
          var itemsAdded = [];
          var contactsAdded = [];
          var accountsAdded = [];
          for(var i=0; i<transactions.length; i++)
          {
            var transaction = transactions[i];
            if("Item ID" in transaction)
            {
                itemId = transaction["Item ID"];
                if(itemId!=null)
                {
                  if(itemsAdded.indexOf(itemId)<0)
                  {
                    itemsAdded.push(itemId);
                    itemIdString+=itemId+",";
                  }
                }
            }
            if("Account ID" in transaction)
            {
                accountId = transaction["Account ID"];
                if(accountId!=null)
                {
                  if(accountsAdded.indexOf(accountId)<0)
                  {
                    accountsAdded.push(accountId);
                    accountIdString+=accountId+",";
                  }
                }
            }
            if("Buyer" in transaction)
            {
                buyerId = transaction["Buyer"];
                if(buyerId!=null)
                {
                  if(contactsAdded.indexOf(buyerId)<0)
                  {
                    contactsAdded.push(buyerId);
                    contactIdString+=buyerId+",";
                  }
                }
            }
            if("Seller" in transaction)
            {
                sellerId = transaction["Seller"];
                if(sellerId!=null)
                {
                  if(contactsAdded.indexOf(sellerId)<0)
                  {
                    contactsAdded.push(sellerId);
                    contactIdString+=sellerId+",";
                  }
                }
            }
          }
          itemIDvsNameMap = new Object();
          contactIDvsNameMap = new Object();
          accountIDvsNameMap = new Object();
          if(itemIdString!="")
          {
            var itemUrl = "http://localhost:8080/Vriddhi/v1/items";
            itemUrl+="?ids="+itemIdString;
            $.get(itemUrl,function(itemData,status1){
                if(itemData!=null)
                {
                  items = itemData["items"];
                  if(items!=null)
                  {
                    for(var i=0; i<items.length; i++)
                    {
                      var item = items[i];
                      var itemName = item["Item Name"];
                      var id = item["ID"];
                      itemIDvsNameMap[id] = itemName;
                    }
                  }
                }
            });
          }
          if(accountIdString!="")
          {
            var accountUrl = "http://localhost:8080/Vriddhi/v1/accounts";
            accountUrl+="?ids="+accountIdString;
            $.get(accountUrl,function(accountData,status1){
                if(accountData!=null)
                {
                  accounts = accountData["accounts"];
                  if(accounts!=null)
                  {
                    for(var i=0; i<accounts.length; i++)
                    {
                      var account = accounts[i];
                      var accountName = account["Account Name"];
                      var id = account["ID"];
                      accountIDvsNameMap[id] = accountName;
                    }
                  }
                }
            });
          }
          if(contactIdString!="")
          {
            var contactUrl = "http://localhost:8080/Vriddhi/v1/contacts";
            contactUrl+="?ids="+contactIdString;
            $.get(contactUrl,function(contactData,status1){
                if(contactData!=null)
                {
                  contacts = contactData["contacts"];
                  if(contacts!=null)
                  {
                    for(var i=0; i<contacts.length; i++)
                    {
                      var contact = contacts[i];
                      var contactName = contact["Contact Name"];
                      var id = contact["ID"];
                      contactIDvsNameMap[id] = contactName;
                    }
                  }
                }
            });
          }
          myTransactions = [];
          myTransactionHeaders = {
            "Account ID":"Account Name",
            "Item ID":"Item Name",
            "Buyer":"Buyer Name",
            "Seller":"Seller Name"
          };
          transactionKeys = null;
          console.log(transactions)
          for(var i=0; i<transactions.length; i++)
          {
              var transaction = transactions[i];
              var myTransaction = new Object();
              if(transactionKeys==null)
              {
                  transactionKeys = Object.keys(transaction);
              }
              for(transactionKey in transactionKeys)
              {
                  if(transactionKey=="ID")
                  {
                      continue;
                  }
                  else if(transactionKey=="Transaction Date")
                  {
                      var dateString = transaction[transactionKey];
                      var myDateObj = new Date(dateString);
                      if(myDateObj!=null)
                      {
                          myDateString = ""+myDateObj.getDate()+"/"+myDateObj.getMonth()+"/"+myDateObj.getFullYear();
                          myTransaction["Date"] = myDateString;
                      }
                  }
                  else if(transactionKey in myTransactionHeaders)
                  {
                      var value = transaction[transactionKey];
                      var newValue = "";
                      if(transactionKey=="Account ID")
                      {
                          newValue = accountIDvsNameMap[value];
                      }
                      else if(transactionKey=="Item ID")
                      {
                          newValue = itemIDvsNameMap[value];
                      }
                      else if(transactionKey=="Buyer" || transactionKey=="Seller")
                      {
                         newValue = contactIDvsNameMap[value];
                      }
                      myTransaction[myTransactionHeaders[transactionKey]] = newValue;
                  }
                  else
                  {
                      myTransaction[transactionKey] = transaction[transactionKey];
                  }
              }
              myTransactions.push(myTransaction);
          }
          console.log(myTransactions)
          var headers = [];
          var firstLine = true;
          var headerString = "<tr>";
          for(var i=0; i<myTransactions.length; i++)
          {
            var transaction = myTransactions[i];
            if(firstLine)
            {
              headers = Object.keys(transaction);
              for(var header in headers)
              {
                if(header=="Transaction Type")
                {
                    continue;
                }
                headerString+="<th>"+header+"</th>";
              }
              headerString+="</tr>"
              $('#l10t > thead:last-child').append(headerString);
              firstLine=false;
            }
            rowString = "<tr";
            dataString = "";
            for(var header in headers)
            {
                var myData="<td>"
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
                    var val = transaction[header];
                    myData+=val+"</td>";
                }
                dataString+=myData;
            }
            rowString+=">"+dataString+"</tr>";
            $('#l10t > tbody:last-child').append(rowString);

          }
        }
      }

});

});
