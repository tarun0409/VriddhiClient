$(document).ready(function(){

  var getAllContacts = getRecords("contacts",null);
  getAllContacts.done(function(contactData){
      if(contactData!=null)
      {
          displayRecordsSelectList("contacts",'#contactSelect',contactData);
      }
      else
      {
          $("#noRecordsShow").append('<h4 class="noRecordsText"> There are no contacts to show</h4>');
          $("#contactEditButton").hide();
          $("#contactSelect").hide();
      }
  });
});
