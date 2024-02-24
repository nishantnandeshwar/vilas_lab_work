import { data_bio_chemistry, data_test } from './data.js';

function generatePDF() {
    const patientName = document.getElementById('patientName').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const referredBy = document.getElementById('referredBy').value;
    const date = document.getElementById('date').value;
    const labNo = document.getElementById('labNo').value;
    // Clone the additional rows table
    const tableClone = document.getElementById('additional-rows-table').cloneNode(true);

    // Loop through each row of the clone and remove the last cell (Delete Row column)
    const rows = tableClone.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const cellsHead = rows[i].getElementsByTagName('th');
        if (cellsHead.length > 0) {
            rows[i].removeChild(cellsHead[cellsHead.length - 1]);
        }
        if (cells.length > 0) {
            rows[i].removeChild(cells[cells.length - 1]);
        }
    }
    const template = `
                <html>
                <head>
                    <title>Patient Report</title>
                </head>
                <body style={{padding:'10px'}}>
                    <h1>Patient Report</h1>
                    <p><strong>Patient Name:</strong> ${patientName}</p>
                    <p><strong>Age:</strong> ${age}</p>
                    <p><strong>Gender:</strong> ${gender}</p>
                    <p><strong>Referred By:</strong> ${referredBy}</p>
                    <p><strong>Date:</strong> ${date}</p>
                    <p><strong>Lab No:</strong> ${labNo}</p>
                    <p>${tableClone.outerHTML}</p>
                </body>
                </html>
            `;
    console.log(template)
    // html2pdf().from(template).save();
}
document.getElementById('download-button').addEventListener('click', generatePDF);
// ******************************************************************************


