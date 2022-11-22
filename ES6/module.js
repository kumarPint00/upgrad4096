// Named Exports
let company = "ABS"

let getCompany = function(){
   return company.toUpperCase()
}

let setCompany = function(newValue){
   company = newValue
}

export {company,getCompany,setCompany}


// second file 
// import {company,getCompany} from './company1.js'

// console.log(company)
// console.log(getCompany())

// // 2nd approach
// import {company as x, getCompany as y} from './company1.js'

// console.log(x)
// console.log(y())

// //3rd approach
// import * as myCompany from './company1.js'

// console.log(myCompany.getCompany())
// console.log(myCompany.company)

// Default Export
