$(document).ready(function(){

  var getAllContacts = getRecords("contacts",null);
  getAllContacts.done(function(contactData){
      if(contactData!=null)
      {
          displayRecordsSelectList("contacts",'#contactSelect',contactData);
      }
  });
});
