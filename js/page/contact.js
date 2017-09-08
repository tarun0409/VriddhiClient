$(document).ready(function(){

  var getAllContacts = getContacts(null);
  getAllContacts.done(function(contactData){
      if(contactData!=null)
      {
          displayContactsSelectList('#contactSelect',contactData);
      }
  });


});

var startUpdateProcess = function(contactSelectListId)
{
    var selectedContact = $(contactSelectListId).val();
    if(selectedContact!=null && selectedContact.length==1)
    {
        localStorage.setItem("updateContactId",selectedContact[0]);
        window.location.href = 'modals/ContactUpdate.html';
    }
}
