var colors = generateRandomColors(6);

//ambil element div class square
var squares = document.querySelectorAll(".square");
//mendapatkan warna pilihan sebagai jawaban
var pickedColor = pickColor();
//ambil span di h1
var colorDisplay = document.getElementById("colorDisplay");
//ambil span di nav
var messageDisplay = document.getElementById("message");


colorDisplay.textContent = pickedColor;
//memberi warna ke square div
for (var i=0; i<squares.length; i++){
	//inisialisasi warna awal ke square div
	squares[i].style.backgroundColor = colors[i];

	//event jika square diklik
	squares[i].addEventListener("click", function(){
		//mendapatkan warna di square yang diklik
		var clickedColor = this.style.backgroundColor;
		//membandingkan warna
		//jika warna cocok, tampilkan pesan Correct
		//jika salah, tampilkan pesan Try Again
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			//mengubah semua warna square menjadi warna yang benar
			changeColors(clickedColor);
		}
		else{
			//ubah warna menjadi sama dengan background, "fade out"
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

//fungsi untuk mengubah semua warna square menjadi warna tertentu
function changeColors(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}	
}

//fungsi untuk random warna dari array colors sebagai warna terpilih/jawaban
function pickColor(){
	//mendapat nilai acak dari 0 - 5
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//fungsi untuk membuat 6 warna random
function generateRandomColors(num){
	//make an array
	var arr = [];
	//ulang sebanyak num kali
	for(var i=0; i<num; i++){		
		//mendapatkan warna random dan push ke array
		arr.push(randomColor());
	}
	//sudah generate 6 warna random, return value
	return arr;
}

function randomColor(){
	//random warna "red" dari 0 - 255
	var r = Math.floor(Math.random() * 256);
	//random warna "green" dari 0 - 255
	var g = Math.floor(Math.random() * 256);
	//random warna "blue" dari 0 - 255
	var b = Math.floor(Math.random() * 256);
	//sudah mendapatkan full rgb, return value
	return "rgb("+r+", "+g+", "+b+")";
}