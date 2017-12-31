function G() {
   this.fail = 'bad';
}

function F() { 
   this.test = 'ok';
}

F.prototype = G;
F.constructor = G;

var f = new F();  // Prints F

console.log(f);

f.prototype = G;  // Redefining f type info
f.constructor = G;

console.log(f);  // Prints G