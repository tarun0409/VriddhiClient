var getTransactionObjectFromUI = function(dateId, tTypeName, itemSelectId, tQuantityId,
  tAmountId, sourceAccountId, buyerSelectId, sellerSelectId, fromAccountId, toAccountId, notesId){
    var transObj = new Object();
    var date = new Date($(dateId).val());
    console.log(date);
    var transDay = date.getDate();
    var transMonth = date.getMonth() + 1;
    var transYear = date.getFullYear();
    var transDate = ""+transYear+"-"+transMonth+"-"+transDay;
    transObj["Transaction Date"] = transDate;
    if(tTypeName!=null)
    {
        var tType =  $("input[name='"+tTypeName+"']:checked").val();
        transObj["Transaction Type"] = tType;
    }
    if(itemSelectId!=null)
    {
        var itemId = $(itemSelectId).val();
        transObj["Item ID"] = itemId;
    }
    if(tQuantityId!=null)
    {
        var tQuantity = parseInt($(tQuantityId).val());
        transObj["Quantity"] = tQuantity;
    }
    if(tAmountId!=null)
    {
        var tAmount = parseFloat($(tAmountId).val());
        transObj["Transaction Amount"] = tAmount;
    }
    if(sourceAccountId!=null)
    {
        var accountId = $(sourceAccountId).val();
        transObj["Account ID"] = accountId;
    }
    if(buyerSelectId!=null)
    {
        var buyerId = $(buyerSelectId).val();
        transObj["Buyer"] = buyerId;
    }
    if(sellerSelectId!=null)
    {
        var sellerId = $(sellerSelectId).val();
        transObj["Seller"] = sellerId;
    }
    if(fromAccountId!=null)
    {
        var fromId = $(fromAccountId).val();
        transObj["From Account"] = fromId;
    }
    if(toAccountId!=null)
    {
        var toId = $(toAccountId).val();
        transObj["To Account"] = toId;
    }
    if(notesId!=null)
    {
        var note = $(notesId).val();
        transObj["Notes"] = note;
    }
    return transObj;

}
