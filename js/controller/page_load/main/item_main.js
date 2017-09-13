$(document).ready(function(){

  var getAllItems = getRecords("items",null);
  getAllItems.done(function(itemData){
      if(itemData!=null)
      {
          displayRecordsSelectList("items",'#itemSelect',itemData);
      }
      else
      {
          $("#noRecordsShow").append('<h4 class="noRecordsText"> There are no items to show</h4>');
          $("#itemEditButton").hide();
          $("#itemSelect").hide();
      }
  });
});
