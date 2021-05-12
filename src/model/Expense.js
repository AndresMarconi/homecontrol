export class Expense {

  constructor({docId= -1, date= "00/00/0000", amount= 0, category= {docId: -1, name: ""}, destination= {docId: -1, name: ""}}){
    this.docId = docId
    this.date = date
    this.category = category
    this.amount = amount
    this.destination = destination
  }


 
  //Static methods
  static getExpenses({limit= 10, date= null, category= null, destination= null}){
    let expense = []
    expense.push({docId: 1, date: "10/05/2021", amount: 500,  category: {docId: 1, name: "Comida"},   destination: {docId: 1, name: "Pato"}})
    expense.push({docId: 2, date: "10/05/2021", amount: 1000, category: {docId: 1, name: "Comida"},   destination: {docId: 1, name: "Pato"}})
    expense.push({docId: 3, date: "11/05/2021", amount: 800,  category: {docId: 1, name: "Comida"},   destination: {docId: 1, name: "Pato"}})
    expense.push({docId: 4, date: "11/05/2021", amount: 950,  category: {docId: 2, name: "Impuesto"}, destination: {docId: 2, name: "ARBA"}})
    expense.push({docId: 5, date: "11/05/2021", amount: 5000, category: {docId: 2, name: "Impuesto"}, destination: {docId: 2, name: "ARBA"}})
    expense.push({docId: 6, date: "12/05/2021", amount: 2000, category: {docId: 2, name: "Impuesto"}, destination: {docId: 3, name: "AFIP"}})
    expense.push({docId: 7, date: "13/05/2021", amount: 1000, category: {docId: 3, name: "Casa"},     destination: {docId: 4, name: "Plomero"}})
    expense.push({docId: 8, date: "14/05/2021", amount: 500,  category: {docId: 3, name: "Casa"},     destination: {docId: 5, name: "Electrisista"}})
    expense.push({docId: 9, date: "14/05/2021", amount: 900,  category: {docId: 3, name: "Casa"},     destination: {docId: 6, name: "Heladera"}})
    expense.push({docId: 10, date:"15/05/2021", amount: 1200, category: {docId: 3, name: "Casa"},     destination: {docId: 7, name: "Ventana"}})
  
    return expense
  }  

}