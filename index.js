function generadorRandomNumbers() {



    for (let i = 0; i < datos.length; i++) {

        let randomNumber = i

        almacenNumeros.push(randomNumber);




    }

}



function selectorNumbersArray() {



    return Math.floor(Math.random() * datos.length)


}


function renderTexto() { //apertura funcion

    if (almacenNumeros.length === 0) {


        document.getElementById("cuerpo").innerHTML = pagFinal






        almacenNumeros = [];






    } else {



        const num = selectorNumbersArray();  //para que las funciones tengan el mismo numero random

        const dato = datos[num];



        document.getElementById("mostrar").innerHTML = `

         <h3 class="texto" >${dato.texto}</h3>
    
         <img class=${dato.tipoImagen} src="${dato.imagen}" />
    
    `

        almacenNumeros.splice(num, 1);

    }




}



// function reinicio_func() {

//     location.reload()

// /*
//     document.getElementById("cuerpo").innerHTML = pagInicio;
//     numRandom()

// }

// */
// }



let almacenNumeros = []

let img = new Image()

img.src = ""

let pagFinal = document.getElementById("cuerpo").innerHTML = `

<div class="textoPrincipal"id="presentacion">

    <h3 class="texto" > Eso es todo. Tampoco soy tan interesante.</h3>

    </div>      
     
        <img class="imgFinal" src="https://c.tenor.com/U2JqGqBXqZgAAAAM/cat-sad.gif" />
<button  id="random-btn">Dato Random</button>
        <button id="reinicio">Reiniciar</button>
       `


let pagInicio = document.getElementById("cuerpo").innerHTML = `

<div class="textoPrincipal"id="presentacion">


<p>Hola, soy <em>Christian</em>. Presiona el botón para obtener un dato random sobre mi  </p>

</div>


<button  id="random-btn">Dato Random</button>


`


let textoVacio = ""


const mostrar = document.getElementById("mostrar")

const randomBtn = document.getElementById("random-btn")






randomBtn.addEventListener("click", function () {



    document.getElementById("mostrar").innerHTML = "";

    renderTexto()



})

generadorRandomNumbers();

let verificacion = JSON.stringify(almacenNumeros)

document.getElementById("verificar").innerHTML = `
  
         <p>${verificacion}</p>`  //para verificar 










