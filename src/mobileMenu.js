export default class mobileMenu {

    constructor() {
            console.log("mobileMenu")
            this.iconOpen=document.getElementById("mobOpen");
            this.iconClose=document.getElementById("mobClose");
            this.btn=document.getElementsByClassName("mob-menu")
            this.mobileNav=document.querySelector(".mobile-nav");
            this.iconOpen.addEventListener("click",this.open.bind(this));
            this.iconClose.addEventListener("click",this.close.bind(this));

        console.log(this.iconOpen)
    }
    open(){
        console.log(this.mobileNav);
        this.iconOpen.style.display = 'none';
        this.iconClose.style.display = 'block';
        this.mobileNav.style.display = 'block';
    }
    close(){
        this.iconClose.style.display = 'none';
        this.iconOpen.style.display = 'block';
        this.mobileNav.style.display = 'none';
    }
}