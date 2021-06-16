let snowflake_array=[];
let snowflake_array1 = [];
let snowflake1;


function setup() {
	var canvas = createCanvas(screen.width, screen.height);
  canvas.position(0,0);
  canvas.style("z-index", "-1")
	background(100);
	noStroke();
 snowflake1 = {
  xpos: random(0,500),
  ypos: 0,
  width: random(20, 150),
  size: random(10,50)
};
	
		
 snowflake2 = {
  xpos: random(0,500),
  ypos: 10,
  width: random(20, 150),
  size: random(10,50)
};
 snowflake3 = {
  xpos: random(0,500),
  ypos: 10,
  width: random(20, 150),
  size: random(10,50)
};
	
snowflake_array =[snowflake1, snowflake2, snowflake3];
	

	while (snowflake_array1.length < 100) {
	snowflake_array1.push({
  xpos: random(0,screen.width),
  ypos: random(-30, screen.height),
  speed: random(0.5,2),
  size: random(10,50)
	});
		
	}
}


function draw() {
	
	background(100);
	fill(255, 255, 255, 60);
	for(let i=0; i<snowflake_array1.length; i++) {
	
		ellipse(snowflake_array1[i].xpos, snowflake_array1[i].ypos, snowflake_array1[i].size, snowflake_array1[i].size);
		snowflake_array1[i].ypos += snowflake_array1[i].speed;
		if(snowflake_array1[i].ypos > screen.height) {
			snowflake_array1[i].ypos=-30;
	}
		
	}
	
	/*
	ellipse(snowflake1.xpos, snowflake1.ypos, snowflake1.size, snowflake1.size);
	snowflake1.ypos+=1;
	if (snowflake1.ypos > 500) {
		snowflake1.ypos=0;
	}
	*/
	
		
}
	
