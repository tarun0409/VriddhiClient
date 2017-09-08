var getContactObjectFromUI = function(nameId, primaryPhoneId, secondaryPhoneId, emailId, primaryAddressId, secondaryAddressId) {
      var contactObj = new Object();
      if(nameId!=null)
      {
          var value = $(nameId).val();
          if(value!=null && value!="")
          {
              contactObj["Contact Name"] = value;
          }
      }
      if(primaryPhoneId!=null)
      {
          var value = $(primaryPhoneId).val();
          if(value!=null && value!="")
          {
              contactObj["Primary Phone"] = value;
          }
      }
      if(secondaryPhoneId!=null)
      {
          var value = $(secondaryPhoneId).val();
          if(value!=null && value!="")
          {
              contactObj["Secondary Phone"] = value;
          }
      }
      if(emailId!=null)
      {
          var value = $(emailId).val();
          if(value!=null && value!="")
          {
              contactObj["Email"] = value;
          }
      }
      if(primaryAddressId!=null)
      {
          var value = $(primaryAddressId).val();
          if(value!=null && value!="")
          {
              contactObj["Primary Address"] = value;
          }
      }
      if(secondaryAddressId!=null)
      {
          var value = $(secondaryAddressId).val();
          if(value!=null && value!="")
          {
              contactObj["Secondary Address"] = value;
          }
      }
      return contactObj;
}

var getContactUpdateObjectFromUI = function(nameId, primaryPhoneId, secondaryPhoneId, emailId, primaryAddressId, secondaryAddressId) {
      var contactObj = new Object();
      if(nameId!=null)
      {
          var phValue = $(nameId).attr('placeholder');
          var value = $(nameId).val();
          if(value!=null && value!="" && (phValue!=value))
          {
              contactObj["Contact Name"] = value;
          }
      }
      if(primaryPhoneId!=null)
      {
          var phValue = $(primaryPhoneId).attr('placeholder');
          var value = $(primaryPhoneId).val();
          if(value!=null && value!="" && (phValue!=value))
          {
              contactObj["Primary Phone"] = value;
          }
      }
      if(secondaryPhoneId!=null)
      {
          var phValue = $(secondaryPhoneId).attr('placeholder');
          var value = $(secondaryPhoneId).val();
          if(value!=null && value!="" && (phValue!=value))
          {
              contactObj["Secondary Phone"] = value;
          }
      }
      if(emailId!=null)
      {
          var phValue = $(emailId).attr('placeholder');
          var value = $(emailId).val();
          if(value!=null && value!="" && (phValue!=value))
          {
              contactObj["Email"] = value;
          }
      }
      if(primaryAddressId!=null)
      {
          var phValue = $(primaryAddressId).attr('placeholder');
          var value = $(primaryAddressId).val();
          if(value!=null && value!="" && (phValue!=value))
          {
              contactObj["Primary Address"] = value;
          }
      }
      if(secondaryAddressId!=null)
      {
          var phValue = $(secondaryAddressId).attr('placeholder');
          var value = $(secondaryAddressId).val();
          if(value!=null && value!="" && (phValue!=value))
          {
              contactObj["Secondary Address"] = value;
          }
      }


      return contactObj;
}

var deleteContactsByIds = function(contactSelectListId){
    var selectedContacts = $(contactSelectListId).val();
    var deleteContactsByGivenIds = deleteContacts(selectedContacts);
    deleteContactsByGivenIds.done(function(response){
        if(response!=null)
        {
            var status = response["status"];
            if(status=="SUCCESS")
            {
                alert("Contacts deleted successfully!");
                window.location.reload();
            }
        }
    });
}
