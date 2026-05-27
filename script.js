let item-navs = document.querySelectorAll("item-nav");

item-navs.forEach(function(item){
    menu.addEventListener("click",function(){
        console.log("clicked");
    });
});