$(document).ready(function (params) {
  $("#delete").on("click", function (e) {
    $target = $(e.target);
    let dataID = $target.attr("data-id");
    // console.log(data);
    $.ajax({
      type: "DELETE",
      url: "/student/" + dataID,
      success: function (response) {
        alert("Student data deleted");
        window.location.href = "/student/";
      },
      error: function (err) {
        console.log(err);
      },
    });
  });
});
