var myItemsCollection = Alloy.Collections.item;

var myItem = Alloy.createModel('item' , {
	name : "bruschetta",
	description : "calda calda..",
	address : "vattelapesca 11 Milazzo"
});

myItemsCollection.add(myItem);
myItem.save();