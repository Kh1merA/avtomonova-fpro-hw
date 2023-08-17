let age = 0;

let birthYear = +prompt("Введіть свій рік народження", '2000');
if(!birthYear){
    alert("Шкода, що ви не захотіли ввести свій рік народження.");
    age = "невідомий";
} else {
    let date = new Date();
    let year = date.getFullYear();

    while(year < birthYear)
        birthYear = +prompt("Будь ласка, введіть правильний рік", '2000');

    age = year - birthYear;
}


let city = prompt('Введіть місто у якому ви проживаєте', 'Харків');
if(!city){
    alert("Шкода, що ви не захотіли ввести своє місто.");
    city = "невідомому";
}

switch(city){
    case "Київ":
        alert(`Ваш вік: ${age}\nТи живеш у столиці України.`);
        break;
    case "Вашингтон":
        alert(`Ваш вік: ${age}\nТи живеш у столиці США.`);
        break;
    case "Лондон":
        alert(`Ваш вік: ${age}\nТи живеш у столиці Англії.`);
        break;
    case "Харків":
        alert(`Ваш вік: ${age}\nТи живеш у найкращому місті на Землі.`);
        break;
    default:
        alert(`Ваш вік: ${age}\nТи живеш у місті ${city}.`);
        break;
}

let favouriteSport = prompt('Який вид спорту ви полюбляєте найбільше?', 'Кіберспорт');
if(!favouriteSport)
    alert("Шкода, що ви не захотіли ввести свій улюблений вид спорту.");

switch (favouriteSport){
    case "Футбол":
        alert("Круто! Хочеш стати новим Кріштіану Роналду?");
        break;
    case "Кіберспорт":
        alert("Круто! Хочеш стати новим Олександром Костилєвим?");
        break;
    case "Спідкубінг":
        alert("Круто! Хочеш стати новим Феліксом Земдегсом?");
        break;
    default:
        alert("Круто!");
        break;
}

