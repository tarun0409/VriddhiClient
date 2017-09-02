var getTransactions = function(limit)
{
    var url = "http://localhost:8080/Vriddhi/v1/transactions";
    if(limit!=null)
    {
        url+="?limit="+limit;
    }
    return $.get(url);
}

var getTransactionsByIds = function(ids,limit)
{
    var failedAction = $.Deferred();
    if(ids==null)
    {
        failedAction.resolve();
        return failedAction.promise();
    }
    else
    {
        if(ids.length<=0)
        {
            failedAction.resolve();
            return failedAction.promise();
        }
        else
        {
            var url = "http://localhost:8080/Vriddhi/v1/transactions?";
            url+="ids=";
            var cnt = 1;
            for(var i=0; i<ids.length; i++)
            {
                id = ids[i];
                url+=id;
                if(cnt!=ids.length)
                {
                  url+=",";
                }
                cnt++;
            }
            if(limit!=null)
            {
                url+="&limit="+limit;
            }
            return $.get(url);
        }
    }
}

var getTransactionsForUI = function(transactionData)
{
    var tDeferredObj = $.Deferred();

    if(transactionData!=null)
    {
      transactions = transactionData["transactions"];
      if(transactions!=null)
      {
        var itemIds = [];
        var contactIds = [];
        var accountIds = [];
        for(var i=0; i<transactions.length; i++)
        {
          var transaction = transactions[i];
          if("Item ID" in transaction)
          {
              itemId = transaction["Item ID"];
              if(itemId!=null)
              {
                if(itemIds.indexOf(itemId)<0)
                {
                  itemIds.push(itemId);
                }
              }
          }
          if("Account ID" in transaction)
          {
              accountId = transaction["Account ID"];
              if(accountId!=null)
              {
                if(accountIds.indexOf(accountId)<0)
                {
                  accountIds.push(accountId);
                }
              }
          }
          if("Buyer" in transaction)
          {
              buyerId = transaction["Buyer"];
              if(buyerId!=null)
              {
                if(contactIds.indexOf(buyerId)<0)
                {
                  contactIds.push(buyerId);
                }
              }
          }
          if("Seller" in transaction)
          {
              sellerId = transaction["Seller"];
              if(sellerId!=null)
              {
                if(contactIds.indexOf(sellerId)<0)
                {
                  contactIds.push(sellerId);
                }
              }
          }
        }
        itemIDvsNameMap = new Object();
        contactIDvsNameMap = new Object();
        accountIDvsNameMap = new Object();
        var getRelatedItems = $.when(getItemsByIds(itemIds),getContactsByIds(contactIds),getAccountsByIds(accountIds));
        getRelatedItems.done(function(itemObj,contactObj,accountObj){
            if(itemObj!=null)
            {
                items = itemObj[0]["items"];
                if(items!=null)
                {
                  for(var i=0; i<items.length; i++)
                  {
                    var item = items[i];
                    var itemName = item["Item Name"];
                    var id = item["ID"];
                    itemIDvsNameMap[""+id] = itemName;
                  }
                }
            }
            if(accountObj!=null)
            {
                accounts = accountObj[0]["accounts"];
                if(accounts!=null)
                {
                  for(var i=0; i<accounts.length; i++)
                  {
                    var account = accounts[i];
                    var accountName = account["Account Name"];
                    var id = account["ID"];
                    accountIDvsNameMap[""+id] = accountName;
                  }
                }
            }
            if(contactObj!=null)
            {
                contacts = contactObj[0]["contacts"];
                if(contacts!=null)
                {
                  for(var i=0; i<contacts.length; i++)
                  {
                    var contact = contacts[i];
                    var contactName = contact["Contact Name"];
                    var id = contact["ID"];
                    contactIDvsNameMap[""+id] = contactName;
                  }
                }
            }
            myTransactions = [];
            myTransactionHeaders = {
              "Account ID":"Account Name",
              "Item ID":"Item Name",
              "Buyer":"Buyer Name",
              "Seller":"Seller Name"
            };
            transactionKeys = null;
            for(var i=0; i<transactions.length; i++)
            {
                var transaction = transactions[i];
                var myTransaction = new Object();
                if(transactionKeys==null)
                {
                    transactionKeys = Object.keys(transaction);
                }

                for(var j=0; j<transactionKeys.length; j++)
                {
                    transactionKey = transactionKeys[j];
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
                            myDateString = ""+myDateObj.getDate()+"/"+(myDateObj.getMonth()+1)+"/"+myDateObj.getFullYear();
                            myTransaction["Date"] = myDateString;
                        }
                    }
                    else if(transactionKey in myTransactionHeaders)
                    {
                        var value = transaction[transactionKey];
                        var newValue = "";
                        if(transactionKey=="Account ID")
                        {
                            newValue = accountIDvsNameMap[value.toString()];
                        }
                        else if(transactionKey=="Item ID")
                        {
                            newValue = itemIDvsNameMap[value.toString()];
                        }
                        else if(transactionKey=="Buyer" || transactionKey=="Seller")
                        {
                           newValue = contactIDvsNameMap[value.toString()];
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
            tDeferredObj.resolve(myTransactions);

        });

      }
      else
      {
          tDeferredObj.reject();
      }
    }
    else
    {
        tDeferredObj.reject();
    }

    return tDeferredObj.promise();
}
