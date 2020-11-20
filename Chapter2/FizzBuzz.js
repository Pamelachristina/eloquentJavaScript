// Loop 100 times, starting from the number 1
/*for (let i = 0; i <= 100; i++) {
     // If divisible by 3 and 5,
    if (i % 3 === 0 && i % 5 === 0) {
        // print FizzBuzz.
        console.log("FizBuzz");
        
    }
    // If divisible by 3,
    else if (i % 3 === 0){
        console.log("Fizz");
    }
    else if (i % 5 === 0){
        console.log("Buzz");  
    }
    else{
        console.log(i); 
    }
    
    
    
    }*/
// Answer from Eloquent javascript
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}