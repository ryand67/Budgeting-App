export default class Transaction {
    description:string;
    amount:number;
    income:boolean;

    constructor(desc:string, amount:number, income:boolean) {
        this.description = desc;
        this.amount = amount;
        this.income = income;
    }

}