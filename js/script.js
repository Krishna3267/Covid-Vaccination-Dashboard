console.log('s');

var preload=document.getElementById('preloader');
function preloadfunc(){

	preload.style.display = 'none';
}

function displayit(){

	def.style.display= 'block';
	q2.style.display= 'none';
	q3.style.display= 'none';
	q4.style.display= 'none';
	q1.style.display= 'none';
}

function displayit1(){


	
	q1.style.display= 'block';
	q2.style.display= 'none';
	q3.style.display= 'none';
	q4.style.display= 'none';
	def.style.display= 'none';

	

}

function displayit2(){
	q2.style.display= 'block';
	q1.style.display= 'none';
	q3.style.display= 'none';
	q4.style.display= 'none';
	def.style.display= 'none';

}

function displayit3(){
	q3.style.display= 'block';
	q1.style.display= 'none';
	q2.style.display= 'none';
	q4.style.display= 'none';
	def.style.display= 'none';

}

function displayit4(){
	q4.style.display= 'block';
	q1.style.display= 'none';
	q3.style.display= 'none';
	q2.style.display= 'none';
	def.style.display= 'none';

}

 

var x= document.getElementById("login");
		var y= document.getElementById("Register");
		var z= document.getElementById("bttn");

		function Register(){
			x.style.left= "-400px";
			y.style.left= "50px";
			z.style.left= "100px";


		}

		function login(){
			x.style.left= "50px";
			y.style.left= "450px";
			z.style.left= "0px";
	}


