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
