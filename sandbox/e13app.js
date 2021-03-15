printG();

var g = 3;
var x = 12;

printG();




function printG() {
    console.log("The value of g is: " + g);
}

function a() {
    var y = 15;
    console.log("a x:" + x);
    console.log("a y:" + y);
    // console.log("a z: ", z)

}

function b() {
    var z = 667;

    console.log("b x:" + x);
    // console.log("b y: " + y);
    console.log("b z: " + z)

    c();

    function c() {
        console.log("c z: " + z)
    }

}


console.log("Global x: " + x);
// console.log("Global y: " + y)
// console.log("Global z: " + z)

a();
b();

console.log("Window x: " + window.x);
