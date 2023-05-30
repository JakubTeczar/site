const display = document.querySelector("#displayy");
const wysokosc = document.querySelector("#wysokosc");
const szerokosc = document.querySelector("#szerokosc");
const kolor = document.querySelector("#kolor");
const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");

const flex = document.querySelector("#flex");
const flexGrow = document.querySelector("#flexGrow");
const flexShrink = document.querySelector("#flexShrink");
const order = document.querySelector("#order");
const alignSelf = document.querySelector("#alignSelf");

const justifyCenter = document.querySelector("#justifyCenter");
const justifyFlexEnd = document.querySelector("#justifyFlexEnd");
const justifyFlexStart = document.querySelector("#justifyFlexStart");
const justifySpaceBetween = document.querySelector("#justifySpaceBetween");
const justifySpaceAround = document.querySelector("#justifySpaceAround");


const alingStretch = document.querySelector("#alingStretch");
const alingFlexEnd = document.querySelector("#alingFlexEnd");
const alingFlexStart = document.querySelector("#alingFlexStart");
const alingCenter = document.querySelector("#alingCenter");
const alingRow = document.querySelector("#alingRow");
const alingColumn = document.querySelector("#alingColumn");

const pierwszy = document.querySelector("#pierwszy");
const drugi = document.querySelector("#drugi");
const trzeci = document.querySelector("#trzeci");
const guzik = document.querySelector("button");
let div = 1;
let stan = true;
let funkcje =0;

div1.addEventListener("change", function() {
    div=1;
    alignSelf.value ="";
    flexGrow.value="";
    flexShrink.value="";
    order.value="";
    flex.value="";
})
div2.addEventListener("change", function() {
    div=2;
    alignSelf.value ="";
    flexGrow.value="";
    flexShrink.value="";
    order.value="";
    flex.value="";
})

div3.addEventListener("change", function() {
    div=3;
    alignSelf.value ="";
    flexGrow.value="";
    flexShrink.value="";
    order.value="";
    flex.value="";
})
console.log(wysokosc.value)

wysokosc.addEventListener("change", function() {
   
    if(div==1){
        pierwszy.style.height = wysokosc.value;
    }
    else if(div==2){
        drugi.style.height = wysokosc.value;
    }
    else if(div==3){
        trzeci.style.height = wysokosc.value;
    }

})
szerokosc.addEventListener("change", function() {
   
    if(div==1){
        pierwszy.style.width = szerokosc.value;
    }
    else if(div==2){
        drugi.style.width = szerokosc.value;
    }
    else if(div==3){
        trzeci.style.width = szerokosc.value;
    }

})


display.addEventListener("change", function() {
if(funkcje==0){
 pojemnik.style.display ="flex";
 funkcje++;
}
else{
    pojemnik.style.display = "block";
    funkcje--;
}

})

alingStretch.addEventListener("change", function() {
    pojemnik.style.alignItems = "stretch";
})
alingFlexEnd.addEventListener("change", function() {
    pojemnik.style.alignItems = "flex-end";
})
alingFlexStart.addEventListener("change", function() {
    pojemnik.style.alignItems = "flex-start";
})
alingCenter.addEventListener("change", function() {
    pojemnik.style.alignItems = "center";
})
alingRow.addEventListener("change", function() {
    pojemnik.style.flexDirection = "row";
})
alingColumn.addEventListener("change", function() {
    pojemnik.style.flexDirection = "column";
})



justifyCenter.addEventListener("change", function() {
    pojemnik.style.justifyContent= "center";
})
justifyFlexEnd.addEventListener("change", function() {
    pojemnik.style.justifyContent= "flex-end";
})
justifyFlexStart.addEventListener("change", function() {
    pojemnik.style.justifyContent= "flex-start";
})
justifySpaceBetween.addEventListener("change", function() {
    pojemnik.style.justifyContent= "space-between";
})
justifySpaceAround.addEventListener("change", function() {
    pojemnik.style.justifyContent= "space-around";
})

flex.addEventListener("change", function() {

    if(div == 1){
    pierwszy.style.flex = flex.value;
    }
    else if(div == 2){
    drugi.style.flex = flex.value;   
    }
    else if(div == 3){
        trzeci.style.flex = flex.value;   
    }
})

flexGrow.addEventListener("change", function() {

    if(div == 1){
    pierwszy.style.flexGrow = flexGrow.value;
    }
    else if(div == 2){
    drugi.style.flexGrow = flexGrow.value;   
    }
    else if(div == 3){
        trzeci.style.flexGrow = flexGrow.value;   
    }
})

flexShrink.addEventListener("change", function() {

    if(div == 1){
    pierwszy.style.flexShrink = flexShrink.value;
    }
    else if(div == 2){
    drugi.style.flexShrink = flexShrink.value;   
    }
    else if(div == 3){
        trzeci.style.flexShrink = flexShrink.value;   
        }
})

order.addEventListener("change", function() {

    if(div == 1){
    pierwszy.style.order = order.value;
    }
    else if(div == 2){
    drugi.style.order = order.value;   
    }
    else if(div == 3){
        trzeci.style.order = order.value;   
        }
})
alignSelf.addEventListener("change", function() {

    if(div == 1){
    pierwszy.style.alignSelf = alignSelf.value;
    }
    else if(div == 2){
    drugi.style.alignSelf = alignSelf.value;   
    }
    else if(div == 3){
    trzeci.style.alignSelf = alignSelf.value;   
    }
        console.log(alignSelf.value)
})

guzik.addEventListener("click", function() {
   if(stan == true){
    pojemnik.style.width = "60vw"; 
    pojemnik.style.height = "45vw";
    pierwszy.style.flex = "1";
    drugi.style.flex = "1";
    trzeci.style.flex = "1";
    pierwszy.style.height = "100%";
    drugi.style.height = "100%";
    trzeci.style.height = "100%";
    
    document.querySelector("#sw").innerHTML="szerokosc automatyczna / wysokosc automatyczna";
    stan=false;
   }
   else if (stan == false) {
    pojemnik.style.width = "700"; 
    pojemnik.style.height = "500";
    document.querySelector("#sw").innerHTML="szerokosc 700px / wysokosc 500px";
    stan=true; 
   }

})