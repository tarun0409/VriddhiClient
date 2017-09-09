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
          var lookupKeys = Object.keys(transactionLookupVsTableMap);
          for(var lk = 0; lk<lookupKeys.length; lk++)
          {
              var lookupKey = lookupKeys[lk];
              if(lookupKey in transaction)
              {
                  var tableName = transactionLookupVsTableMap[lookupKey];
                  var id = transaction[lookupKey];
                  if(id!=null)
                  {
                      if(tableName=="item" && itemIds.indexOf(id)<0)
                      {
                          itemIds.push(id);
                      }
                      else if(tableName=="account" && accountIds.indexOf(id)<0)
                      {
                          accountIds.push(id);
                      }
                      else if(tableName=="contact" && contactIds.indexOf(id)<0)
                      {
                          contactIds.push(id);
                      }
                  }
              }
            }
         }
        itemIDvsNameMap = new Object();
        contactIDvsNameMap = new Object();
        accountIDvsNameMap = new Object();
        var getRelatedItems = $.when(getRecordsByIds("items",itemIds,null),getRecordsByIds("contacts",contactIds,null),getRecordsByIds("accounts",accountIds,null));
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
            transactionKeys = null;
            for(var i=0; i<transactions.length; i++)
            {
                var transaction = transactions[i];
                var myTransaction = new Object();
                transactionKeys = Object.keys(transaction);
                for(var j=0; j<transactionKeys.length; j++)
                {
                    transactionKey = transactionKeys[j];
                    if(transactionKey=="Transaction Date")
                    {
                        var dateString = transaction[transactionKey];
                        var myDateObj = new Date(dateString);
                        if(myDateObj!=null)
                        {
                            myDateString = ""+myDateObj.getDate()+"/"+(myDateObj.getMonth()+1)+"/"+myDateObj.getFullYear();
                            myTransaction["Date"] = myDateString;
                        }
                    }
                    else if(transactionKey in transactionLookupVsNameMap)
                    {
                        var value = transaction[transactionKey];
                        var newValue = "";
                        if(value==null)
                        {
                            value="";
                        }
                        if(transactionKey=="Account ID" || transactionKey=="From Account" || transactionKey=="To Account")
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
                        myTransaction[transactionLookupVsNameMap[transactionKey]] = newValue;
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

var getNames = function(moduleName,moduleData){
    var names = [];
    if(moduleData!=null)
    {
        var records = moduleData[moduleName];
        if(records!=null)
        {
            for(var i=0; i<records.length; i++)
            {
                var record = records[i];
                var recordObj = new Object();
                var nameField = moduleToNameFieldMap[moduleName];
                if(nameField in record)
                {
                    recordObj[nameField] = record[nameField];
                }
                if("ID" in record)
                {
                    recordObj["ID"] = record["ID"];
                }
                names.push(recordObj);
            }
        }
    }
    return names;
}
