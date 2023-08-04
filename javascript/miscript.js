const botonColor = document.querySelector('.cambio-fondo');
const body = document.querySelector('.fondopagina');
const contacto = document.querySelector('.contacto');
const navbar = document.querySelector('.navbar');

//colocar quuery selector para que cuando cambie de inicio a servicio o contacto
// si botoncolor es = a modo claro ---mantener a modo claro

function cambiarModo (){
    body.classList.toggle('clear-mode');
    
    if(body.classList.contains('clear-mode')){
        botonColor.innerText = 'Modo-Dia'
       
        
    }else{
        botonColor.innerText = 'Modo-Noche'
    }

    console.log(botonColor)
}


botonColor.addEventListener('click',cambiarModo)
contacto.addEventListener('click',cambiarModoPagina)


function cambiarModoPagina (){

    if(botonColor.value === 'Modo-Dia'){
        body.classList.contains = 'clear-mode' 
    }else{
        botonColor.innerText = 'Modo-Noche'
    }

}
