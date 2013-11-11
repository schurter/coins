// JavaScript Document
onload=init;
//create an array to keep track of coins currently in play
var coin_array = new Array();

function init() {
	for (var i=0; i<20; i++){
		//make an object based on the Coin Class:
		var anothercoin = new Coin();
		anothercoin.create();
		//put that new coin in the array
		coin_array.push(anothercoin);
		//when the new coin is clicked, use its built-in destroy() function, passing the event
		anothercoin.item_on_page.onclick = function(e){
			anothercoin.destroy(e);
		}//end event handler
	}//close FOR LOOP
}//close INIT
//let's make a Class (blueprint) for each coin we generate
function Coin(){
	this.x; //starts empty, will keep track of each coin's left-right position
	this.y; //starts empty, will keep track of each coin's up-down position
	this.item_on_page;
	/** function does lots of things when a coin gets created on the page
	*
	*/
	this.create = function(){
		//make a section element in the HTML, store it into the item-on-page we set up above.
		this.item_on_page = document.createElement("section");
		//store a random x and y position, different for each coin. I'm using screen width or 500, height of 300:
		this.x = Math.floor(Math.random()*500);
		this.y = Math.floor(Math.random()*300);
		//use those x and y coordinates in the CSS to position the coins:
		this.item_on_page.style.left = this.x + "px";
		this.item_on_page.style.top = this.y + "px";
		//attach the item to our HTML hierarchy, as a child of the body:
		document.getElementsByTagName("body")[0].appendChild(this.item_on_page);
	}
	/** function does lots of things when a coin is removed from the page
	*
	*/
	this.destroy = function(e){
		//console.log("destroyed");
		document.getElementsByTagName("body")[0].removeChild(e.target);
		//figure out that coin's position in the array:
		var this_coins_index_num = coin_array.indexOf(this);
		//splice it out of the array
		coin_array.splice(this_coins_index_num,1);
		//console.log(coin_array.length);
	}
} //close the Class