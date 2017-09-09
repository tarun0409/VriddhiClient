var loginSubmit = function() {

    var values = $("#loginForm").serializeArray();
    authObj = new Object();
    for(i=0; i<values.length; i++)
    {
      formField = values[i];
      authObj[formField.name]=formField.value;
    }
    $.ajax({
    type: 'post',
    url:'http://localhost:8080/Vriddhi/v1/authentication',
    data: JSON.stringify(authObj),
    contentType: 'application/json',
    dataType: 'json',
    success: authCallBack,
    error: authCallBack
  });
}

var authCallBack = function(resp)
{
    if(resp["status"]=="SUCCESS")
    {
      window.location.replace("Welcome.html");
    }
}
