function noVowels(message) {
    var vowels = 'aeiou';
    var letter = "";
    for(var i=0; i < message.length; i++) {
        var currentLetter = message.charAt(i);
            if(vowels.indexOf(currentLetter) < 0) {
                letter += currentLetter;
            }
    }
    return letter
 
}
 
var x = 2;
var finLetter = ""
var currLetter = ""
function everyOther(message1, x) {
    for (var i=0; i < message1.length; i+=x) {
        currLetter = message1.charAt(i);
        finLetter += currLetter;
    }
    return finLetter;
}
 

message1 = "every other";
message = "Hello, how are you?";
console.log('The First Challenge My Dudes');
console.log(noVowels(message));
console.log('the Second Challenge My Dudes');
console.log(everyOther(message1, x));
