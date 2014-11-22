$(document).ready(function(){
  var endpoint = "http://makeitreal-todo.herokuapp.com/todo_items"
  
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


})
