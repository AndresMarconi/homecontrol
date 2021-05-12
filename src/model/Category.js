export class Category {

  constructor({docId= -1, name= ""}){
    this.docId = docId
    this.name = name
  }


 
  //Static methods
  static getCategories(){
    let categories = []
    categories.push({docId: 1, name: "Comida"})
    categories.push({docId: 2, name: "Impuesto"})
    categories.push({docId: 3, name: "Casa"})
    
    return categories
  }  

  static addCategory(name){
    let cat = new Category({docId: -1, name: name})
    //push to db
    return cat
  }

}