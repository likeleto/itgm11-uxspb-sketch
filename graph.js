//create group
myGroup = MSLayerGroup.new();
//rename group
myGroup.setName('graph');
//get all document symbols
var targetSymbols = context.document.documentData().allSymbols();
//iterate through all symbols
for (var j = 0; j < targetSymbols.count(); j++) {
  //get symbol by index
  var targetSymbol = targetSymbols.objectAtIndex(j);
  //check symbols name
  if (targetSymbol.name().isEqualToString("Bar")) {
    //iterate from 0 to 25
    for (var i = 1; i < 25; i++) {
      //create symbol instanse
      myInstance = targetSymbol.newSymbolInstance();
      //set x coordinate
      myInstance.frame().setX(i * 50);
      //set height
      //myInstance.frame().setHeight(Math.sin((i*180/25)*Math.PI/180)*100);
      myInstance.frame().setHeight(10 + Math.random() * 300);
      //set y coordinate
      myInstance.frame().setY(0 - myInstance.frame().height());
      //add symbol to group
      myGroup.addLayers([myInstance]);
    }
    //add group to document
    context.document.currentPage().addLayers([myGroup]);
    //update group size
    myGroup.resizeToFitChildrenWithOption(1);
  }
}