function renderData(data, data1) {
    const container = document.getElementById('bio-chemistry-data');
    // Create a heading for the data
    const heading = document.createElement('h2');
    heading.textContent = data.title;
    container.appendChild(heading);

    // Create a main table to display the data
    const mainTable = document.createElement('table');
    mainTable.id = 'bio-chemistry-main-table';
    mainTable.style.borderCollapse = 'collapse';

    // Create table headers for main table
    const headerRowMain = document.createElement('tr');
    const headersMain = ['Title', 'Range', 'Enter Value'];
    headersMain.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        header.style.border = '1px solid #dddddd'; // Add border CSS property
        header.style.textAlign = 'left'; // Align text to left
        header.style.padding = '8px'; // Add padding
        headerRowMain.appendChild(header);
    });
    mainTable.appendChild(headerRowMain);

    // Loop through the mainData and create table rows with input fields in main table
    data.mainData.forEach(item => {
        const row = document.createElement('tr');

        const titleCell = document.createElement('td');
        titleCell.textContent = item.title;
        titleCell.style.border = '1px solid #dddddd'; // Add border CSS property
        titleCell.style.textAlign = 'left'; // Align text to left
        titleCell.style.padding = '8px'; // Add padding
        row.appendChild(titleCell);

        const rangeCell = document.createElement('td');
        rangeCell.textContent = item.range;
        rangeCell.style.border = '1px solid #dddddd'; // Add border CSS property
        rangeCell.style.textAlign = 'left'; // Align text to left
        rangeCell.style.padding = '8px'; // Add padding
        row.appendChild(rangeCell);

        const inputCell = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'text';
        input.style.border = '1px solid #dddddd'; // Add border CSS property
        input.style.textAlign = 'left'; // Align text to left
        input.style.padding = '8px'; // Add padding
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
    titleHeaderAdditional.style.border = '1px solid #dddddd'; // Add border CSS property
    titleHeaderAdditional.style.textAlign = 'left'; // Align text to left
    titleHeaderAdditional.style.padding = '8px'; // Add padding
    headerRowAdditional.appendChild(titleHeaderAdditional);

    const rangeHeaderAdditional = document.createElement('th');
    rangeHeaderAdditional.textContent = 'Range';
    rangeHeaderAdditional.style.border = '1px solid #dddddd'; // Add border CSS property
    rangeHeaderAdditional.style.textAlign = 'left'; // Align text to left
    rangeHeaderAdditional.style.padding = '8px'; // Add padding
    headerRowAdditional.appendChild(rangeHeaderAdditional);

    const valueHeaderAdditional = document.createElement('th');
    valueHeaderAdditional.textContent = 'Entered Value';
    valueHeaderAdditional.style.border = '1px solid #dddddd'; // Add border CSS property
    valueHeaderAdditional.style.textAlign = 'left'; // Align text to left
    valueHeaderAdditional.style.padding = '8px'; // Add padding
    headerRowAdditional.appendChild(valueHeaderAdditional);

    additionalTable.appendChild(headerRowAdditional);

    const deleteRow = document.createElement('th');
    deleteRow.textContent = 'Delete Row';
    deleteRow.style.border = '1px solid #dddddd'; // Add border CSS property
    deleteRow.style.textAlign = 'left'; // Align text to left
    deleteRow.style.padding = '8px'; // Add padding
    headerRowAdditional.appendChild(deleteRow);
    // Append the additional table to the container
    document.getElementById('additional-rows').appendChild(additionalTable);




    // *************************************************************************************************
    const container1 = document.getElementById('bio-chemistry-data1');
    // Create a heading for the data
    const heading1 = document.createElement('h2');
    heading1.textContent = data1.title;
    container1.appendChild(heading1);

    // Create a main table to display the data
    const mainTable1 = document.createElement('table');
    mainTable1.id = 'bio-chemistry-main-table1';
    mainTable1.style.borderCollapse = 'collapse';

    // Create table headers for main table
    const headerRowMain1 = document.createElement('tr');
    const headersMain1 = ['Title', 'Range', 'Enter Value'];
    headersMain1.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        header.style.border = '1px solid #dddddd'; // Add border CSS property
        header.style.textAlign = 'left'; // Align text to left
        header.style.padding = '8px'; // Add padding
        headerRowMain1.appendChild(header);
    });
    mainTable1.appendChild(headerRowMain1);

    // Loop through the mainData and create table rows with input fields in main table
    data1.mainData.forEach(item => {
        const row = document.createElement('tr');

        const titleCell = document.createElement('td');
        titleCell.textContent = item.title;
        titleCell.style.border = '1px solid #dddddd'; // Add border CSS property
        titleCell.style.textAlign = 'left'; // Align text to left
        titleCell.style.padding = '8px'; // Add padding
        row.appendChild(titleCell);

        const rangeCell = document.createElement('td');
        rangeCell.textContent = item.range;
        rangeCell.style.border = '1px solid #dddddd'; // Add border CSS property
        rangeCell.style.textAlign = 'left'; // Align text to left
        rangeCell.style.padding = '8px'; // Add padding
        row.appendChild(rangeCell);

        const inputCell = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'text';
        input.style.border = '1px solid #dddddd'; // Add border CSS property
        input.style.textAlign = 'left'; // Align text to left
        input.style.padding = '8px'; // Add padding
        inputCell.appendChild(input);
        row.appendChild(inputCell);

        mainTable1.appendChild(row);
    });

    // Append the main table to the container
    container1.appendChild(mainTable1);

    // Create a separate table to display entered values
    const additionalTable1 = document.createElement('table');
    additionalTable1.id = 'additional-rows-table1';

    // Create table headers for additional table
    const headerRowAdditional1 = document.createElement('tr');
    const titleHeaderAdditional1 = document.createElement('th');
    titleHeaderAdditional1.textContent = 'Title';
    titleHeaderAdditional1.style.border = '1px solid #dddddd'; // Add border CSS property
    titleHeaderAdditional1.style.textAlign = 'left'; // Align text to left
    titleHeaderAdditional1.style.padding = '8px'; // Add padding
    headerRowAdditional1.appendChild(titleHeaderAdditional1);

    const rangeHeaderAdditional1 = document.createElement('th');
    rangeHeaderAdditional1.textContent = 'Range';
    rangeHeaderAdditional1.style.border = '1px solid #dddddd'; // Add border CSS property
    rangeHeaderAdditional1.style.textAlign = 'left'; // Align text to left
    rangeHeaderAdditional1.style.padding = '8px'; // Add padding
    headerRowAdditional1.appendChild(rangeHeaderAdditional1);

    const valueHeaderAdditional1 = document.createElement('th');
    valueHeaderAdditional1.textContent = 'Entered Value';
    valueHeaderAdditional1.style.border = '1px solid #dddddd'; // Add border CSS property
    valueHeaderAdditional1.style.textAlign = 'left'; // Align text to left
    valueHeaderAdditional1.style.padding = '8px'; // Add padding
    headerRowAdditional1.appendChild(valueHeaderAdditional1);

    additionalTable1.appendChild(headerRowAdditional1);

    const deleteRow1 = document.createElement('th');
    deleteRow1.textContent = 'Delete Row';
    deleteRow1.style.border = '1px solid #dddddd'; // Add border CSS property
    deleteRow1.style.textAlign = 'left'; // Align text to left
    deleteRow1.style.padding = '8px'; // Add padding
    headerRowAdditional1.appendChild(deleteRow1);
    // Append the additional table to the container
    document.getElementById('additional-rows1').appendChild(additionalTable1);
}
renderData(data_bio_chemistry,data_test)



