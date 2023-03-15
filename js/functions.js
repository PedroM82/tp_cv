//Informacion que sera tomada al azar
const aboutMe = [
    "Gracias a mi formación especializada, considero que puedo aportar valor y seguir desarrollándome profesionalmente en una compañía que coincida con mis valores y expectativas",
    "Como persona organizada y con una gran motivación, soy capaz de adaptarme a cualquier circunstancia y dar siempre lo mejor de mí en cualquier proyecto, al mismo tiempo que me esfuerzo por trabajar en equipo y fomentar valores como los del compañerismo",
    "Mi objetivo principal es desarrollarme profesionalmente y evolucionar en mi sector, de modo que busco oportunidades que me permitan hacerlo, al tiempo que trataré de alinearme completamente con los objetivos de la empresa"
]

const hobbies = [
    "Cocinar","Pintar","Leer","Jugar videojuegos","Escribir","Bailar","Ver películas","Escuchar música","Hacer manualidades","Practicar fotografía","Viajar"
];

const habilities = [
    "Trabajo en equipo","Iniciativa","Resolución de problemas","Aprendizaje fluido","Comunicación efectiva"
];

const attitudes = [
    "Calidad del trabajo", "Consistencia", "Comunicacíon", "Indepedencia", "Gentíon del tiempo", "Trabajo en equipo", "iniciativa", "Creatividad", "Honestidad"
];

//Ejemplos extraidos de: https://ejemplos-curriculum.com/experiencia-laboral/
const jobExperience = [
    {
        "job"    : "Programador web",
        "company": "MadridTech",
        "period" : "Junio de 2019 - Actualidad",
        "tasks"  : ["Encargado del departamento de programación",
                    "Jefe del departamento de investigación",
                    "Desarrollo de más de 12 apps para teléfonos móviles",
                    "Aumento del rendimiento web en un 34%"]    
    },
    {
        "job"    : "Programador de aplicaciones",        
        "company": "MadridInk",
        "period" : "Julio de 2015 - Mayo de 2019",
        "tasks"  : ["Supervisor del área de desarrollo de apps",
                    "Salida al mercado de más de 8 aplicaciones para restaurantes",
                    "Automatización de servicios para hoteles",
                    "Capacitación a nuevos programadores"]
    },
    {
        "job"    : "Desarrollador de software",
        "company": "BioWeb",
        "period" : "Mayo de 2014 - Junio de 2015",
        "tasks"  : ["Creador de la página web de la empresa",
                    "Captación de más de 1200 clientes en un tiempo inferior a un año",
                    "Implementación de tienda online",
                    "Automatización de redes sociales"]
    }
];



//Conectarse a la api y obtener info
const url = "https://randomuser.me/api/"

function fetchRequest(){
   fetch(url)
  .then(response => response.json())
  .then(data => {
    randomizeInfo(data)
  })
  .catch(error => {
    console.error('Error:', error);
  }); 
}

function randomizeInfo(data){
    const result = data["results"]["0"];
    const picture = result["picture"]["large"];
    const name = result["name"]["first"];
    const lastName = result["name"]["last"];
    const email = result["email"];

    //INFO PERSONAL ***
    document.getElementById("perfilImage").src = picture;
    document.getElementById("completeName").innerHTML = name + " " + lastName;
    document.getElementById("email").innerHTML = email;
    document.getElementById("aboutMe").innerHTML = randomArray(aboutMe);

    //HOBBIES ***
    randomList(hobbies, "hobbies", 3, 5);

    //HABILIDADES ***
    randomList(habilities, "habilities", 3, 4);

    //APTITUDES ***
    randomList(attitudes, "attitudes", 3, 4);

    //EXPERIENCIAS LABORALES ***
    const experiences = randomArray(jobExperience);
    document.getElementById("job").innerHTML = experiences.job + ", en " + experiences.company + " (" + experiences.period + ")";
    document.querySelector("#job_experiences").replaceChildren();
    for (task of experiences.tasks){
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(task));
        document.querySelector("#job_experiences").appendChild(li);
    }
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
        //Seleccion al azar evitando que se repitan
        var randomSelect = randomArray(tempArrCopy);
        tempArr.push(randomSelect);
        delete tempArrCopy[tempArrCopy.splice(tempArrCopy.indexOf(randomSelect), 1)];

        //Agregarlo a la lista
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(randomSelect));
        document.querySelector("#"+ id).appendChild(li);
    }
}
