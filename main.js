
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas')

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
	fabric.Image.fromURL(get_image, function(Img) {
		image_object = Img;
	
		image_object.scaleToWidth(700);
		image_object.scaleToHeight(510);
		image_object.set({
			top:block_y, 
			left:block_x
		})
		canvas.add(image_object);
		})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == 82)
	{
		new_image('rr1.png');
		console.log("r")
	}
	if(keyPressed == '71')
	{
		block_x = 150;
		new_image('gr.png');
		console.log("g")
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
		new_image('yr.png');
		console.log("y")
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
		new_image('pr.png');
		console.log("p")
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	// upload blue ranger
	new_image('br.png');
		console.log("g")
	}
	
}