// document.getElementById('review-details').addEventListener('click', addRow);
// function addRow() {
//     const mainTable = document.getElementById('bio-chemistry-main-table');
//     const rows = mainTable.getElementsByTagName('tr');

//     // Loop through each row and check if the input box is not empty
//     for (let i = 1; i < rows.length; i++) {
//         const input = rows[i].getElementsByTagName('input')[0];
//         if (input.value.trim() !== '') {
//             // If input box is not empty, get the title, range, and entered value
//             const title = rows[i].getElementsByTagName('td')[0].textContent;
//             const range = rows[i].getElementsByTagName('td')[1].textContent;
//             const value = input.value.trim();

//             // Create a new row for additional table with the title, range, and entered value
//             const newRow = document.createElement('tr');
//             const titleCell = document.createElement('td');
//             titleCell.textContent = title;
//             titleCell.style.border = '1px solid #dddddd'; // Add border CSS property
//             titleCell.style.textAlign = 'left'; // Align text to left
//             titleCell.style.padding = '8px'; // Add padding
//             newRow.appendChild(titleCell);

//             const rangeCell = document.createElement('td');
//             rangeCell.textContent = range;
//             rangeCell.style.border = '1px solid #dddddd'; // Add border CSS property
//             rangeCell.style.textAlign = 'left'; // Align text to left
//             rangeCell.style.padding = '8px'; // Add padding
//             newRow.appendChild(rangeCell);

//             const valueCell = document.createElement('td');
//             valueCell.textContent = value;
//             valueCell.style.border = '1px solid #dddddd'; // Add border CSS property
//             valueCell.style.textAlign = 'left'; // Align text to left
//             valueCell.style.padding = '8px'; // Add padding
//             newRow.appendChild(valueCell);

//             // Create a delete button for the row
//             const deleteButtonCell = document.createElement('td');
//             const deleteButton = document.createElement('button');
//             deleteButton.textContent = 'X';

//             deleteButton.addEventListener('click', function () {
//                 newRow.parentNode.removeChild(newRow); // Remove the clicked row
//             });
//             deleteButtonCell.appendChild(deleteButton);
//             newRow.appendChild(deleteButtonCell);

//             // Append the new row to the additional table
//             document.getElementById('additional-rows-table').appendChild(newRow);
//             // Clear the input box in the main table
//             input.value = '';
//         }
//     }
// }