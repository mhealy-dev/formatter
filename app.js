$(document).ready(function () {
  let formatted = "";

  function toggleButtons() {
    const dataLength = $("#data").val().trim().length;
    $("#copy").prop("disabled", dataLength === 0);
    $("#clear").prop("disabled", dataLength === 0);
  }

  $("#inp").click(function () {
    let delimiter = $("#delimiter").val().trim();
    if (!delimiter) {
      delimiter = "'";
    }
    let isQuote = delimiter === "'" || delimiter === '"';
    let data = $("#data").val().trim();
    let rows = data.split("\n");

    if (isQuote) {
      formatted = rows
        .map((row) => `${delimiter}${row.trim()}${delimiter},`)
        .join("\n")
        .slice(0, -1);
    } else {
      formatted =
        rows.map((row) => row.trim()).join(` ${delimiter} \n`) +
        (rows.length > 1 ? ` ${delimiter}` : "");
    }

    if (rows.length > 1 || rows[0] !== "") {
      $("#data").val(formatted);
      toggleButtons();
    } else {
      alert("Please enter some text!");
    }
  });

  $("#copy").click(function () {
    navigator.clipboard.writeText($("#data").val()).then(() => {
      alert("Text copied to clipboard!");
    });
  });

  // Clear button functionality
  $("#clear").click(function () {
    $("#data").val("");
    toggleButtons();
  });

  $("#data").keyup(toggleButtons);

  toggleButtons();
});
