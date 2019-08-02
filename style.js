
//var jsontext = '{';

function addcomment(){
  var name = document.getElementById('username').value;
  var comment = document.getElementById('usercomment').value;

  console.log(name);
  console.log(comment);

  //jsontext += '"' + name + '":' + '"' + comment + ""
  document.getElementById("usernameoutput").innerHTML = name;
  document.getElementById("usercommentoutput").innerHTML = comment;
  senddata(name, comment);
}

function senddata(name, comment){
  $.ajax({
    type: 'post',
    url: 'comments.json',
    data:{ 'data=': name},
    success: function(result){},
    error: function(error){
      console.log("ERROR");
    }
  });
}

$(document).ready(function(){
  $('#get-data').click(function(){
    var showData = $('#show-data');

      $.getJSON('comments.json', function(data){
        console.log(data);

        var items = data.items.map(function(item){
          return item.key + ': ' + item.value;
        });

        showData.empty();

        if(items.length){
          var content = '<li>' + items.join('</li><li>') + '</li>';
          var list = $('<ul />').html(content);
          showData.append(list);
        }
      });
      showData.text('Loading the JSON file');
  });
});
