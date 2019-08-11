let op1 = document.querySelector("#op1");
let op2 = document.querySelector("#op2");
let inventoryBtn = document.querySelector("#inventory");
let p = document.getElementsByTagName("p")[0];
let inventory = {
	weapons: [],
	potions: [],
	armour: []
};


let inv = "";

for(let element in inventory){
	inv = inv+"\r\n"+element+" "+inventory.element;
}

op1.addEventListener("click",function(){
	inventory.weapons.push("sword");
	p.textContent = "there are two doors out of the room,do you go left or right?";
	for(let element in inventory){
	inv = inv+"\r\n"+element+" "+inventory.element;
}
})

op2.addEventListener("click",function(){

	p.textContent = "there are two doors out of the room,do you go left or right?";
})



inventoryBtn.addEventListener("click",function(){
	tools.textContent = inv;
})








