a = 4;
console.log("a times b is", a * b);

function hello(firstname, lastname = "Norris") {
    console.log("Hello,", firstname, lastname);
}

function includesChar(s, c) {
    return s.includes(c) ? true : false;
}


function countA(s) {
    return countChar(s, "a");
}

function countChar(s, c) {
    c = "[" + c + "]";
    return (Array.from(s.matchAll(c))).length;
}

function isEmail(s) {
    // let re = new RegExp("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])");
    let re = new RegExp("[a-zA-Z0-9]*@[a-zA-Z0-9]*.[a-zA-Z]*")
    // (s.match(re)).length ? true : false;
    return re.test(String(s).toLowerCase());

}
