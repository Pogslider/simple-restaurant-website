class Preload{

    constructor(){
        this.preload = document.querySelector('.preload');
        console.log(this.preload)
    }
    hide(){
        console.log(this)
        console.log('processing')
        this.preload.style.display = "none"
    }
}

export default Preload;