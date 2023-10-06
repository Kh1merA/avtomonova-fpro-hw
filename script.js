//Create product data
let shopList = [{
    categoryName: 'Fruits',
    productsList: [{
        productName: 'Apples',
        productImg: 'img/apple.jpg',
        productPrice: '44$',
        productAmount: 1,
        productDate: '',
        productInfo: 'Apples are a popular and widely consumed fruit known for their sweet and crisp flavor. They come in various colors, including red, green, and yellow, and there are numerous apple varieties, each with its own taste and texture. Apples are a rich source of vitamins, particularly vitamin C, dietary fiber, and various antioxidants. They are a versatile fruit and can be eaten fresh, used in cooking, baking, or juicing, and are often used to make applesauce, apple pies, and cider. Apples are not only delicious but also have several health benefits, such as promoting heart health, aiding digestion, and providing essential nutrients.'
    },{
        productName: 'Peaches',
        productImg: 'img/peach.jpg',
        productPrice: '40$',
        productAmount: 1,
        productDate: '',
        productInfo: 'Peaches are a delicious and juicy fruit known for their sweet and slightly tangy flavor. They have a fuzzy skin that can range in color from yellow to orange and often have a round or slightly flattened shape with a central pit or stone. Peaches are a rich source of vitamins, particularly vitamin C and vitamin A, as well as dietary fiber. They are a popular summer fruit and can be enjoyed fresh, sliced, or added to various culinary dishes such as pies, cobblers, jams, and preserves. Peaches are not only tasty but also offer potential health benefits, including support for skin health, immune function, and digestion due to their nutrient content.'
    },{
        productName: 'Oranges',
        productImg: 'img/orange.jpg',
        productPrice: '35$',
        productAmount: 1,
        productDate: '',
        productInfo: 'Oranges are a widely consumed citrus fruit known for their sweet and tangy flavor. They typically have a bright orange or orange-yellow hue and are often segmented into juicy, pulpy sections. Oranges are an excellent source of vitamin C, which is essential for immune health, as well as other essential nutrients like dietary fiber and potassium. They are known for their refreshing taste and versatility.'
    }],
    categoryImg: 'img/fruits.jpg'
},{
    categoryName: 'Vegetables',
    productsList: [{
        productName: 'Tomatoes',
        productImg: 'img/tomato.jpg',
        productPrice: '38$',
        productAmount: 1,
        productDate: '',
        productInfo: 'Tomatoes are a versatile and widely consumed fruit that is often treated as a vegetable in culinary contexts. They are known for their juicy, slightly sweet, and tangy flavor. Tomatoes come in various sizes, shapes, and colors, including red, yellow, and green. '
    },{
        productName: 'Corn',
        productImg: 'img/corn.jpg',
        productPrice: '33$',
        productAmount: 1,
        productDate: '',
        productInfo: 'Corn, scientifically known as Zea mays, is a cereal grain and one of the most widely cultivated and consumed crops globally. It has a rich history dating back thousands of years and is an essential staple food in many cultures.'
    },{
        productName: 'Pepper',
        productImg: 'img/pepper.jpg',
        productPrice: '45$',
        productAmount: 1,
        productDate: '',
        productInfo: '\n' +
            'Pepper refers to various plants and their dried fruits or berries that are used as spices and flavorings in culinary dishes. There are different types of pepper, the most common being black pepper, white pepper, and red pepper (cayenne pepper).'
    }],
    categoryImg: 'img/vegetables.jpg'
},{
    categoryName: 'Berries',
    productsList: [{
        productName: 'Cherries',
        productImg: 'img/cherry.jpg',
        productPrice: '24$',
        productAmount: 1,
        productDate: '',
        productInfo: 'Cherries are small, round, and often brightly colored fruits that are enjoyed for their sweet and tart flavor. They belong to the Prunus genus and are closely related to other stone fruits like plums, peaches, and apricots.'
    },{
        productName: 'Grapes',
        productImg: 'img/grapes.jpg',
        productPrice: '50$',
        productAmount: 1,
        productDate: '',
        productInfo: 'Grapes are small, round, and typically juicy fruits that grow in clusters on grapevines, which belong to the genus Vitis. Grapes are well-known for their sweet and sometimes tart flavor. '
    },{
        productName: 'Currant',
        productImg: 'img/currant.jpg',
        productPrice: '43$',
        productAmount: 1,
        productDate: '',
        productInfo: 'Currants are small, round, and edible berries that belong to the Ribes genus. These berries are known for their tart and slightly sweet flavor. There are three main types of currants: black currants (Ribes nigrum), red currants (Ribes rubrum), and white currants (a variant of red currants). '
    }],
    categoryImg: 'img/berries.jpg'
}];

