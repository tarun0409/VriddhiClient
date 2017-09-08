var postItems = function(items){
    if(items!=null)
    {
        var itemObj = new Object();
        itemObj["items"] = items;
        return $.ajax({
        type: 'post',
        url:'http://localhost:8080/Vriddhi/v1/items',
        data: JSON.stringify(itemObj),
        contentType: 'application/json',
        dataType: 'json'
      });
    }
}
