var deleteRecords = function(moduleName,ids){
    if(ids!=null)
    {
        var deleteUrl = 'http://localhost:8080/Vriddhi/v1/'+moduleName+'?ids=';
        var cnt = 1;
        for(var i=0; i<ids.length; i++)
        {
            var id = ids[i];
            if(id!=null)
            {
                deleteUrl+=id;
            }
            if(cnt!=ids.length)
            {
                deleteUrl+=',';
            }
            cnt++;
        }
        return $.ajax({
        type: 'DELETE',
        url:deleteUrl
      });
    }
}
