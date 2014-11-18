var order = process.argv[2];
var menu_item = order.toLowerCase();
	if (menu_item === "tofurkey" || menu_item === "fruit") 
		{
		console.log("This cuisine is vegan friendly!");
	}
	else
		{
		console.log("Vegan's beware!");
	}
