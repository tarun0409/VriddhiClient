$(document).ready(function(){

  var getAllItems = getItems(null);
  getAllItems.done(function(itemData){
      if(itemData!=null)
      {
          displayItemsSelectList('#itemSelect',itemData);
      }
  });


});
