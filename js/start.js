$(document).ready(function()
{
  $.get("http://localhost:8080/Vriddhi/v1/authentication", function(data, status){

      status = data["status"]
      if(status=="authenticated")
      {
        window.location.replace("html/dummy.html");
      }
      else
      {
        window.location.replace("html/Login.html");
      }
});

});
