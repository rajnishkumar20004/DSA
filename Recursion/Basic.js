/*
Q) what is recursion ?
recursion is basically calling itself to solve smaller version of self
or
recursion is when a function call itself inside the function 
*/

/*
Q) how can we stop recurrsive function ?
it can done by using the base case where we clearly define in 
the very first starting of the function that when it will going to stop
*/

/*
Q) Basic questin when to use Recursion 
1. when the problem can be broken into sub problems.
2.The problem is kind of forming tree graph structure.
3.Back tracking , DP , Divide&conqueror.
*/

/*
Q) what are the two parts of the recursion ?
1. base case -- this is the stop condition (when to stop calling itself)
2.recursive case -- part where function calls itself.
*/

/* Q) what are the real life example of recursion
1.queue of people
2.comment trends
3.organised hierarchies
*/

/* Q) what is the syntax of a recursive function  
function unstoppable(num){
if (num>0) retun 0;
num = num -1;
unstoppable(num)
};
unstoppable(-1);    // it will form a infinite loop
*/

/* Q) what is a stack overflow ?
when the limit of the browser to handle function list gets exceeds
it leeds to stack overflow.(every browser has its own limits to store the function and solve 
them one after the other.)
// we can view it live on inspect>sources>files opened whrer you are running the code> callstack will be there
//infinite recursion leads to stack overflow
*/

/* Q)  use of debugger ?
it stops the code mid way after running once 
*/

/*Q) create a funcion to print n to 1 using recursion
function print(n){
if(n<=0) return;
console.log(n);
pint(--n);
};
let n=5;
print(n);
*/

/*Q) create a function to print 1 to n using recursion 
function print(n){
if(n>x) return;
console.log(n);
print (++n);
}
print(1);
*/