//variable untuk menampung tipe game, easy/hard
var numSquares = 6;
//variable untuk menampung warna random sebanyak n
var colors = [];
//mendapatkan warna pilihan sebagai jawaban
var pickedColor;

//ambil element div class square
var squares = document.querySelectorAll(".square");
//ambil span di h1
var colorDisplay = document.getElementById("colorDisplay");
//ambil span di nav
var messageDisplay = document.getElementById("message");
//ambil h1
var h1 = document.querySelector("h1");
//ambil button reset
var resetButton = document.getElementById("reset");
//ambil button mode (easy/hard)
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButton();
	setupSquares();
	reset();
}

//mengubah semua warna jika button reset diklik
resetButton.addEventListener("click", function(){
	reset();
});

function setupModeButton(){
	//memilih tipe permainan/mode buttons
	for(var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	//event listener untuk squares
	for (var i=0; i<squares.length; i++){
		//event jika square diklik
		squares[i].addEventListener("click", function(){
			//mendapatkan warna di square yang diklik
			var clickedColor = this.style.backgroundColor;
			//membandingkan warna
			//jika warna cocok, tampilkan pesan Correct
			//jika salah, tampilkan pesan Try Again
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again?";
				//mengubah semua warna square menjadi warna yang benar
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else{
				//ubah warna menjadi sama dengan background, "fade out"
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset(){
	//generate warna baru
	colors = generateRandomColors(numSquares);
	//mendapatkan warna pilihan sebagai jawaban
	pickedColor = pickColor();
	//mengubah colorDisplay sesuai dengan jawaban rgb
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}		
	}
	//reset tulisan dan warna
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
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