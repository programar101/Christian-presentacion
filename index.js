
function numRandom() {

    return Math.floor(Math.random() * datos.length)

}

function renderTexto() { //apertura funcion

    if (datos.length === 0) {


        document.getElementById("cuerpo").innerHTML = pagFinal


        datos = guardaArchivos;

        guardaArchivos = [];
       
        // guardaArchivos.splice(-1) 

        /*
        let verificacion = JSON.stringify(guardaArchivos)

        document.getElementById("verificar").innerHTML = `
  
         <p>${verificacion}</p>`  //para verificar 
          
       */

    } else {

        const num = numRandom() //para que las funciones tengan el mismo numero random
        const dato =datos[num]


        document.getElementById("mostrar").innerHTML = `

         <h3 class="texto" >${dato.texto}</h3>
    
         <img class=${dato.tipoImagen} src="${dato.imagen}" />
    
    `
        /*
             let verificacion = JSON.stringify(guardaArchivos)
        
                document.getElementById("verificar").innerHTML = `
          
                 <p>${verificacion}</p>`  //para verificar que guardaArchivos.push funcione
        
                 */

        guardaArchivos.push(datos[num])

        datos.splice(num, 1);


    }




}//cierre de funcion


// function reinicio_func() {
   
//     location.reload()

// /*
//     document.getElementById("cuerpo").innerHTML = pagInicio;
//     numRandom()

// }

// */
// }



let guardaArchivos = [] //acá se guardan los objetos que borro de "datos"

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








