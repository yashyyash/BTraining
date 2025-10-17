namespace payment {
    export namespace COD {
        export function makePayment(customerId: number, orderId: number, amount: number): string {
            return `Customer Id ${customerId} needs to pay CASH IN ${amount} for Order Id ${orderId}`;
        }
    }

    export namespace Wallet {
        export function makePayment(customerId: number, orderId: number, amount: number, wallettype:string): string {
            return `Customer Id ${customerId} paid ${amount} via Wallet for Order Id ${orderId} wallet is ${wallettype}`;
        }
    }
}

console.log(payment.COD.makePayment(1, 101, 500));
console.log(payment.Wallet.makePayment(2, 102, 750,"paytm"));