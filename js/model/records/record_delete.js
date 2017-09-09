var deleteRecordsByIds = function(moduleName,recordSelectListId){
    var selectedRecords = $(recordSelectListId).val();
    var deleteRecordsByGivenIds = deleteRecords(moduleName,selectedRecords);
    deleteRecordsByGivenIds.done(function(response){
        if(response!=null)
        {
            var status = response["status"];
            if(status=="SUCCESS")
            {
                alert("Records deleted successfully!");
                window.location.reload();
            }
        }
    });
}
