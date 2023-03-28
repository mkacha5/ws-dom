
var btns = document.querySelectorAll(".btn-danger");
console.log("btns avant", btns);
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    //alert("helloo")
    //let text = prompt("What's your name?");
    //console.log(text)
    if (confirm("Are you sure you want to proceed?")) {
      console.log(btns[i].parentNode.parentNode.remove());
      //console.log("btns apres",btns)
    } else {
      return;
    }
  });
}

var hearts = document.querySelectorAll(".fa-heart");
for (const heart of hearts) {
  heart.addEventListener("dblclick", function () {
    /* if(heart.style.color=='red'){
        heart.style.color='black'
        heart.style.fontSize='16px'
      }
      else{
       heart.style.color='red';
       heart.style.fontSize='30px'}*/
    heart.classList.toggle("fa-red");
  });
}

//modif quantities

var btnPluss = document.querySelectorAll(".plus");
console.log(btnPluss);

for (const btnPlus of btnPluss) {
  btnPlus.addEventListener("click", function () {
    btnPlus.nextElementSibling.innerHTML++;
    total();
  });
}

var btnMinuss = document.querySelectorAll(".minus");
console.log(btnMinuss);
for (const btnMinus of btnMinuss) {
  btnMinus.addEventListener("click", function () {
    if (btnMinus.previousElementSibling.innerHTML > 0) {
      btnMinus.previousElementSibling.innerHTML--;
      total();
    } else {
      alert("oupps");
    }
  });
}

// prix total

function total() {
  var prixUnits = document.querySelectorAll(".price");
  var qtes = document.querySelectorAll(".qte");
  var sum = 0;
  for (let i = 0; i < qtes.length; i++) {
    sum = sum + qtes[i].innerHTML * parseInt(prixUnits[i].innerHTML);
  }
  console.log(sum);

document.getElementById("tot").innerHTML="Total:"+sum+"dt"
}