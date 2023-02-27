//Informacion
const gender = [
    "female", "male"
];

const namesFemale = [
    "Sofía", "María", "Lucía", "Martina", "Catalina", "Elena", "Emilia", "Valentina", "PaulaZoe"
];

const namesMale = [
    "Santiago", "Mateo", "Juan", "Matías", "Nicolás", "Benjamín", "Pedro", "Tomás", "Thiago", "Santino"
];

const lastNames = [
    "González","Rodríguez","Gómez","Fernández","López","Martínez","Díaz","Pérez","Sánchez","Romero"
];

const imageFemale = [
    "f0", "f1", "f2", "f3"
];

const imageMale = [
    "m0", "m1", "m2", "m3"
];

const hobbies = [
    "Cocinar","Pintar","Leer","Jugar videojuegos","Escribir","Bailar","Ver películas","Escuchar música","Hacer manualidades","Practicar fotografía","Viajar"
];

const habilities = [
    "Calidad del trabajo", "Consistencia", "Comunicacíon", "Indepedencia", "Gentíon del tiempo", "Trabajo en equipo", "iniciativa", "Creatividad", "Honestidad"
];

const jobExperience = [

];



function randomizeInfo(){
    //INFO PERSONAL ***
    //Imagen, nombre y apellido
    let lastName = randomArray(lastNames);
    let image, name;
    if (randomArray(gender) == "female"){
        image = randomArray(imageFemale);
        name = randomArray(namesFemale);
    }else{
        image = randomArray(imageMale);    
        name = randomArray(namesMale);
    }

    document.getElementById("perfilImage").src = "images/" + image + ".jpg";
    document.getElementById("completeName").innerHTML = name + " " + lastName;

    //Fecha nacimiento
    document.getElementById("age").innerHTML = randomNumber(1, 30) + " / " + randomNumber(1, 12) + " / " + (2023 - randomNumber(22, 30));

    //Email
    document.getElementById("email").innerHTML = name + "." + lastName + "@email.com"; 

    //Hobbies
    randomList(hobbies, "hobbies", 3, 5);

    //EXPERIENCIAS ***


    //HABILIDADES ***
    randomList(habilities, "habilities", 3, 4);


}

function randomArray(array){
    return array[Math.floor(Math.random()*array.length)];
}

function randomNumber(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function randomList( array, id, min, max){
    let tempArr = [];
    let tempArrCopy = array.slice();
    const numberArr = randomNumber(min, max);

    document.querySelector("#"+ id).replaceChildren();
    for (i=0; i<numberArr; i++){
        var randomTemp = randomArray(tempArrCopy);
        tempArr.push(randomTemp)
        delete tempArrCopy[tempArrCopy.splice(tempArrCopy.indexOf(randomTemp), 1)];

        //Agregarlo a la lista
        let li = document.createElement("li");
        let p = document.createElement("p");
        p.appendChild(document.createTextNode(randomTemp));
        document.querySelector("#"+ id).appendChild(li).appendChild(p);
    }
}
