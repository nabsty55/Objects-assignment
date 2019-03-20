function Contacts (firstName, lastName, phoneNumber, email, street, city, state){
  this.firstName=firstName,
  this.lastName=lastName,
  this.phoneNumber=phoneNumber,
  this.email=email,
  this.street=street,
  this.city=city,
  this.state=state

}

var contact1 = new Contacts('Antony', 'Nabende', 0706559753, 'nabsty55@gmail.com', 'lukkade', 'kampala', 'Uganda');
contact1.address=function (street, city, state){
   console.log(this.street + "," +this.city +" " +this.state);
}
console.log(contact1.address())
console.log(contact1);
