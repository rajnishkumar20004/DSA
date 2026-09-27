// basic syntax 
for (let i=0 ; i<3 ; i++){
    for (let j=i ; j>0; j--){
        console.log(i,j);
    }
}

// print a matrix pattern 3x4 of stars
for (let i=0; i<3 ;i++){
    let row="";
    for(let j=0;j<4;j++){
        row = row + "*";
    }
        console.log(row);
    
}

// print a star mountain 
for(let i=0;i<4;i++){
   let row = "";
   for(let j=0;j<i+1;j++ ){
    row = row + "*";
   }
   console.log(row);
}

// create a pattern of num

for(let i=1; i<6; i++){
    let row="";
    for(let j=1;j<=i;j++){
         row = row + j ;
    }
    console.log(row);
   }

// create a pattern 

for(let i= 1;i<6; i++){
    let row = "";
    for(let j=1; j<=i ; j++){
        row = row + i ;
    }
    console.log(row); 
}

// creating a pattern 
let n=6;
for(let i=1; i<n; i++){
    let row="";
    for(let j=1;j<n-i;j++){
        row=row+" ";
    }
    for(let k=1;k<=i;k++){
        row = row +"*";
    }
    console.log(row);
}

// printing a pattern
let p=5;
for(let i=0; i<p; i++ ){
row = "";
toggle=1; 
for (let j=0 ;j<i+1; j++ ){
    row = row + toggle;
    if(toggle == 1){
        toggle=0;
    }
    else{
        toggle=1;
    }
}
console.log(row);
}

// printing a pattern 
let q=5;
toggle=1;
for(let i=0; i<p; i++ ){
row = "";
for (let j=0 ;j<i+1; j++ ){
    row = row + toggle;
    if(toggle == 1){
        toggle=0;
    }
    else{
        toggle=1;
    }
}
console.log(row);
}