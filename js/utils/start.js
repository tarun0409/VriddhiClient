$(document).ready(function()
{
  $('#myModal').modal({ show: false})
  $.get("http://localhost:8080/Vriddhi/v1/authentication", function(data, status){

      status = data["status"]
      if(status=="authenticated")
      {
        window.location.replace("view/Welcome.html");
      }
      else
      {
        $('#loginModal').modal('show');
      }
});

});
