import { data_bio_chemistry, data_test } from './data.js';

function generatePDF() {
    const patientName = document.getElementById('patientName').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const referredBy = document.getElementById('referredBy').value;
    const date = document.getElementById('date').value;
    const labNo = document.getElementById('labNo').value;
    const sampleTable = document.getElementById('additional-rows-table')
    const template = `
                <html>
                <head>
                    <title>Patient Report</title>
                </head>
                <body>
                    <h1>Patient Report</h1>
                    <p><strong>Patient Name:</strong> ${patientName}</p>
                    <p><strong>Age:</strong> ${age}</p>
                    <p><strong>Gender:</strong> ${gender}</p>
                    <p><strong>Referred By:</strong> ${referredBy}</p>
                    <p><strong>Date:</strong> ${date}</p>
                    <p><strong>Lab No:</strong> ${labNo}</p>
                    <p>${sampleTable.outerHTML}</p>
                </body>
                </html>
            `;

    html2pdf().from(template).save();
}
document.getElementById('download-button').addEventListener('click', generatePDF);
// ******************************************************************************


function renderData(data) {
    const container = document.getElementById('bio-chemistry-data');
    // Create a heading for the data
    const heading = document.createElement('h2');
    heading.textContent = data.title;
    container.appendChild(heading);

    // Create a main table to display the data
    const mainTable = document.createElement('table');
    mainTable.id = 'bio-chemistry-main-table';

    // Create table headers for main table
    const headerRowMain = document.createElement('tr');
    const titleHeaderMain = document.createElement('th');
    titleHeaderMain.textContent = 'Title';
    headerRowMain.appendChild(titleHeaderMain);
    const rangeHeaderMain = document.createElement('th');
    rangeHeaderMain.textContent = 'Range';
    headerRowMain.appendChild(rangeHeaderMain);
    const inputHeaderMain = document.createElement('th');
    inputHeaderMain.textContent = 'Enter Value';
    headerRowMain.appendChild(inputHeaderMain);
    mainTable.appendChild(headerRowMain);

    // Loop through the mainData and create table rows with input fields in main table
    data.mainData.forEach(item => {
        const row = document.createElement('tr');

        const titleCell = document.createElement('td');
        titleCell.textContent = item.title;
        row.appendChild(titleCell);

        const rangeCell = document.createElement('td');
        rangeCell.textContent = item.range;
        row.appendChild(rangeCell);

        const inputCell = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'text';
        inputCell.appendChild(input);
        row.appendChild(inputCell);

        mainTable.appendChild(row);
    });

    // Append the main table to the container
    container.appendChild(mainTable);

    // Create a separate table to display entered values
    const additionalTable = document.createElement('table');
    additionalTable.id = 'additional-rows-table';

    // Create table headers for additional table
    const headerRowAdditional = document.createElement('tr');
    const titleHeaderAdditional = document.createElement('th');
    titleHeaderAdditional.textContent = 'Title';
    headerRowAdditional.appendChild(titleHeaderAdditional);
    const rangeHeaderAdditional = document.createElement('th');
    rangeHeaderAdditional.textContent = 'Range';
    headerRowAdditional.appendChild(rangeHeaderAdditional);
    const valueHeaderAdditional = document.createElement('th');
    valueHeaderAdditional.textContent = 'Entered Value';
    headerRowAdditional.appendChild(valueHeaderAdditional);
    additionalTable.appendChild(headerRowAdditional);

    const deleteRow = document.createElement('th');
    deleteRow.textContent = 'Delete Row';
    headerRowAdditional.appendChild(deleteRow);
    // Append the additional table to the container
    document.getElementById('additional-rows').appendChild(additionalTable);
}
renderData(data_bio_chemistry)


document.getElementById('review-details').addEventListener('click', addRow);
function addRow() {
    console.log("addRow called")
    const mainTable = document.getElementById('bio-chemistry-main-table');
    const rows = mainTable.getElementsByTagName('tr');

    // Loop through each row and check if the input box is not empty
    for (let i = 1; i < rows.length; i++) {
        const input = rows[i].getElementsByTagName('input')[0];
        if (input.value.trim() !== '') {
            // If input box is not empty, get the title, range, and entered value
            const title = rows[i].getElementsByTagName('td')[0].textContent;
            const range = rows[i].getElementsByTagName('td')[1].textContent;
            const value = input.value.trim();

            // Create a new row for additional table with the title, range, and entered value
            const newRow = document.createElement('tr');
            const titleCell = document.createElement('td');
            titleCell.textContent = title;
            newRow.appendChild(titleCell);
            const rangeCell = document.createElement('td');
            rangeCell.textContent = range;
            newRow.appendChild(rangeCell);
            const valueCell = document.createElement('td');
            valueCell.textContent = value;
            newRow.appendChild(valueCell);

            // Create a delete button for the row
            const deleteButtonCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';

            deleteButton.addEventListener('click', function() {
                newRow.parentNode.removeChild(newRow); // Remove the clicked row
            });
            deleteButtonCell.appendChild(deleteButton);
            newRow.appendChild(deleteButtonCell);

            // Append the new row to the additional table
            document.getElementById('additional-rows-table').appendChild(newRow);
            // Clear the input box in the main table
            input.value = '';
        }
    }
}

function getTableWithoutDeleteColumn() {
    // Clone the additional rows table
    const tableClone = document.getElementById('additional-rows-table').cloneNode(true);
    
    // Loop through each row of the clone and remove the last cell (Delete Row column)
    const rows = tableClone.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        if (cells.length > 0) {
            rows[i].removeChild(cells[cells.length - 1]);
        }
    }
    console.log("tableClone>>",tableClone)
    return tableClone;
}

document.getElementById('review-details-final').addEventListener('click', getTableWithoutDeleteColumn);