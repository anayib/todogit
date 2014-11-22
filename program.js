$(document).ready(function(){
  var endpoint = "http://makeitreal-todo.herokuapp.com/todo_items"

  //Get all todos
  $.ajax({
    type: "GET",
    url: endpoint,
    success: function(result){

      $.each(result, function(index, content){
        var el = $("<li class='todo' data-id='"+content.id+"'>\
                  <input type='checkbox'><label>"+content.title+"</label>\
                  <div class='equis'>X</div>\
                  </li>");
        $(".todo-list").append(el);
        if(content.done){
          el.find("input").prop("checked", true);
        }

      });

    }
  });


  //Updating ToDo List, Done!
  $(".todo-list").on("change", "input[type=checkbox]", function(){
    var status = this.checked
    var data = JSON.stringify({done: status});
    var id = $(this).closest(".todo").data("id");
    var endpoint_id = endpoint + "/" + id;
    console.log(data);
    $.ajax({
          type: "PATCH",
          url: endpoint_id,
          data: data,
          contentType: "application/json"
       });
  });


$('.todo-list').on('click','.equis',function(){
var este = $(this).closest('li');
var url = 'http://makeitreal-todo.herokuapp.com/todo_items/' + $(this).closest('li').data('id');
$.ajax(url,{
type: 'DELETE',
success: function(res){
  este.remove();
},
error: function(res){
  alert('Error, no se realizo el borrado');
}

});

});

	
});
