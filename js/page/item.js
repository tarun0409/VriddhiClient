$(document).ready(function(){

  var getAllItems = getItems(null);
  getAllItems.done(function(itemData){
      if(itemData!=null)
      {
          displayItemsSelectList('#itemSelect',itemData);
      }
  });


});

var startUpdateProcess = function(itemSelectListId)
{
    var selectedItem = $(itemSelectListId).val();
    if(selectedItem!=null && selectedItem.length==1)
    {
        localStorage.setItem("updateItemId",selectedItem[0]);
        window.location.href = 'modals/ItemUpdate.html';
    }
}
