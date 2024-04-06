// console.log(0.1 + 0.2 === 0.3);
// console.log(1 + 2 === 3);
var records = 100000;

var statusArray = ["A","P","D"];
var warehouseArray = ["A","B","C"];
var productArray = ["register", "book", "sheet", "timeTable", "book"];

while(records > 0){
	var doc = {
		product:productArray[Math.floor(Math.random() * Math.floor(5))],
		status:statusArray[Math.floor(Math.random() * Math.floor(3))],
size:{
	height:Math.floor(Math.random()*50) + 1,
	weight:Math.floor(Math.random()*50) + 1,
	unit:"cm"
},
instock:[
{
	warehouse:warehouseArray[Math.floor(Math.random() * Math.floor(3))],
	quantity:Math.floor(Math.random()*1000) + 1
}
]
};

	db.largecollectionfromindex.insertOne(doc);
	records--;
}
// db.largecollectionforindex.find().count()