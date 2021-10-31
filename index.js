const img = new Image(); 

 


const imag1 = img.src = 'https://sites.google.com/site/informaticaprueba1emmanuel/_/rsrc/1395877037694/dohko-de-libra/hqdefault.jpg'

const imag2 = img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Mapa_CR.svg/1200px-Mapa_CR.svg.png"

const imag3 = img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Costa_Rica_on_the_globe_%28Americas_centered%29.svg/1024px-Costa_Rica_on_the_globe_%28Americas_centered%29.svg.png"

const imag4 = img.src = "Fotos/IMG_20210319_164635.jpg"

const imag5 = img.src = "https://www.tuguiasana.org/wp-content/uploads/2018/10/Fuente_de_Parque_Chacabuco-650x500.jpg" 

const imag6 = img.src = "https://contentv2.tap-commerce.com/cover/large/9789500396332_1.jpg?id_com=1113"

const imag7 = img.src = "https://www.penguinlibros.com/uy/239669-large_default/danza-de-dragones-5.jpg"

const imag8 = img.src = "https://www.educaciontrespuntocero.com/wp-content/uploads/2017/11/peliculas_prehistoria_destacada.jpg" 

const imag9 = img.src = "https://upload.wikimedia.org/wikipedia/commons/a/ab/Mate_pastor_ajedrez.gif"

const imag10 = img.src = "https://static.wikia.nocookie.net/doblaje/images/9/9a/Elpadrino.jpg/revision/latest?cb=20170311061852&path-prefix=es"

const imag11 = img.src = "https://pics.filmaffinity.com/American_History_X-201185607-large.jpg"

const imag12A = img.src = "https://i0.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/09/rust-in-peace-5cd5b40e937e4.jpg"

const imag12B = img.src = "https://heraldodemexico.com.mx/u/fotografias/m/2021/3/1/f608x342-328853_358576_0.jpg"

const imag12C = img.src = "https://img.discogs.com/zJZ1m-xOfqGS2Rmo7svcBHw1gsU=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-169325-1316298017.jpeg.jpg"

const imagFinal = img.src = "https://www.storyplot.com/wp-content/uploads/2015/06/ThatsALLjpg.jpg"


let bandasFavoritas = [

    { 
        texto: 'Megadeth',
        repeticiones: 0, //variable vacía para almacenar el numero de intentos
        imagen: imag12A
    },
    { 
        texto: 'Pink Floyd',
        repeticiones: 0, //variable vacía para almacenar el numero de intentos
        imagen: imag12B
    },
    { 
        texto: 'Outkast',
        repeticiones: 0, //variable vacía para almacenar el numero de intentos
        imagen: imag12C
    },

]


let datos =  [
    { 
    texto:'Tengo 25 años y cumplo el 04 de Octubre.',
    repeticiones: 0, //variable vacía para almacenar el numero de intentos
    imagen: imag1,
    tipoImagen : "horizontal"
    },
    { 
        texto:'Nací en Costa Rica',
        repeticiones: 0, //variable vacía para almacenar el numero de intentos
        imagen: imag2,
        tipoImagen : "cuadrada"
    },
    { 
        texto: 'Vivo solo, en Buenos Aires, en el barrio Parque Chacabuco.',
        repeticiones: 0, //variable vacía para almacenar el numero de intentos
        imagen: imag5,
        tipoImagen : "cuadrada"
    },
    { 
        texto: ' Mi libro favorito es "Hombres de Maíz" de Miguel Angel de Asturias',
        repeticiones: 0, //variable vacía para almacenar el numero de intentos
        imagen: imag6,
        tipoImagen : "vertical"
    },
    { 
        texto: 'Actualmente estoy leyendo el quinto libro de la Saga de "Canción de Hielo y Fuego" de George R.R. Martin.',
        repeticiones: 0, //variable vacía para almacenar el numero de intentos
        imagen: imag7,
        tipoImagen : "vertical"
    },
    { 
        texto: 'Sé tocar un poco la guitarra y tengo una banda llamada "Sidra"',
        repeticiones: 0, //variable vacía para almacenar el numero de intentos
       imagen: imag8,
       tipoImagen : "horizontal"
    },
    { 
        texto: 'Soy horrible jugando al ajedrez pero juego seguido.',
        repeticiones: 0, //variable vacía para almacenar el numero de intentos
        imagen: imag9,
        tipoImagen : "cuadrada"
    },
    { 
        texto: 'Mi película favorita es "El Padrino"',
        repeticiones: 0, //variable vacía para almacenar el numero de intentos
        imagen: imag10,
        tipoImagen : "vertical"
    },
    { 
        texto: 'Mi segunda película favorita es "American History X"',
        repeticiones: 0, //variable vacía para almacenar el numero de intentos
        imagen: imag11,
        tipoImagen : "vertical"
    },
    { 
        texto: 'Mi banda favoita es: ',
        repeticiones: 0, //variable vacía para almacenar el numero de intentos
        imagen: imag12A,
        tipoImagen : "cuadrada"
    
    }
];

let numerosUsados =  []



let mostrar = document.getElementById("mostrar")

const randomBtn = document.getElementById("random-btn")



function numRandom(){

    
    
    return  Math.floor( Math.random() * 10 )    
    
    
}



function renderTexto(){ //apertura funcion

    
    let num = numRandom() //para que las funciones tengan el mismo numero random


     if(datos[num].tipoImagen === "cuadrada"){
  
    document.getElementById("mostrar").innerHTML = `

    <h3 class="texto" >${datos[num].texto}</h3>
    
    <img class="cuadradra" src="${datos[num].imagen}" />
    
    `
    }else if (datos[num].tipoImagen === "vertical"){

  
        document.getElementById("mostrar").innerHTML = `
    
        <h3 class="texto" >${datos[num].texto}</h3>
        
        <img class="vertical" src="${datos[num].imagen}" />
        
        `

    
    }else{
    document.getElementById("mostrar").innerHTML = `
    
    <h3 class="texto" >${datos[num].texto}</h3>
    
    <img class="horizontal" src="${datos[num].imagen}" />
    
    `
  
    }
       
    
        

} //cierre de funcion




randomBtn.addEventListener("click", function() {

    document.getElementById("mostrar").innerHTML="";
    
    
    renderTexto()
   
    //datos[num].repeticiones += 1;
   
})

   

