
  let keys = [13, 12, 13, 12, 13];
// Print the number which is repeated twice

    // Object created
    var obj = {};
    
    // Using loop to insert key
    // value in Object
    for(var i = 0; i < keys.length; i++){
      if(obj[keys[i]]==undefined){
        obj[keys[i]] = 1;
      }else{
        obj[keys[i]] = obj[keys[i]]+1;
      }
        // obj[keys[i]] = count++;
    }
    // Printing object
     for (var k of Object.keys(obj)) {
       if(obj[k]==2){
         console.log(k)
     }
    
    
}

  //end-here
