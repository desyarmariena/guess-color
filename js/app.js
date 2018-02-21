var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];

//ambil element div class square
var squares = document.querySelectorAll(".square");

var pickedColor = colors[3];
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
