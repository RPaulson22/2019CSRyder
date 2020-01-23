//challenge #1

console.log('the first challenge :0');
function centuryFromYear(year) {
    return Math.ceil(year/100)
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));

//challenge #2

console.log('the second challenge :0');
function reverse(message) {
    var reverseString = "";
    for(var i=message.length-1; i>=0; i--) {
        reverseString += message.charAt(i);
    }
    return reverseString;
}

console.log(reverse("hello"));
console.log(reverse("good"));
console.log(reverse("tacocat"));