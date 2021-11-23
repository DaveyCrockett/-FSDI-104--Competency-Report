// Did not use. This is just from class
function displayCards(aPet) {
    let petsDiv=document.getElementById("pets");
    let tmp= `<h1>${aPet.name}</h1><p>AGE: ${aPet.age}</p><p>GENDER: ${aPet.gender}</p><p>BREED: ${aPet.breed}</p><p>SERVICE: ${aPet.service}</p><p>OWNER: ${aPet.owner}</p><p>PHONE: ${aPet.phone}</p>`
    petsDiv.innerHTML+=tmp;
}