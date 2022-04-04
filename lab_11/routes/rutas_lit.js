let libros = ["Nostalgia de la muerte", "Altazor", "Poesía en movimiento", "Algo sobre la muerte del Mayor Sabines"];

const express = require("express");
const router = express.Router();

router.get('/', (require, response) =>{
    console.log('Route /');
    let respuesta = '<!DOCTYPE html><html lang="es-mx"> <head> <title>Laboratorio 11</title> <meta charset="utf-8"></meta> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> </head> <body class="mx-auto" style="width: 85%;"> <h1>Página principal</h1> <p>Esta es la página principal, ingrese alguna ruta como: </p><div class="list-group"> <a href="#" class="list-group-item list-group-item-action active" aria-current="true">/</a> <a class="list-group-item list-group-item-action">/libros</a> <a class="list-group-item list-group-item-action">/nostalgia</a> <a class="list-group-item list-group-item-action">/ruta</a> <a class="list-group-item list-group-item-action">/other</a> <a class="list-group-item list-group-item-action">/pregunta</a> </div><footer> <br><div class="mx-auto" style="width: 20%;"> <p>Erick Alfredo García Huerta | <a href="https://github.com/alfredohuerta/TC2005B-Lab" target="_blank">Github</a> </p></div></footer> </body></html>';
    response.send(respuesta);
});

router.get('/libros', (require, response) =>{
    console.log('Route /libros');
    let respuesta = '<!DOCTYPE html> <html lang="es-mx"> <head> <title>Laboratorio 10</title> <meta charset="utf-8"></meta> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> </head> <body class="mx-auto" style="width: 80%;"> <p class="text-center"><b>Laboratorio 10 | Erick Alfredo García Huerta</b></p><hr>' 
    for(let i in libros){
        respuesta += '<div classs="container"> <div class="row align-items-start"> <div class="card" style="width: 18rem;"> <img src="..." class="card-img-top" alt="..."> <div class="card-body"> <p class="card-text">' + libros[i] + '</p></div></div></div></div>';
    }
    respuesta += '<br><form action="/nuevo" method="POST"> <label for="nombre">Nombre del nuevo libro: </label> <input type="text" name="nombre" required> <input type="submit" value="Enviar"> </form> <footer> <br><div class="mx-auto" style="width: 20%;"> <p class="text-center">Erick Alfredo García Huerta | <a href="https://github.com/alfredohuerta/TC2005B-Lab" target="_blank">Github</a> </p></div></footer> </body></html>'
    response.send(respuesta);
});

router.get('/nostalgia', (require, response) =>{
    console.log('Route /nostalgia');
    let respuesta = '<!DOCTYPE html><html lang="es-mx"> <head> <meta charset="utf-8"> <title>Nostalgia</title> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> </head> <body class="mx-auto" style="width: 85%;"> <h3 class="text-center">Nocturno en que nada se oye</h3> <br><p class="text-center">En medio de un silencio desierto como la calle antes del crimen</p><p class="text-center">sin respirar siquiera para que nada turbe mi muerte</p><p class="text-center">en esta soledad sin paredes</p><p class="text-center">al tiempo que huyeron los ángulos</p><p class="text-center">en la tumba del lecho dejo mi estatua sin sangre</p><p class="text-center">para salir en un momento tan lento</p><p class="text-center">en un interminable descenso</p><p class="text-center">sin brazos que tender</p><p class="text-center">sin dedos para alcanzar la escala que cae de un piano invisible</p><p class="text-center">sin más que una mirada y una voz</p><p class="text-center">que no recuerdan haber salido de ojos y labios</p><p class="text-center">¿qué son labios? ¿qué son miradas que son labios?</p><p class="text-center">Y mi voz ya no es mía</p><p class="text-center">dentro del agua que no moja</p><p class="text-center">dentro del aire de vidrio</p><p class="text-center">dentro del fuego lívido que corta como el grito</p><p class="text-center">Y en el juego angustioso de un espejo frente a otro</p><p class="text-center">cae mi voz</p><p class="text-center">y mi voz que madura</p><p class="text-center">y mi voz quemadura</p><p class="text-center">y mi bosque madura</p><p class="text-center">y mi voz quema dura</p><p class="text-center">como el hielo de vidrio</p><p class="text-center">como el grito de hielo</p><p class="text-center">aquí en el caracol de la oreja</p><p class="text-center">el latido de un mar en el que no sé nada</p><p class="text-center">en el que no se nada</p><p class="text-center">porque he dejado pies y brazos en la orilla</p><p class="text-center">siento caer fuera de mí la red de mis nervios</p><p class="text-center">mas huye todo como el pez que se da cuenta</p><p class="text-center">hasta ciento en el pulso de mis sienes</p><p class="text-center">muda telegrafía a la que nadie responde</p><p class="text-center">porque el sueño y la muerte nada tienen ya que decirse.</p><p class="text-end"> Por: Xavier Villaurrutia</p><footer> <br><div class="mx-auto" style="width: 20%;"> <p>Erick Alfredo García Huerta | <a href="https://github.com/alfredohuerta/TC2005B-Lab" target="_blank">Github</a> </p></div></footer> </body></html>';
    response.send(respuesta);
});

module.exports = router;