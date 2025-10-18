function travelAgency(managerName){
  console.log('Manager Name is ' + managerName);
  return function(){
    console.log('Manager %s is now transfered to city Delhi!',managerName);
  }
}

var transerCity = travelAgency("Manish Sharma");
//...5 lines
console.log(transerCity());