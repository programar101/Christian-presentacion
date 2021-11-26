function numRandom() {



    return Math.floor(Math.random() * datos.length)


}

function renderTexto() { //apertura funcion

    if (datos.length === 0) {


        document.getElementById("cuerpo").innerHTML = pagFinal


        datos = guardaArchivos;
        // guardaArchivos.splice(-1) 

        /*
        let verificacion = JSON.stringify(datos)

        document.getElementById("verificar").innerHTML = `
  
         <p>${verificacion}</p>`  //para verificar 
          
        */




    } else {
        let num = numRandom() //para que las funciones tengan el mismo numero random




        document.getElementById("mostrar").innerHTML = `

         <h3 class="texto" >${datos[num].texto}</h3>
    
         <img class=${datos[num].tipoImagen} src="${datos[num].imagen}" />
    
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


function reinicio_func() {



    document.getElementById("cuerpo").innerHTML = pagInicio;



}

let datos = [
    {
        texto: 'Tengo 25 años y cumplo el 04 de Octubre.',
        repeticiones: 0, //variable vacía para almacenar el numero de intentos
        imagen: new Image().src = 'https://sites.google.com/site/informaticaprueba1emmanuel/_/rsrc/1395877037694/dohko-de-libra/hqdefault.jpg',
        tipoImagen: "horizontal"
    },
    {
        texto: 'Soy de Costa Rica',
        repeticiones: 0, //variable vacía para almacenar el numero de intentos
        imagen: new Image().src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Mapa_CR.svg/1200px-Mapa_CR.svg.png",
        tipoImagen: "cuadrada"
    },
    {
        texto: 'Vivo en Florida Oeste.',
        repeticiones: 0, //variable vacía para almacenar el numero de intentos
        imagen: new Image().src = "https://upload.wikimedia.org/wikipedia/commons/c/cb/Estaci%C3%B3n_Florida_de_la_l%C3%ADnea_Belgrano_Norte_en_Florida_Oeste.jpg",
        tipoImagen: "horizontal"
    },
    {
        texto: ' Mi libro favorito es "Hombres de Maíz" de Miguel Angel de Asturias',
        repeticiones: 0, //variable vacía para almacenar el numero de intentos
        imagen: new Image().src = "https://contentv2.tap-commerce.com/cover/large/9789500396332_1.jpg?id_com=1113",
        tipoImagen: "vertical"
    },
    {
        texto: 'Actualmente estoy leyendo la Saga de "Canción de Hielo y Fuego" de George R.R. Martin.',
        repeticiones: 0, //variable vacía para almacenar el numero de intentos
        imagen: new Image().src = "https://www.penguinlibros.com/uy/239669-large_default/danza-de-dragones-5.jpg",
        tipoImagen: "vertical"
    },
    {
        texto: 'Sé tocar un poco la guitarra y tengo una banda llamada "Sidra"',
        repeticiones: 0, //variable vacía para almacenar el numero de intentos
        imagen: new Image().src = "https://www.educaciontrespuntocero.com/wp-content/uploads/2017/11/peliculas_prehistoria_destacada.jpg",
        tipoImagen: "horizontal"
    },
    {
        texto: 'Soy horrible jugando al ajedrez pero juego seguido.',
        repeticiones: 0, //variable vacía para almacenar el numero de intentos
        imagen: new Image().src = "https://upload.wikimedia.org/wikipedia/commons/a/ab/Mate_pastor_ajedrez.gif",
        tipoImagen: "cuadrada"
    },
    {
        texto: 'Mi película favorita es "El Padrino"',
        repeticiones: 0, //variable vacía para almacenar el numero de intentos
        imagen: new Image().src = "https://static.wikia.nocookie.net/doblaje/images/9/9a/Elpadrino.jpg/revision/latest?cb=20170311061852&path-prefix=es",
        tipoImagen: "vertical"
    },
    {
        texto: 'Mi segunda película favorita es "American History X"',
        repeticiones: 0, //variable vacía para almacenar el numero de intentos
        imagen: new Image().src = "https://pics.filmaffinity.com/American_History_X-201185607-large.jpg",
        tipoImagen: "vertical"
    },
    {
        texto: 'Mi banda favoita es: ',
        repeticiones: 0, //variable vacía para almacenar el numero de intentos
        imagen: new Image().src = "https://i0.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/09/rust-in-peace-5cd5b40e937e4.jpg",
        tipoImagen: "cuadrada"

    }
];

let guardaArchivos = [] //acá se guardan los objetos que borro de "datos"


let pagFinal = document.getElementById("cuerpo").innerHTML = `

<div class="textoPrincipal"id="presentacion">

    <h3 class="texto" > Eso es todo. Tampoco soy tan interesante.</h3>

    </div>      
     

    <button onclick="reinicio_func()">Reiniciar</button>

       
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








