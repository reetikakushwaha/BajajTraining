//Named constant

enum Menu{
    JAPANESE = 1,
    INDIAN,
    ITALIAN,
    AMERICAN,
}

const customerChoicse: Menu = Menu.ITALIAN;

switch(+customerChoicse){
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