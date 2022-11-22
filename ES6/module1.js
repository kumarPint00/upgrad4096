// Default export
let name = 'ABS'

let company = {
   getName:function(){
      return name
   },
   setName:function(newName){
      name = newName
   }
}

export default company


/**
 import c from './company1.js'
console.log(c.getName())
c.setName('Google Inc')
console.log(c.getName())
 * 
 */