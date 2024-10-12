import {match} from "path-to-regexp"

function about(pathData){
    document.querySelector('title').innerText = "About | درباره"
    fetch("/pages/about.html").then(response => {return response.text()} ).then(text =>{
        document.getElementById('main').innerHTML = text
    })
}

function command(pathData){
    console.log(pathData["params"]['id'])
}

function home(pathData){
    document.querySelector('title').innerText = "CommandChi | کامند چی"
    fetch("/pages/home.html").then(response => {return response.text()} ).then(text =>{
        document.getElementById('main').innerHTML = text
    })
}
export let routes = {
    '/' : 'home',
    '/command/:id' : 'command',
    '/about' : "about"

}

export function router(){
    const currentRoute = location.pathname;
    for (const routesKey in routes) {
        let fn = match(routesKey)
        if (fn(currentRoute)){
            eval(routes[routesKey]+'(fn(currentRoute))')
        }
    }
}

