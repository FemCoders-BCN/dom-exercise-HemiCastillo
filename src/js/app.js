document.addEventListener("DOMContentLoaded", function () {
    
    document.querySelector(".red").addEventListener("click", function () {
      // cambia la imagen del coche
      document.querySelector(".product-image").style.backgroundImage = "url('./public/img/redcar.jpg')";
  
      // cambia el color de fondo del texto "CARRO"
      document.querySelector(".tag").style.backgroundColor = "red";
  
      // cambia el color de fondo del texto "Agregar al carrito"
      document.querySelector("#button").style.backgroundColor = "red";
  
      // cambia el color de los iconos
      document.querySelectorAll(".fa-car, .fa-gas-pump, .fa-shield").forEach(function (icon) {
        icon.style.color = "red";
      });
    });
  
    // lo mismo pero con el negro y el grus
    //configuracion para el negro
    document.querySelector(".black").addEventListener("click", function () {
      document.querySelector(".product-image").style.backgroundImage = "url('./public/img/blackcar.jpg')";
      document.querySelector(".tag").style.backgroundColor = "black";
      document.querySelector("#button").style.backgroundColor = "black";
      document.querySelectorAll(".fa-car, .fa-gas-pump, .fa-shield").forEach(function (icon) {
        icon.style.color = "black";
      });
    });
  
    //configuracion para el gris
    document.querySelector(".gray").addEventListener("click", function () {
      document.querySelector(".product-image").style.backgroundImage = "url('./public/img/graycar.jpg')";
      document.querySelector(".tag").style.backgroundColor = "gray";
      document.querySelector("#button").style.backgroundColor = "gray";
      document.querySelectorAll(".fa-car, .fa-gas-pump, .fa-shield").forEach(function (icon) {
        icon.style.color = "gray";
      });
    });
  
  });
  