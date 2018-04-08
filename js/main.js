const topics = {
    wind: {
        title: "Wind Energy",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et consectetur metus. Mauris quis nisl interdum, ullamcorper augue gravida, aliquam nisl. Phasellus sit amet urna ac lacus convallis mollis ac vel odio. Mauris ac nibh ligula. Pellentesque et libero id diam sagittis egestas. ",
        image:"img/wind.jpg"
    },
    solar: {
        title: "Solar Energy",
        text: "Nullam viverra vehicula lacus, consectetur tristique tortor malesuada vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam efficitur augue id justo efficitur, id molestie nulla accumsan. Nullam imperdiet risus vitae mauris luctus hendrerit. Praesent ut lorem risus", 
        image:"img/solar.jpg"
    },
    water: {
        title: "Water Energy",
        text: "Morbi sollicitudin, erat nec finibus fermentum, dui lectus volutpat lorem, non gravida orci erat nec leo. Quisque vestibulum dictum ligula, mollis accumsan mi sagittis molestie. Donec ac nunc eu purus auctor volutpat sed quis nisl. Praesent volutpat enim ac lorem sagittis, id gravida augue venenatis. Donec pharetra ut lacus eget gravida. Duis et purus ligula. " ,
        image:"img/water.jpg"
    }
};


// try to access a property of topics-object first with dot, and then with bracket syntax

const buttons = document.querySelectorAll(".buttons button");
const article = document.querySelector("article");

function loadContent(ev) {
    let clickedBtn = ev.target;
    let key = clickedBtn.getAttribute("data-content");
    
    article.innerHTML = "";
    
    
   /* while(article.firstChild) {
        // Reference: 
        // https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove 
        // https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild
         
        article.firstChild.remove();
    }
    */
    
    /*
    // Reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
    article.innerHTML = `<h2>${topics[key].title}</h2>`; 
    */
    
    let h2 = document.createElement("h2");
    h2.textContent = topics[key].title;
    article.appendChild(h2);
    
    
    let p = document.createElement("p");
    p.textContent = topics[key].text;
    article.appendChild(p);
    
    let img = document.createElement("img");
    img.setAttribute("src", topics[key].image );
    article.appendChild(img);

    
    
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", loadContent);
}