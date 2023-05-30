var liczba_div=0;
var licznik_gry=0;
const latwy_div=9;
var l =1;

var start_muzyka = new Audio("start.mp3");
var yes = new Audio("yes.mp3");
var yes_1 = new Audio("yes_1.mp3");
var yes_2 = new Audio("yes_2.mp3");
var yes_3 = new Audio("yes_3.mp3");
var yes_4 = new Audio("yes_4.mp3");
var muzyka =[yes,yes_1,yes_2,yes_3,yes_4];


var no = new Audio("no.mp3");


const latwy_div_rozmiar=33;
const latwy_zycia=4;
var klikniete=[];
licznik_zyc=4;

const sredni_div=16;
const sredni_div_rozmiar=25;
const sredni_zycia=3;

const trudny_div=25;
const trudny_div_rozmiar=20;
const trudny_zycia=2;

const ekspert_div=25;
const ekspert_div_rozmiar=20;
const ekspert_zycia=0;
var ilosc_bialych=0;
var ilosc_czarnych=0;
var div_czarny1=0;

var losowanie_l_los = (Math.floor(Math.random()*2+4));


var losowanie_s_los = (Math.floor(Math.random()*4+5));


var losowanie_t_los = (Math.floor(Math.random()*3+7));

var losowanie_e = (Math.floor(Math.random()*25));
var losowanie_e_los = (Math.floor(Math.random()*7+7));
var czarne_divy =[];

function dodawanie_bialych()
{
	
	if(ilosc_bialych<=ilosc_czarnych)
	{
	ilosc_bialych=ilosc_bialych+1;
	alert(ilosc_bialych);
	}
	else
	{
		koniec ();
	}
}

function tworzenie_div(nr)
{
	var nr_nazaw =0;
	for(var i=0;i<nr;i++)
	{
		if(nr==9)
		{
		var div = $("<div>");
		div.attr("id", "jqery_made"+nr_nazaw);
		div.css("background", "white");
		div.css("display", "block");
		div.attr("onclick","dodawanie_klasy("+nr_nazaw+","+"false"+","+"false"+")");
		div.css("height", latwy_div_rozmiar+"%");
		div.css("width", latwy_div_rozmiar+"%");
		div.css("display", "inline-block");
		div.css("box-sizing", "border-box");
		div.css("border", "10px solid gray");
		
		}
		else if(nr==16)
		{
		var div = $("<div>");
		div.attr("id", "jqery_made"+nr_nazaw);
		div.css("background", "white");
		div.css("display", "block");
		div.attr("onclick","dodawanie_klasy("+nr_nazaw+","+"false"+","+"false"+")");
		div.css("height", sredni_div_rozmiar+"%");
		div.css("width", sredni_div_rozmiar+"%");
		div.css("display", "inline-block");
		div.css("box-sizing", "border-box");
		div.css("border", "10px solid gray");
		
		}
		else if(nr==25)
		{
		var div = $("<div>");
		div.attr("id", "jqery_made"+nr_nazaw);
		div.css("background", "white");
		div.css("display", "block");
		div.attr("onclick","dodawanie_klasy("+nr_nazaw+","+"false"+","+"false"+")");
		div.css("height", trudny_div_rozmiar+"%");
		div.css("width", trudny_div_rozmiar+"%");
		div.css("display", "inline-block");
		div.css("box-sizing", "border-box");
		div.css("border", "10px solid gray");
		
		
}
		
		$("#gra").append(div);
 		
		nr_nazaw= nr_nazaw +1;
		
		
	
	}

}

