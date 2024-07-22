const myCarouselElement = document.querySelector('#carousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: true,
  pause: "hover"
})

$("#btn_enviar").click(function(){
  alert("correo enviado")
})