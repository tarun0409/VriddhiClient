$(document).ready(function(){

  var getAllContacts = getContacts(null);
  getAllContacts.done(function(contactData){
      if(contactData!=null)
      {
          displayContactsSelectList('#contactSelect',contactData);
      }
  });


});
