$(document).ready(function(){
    var contactId = localStorage.getItem("updateRecordId");
    var contactIdArray = new Array();
    contactIdArray.push(contactId);
    var getOneContactById = getRecordsByIds("contacts",contactIdArray, null);
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
