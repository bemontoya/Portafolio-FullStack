"use strict";

const formulario = document.querySelector('#contact-form');
const nombre = document.querySelector('#name');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#message');
const resultado = document.querySelector('#form-status');

function mostrarError(campo, texto){
    campo.classList.add('invalido');
    const error = document.querySelector(`#error-${campo.id}`);
    if (error) {
        error.textContent = texto;
    }
}

function limpiarError(campo) {
  campo.classList.remove("invalido");
  const error = document.querySelector(`#error-${campo.id}`);
  if (error) {
    error.textContent = "";
  }
}

formulario.addEventListener("submit", function(evento) {
  const nombreValor = nombre.value.trim();
  const emailValor = email.value.trim();
  const mensajeValor = mensaje.value.trim();


  let formularioValido = true;


  if (nombreValor === "") {
    mostrarError(nombre, "Ingresa al menos un nombre.");
    formularioValido = false;
  } else {
    limpiarError(nombre);
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValor === "") {
    mostrarError(email, "El correo electrónico es requerido.");
    formularioValido = false;
  } else if (!emailRegex.test(emailValor)) {
    mostrarError(email, "Ingrese un formato de correo válido.");
    formularioValido = false;
  } else {
    limpiarError(email);
  }


  if (mensajeValor.length < 10) {
    mostrarError(mensaje, "Ingresa un mensaje con al menos 10 caracteres o más.");
    formularioValido = false;
  } else {
    limpiarError(mensaje);
  }


  if (!formularioValido) {
    evento.preventDefault();
    resultado.classList.remove("visible");
    return;
  }

 
  resultado.textContent = "Formulario válido. Enviando mensaje...";
  resultado.classList.add("visible");
});