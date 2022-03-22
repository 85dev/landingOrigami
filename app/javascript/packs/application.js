// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import "stylesheets/application";
import "@lottiefiles/lottie-player";


document.addEventListener('turbolinks:load', () => {

    function addEventListenerList(list, event, fn) {
        for (var i = 0, len = list.length; i < len; i++) {
            list[i].addEventListener(event, fn, false);
        }
    }

    const click = document.querySelector('.menu-path');
    const dropdown = document.querySelector('.responsive-menu');

    click.addEventListener('click', () => {
        dropdown.classList.toggle('newlist');
    })

    const buttonNewsletter = document.querySelectorAll(".first");
    const buttonBeta = document.querySelectorAll('.second');
    const formBeta = document.querySelector('.form-group');
    const formNewsletter = document.querySelector('.form-group-news');


    addEventListenerList(buttonNewsletter, 'click', () => {
        if (formNewsletter.style.display == 'none') {
            formNewsletter.style.display = "flex";
            buttonBeta.style.display = "none";
        } else if (formBeta.style.display == 'flex' || formNewsletter.style.display == 'none') {
            formNewsletter.style.display = "flex";
            buttonBeta.style.display = "block";
            formBeta.style.display == 'none';
        } else {
            formNewsletter.style.display = "none";
            buttonBeta.style.display = "block";
        }
    })

    addEventListenerList(buttonBeta, 'click', () => {
        if (formBeta.style.display == 'none') {
            formBeta.style.display = "flex";
            buttonNewsletter.style.display = "none";
            formNewsletter.style.display = "none";
        } else if (formNewsletter.style.display == 'flex' || formNewsletter.style.display == 'none') {
            formNewsletter.style.display = "none";
            formBeta.style.display = "flex";
            buttonNewsletter.style.display = "none";
        } else {
            formBeta.style.display = "none";
            buttonNewsletter.style.display = "block";
        }
    })
})

