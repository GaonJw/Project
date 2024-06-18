const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = 'red';
c.fillRect(0, 0, canvas.width, canvas.height);

c.fillStyle = 'black';
c.fillRect(100, 100, 100, 100);
