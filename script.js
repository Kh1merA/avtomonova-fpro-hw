function generateList(list_array){
    let list_elem = document.createElement('ul');
    list_elem.classList.add('list');

    let array_counter = 1;

    list_array.forEach(item => {
        let list_li = document.createElement('li');
        if(Array.isArray(item)){
            let array_ul = document.createElement('ul');
            item.forEach(item => {
                let array_li = document.createElement('li');
                array_li.textContent = array_counter + '.' + item.toString();
                array_ul.append(array_li);
            })
            array_counter++;
            list_li.append(array_ul);
        }
        else if (String(typeof(item)) === 'number'){
            list_li.textContent = item.toString();
        }
        else{
            list_li.textContent = 'Incorrect info';
        }
        list_elem.append(list_li);
    });

    document.getElementsByClassName('wrapper')[0].append(list_elem);
}


let list_array = [1, [1,2,3], 3, 4, [1, 2, 3]];

generateList(list_array);


