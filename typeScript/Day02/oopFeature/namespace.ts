namespace Payment {
    export namespace COD {
        export function makePayment(custId: number, orderId: number, amount: number): string {
            return `Customer Id ${custId} needs to pay CASH ${amount} for an order id ${orderId}!`
        }
        
    }
    export namespace Wallet {
        export function makePayment(custId: number, orderId: number, amount: number, walletName: string): string {
            return `Customer Id ${custId} needs to do PayTM ${amount} for an order id ${orderId}!`
        }
        
    }

}

console.log(Payment.COD.makePayment(1, 5, 1000));
console.log(Payment.Wallet.makePayment(1, 5, 1000, "PayTM"));