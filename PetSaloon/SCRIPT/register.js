console.log("Register Page!");

let SaloonRegister = {
    name: "The Pet Saloon",
    address: {

        street: "Pet Drive",
        number: "55555",
        zip: "12345",
        state: "CA",
        city: "Los Angeles"
    },
    hours: {
        open: "9:00 am",
        close: "10:00 pm"
    },
    pets:[]
}

//Create a pet constuctor
let x = 0;
function Pet(name, age, gender, breed, service, owner, phone, specialNeeds){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.owner = owner;
    this.phone = phone;
    this.specialNeeds = specialNeeds;
    this.id = x++;
}
//Create three pets using the constructor
let Scooby = new Pet("Scooby", 50, "Male", "Dane", "Grooming", "Shaggy", 555 + " - " + 555 + " - " + 5555, "Snacks");
let Scrappy = new Pet("Scrappy", 20, "Male", "Rottwieler", "Grooming", "Shaggy", 111 + " - " + 111 + " - " + 1111, "Snacks");
let Yoshi = new Pet("Yoshi", 2, "Male", "Husky", "Training", "David", 333 + " - " + 333 + " - " + 3333, "Slow Feeder");
SaloonRegister.pets.push(Scrappy,Scooby, Yoshi);
//get the values from the input
let petName = document.getElementById("petName");
let petAge = document.getElementById("petAge");
let petGender = document.getElementById("petGender");
let petBreed = document.getElementById("petBreed");
let petService = document.getElementById("petService");
let petOwner = document.getElementById("petOwner");
let ownerPhone = document.getElementById("phone");
let specialNeeds = document.getElementById("specialNeeds");
function register(){
    console.log(petName.value,petAge.value,petGender.value,petBreed.value,petService.value,petOwner.value,ownerPhone.value, specialNeeds.value);
    //create a constructor using the values from the input
    let newDog = new Pet(petName.value,petAge.value,petGender.value,petBreed.value,petService.value,petOwner.value,ownerPhone.value,specialNeeds.value);
    //push it into the array
    SaloonRegister.pets.push(newDog);
    //display the pet on the console
    console.log(SaloonRegister.pets);
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    modal.style.display = "block";


    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        }
    createTable();
    //clear inputs
    clear();
}

function clear(){
     petName.value = "";
     petAge.value = "";
     petGender.value = "";
     petBreed.value = "";
     petService.value = "";
     petOwner.value = "";
     ownerPhone.value = "";
     specialNeeds.value = "";
}

function createTable(){
    let tbody = document.getElementById('tbody');
    let th = "<tr><th>Pet Name:</th><th>Age:</th><th>Gender:</th><th>Breed:</th><th>Service:</th><th>Owner:</th><th>Phone:</th><th>Special Needs:</th><th></th></tr>";
    tbody.innerHTML = th
    let td;
    for (let i = 0; i < SaloonRegister.pets.length; i++) {

        td = `<tr id =${SaloonRegister.pets[i].id} class='petRow'><td>` + SaloonRegister.pets[i].name +`</td><td>` + SaloonRegister.pets[i].age + `</td><td>` + SaloonRegister.pets[i].gender + `</td><td>` + SaloonRegister.pets[i].breed + `</td><td>` + SaloonRegister.pets[i].service + `</td><td>` + SaloonRegister.pets[i].owner + `</td><td>` + SaloonRegister.pets[i].phone + `</td><td>` + SaloonRegister.pets[i].specialNeeds + `</td><td><button class="delBtn" onclick='deletePet(${SaloonRegister.pets[i].id})'>Delete</button></td></tr>`;
        tbody.innerHTML += td;
    }

    
}

function deletePet(id){
    console.log("delete pet id: " + id);
    let indexDelete;
    for(let i=0;i<SaloonRegister.pets.length;i++){
        let pet = SaloonRegister.pets[i];
        if(id===pet.id){
            indexDelete=i;
        }
    }
    document.getElementById(id).remove();
    SaloonRegister.pets.splice(indexDelete, 1);
}

function searchPet(){
    let searchPet = document.getElementById("petSearch");
    let searched = SaloonRegister.pets.filter(pet => pet.name == searchPet.value);
    console.log(searched);
    createModal();
    let tbody = document.getElementById('tbodySearch');
    let th = "<tr><th>Pet Name:</th><th>Age:</th><th>Gender:</th><th>Breed:</th><th>Service:</th><th>Owner:</th><th>Phone:</th><th>Special Needs:</th><th></th></tr>";
    tbody.innerHTML = th
    let td;
    for (let i = 0; i < searched.length; i++) {

        td = `<tr id =${searched[i].id} class='petRow'><td>` + searched[i].name +`</td><td>` + searched[i].age + `</td><td>` + searched[i].gender + `</td><td>` + searched[i].breed + `</td><td>` + searched[i].service + `</td><td>` + searched[i].owner + `</td><td>` + searched[i].phone + `</td><td>` + searched[i].specialNeeds + `</td><td><button class="delBtn" onclick='deletePet(${searched[i].id})'>Delete</button></td></tr>`;
        tbody.innerHTML += td;
    }
}

function createModal(){
    let modal = document.getElementById("mySearchModal");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[1];

    // When the user clicks the button, open the modal 
    modal.style.display = "block";


    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        }
}

//add another attribute

//simpleDisplay();

// alert(`Number of pets: ${saloon.pets.length}`)

