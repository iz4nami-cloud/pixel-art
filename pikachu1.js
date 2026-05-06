const canvas = document.getElementById("miniPikachu");
const nelson = canvas.getContext("2d");

function act2(x, y, w, h, color) {
    nelson.fillStyle = color;
    nelson.fillRect(x, y, w, h);
}
//left ear
act2(20, 20, 10, 20, "yellow");

//right ear
act2(70, 20, 10, 20, "yellow");

//ear tips
act2(20, 20, 10, 5, "black");
act2(70, 20, 10, 5, "black");

//face
act2(25, 30, 50, 50, "yellow");

//eyes

act2(35, 45, 5, 5, "black");
act2(60, 45, 5, 5, "black");

// cheeks
act2(30, 55, 10, 10, "red");
act2(60, 55, 10, 10, "red");

//mouth
act2(47, 60, 6, 10, "black");