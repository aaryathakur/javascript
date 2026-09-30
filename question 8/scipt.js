var input = document.querySelector("input");

var data=[
    {name:"princy" ,src: "https://images.unsplash.com/photo-1602615351449-d2e7dd117b5c?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  },
    {name:"prince"  , src:"https://images.unsplash.com/photo-1581516399438-a50b112e3105?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name:" inci"  , src: "https://images.unsplash.com/photo-1627402328166-bfc4a04f353a?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name:"insiya"  , src:"https://images.unsplash.com/photo-1563987219716-dac41f2d0b3a?q=80&w=2677&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name:"propo"  , src:"https://images.unsplash.com/photo-1581516399438-a50b112e3105?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name:"popi"  , src:"https://images.unsplash.com/photo-1627402328166-bfc4a04f353a?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  },
    {name:"puru"  , src:"https://images.unsplash.com/photo-1563987219716-dac41f2d0b3a?q=80&w=2677&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"purush"  , src:"https://images.unsplash.com/photo-1621190211224-e425068d3064?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
]

var pers = "";
data.forEach(function(elem){
    pers += `<div class="person">
    <div class="img">
        <img src="${elem.src}" alt="">
    </div>
    <h4>${elem.name} </h4>
</div>`;

})
document.querySelector(".people").innerHTML = pers;

input.addEventListener("input", function(){
    var newusers = ""; 
    var matching = data.filter(function(e){
        return e.name.startsWith(input.value)
    })
    matching.forEach(function(elem){
        newusers += `<div class="person">
        <div class="img">
            <img src="${elem.src}" alt="">
        </div>
        <h4>${elem.name} </h4>
    </div>`;
    
    })
    document.querySelector(".people").innerHTML = newusers;
})