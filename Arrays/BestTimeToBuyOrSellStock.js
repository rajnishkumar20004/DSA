//can be solved by brute force but it will be the worst way (running two loops checking all possible pairs)
//But we will try to solve it by using at most 1 loop and some variable.

 function BestTimeToBuySellandStock(prices){
   let min = prices[0];
   let maxprofit=0;
   
   for(i=0;i<prices.length;i++){
    if(prices[i]-min > maxprofit){
        maxprofit = prices[i]-min;
    }
    if(prices[i]<min){
        min=prices[i];
    }
  }
  return maxprofit;
};

let res=BestTimeToBuySellandStock([7,1,5,3,6,4]);
console.log(res);

