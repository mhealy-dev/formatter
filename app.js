let formatted = "";

$("#inp").bind("click", function () {
  let data = $("#data").val().trim();
  let rows = data.split("\n");
  formatted = "";

  if (rows.length > 1) {
    rows.forEach(function (r) {
      formatted += `'${r.trim()}',\n`;
    });

    $("#data").val(formatted.slice(0, -2));
    $("#copy").prop("disabled", false);
  } else {
    alert("Enter more values!");
  }
});

$("#copy").bind("click", function () {
  navigator.clipboard.writeText(formatted.slice(0, -2));
  $("#data").val("");
  $("#copy").prop("disabled", true);
});
