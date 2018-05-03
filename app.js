
let rental = 400;
let groceries = 100;
let amountOwed;

let inputs = [{payer : "Sarah",
amount : rental,
debters: ["Alice", "John", "Bob", "Sarah"]
},

{payer : "John",
amount : groceries,
debters: ["Alice", "Bob"]
}
]

function transactions(){
  //grab the debters
  let debters = inputs[0].debters;
  let balanceSheet = {};

  for(let i = 0; i<inputs.length; i++){
    //divide the amount by the length of the debters array
    amountOwed = inputs[i].amount / inputs[i].debters.length;

    if(!balanceSheet[inputs[i].payer]){
      balanceSheet[inputs[i].payer] = inputs[i].amount;
    }
    //lets put our keys in an array
    let keys = Object.keys(balanceSheet);
    for (let k = 0; k < inputs[i].debters.length; k++) {
      //check if the payer is also a debter
      // we don't want to repeat sarah
      for(let m = 0; m < keys.length; m++){
        if( inputs[i].debters[k] === keys[m]){
          balanceSheet[inputs[i].payer] -= amountOwed
        }
      }
    }
  }

  //now lets print how much our payers are owed
  Object.keys(balanceSheet).forEach(function(key) {
    console.log(key, "is owed", balanceSheet[key]);
  });
  console.log(balanceSheet);
}



transactions();
