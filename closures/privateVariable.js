function bankAccount(){
    let balance = 1000;
    return{
        deposit(amount){
            balance += amount;
            console.log("amount is", balance);
            
        },
        withdraw(amount){
            balance -= amount;
            console.log("amount is", balance);
            
        }
    }
}
const totalBalance = bankAccount()
totalBalance.deposit(500);
totalBalance.withdraw(100);