// find the second largest num in an array 
let Array = [4,3,66,444,3345,55543,9];
function secondLargest(Array){
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
   for(let i=0 ; i<Array.length ; i++){
    if (Array[i] > firstLargest){
        secondLargest = firstLargest;
        firstLargest = Array[i];
    }
    else if (Array[i]> secondLargest){
        secondLargest = Array[i];
    }
   }
   return { firstLargest,
            secondLargest,
         }
 }
 let result = secondLargest(Array);
 console.log(result);
 