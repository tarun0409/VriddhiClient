$(document).ready(function(){

  var getAllItems = getRecords("items",null);
  getAllItems.done(function(itemData){
      if(itemData!=null)
      {
          displayRecordsSelectList("items",'#itemSelect',itemData);
      }
  });
});
