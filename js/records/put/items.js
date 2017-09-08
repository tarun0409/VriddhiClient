var putItem = function(id, items){
    if(items!=null)
    {
        var putUrl = 'http://localhost:8080/Vriddhi/v1/items/'+id;
        var itemObj = new Object();
        itemObj["items"] = items;
        return $.ajax({
        type: 'PUT',
        url:putUrl,
        data: JSON.stringify(itemObj),
        contentType: 'application/json',
        dataType: 'json'
      });
    }
}
