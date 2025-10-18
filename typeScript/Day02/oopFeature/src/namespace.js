"use strict";
var Payment;
(function (Payment) {
    let COD;
    (function (COD) {
        function makePayment(custId, orderId, amount) {
            return `Customer Id ${custId} needs to pay CASH ${amount} for an order id ${orderId}!`;
        }
        COD.makePayment = makePayment;
    })(COD = Payment.COD || (Payment.COD = {}));
    let Wallet;
    (function (Wallet) {
        function makePayment(custId, orderId, amount, walletName) {
            return `Customer Id ${custId} needs to do PayTM ${amount} for an order id ${orderId}!`;
        }
        Wallet.makePayment = makePayment;
    })(Wallet = Payment.Wallet || (Payment.Wallet = {}));
})(Payment || (Payment = {}));
console.log(Payment.COD.makePayment(1, 5, 1000));
console.log(Payment.Wallet.makePayment(1, 5, 1000, "PayTM"));
//# sourceMappingURL=namespace.js.map