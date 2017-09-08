$(document).ready(function(){
    var contactId = localStorage.getItem("updateContactId");
    var getOneContactById = getContactsByIds(contactId, null);
    getOneContactById.done(function(contactData){
        if(contactData!=null)
        {
            var contactArray = contactData["contacts"];
            var contactObj = contactArray[0];
            var contactFieldToTagIdMap = {
                "Contact Name":"#contactName",
                "Primary Phone":"#primaryPhone",
                "Secondary Phone":"#secondaryPhone",
                "Email":"#email",
                "Primary Address":"#primaryAddress",
                "Secondary Address":"#secondaryAddress"
            };
            for(var i=0; i<contactHeaders.length; i++)
            {
                var contactHeader = contactHeaders[i];
                var value = contactObj[contactHeader];
                if(value!=null)
                {
                    var tagId = contactFieldToTagIdMap[contactHeader];
                    $(tagId).attr("placeholder",value);
                }
            }
        }
    });
});
var updateContact = function()  {
    var contactObj = getContactUpdateObjectFromUI('#contactName','#primaryPhone','#secondaryPhone','#email','#primaryAddress','#secondaryAddress');
    var contacts = new Array();
    contacts.push(contactObj);
    var cntId = localStorage.getItem("updateContactId");
    var updateOneContact = putContact(cntId,contacts);
    updateOneContact.done(function(response){
        if(response!=null)
        {
            status = response["status"];
            if(status=="SUCCESS")
            {
                alert("Contact updated successfully!");
                window.location.replace("../Contact.html");
            }
        }
    });
}
