var insertContact = function() {
    var contactObj = getContactObjectFromUI('#contactName','#primaryPhone','#secondaryPhone','#email','#primaryAddress','#secondaryAddress');
    var contacts = new Array();
    contacts.push(contactObj);
    var insertOneContact = postContacts(contacts);
    insertOneContact.done(function(response){
        if(response!=null)
        {
            status = response["status"];
            if(status=="SUCCESS")
            {
                alert("Contact inserted successfully!");
                window.location.replace("../Contact.html");
            }
        }
    });
}