function kolorowanie_l (los)
{ 
var a =0;
	for(var i =0;i<=los;i++)
	{

		var losowanie_l = (Math.floor(Math.random()*9));
		$('#jqery_made'+losowanie_l).css("background","black");
	
		if(a==0){var div_czarny0=losowanie_l;document.getElementById("cz0").innerHTML =div_czarny0;czarne_divy.push(div_czarny0);}
		else if(a==1){var div_czarny1=losowanie_l;document.getElementById("cz1").innerHTML =div_czarny1;czarne_divy.push(div_czarny1);}
		else if(a==2){var div_czarny2=losowanie_l;document.getElementById("cz2").innerHTML =div_czarny2;czarne_divy.push(div_czarny2);}
		else if(a==3){var div_czarny3=losowanie_l;document.getElementById("cz3").innerHTML =div_czarny3;czarne_divy.push(div_czarny3);}
		else if(a==4){var div_czarny4=losowanie_l;document.getElementById("cz4").innerHTML =div_czarny4;czarne_divy.push(div_czarny4);}
		else if(a==5){var div_czarny5=losowanie_l;document.getElementById("cz5").innerHTML =div_czarny5;czarne_divy.push(div_czarny5);}
		else if(a==6){var div_czarny6=losowanie_l;document.getElementById("cz6").innerHTML =div_czarny6;czarne_divy.push(div_czarny6);}
		else if(a==7){var div_czarny7=losowanie_l;document.getElementById("cz7").innerHTML =div_czarny7;czarne_divy.push(div_czarny7);}
		else if(a==8){var div_czarny8=losowanie_l;document.getElementById("cz8").innerHTML =div_czarny8;czarne_divy.push(div_czarny8);}
		else if(a==9){var div_czarny9=losowanie_l;document.getElementById("cz9").innerHTML =div_czarny9;czarne_divy.push(div_czarny9);}
		else if(a==10){var div_czarny10=losowanie_l;document.getElementById("cz10").innerHTML =div_czarny10;czarne_divy.push(div_czarny10);}
		else if(a==11){var div_czarny11=losowanie_t;document.getElementById("cz11").innerHTML =div_czarny11;czarne_divy.push(div_czarny11);}
		else if(a==12){var div_czarny12=losowanie_t;document.getElementById("cz12").innerHTML =div_czarny12;czarne_divy.push(div_czarny12);}
		else if(a==13){var div_czarny13=losowanie_t;document.getElementById("cz13").innerHTML =div_czarny13;czarne_divy.push(div_czarny13);}
		else if(a==14){var div_czarny14=losowanie_t;document.getElementById("cz14").innerHTML =div_czarny14;czarne_divy.push(div_czarny14);}
		else if(a==15){var div_czarny15=losowanie_t;document.getElementById("cz15").innerHTML =div_czarny15;czarne_divy.push(div_czarny15);}
		else if(a==16){var div_czarny16=losowanie_t;document.getElementById("cz16").innerHTML =div_czarny16;czarne_divy.push(div_czarny16);}
		else if(a==17){var div_czarny16=losowanie_t;document.getElementById("cz17").innerHTML =div_czarny17;czarne_divy.push(div_czarny17);}
		else if(a==18){var div_czarny16=losowanie_t;document.getElementById("cz18").innerHTML =div_czarny18;czarne_divy.push(div_czarny18);}
		else if(a==19){var div_czarny16=losowanie_t;document.getElementById("cz19").innerHTML =div_czarny19;czarne_divy.push(div_czarny19);}
		else{}
		a=a+1;
	}
	
}
function kolorowanie_s (los)
{ 
var a=0;
	for(var i =0;i<=los;i++)
	{

		var losowanie_s = (Math.floor(Math.random()*16));
		$('#jqery_made'+losowanie_s).css("background","black");
		
		
		if(a==0){var div_czarny0=losowanie_s;document.getElementById("cz0").innerHTML =div_czarny0;czarne_divy.push(div_czarny0);}
		else if(a==1){var div_czarny1=losowanie_s;document.getElementById("cz1").innerHTML =div_czarny1;czarne_divy.push(div_czarny1);}
		else if(a==2){var div_czarny2=losowanie_s;document.getElementById("cz2").innerHTML =div_czarny2;czarne_divy.push(div_czarny2);}
		else if(a==3){var div_czarny3=losowanie_s;document.getElementById("cz3").innerHTML =div_czarny3;czarne_divy.push(div_czarny3);}
		else if(a==4){var div_czarny4=losowanie_s;document.getElementById("cz4").innerHTML =div_czarny4;czarne_divy.push(div_czarny4);}
		else if(a==5){var div_czarny5=losowanie_s;document.getElementById("cz5").innerHTML =div_czarny5;czarne_divy.push(div_czarny5);}
		else if(a==6){var div_czarny6=losowanie_s;document.getElementById("cz6").innerHTML =div_czarny6;czarne_divy.push(div_czarny6);}
		else if(a==7){var div_czarny7=losowanie_s;document.getElementById("cz7").innerHTML =div_czarny7;czarne_divy.push(div_czarny7);}
		else if(a==8){var div_czarny8=losowanie_s;document.getElementById("cz8").innerHTML =div_czarny8;czarne_divy.push(div_czarny8);}
		else if(a==9){var div_czarny9=losowanie_s;document.getElementById("cz9").innerHTML =div_czarny9;czarne_divy.push(div_czarny9);}
		else if(a==10){var div_czarny10=losowanie_s;document.getElementById("cz10").innerHTML =div_czarny10;czarne_divy.push(div_czarny10);}
		else if(a==11){var div_czarny11=losowanie_t;document.getElementById("cz11").innerHTML =div_czarny11;czarne_divy.push(div_czarny11);}
		else if(a==12){var div_czarny12=losowanie_t;document.getElementById("cz12").innerHTML =div_czarny12;czarne_divy.push(div_czarny12);}
		else if(a==13){var div_czarny13=losowanie_t;document.getElementById("cz13").innerHTML =div_czarny13;czarne_divy.push(div_czarny13);}
		else if(a==14){var div_czarny14=losowanie_t;document.getElementById("cz14").innerHTML =div_czarny14;czarne_divy.push(div_czarny14);}
		else if(a==15){var div_czarny15=losowanie_t;document.getElementById("cz15").innerHTML =div_czarny15;czarne_divy.push(div_czarny15);}
		else if(a==16){var div_czarny16=losowanie_t;document.getElementById("cz16").innerHTML =div_czarny16;czarne_divy.push(div_czarny16);}
		else if(a==17){var div_czarny16=losowanie_t;document.getElementById("cz17").innerHTML =div_czarny17;czarne_divy.push(div_czarny17);}
		else if(a==18){var div_czarny16=losowanie_t;document.getElementById("cz18").innerHTML =div_czarny18;czarne_divy.push(div_czarny18);}
		else if(a==19){var div_czarny16=losowanie_t;document.getElementById("cz19").innerHTML =div_czarny19;czarne_divy.push(div_czarny19);}
		else{}
		a=a+1;
	}
	
}
function kolorowanie_t (los)
{ 
var a=0;
	for(var i =0;i<=los;i++)
	{
        var losowanie_t = (Math.floor(Math.random()*25));
		$('#jqery_made'+losowanie_t).css("background","black");
		$('#jqery_made'+losowanie_t).click(function() {dodawanie_czarnych();})
		
		
			
		
		if(a==0){var div_czarny0=losowanie_t;document.getElementById("cz0").innerHTML =div_czarny0;czarne_divy.push(div_czarny0);}
		else if(a==1){var div_czarny1=losowanie_t;document.getElementById("cz1").innerHTML =div_czarny1;czarne_divy.push(div_czarny1);}
		else if(a==2){var div_czarny2=losowanie_t;document.getElementById("cz2").innerHTML =div_czarny2;czarne_divy.push(div_czarny2);}
		else if(a==3){var div_czarny3=losowanie_t;document.getElementById("cz3").innerHTML =div_czarny3;czarne_divy.push(div_czarny3);}
		else if(a==4){var div_czarny4=losowanie_t;document.getElementById("cz4").innerHTML =div_czarny4;czarne_divy.push(div_czarny4);}
		else if(a==5){var div_czarny5=losowanie_t;document.getElementById("cz5").innerHTML =div_czarny5;czarne_divy.push(div_czarny5);}
		else if(a==6){var div_czarny6=losowanie_t;document.getElementById("cz6").innerHTML =div_czarny6;czarne_divy.push(div_czarny6);}
		else if(a==7){var div_czarny7=losowanie_t;document.getElementById("cz7").innerHTML =div_czarny7;czarne_divy.push(div_czarny7);}
		else if(a==8){var div_czarny8=losowanie_t;document.getElementById("cz8").innerHTML =div_czarny8;czarne_divy.push(div_czarny8);}
		else if(a==9){var div_czarny9=losowanie_t;document.getElementById("cz9").innerHTML =div_czarny9;czarne_divy.push(div_czarny9);}
		else if(a==10){var div_czarny10=losowanie_t;document.getElementById("cz10").innerHTML =div_czarny10;czarne_divy.push(div_czarny10);}
		else if(a==11){var div_czarny11=losowanie_t;document.getElementById("cz11").innerHTML =div_czarny11;czarne_divy.push(div_czarny11);}
		else if(a==12){var div_czarny12=losowanie_t;document.getElementById("cz12").innerHTML =div_czarny12;czarne_divy.push(div_czarny12);}
		else if(a==13){var div_czarny13=losowanie_t;document.getElementById("cz13").innerHTML =div_czarny13;czarne_divy.push(div_czarny13);}
		else if(a==14){var div_czarny14=losowanie_t;document.getElementById("cz14").innerHTML =div_czarny14;czarne_divy.push(div_czarny14);}
		else if(a==15){var div_czarny15=losowanie_t;document.getElementById("cz15").innerHTML =div_czarny15;czarne_divy.push(div_czarny15);}
		else if(a==16){var div_czarny16=losowanie_t;document.getElementById("cz16").innerHTML =div_czarny16;czarne_divy.push(div_czarny16);}
		else if(a==17){var div_czarny16=losowanie_t;document.getElementById("cz17").innerHTML =div_czarny17;czarne_divy.push(div_czarny17);}
		else if(a==18){var div_czarny16=losowanie_t;document.getElementById("cz18").innerHTML =div_czarny18;czarne_divy.push(div_czarny18);}
		else if(a==19){var div_czarny16=losowanie_t;document.getElementById("cz19").innerHTML =div_czarny19;czarne_divy.push(div_czarny19);}
		else{}
		a=a+1;
		
	}
	
}

