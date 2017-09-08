var putContact = function(id, contacts){
    if(contacts!=null)
    {
        var putUrl = 'http://localhost:8080/Vriddhi/v1/contacts/'+id;
        var contactObj = new Object();
        contactObj["contacts"] = contacts;
        return $.ajax({
        type: 'PUT',
        url:putUrl,
        data: JSON.stringify(contactObj),
        contentType: 'application/json',
        dataType: 'json'
      });
    }
}
