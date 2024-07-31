
const routes = {
    "/" : homeRoute,
    "/about" : aboutRoute,
    "/command/:command" : commandRoute
}
window.routes = routes
function route(event,path){
    event.preventDefault();
    console.log(event)
    window.history.pushState({},"",path)
    handleLocation()
}

function handleLocation(){
    let location = window.location.pathname
    window.routes[location]();
    // console.log(window.location.pathname)
    // console.log(window.routes)

}
function homeRoute(){
     fetch("../../pages/home.html").then((res) => {
        return res.text()
    }).then(html => {
         document.getElementById('main').innerHTML = html;
    })
    document.querySelector('title').innerText = "CommandChi - کامندچی"


}

function aboutRoute(){
    fetch("../../pages/about.html").then((res) => {
        return res.text()
    }).then(html => {
        document.getElementById('main').innerHTML = html;
    })
    document.querySelector('title').innerText = "About - درباره"
}

function commandRoute(){

}

handleLocation(routes);
window.onpopstate = handleLocation;
