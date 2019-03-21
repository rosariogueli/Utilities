/**
 * @author Rosario Gueli <rosariogueli@hotmail.it>
 * @description: A nicely described and easy to read piece of code that transforms a Roman Number input into an integer.
 */

function easyRomanToInteger(input){
    // list of roman numbers and their values
    var romansPairs = {
            M: 1000,
            D: 500,
            C: 100,
            L: 50,
            X: 10,
            V: 5,
            I: 1
        },
        // split input into an array to loop from
        inputArr = input.split(''),
        result = 0;
    
    // loop into the 
    for(var i=0; i<inputArr.length; i++){
        // if current letter is smaller than next letter
    	if(romansPairs[inputArr[i]] < romansPairs[inputArr[i+1]]){
            // subtract from result
    		result = result - romansPairs[inputArr[i]];
        }
        // if current letter is bigger than next letter
        else{
            // add to result 
    		result += romansPairs[inputArr[i]];
        }
    }
    return result;
}

// usage: 
console.log(easyRomanToInteger('MCMLXI')); // results: 1961.