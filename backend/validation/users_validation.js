const isEmpty = require ('./isEmpty')
 const validator = require('validator')
 
 module.exports=function validateUser(data){
     
data.nom = !isEmpty(data.nom) ? data.nom:""
data.prenom = !isEmpty(data.prenom) ? data.prenom:""
data.numero_tel = !isEmpty(data.numero_tel) ? data.numero_tel:""
data.email = !isEmpty(data.email) ? data.email:""
data.password = !isEmpty(data.password) ? data.password:""

if (validator.isEmpty(data.nom)) {
    Error.nom = "Required Nom"
}
if (validator.isEmpty(data.prenom)) {
    Error.prenom = "Required Prenom"
 }
 if (validator.isEmpty(data.numero_tel)) {
    Error.numero_tel = "Required numero tel"
 }
 if (!validator.isEmail(data.email)) {
    Error.email = "Forma email required"
 }
 if (validator.isEmpty(data.email)) {
    Error.email = "Required email"
 }
 if (validator.isEmpty(data.password)) {
    Error.password = "Required password"
 }

 return{
    Error,
    isValide: isEmpty(Error)
 }

 }