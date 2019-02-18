window.onload = function () {
  // get the canvas and contest and store in vars
  var canvas = document.getElementById('sky');
  var ctx = canvas.getContext('2d');

  var W = window.innerWidth;
  var H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  //generate the snowflakes and apply attributes
  var mf = 100;
  var flakes = [];

  //loop through the empty flakes and apply attributes
  for (var i = 0; i < mf; i++) {
    flakes.push({
      x: Math.random().W,
      y: Math.random().H,
      r: Math.random() * 5 + 2, //min of 2px and max of 7px
      d: Math.random() + 1 //density of the flake
    });
  }

  //draw flakes onto canvas
  function drawFlakes() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    for (var i = 0; i < mf; i++) {
      var f = flakes[i];
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    moveFlakes();
  }

  //animate the flakes
  var angle = 0;

  function moveFlakes() {
    angle += 0.01;
    for (var i = 0; i < mf; i++) {
      //store current flake
      var f = flakes[i];

      //update X and Y coordinates of each snowflake
      f.y += Math.pow(f.d, 2) + 1;
      f.x += Math.sin(angle) * 2;

      //if the snowflake reaches the bottom, send a new one to the top
      if (f.y > H) {
        flakes[i] = {
          x: Math.random() * W,
          y: 0,
          r: f.r,
          d: f.d
        };
      }
    }
  }
};