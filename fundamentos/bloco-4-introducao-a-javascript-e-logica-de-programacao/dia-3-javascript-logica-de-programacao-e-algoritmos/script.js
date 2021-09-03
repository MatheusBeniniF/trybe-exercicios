let n = 3;
let s = '*';
let space = ' ';
let p = n;

for(let i = 0; i < n; i += 1) {
   for(let j = 0; j <= n; j += 1) {
        if(j < p) {
            space = space + ' ';
         } 
        else {
            space = space + s;
        }
   }
   console.log(space);
   space = ' ';
   p -= 1;
};
