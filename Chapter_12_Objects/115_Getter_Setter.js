const user={
    firstname :"Sara",
    lastname:"Deva",
    get fullName(){ // Getter method to get full name
        return `${this.firstname} ${this.lastname}`;
        },
    set fullName(fullName){ // Setter method to set first and last name
        [this.firstname, this.lastname] = fullName.split(" ");
    }
}
console.log(user.fullName); //Sara Deva
user.fullName = "Amit Sharma";
console.log(user.fullName); //Amit Sharma