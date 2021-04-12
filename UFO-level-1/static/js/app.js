// from data.js
var tableData = data;

function generateTable(table, d) {
  for (let element of d) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector("table");
generateTable(table, tableData);

function getInputValue(){
    var inputVal = document.getElementById("myInput").value;

	var dateTime = [];

	for (var i = 0; i < tableData.length; i++) {
		if (tableData[i]["datetime"] === inputVal) {
			dateTime.push(tableData[i]);
		}
	}
	
	var elmtTable = document.getElementById('ufo-table');
	var tableRows = elmtTable.getElementsByTagName('tr');
	var rowCount = tableRows.length;

	for (var x=rowCount-1; x>0; x--) {
	table.deleteRow(x);
	}

	let newTable = document.querySelector("table");
	generateTable(newTable, dateTime);
}