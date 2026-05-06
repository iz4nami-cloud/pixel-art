const canvas = document.getElementById('myCanvas');
const nelson = canvas.getContext('2d');

nelson.fillStyle = 'blue';
nelson.strokeStyle = 'red';
nelson.lineWidth = 10;

nelson.fillRect(150,200,200,100);
nelson.strokeRect(150, 200, 200, 100);
nelson.clearRect(245,245,10,10)