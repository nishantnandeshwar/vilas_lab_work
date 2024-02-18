// JavaScript for page1.html
console.log("Script for page1.html loaded");


document.addEventListener("DOMContentLoaded", function () {
    var jsonData = {
        "table": [
            { "Column1": "Row1Data1", "Column2": "Row1Data2", "Column3": "Row1Data3", },
            { "Column1": "Row1Data1", "Column2": "Row1Data2", "Column3": "Row1Data3", },
            { "Column1": "Row1Data1", "Column2": "Row1Data2", "Column3": "Row1Data3", },
            { "Column1": "Row2Data1", "Column2": "Row2Data2", "Column3": "Row2Data3", },
            { "Column1": "Row2Data1", "Column2": "Row2Data2", "Column3": "Row2Data3", },
            { "Column1": "Row2Data1", "Column2": "Row2Data2", "Column3": "Row2Data3", },
            { "Column1": "Row3Data1", "Column2": "Row3Data2", "Column3": "Row3Data3", },
            { "Column1": "Row3Data1", "Column2": "Row3Data2", "Column3": "Row3Data3", },
            { "Column1": "Row3Data1", "Column2": "Row3Data2", "Column3": "Row3Data3", },
            { "Column1": "Row4Data1", "Column2": "Row4Data2", "Column3": "Row4Data3", },
            { "Column1": "Row4Data1", "Column2": "Row4Data2", "Column3": "Row4Data3", },
            { "Column1": "Row4Data1", "Column2": "Row4Data2", "Column3": "Row4Data3", },
            { "Column1": "Row5Data1", "Column2": "Row5Data2", "Column3": "Row5Data3", },
            { "Column1": "Row6Data1", "Column2": "Row6Data2", "Column3": "Row6Data3", }
        ]
    };

    var tableBody = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    console.log(tableBody)
    if (tableBody) {
        // Loop through jsonData and populate the table
        for (var i = 0; i < jsonData.table.length; i++) {
            var row = tableBody.insertRow(i);

            for (var key in jsonData.table[i]) {
                var cell = row.insertCell();
                cell.innerHTML = jsonData.table[i][key];
            }
        }
    } else {
        console.error("Table body not found.");
    }
});