//Init html blocks
let mainTitle = document.getElementsByClassName('main-content__category')[0];
let mainContent = document.getElementsByClassName('main-content__items')[0];
let sideBar = document.getElementsByClassName('sidebar-menu__items')[0];
let infoBarName = document.getElementsByClassName('product-name')[0];
let infoBarDesc = document.getElementsByClassName('product-description')[0];
let infoBar = document.getElementsByClassName('button-wrapper')[0];


//Show product's categories
function showCategories(){
    document.querySelector('#page-title').innerHTML = 'Categories';

    //Clean all page
    sideBar.innerHTML = '';
    mainContent.innerHTML = '';
    mainTitle.innerHTML = '';
    infoBarDesc.textContent = '';
    infoBarName.textContent = '';
    infoBar.innerHTML = '';

    shopList.forEach(item => {
        let product = document.createElement('button');
        product.textContent = item.categoryName;
        product.style.backgroundImage = `url(${item.categoryImg})`;
        product.classList.add('category');

        //Show products of chosen category
        product.addEventListener('click', () => {
            mainContent.innerHTML = '';
            infoBarDesc.textContent = '';
            infoBarName.textContent = '';
            infoBar.innerHTML = '';

            mainTitle.textContent = item.categoryName;
            showProducts(item.productsList);
        })

        sideBar.append(product);
    });
}

//Show basket and bought products
function showBasket(){
    document.querySelector('#page-title').innerHTML = 'Basket';

    //Clean page
    mainContent.innerHTML = '';
    infoBarDesc.textContent = '';
    infoBarName.textContent = '';
    infoBar.innerHTML = '';
    mainTitle.innerHTML = '';
    sideBar.innerHTML = '';

    let basketContent = JSON.parse(localStorage.getItem('FreshHUBBasket'));

    for(let storageItem of basketContent) {
        let productPrice = storageItem.productPrice.slice(0, -1) * storageItem.productAmount;

        //Create block for one product
        let basketBlock = document.createElement('div');
        basketBlock.classList.add('basket-block');
        let basketItemBlock = document.createElement('div');
        basketItemBlock.classList.add('basket-item');
        let basketItemImg = document.createElement('img');
        basketItemImg.src = storageItem.productImg;
        basketItemImg.classList.add('basket-img');
        basketItemBlock.append(basketItemImg);
        let basketItemText = document.createElement('div');
        basketItemText.textContent = storageItem.productName;
        basketItemText.classList.add('basket-text');
        basketItemBlock.append(basketItemText);
        let basketItemPrice = document.createElement('div');
        basketItemPrice.textContent = productPrice + '$';
        basketItemPrice.classList.add('basket-text');
        basketItemBlock.append(basketItemPrice);

        //Create delete button
        let basketItemDelete = document.createElement('button');
        basketItemDelete.textContent = 'X';
        basketItemDelete.classList.add('basket-text');

        basketItemDelete.addEventListener('click', () => {
            infoBar.innerHTML = '';
            let deleteInd = basketContent.findIndex(item => item.productName === storageItem.productName);
            basketContent.splice(deleteInd, 1);
            localStorage.setItem('FreshHUBBasket', JSON.stringify(basketContent));
            showBasket();
        })


        //Create block for additional information
        let basketAddInfo = document.createElement('div');
        basketAddInfo.classList.add('add-info');
        let addInfoTitle = document.createElement('h2');
        addInfoTitle.textContent = 'Order Info';
        addInfoTitle.classList.add('add-info-text');
        let addInfoProduct = document.createElement('p');
        addInfoProduct.textContent = `${storageItem.productName}`;
        addInfoProduct.classList.add('add-info-text');
        let addInfoPrice = document.createElement('p');
        addInfoPrice.textContent = `${storageItem.productPrice} x ${storageItem.productAmount} = ${productPrice}$`;
        addInfoPrice.classList.add('add-info-text');
        let addInfoDate = document.createElement('p');
        addInfoDate.textContent = `Order time: ${storageItem.productDate}`;
        addInfoDate.classList.add('add-info-text');
        basketAddInfo.append(addInfoTitle, addInfoProduct, addInfoPrice, addInfoDate);

        //Show additional information logic
        let enable = false;
        basketItemBlock.addEventListener('click', () => {
            if(enable) {
                basketAddInfo.style.display = 'none';
                enable = false;
            }
            else {
                basketAddInfo.style.display = 'block';
                enable = true;
            }
        })

        //Add to sidebar products blocks
        basketBlock.append(basketItemBlock, basketItemDelete);
        sideBar.append(basketBlock);
        sideBar.append(basketAddInfo);
    }
    //Create clear localstorage button
    let basketClearButton = document.createElement('button');
    basketClearButton.textContent = 'Clear basket';
    basketClearButton.classList.add('info-button');

    basketClearButton.addEventListener('click', () => {
        infoBarName.textContent = '';
        infoBarDesc.textContent = '';
        localStorage.setItem('FreshHUBBasket', JSON.stringify([]));
        showBasket();
    });

    sideBar.append(basketClearButton);
}

