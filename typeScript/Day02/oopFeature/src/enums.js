"use strict";
//Named constant
var Menu;
(function (Menu) {
    Menu[Menu["JAPANESE"] = 1] = "JAPANESE";
    Menu[Menu["INDIAN"] = 2] = "INDIAN";
    Menu[Menu["ITALIAN"] = 3] = "ITALIAN";
    Menu[Menu["AMERICAN"] = 4] = "AMERICAN";
})(Menu || (Menu = {}));
const customerChoicse = Menu.ITALIAN;
switch (+customerChoicse) {
    case 1:
        console.log("Customer made Japanese food choice!");
        break;
    case 2:
        console.log("Customer made Indian food choice!");
        break;
    case 3:
        console.log("Customer made Italian food choice!");
        break;
    case 4:
        console.log("Customer made American food choice!");
        break;
    default:
        console.log("Wrong choice!");
}
//# sourceMappingURL=enums.js.map