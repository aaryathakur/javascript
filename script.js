//  1
// var btn = document.querySelector("button");
// var p = document.querySelector("p");
// btn.addEventListener("click", function(){
//     p.textContent = 'hey hello';
// })

// 2

// var img1 = document.querySelector("#one");
// var img1 = document.querySelector("#two");

// document.querySelector("button")
// .addEventListener("click", function(){
//     var src1 =img1.src;
//     var src2 = img2.src;

//     img1.src= src2;
//     img2.src = src1;

// })

// 3

// var form = document.querySelector("form");
// var inp1 = document.querySelector("#inp1");
// var inp2 = document.querySelector("#inp2");
// var h4 = document.querySelector("h4")

// form.addEventListener("submit" , function(ev){
//     ev.preventDefault();
//     if(inp1.value === '' || inp2.value === ''){
//         h4.textContent = "error, some fields are blank";
//         h4.style.color = "red";
//     }
//     else{
//         h4.textContent="";
//         h4.style.color="black";
//     }
// })

// or we can also write for not giving too much input

// var form = document.querySelector("form");
// var inps = document.querySelectorAll('input[type="text"]');
// var h4 = document.querySelector("h4");

// form.addEventListener("submit", function (ev) {
//     ev.preventDefault();
//     inps.forEach(function (inp) {
//         if (inp.value === '') {
//             h4.textContent = 'Error,some fields are empty';
//             h4.style.color = "red";
//         }
//         else {
//             h4.textContent = '';
//             h4.style.color = "black";
//         }

//     })
// })

// or also we can solve like

// var form = document.querySelector("form");
// var inps = document.querySelectorAll('input[type="text"]');
// var h4 = document.querySelector("h4");

// form.addEventListener("submit", function (ev) {
//     ev.preventDefault();
//     for (var i = 0; i < inps.length; i++) {
//         if (inps[i].value.trim() === '') {
//             h4.textContent = "Error, some fields are blank";
//             h4.style.color = "red";
//             break;
//         }
//     }
// })
