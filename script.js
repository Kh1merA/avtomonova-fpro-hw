//Create table
let table = document.createElement('table');
table.classList.add('table');

let counter = 1; // to fill table

for(let i = 0; i < 10; i++){
    let row = document.createElement('tr'); //create row
    for(let j = 0; j < 10; j++){
        let cell = document.createElement('td'); //create cell
        cell.textContent = counter.toString();
        counter++;
        row.append(cell);
    }
    table.append(row);
}

//Add table to wrapper
document.getElementsByClassName('wrapper')[0].append(table);