function usuwanie()
{
	$("#gra").empty();
}


function koniec()
{
	alert("Hello! I am an alert box!!");
}
function dodawanie_czarnych()
{
	
	
	
	
	  for (let a = -1; a < czarne_divy.length; a++) {
		  
       for (let i = -1; i < czarne_divy.length; i++) {
       
		if(czarne_divy[a]==czarne_divy[i] && a!=i){czarne_divy.splice(i,1);
		
			czarne_divy.sort();
			czarne_divy.filter(n =>{
										//FILTRUJE ODPOWIEDNIE ID
			return value= n<49;
			});
		
		}
          
        }
          
        }
		
		czarne_divy.filter(n =>{
		
		return value= n<40;
	});
	
		
 }
function zliczanie ()
{
	var licznik=0;
	for (let a = 0; a < czarne_divy.length; a++) {
		if(czarne_divy[a]==50){}
		else{
			licznik++;
			
			
		}
		
	}
	
	
	document.getElementById("cz20").innerHTML =licznik;
(licznik);
}	
function filtr()
{	

}

function dodawanie_klasy(a,fau,ff)
{ 
	
	
	licznik_gry=licznik_gry+1;
	klikniete.map(function(b){		//KLIKINIETE 
	if(a==b){
	fau=true;
	licznik_gry=licznik_gry-1;
	if(a!=b){}
	}
	});
	if(fau==false){
	licznik_gry=licznik_gry-1;
	$('#jqery_made'+a).css("background","white");
	}
	
	
	czarne_divy.map(function(x) {
	if(a==x&&fau==false)
							//JESLI TRAFILES W CZARNY 
	{
	licznik_gry=licznik_gry+1;
	$('#jqery_made'+a).css("background","black");
	klikniete.push(a);
	ff=true;
	
	}});
    if(licznik_gry==czarne_divy.length){;
	$('#jqery_made'+a).css("background","black");	//WYGRANA
	l=l+1;
	var muzyka_los=Math.ceil(Math.random()*4);
	muzyka[muzyka_los].play();
	setTimeout('auto(l)',500);
	}	
	if(ff==false&&fau==false){
	licznik_zyc=licznik_zyc-1;
	
	}
	if(licznik_zyc==0){no.play();lost()}   //PRZEGRANA
	document.getElementById("zycia_2").innerHTML =licznik_zyc;
	document.getElementById("rundy_2").innerHTML =l;	
}
function win()
{
	$('body,html').animate({scrollTop: 60}, 800);
	document.getElementById("pojemnik").innerHTML ="<div id="+"koniec"+">"+
	"! Wygrales brawo !<br>Ze stanem żyć "+licznik_zyc+"<a href="+"gra_kox.html"+">Zagraj ponownie</a></div>";
	
}
function lost()
{
	$('body,html').animate({scrollTop: 60}, 800);
	document.getElementById("pojemnik").innerHTML ="<div id="+"koniec"+">"+
	"Niestety przegrales<br><h2>Dotarłeś do rundy<span>    "+l+"</span></h2><a href="+"gra_kox.html"+">Zagraj ponownie</a></div>";
	
}
function auto(a)
{
switch (a) {
	case 1:
	start()
	a=a+1;
	break;
	case 2:
	latwy()
	break;
	case 3:
	latwy()
	break;
	case 4:
	sredni()
	break;
	case 5:
	sredni()
	break;
	case 6:
	sredni()
	break;
	case 7:
	trudny()
	break;
	case 8:
	trudny()
	break;
	case 9:
	trudny()
	break;
	case 10:
	trudny()
	break;
	case 11:
	trudny()
	break;
	case 12:
	ekspert()
	break;
	case 13:
	ekspert()
	break;
	case 14:
	ekspert()
	break;
	case 15:
	ekspert()
	break;
	case 16:
	ekspert()
	break;
	case 17:
	ekspert()
	break;
	case 18:
	win()
	break;
	
}
}

