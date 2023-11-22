class Vehicle {
    constructor(make, model, style, year, color){
        this.make = make
        this.model = model
        this.style = style
        this.year = year
        this.color = color

        }

        inspection() {
            if (2023 - this.year >= 10){
                console.log('Your vehicles needs to be inspected once per year.') 
            } else {
                console.log ("Your vehicle doesn't need an inspection.")
            }
        }
        
        country(){
            if (this.make = 'Buick' || 'Cadillac'||'Chevrolet'||'GMC'||'Chrysler'||'Dodge'||'Jeep'||'Ram'||'Ford'||'Lincoln'){
                console.log('You own an American vehicle!')
            } else{
                console.log('Your vehicle is not from America.')
            }
        }

        addOwnerInfo(ownerInfo){
            return this.make + ' ' + "owner's occupation is " + ownerInfo; 
        }
        
    }

let kaiOldCar = new Vehicle ('Honda', 'CRV', 'SUV', 2011, 'white')
let kaiInfo = kaiOldCar.addOwnerInfo('Delivery Driver')

kaiOldCar.inspection()
kaiOldCar.country()
console.log(kaiInfo)