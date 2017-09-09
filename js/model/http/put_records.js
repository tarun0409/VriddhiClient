var putRecord = function(moduleName,id,records){
    if(records!=null)
    {
        var putUrl = 'http://localhost:8080/Vriddhi/v1/'+moduleName+'/'+id;
        var recordObj = new Object();
        recordObj[moduleName] = records;
        return $.ajax({
        type: 'PUT',
        url:putUrl,
        data: JSON.stringify(recordObj),
        contentType: 'application/json',
        dataType: 'json'
      });
    }
}
