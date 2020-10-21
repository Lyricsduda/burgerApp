
// Button to swap between eaten and havve not eaten
$(function () {
  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");
    var newdevour = $(this).data("newdevour");

    var newdevourState = {
      devoured: newdevour
    };

    // Put request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newdevourState
    }).then(
      function () {
        console.log("changed devoured to", newdevour);

        location.reload();
      }
    );
  });

  // Form submit to add a burger
  $(".create-form").on("submit", function (event) {

    event.preventDefault();

    var newburger = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Post request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newburger
    }).then(
      function () {
        console.log("created new burger");

        location.reload();
      }
    );
  });

  // Button to delete a burger
  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Delete request
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burger", id);

        location.reload();
      }
    );
  });
});
