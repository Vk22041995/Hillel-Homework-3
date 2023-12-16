var unit = prompt("Одиниця виміру");
var quantity = prompt("Кількість");

switch (unit) {
    case "кілометри": 
    var meters = quantity * 1000;
    alert(quantity + " км це " + meters + " м"); 
    break;

    case "години": 
    var minutes = quantity * 60;
    alert(quantity + " г це " + minutes + " хв"); 
    break;

    case "кілограми": 
    var grams = quantity * 1000;
    alert(quantity + " кг це " + grams + " грм"); 
    break;

    default: 
    alert("Будь ласка, введіть одну з наступних одиниць виміру: кілометри, години та кілограми")
}