function zmiana ()
{
	for(var i=0;i<25;i++){
	
	$('#jqery_made'+i).css("background","#B8C8FF");
	}
	zaslona_p(1)
}
function kwadrat()
{
	$('#kwadrat').toggleClass('active');
	
}
function zaslona_p(a)
{
	$('.zaslona').css("height",a+"px");
}

$("#start").click(function(){
	
	kwadrat()
	setTimeout('auto(l)',2000);
	})

var z=1000;

function start(){
	
	zaslona_p(z)
	start_muzyka.play();
	$('body,html').animate({scrollTop: 260}, 800);
	usuwanie ()
	czarne_divy=[];
	licznik_gry=0;
	klikniete=[];
	tworzenie_div(latwy_div)
	kolorowanie_l (losowanie_l_los)
	zliczanie ()
	dodawanie_czarnych()
	zliczanie ()
	dodawanie_czarnych()
	setTimeout('zmiana()', 3900);
	
}
function latwy(){
	zaslona_p(z)
	usuwanie ()
	czarne_divy=[];
	licznik_gry=0;
	klikniete=[];
	tworzenie_div(latwy_div)
	kolorowanie_l (losowanie_l_los)
	zliczanie ()
	dodawanie_czarnych()
	zliczanie ()
	dodawanie_czarnych()
	setTimeout('zmiana()', 2000);
}

function sredni(){
	zaslona_p(z)
	usuwanie ()
	czarne_divy=[];
	licznik_gry=0;
	klikniete=[];
	tworzenie_div(sredni_div)
	kolorowanie_s (losowanie_s_los)
	zliczanie ()
	dodawanie_czarnych()
	zliczanie ()
	dodawanie_czarnych()
	setTimeout('zmiana()', 2000);
}
function trudny(){
	zaslona_p(z)
	usuwanie ()
	czarne_divy=[];
	licznik_gry=0;
	klikniete=[];
	tworzenie_div(trudny_div)
	kolorowanie_t (losowanie_e_los)
	zliczanie ()
	dodawanie_czarnych()
	zliczanie ()
	dodawanie_czarnych()
	setTimeout('zmiana()', 2300);
}
function ekspert(){
	zaslona_p(z)
	usuwanie ()
	czarne_divy=[];
	licznik_gry=0;
	klikniete=[];
	tworzenie_div(ekspert_div)
	kolorowanie_t (losowanie_e_los)
	zliczanie ()
	dodawanie_czarnych()
	zliczanie ()
	dodawanie_czarnych()
	setTimeout('zmiana()', 2450);
	
	
}