//Show categories when window loads
window.onload = showCategories;

document.querySelector('#offers').addEventListener('click', () => {
    showCategories();
})

document.querySelector('#basket').addEventListener('click', () => {
    showBasket();
})

//Show products after choosing category
function showProducts(products){
    products.forEach(product => {

        //Create block to display product info
        let productBlock = document.createElement('div');
        productBlock.classList.add('product-block');
        let productImage = document.createElement('img');
        productImage.src = product.productImg;
        productImage.classList.add('product-image');
        let productText = document.createElement('div');
        productText.textContent = product.productName;
        productText.classList.add('product-text');
        let infoButton = document.createElement('button');
        infoButton.textContent = 'More details';
        infoButton.classList.add('info-button');

        infoButton.addEventListener('click', () => {
           infoBar.innerHTML = '';
           showInfo(product);
        });

        productBlock.append(productImage, productText, infoButton);
        mainContent.append(productBlock);
    })

}

//Show additional info and buy button
function showInfo(product){

    infoBarDesc.textContent = product.productInfo + '\n';
    infoBarName.textContent = product.productName;

    //Create buy button
    let infoBarButton = document.createElement('button');
    infoBarButton.textContent = 'Buy';
    infoBarButton.classList.add('info-bar-button');

    infoBarButton.addEventListener('click', () => {
        alert(`You successfully buy ${product.productName}!`);

        let updateBasket = localStorage.getItem('FreshHUBBasket') ? JSON.parse(localStorage.getItem('FreshHUBBasket')) : [];

        product.productDate = new Date().toLocaleString();

        let checkProduct = updateBasket.find(item => item.productName === product.productName);

        //Save buy products in localstorage
        if(checkProduct){
            //To increase product amount
            checkProduct.productAmount++;
        }
        else{
            updateBasket.push(product);
        }

        localStorage.setItem('FreshHUBBasket', JSON.stringify(updateBasket));

        //Clear page
        mainContent.innerHTML = '';
        infoBarDesc.textContent = '';
        infoBarName.textContent = '';
        infoBar.innerHTML = '';
        mainTitle.innerHTML = '';
    })

    infoBar.append(infoBarButton);
}