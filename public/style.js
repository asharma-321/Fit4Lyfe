$(function(){
  var element = $("#show-data");
  $.getJSON("comments.json", function(data){
    console.log(data);
    for(let i = 0; i<data.length; i++){
      element.append('<div>'+ data[i]['name']+':</div>'+data[i]['comment']);
    }
  });
});
