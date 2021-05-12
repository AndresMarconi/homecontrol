export class Destination {

  constructor({docId= -1, name= ""}){
    this.docId = docId
    this.name = name
  }


 
  //Static methods
  static getDestinations(){
    let destinations = []
    destinations.push({docId: 1, name: "Pato"})
    destinations.push({docId: 2, name: "ARBA"})
    destinations.push({docId: 3, name: "AFIP"})
    destinations.push({docId: 4, name: "Plomero"})
    destinations.push({docId: 5, name: "Electrisista"})
    destinations.push({docId: 6, name: "Heladera"})
    destinations.push({docId: 7, name: "Ventana"})
  
    return destinations
  }   

}