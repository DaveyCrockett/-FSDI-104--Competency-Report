function changeColor(){
    let links = document.getElementsByTagName("a");
    links[0].setAttribute("class", "bg");
    links[1].setAttribute("class", "bg");
    links[2].setAttribute("class", "bg");
}

function hideElements() {
    let inputs = document.getElementsByClassName("form-control");
    for(let i = 0; i<inputs.length;i++){
        inputs[i].style.display="none";
    }
}