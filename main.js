
import {router} from "./assets/js/router.mjs"
import "./assets/css/prism.css"
import "./assets/css/style.css"

const links = document.querySelectorAll('a[data-nav]')
links.forEach((value, key) => {
    value.addEventListener('click',e =>{
        e.preventDefault();
        history.pushState({},"",value.href)
        router()
    })
})

document.addEventListener('DOMContentLoaded',router)
window.addEventListener('popstate',router)
router();