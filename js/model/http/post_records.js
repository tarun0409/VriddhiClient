var postRecords = function(moduleName,records){
    if(records!=null)
    {
        var recordObj = new Object();
        recordObj[moduleName] = records;
        return $.ajax({
        type: 'post',
        url:'http://localhost:8080/Vriddhi/v1/'+moduleName,
        data: JSON.stringify(recordObj),
        contentType: 'application/json',
        dataType: 'json'
      });
    }
}
