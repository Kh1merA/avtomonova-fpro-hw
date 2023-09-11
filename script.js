
function addStyle(product){
    product.style.padding = '10px';
    product.style.fontSize = '20px';
    product.style.fontWeight = '700';
    product.style.height = '100px';
    product.style.backgroundSize = '100%';
    product.style.color = 'white';
}


let shopList = [{
    categoryName: 'Fruits',
    productsList: [{
        productName: 'Apples',
        productImg: 'img/apple.jpg',
        productInfo: 'Apples are a popular and widely consumed fruit known for their sweet and crisp flavor. They come in various colors, including red, green, and yellow, and there are numerous apple varieties, each with its own taste and texture. Apples are a rich source of vitamins, particularly vitamin C, dietary fiber, and various antioxidants. They are a versatile fruit and can be eaten fresh, used in cooking, baking, or juicing, and are often used to make applesauce, apple pies, and cider. Apples are not only delicious but also have several health benefits, such as promoting heart health, aiding digestion, and providing essential nutrients.'
    },{
        productName: 'Peaches',
        productImg: 'img/peach.jpg',
        productInfo: 'Peaches are a delicious and juicy fruit known for their sweet and slightly tangy flavor. They have a fuzzy skin that can range in color from yellow to orange and often have a round or slightly flattened shape with a central pit or stone. Peaches are a rich source of vitamins, particularly vitamin C and vitamin A, as well as dietary fiber. They are a popular summer fruit and can be enjoyed fresh, sliced, or added to various culinary dishes such as pies, cobblers, jams, and preserves. Peaches are not only tasty but also offer potential health benefits, including support for skin health, immune function, and digestion due to their nutrient content.'
    },{
        productName: 'Oranges',
        productImg: 'img/orange.jpg',
        productInfo: 'Oranges are a widely consumed citrus fruit known for their sweet and tangy flavor. They typically have a bright orange or orange-yellow hue and are often segmented into juicy, pulpy sections. Oranges are an excellent source of vitamin C, which is essential for immune health, as well as other essential nutrients like dietary fiber and potassium. They are known for their refreshing taste and versatility.'
    }],
    categoryImg: 'img/fruits.jpg'
},{
    categoryName: 'Vegetables',
    productsList: [{
        productName: 'Tomatoes',
        productImg: 'img/tomato.jpg',
        productInfo: 'Tomatoes are a versatile and widely consumed fruit that is often treated as a vegetable in culinary contexts. They are known for their juicy, slightly sweet, and tangy flavor. Tomatoes come in various sizes, shapes, and colors, including red, yellow, and green. '
    },{
        productName: 'Corn',
        productImg: 'img/corn.jpg',
        productInfo: 'Corn, scientifically known as Zea mays, is a cereal grain and one of the most widely cultivated and consumed crops globally. It has a rich history dating back thousands of years and is an essential staple food in many cultures.'
    },{
        productName: 'Pepper',
        productImg: 'img/pepper.jpg',
        productInfo: '\n' +
            'Pepper refers to various plants and their dried fruits or berries that are used as spices and flavorings in culinary dishes. There are different types of pepper, the most common being black pepper, white pepper, and red pepper (cayenne pepper).'
    }],
    categoryImg: 'img/vegetables.jpg'
},{
    categoryName: 'Berries',
    productsList: [{
        productName: 'Cherries',
        productImg: 'img/cherry.jpg',
        productInfo: 'Cherries are small, round, and often brightly colored fruits that are enjoyed for their sweet and tart flavor. They belong to the Prunus genus and are closely related to other stone fruits like plums, peaches, and apricots.'
    },{
        productName: 'Grapes',
        productImg: 'img/grapes.jpg',
        productInfo: 'Grapes are small, round, and typically juicy fruits that grow in clusters on grapevines, which belong to the genus Vitis. Grapes are well-known for their sweet and sometimes tart flavor. '
    },{
        productName: 'Currant',
        productImg: 'img/currant.jpg',
        productInfo: 'Currants are small, round, and edible berries that belong to the Ribes genus. These berries are known for their tart and slightly sweet flavor. There are three main types of currants: black currants (Ribes nigrum), red currants (Ribes rubrum), and white currants (a variant of red currants). '
    }],
    categoryImg: 'img/berries.jpg'
}];

let mainTitle = document.getElementsByClassName('main-content__category')[0];
let mainContent = document.getElementsByClassName('main-content__items')[0];
let sideBar = document.getElementsByClassName('sidebar-menu__items')[0];
let infoBarName = document.getElementsByClassName('product-name')[0];
let infoBarDesc = document.getElementsByClassName('product-description')[0];
let infoBar = document.getElementsByClassName('button-wrapper')[0];

shopList.forEach(item => {
    let product = document.createElement('button');
    product.textContent = item.categoryName;
    product.style.backgroundImage = `url(${item.categoryImg})`;
    addStyle(product);
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

function showProducts(products){
    products.forEach(product => {
        let productBlock = document.createElement('div');
        productBlock.style.display = 'flex';
        productBlock.style.justifyContent = 'space-between'
        productBlock.style.alignItems = 'center';
        productBlock.style.overflow = 'hidden';
        productBlock.style.border = '2px solid black';
        productBlock.style.margin = '5px';
        productBlock.style.height = '120px';
        let productImage = document.createElement('img');
        productImage.src = product.productImg;
        productImage.style.width = '30%';
        productImage.style.backgroundSize = '100%';
        let productText = document.createElement('div');
        productText.textContent = product.productName;
        productText.style.fontSize = '40px';
        productText.style.fontWeight = '400';
        let infoButton = document.createElement('button');
        infoButton.textContent = 'More details';
        infoButton.style.width = '200px';
        infoButton.style.fontSize = '20px';
        infoButton.style.margin = '10px';

        infoButton.addEventListener('click', () => {
           infoBar.innerHTML = '';
           showInfo(product);
        });


        productBlock.append(productImage, productText, infoButton);
        mainContent.append(productBlock);
    })

}

function showInfo(product){
    infoBarDesc.textContent = product.productInfo + '\n';
    infoBarName.textContent = product.productName;
    let infoBarButton = document.createElement('button');
    infoBarButton.textContent = 'Buy';
    infoBarButton.style.width = '200px';
    infoBarButton.style.fontSize = '20px';
    infoBarButton.addEventListener('click', () => {
        alert(`You successfully buy ${product.productName}!`);
        mainContent.innerHTML = '';
        infoBarDesc.textContent = '';
        infoBarName.textContent = '';
        infoBar.innerHTML = '';
        mainTitle.innerHTML = '';
    })
    infoBar.append(infoBarButton);
}