import Preload from "./preload.js";
import 'reset-css';


import '../css/style.css';
import swiper from "./swiper";
import mobileMenu from "./mobileMenu";

const mMenu= new mobileMenu()

document.addEventListener("DOMContentLoaded", ()=>{
    const spinner = new Preload();
    spinner.hide()
})

