var postContacts = function(contacts){
    if(contacts!=null)
    {
        var contactObj = new Object();
        contactObj["contacts"] = contacts;
        return $.ajax({
        type: 'post',
        url:'http://localhost:8080/Vriddhi/v1/contacts',
        data: JSON.stringify(contactObj),
        contentType: 'application/json',
        dataType: 'json'
      });
    }
}
