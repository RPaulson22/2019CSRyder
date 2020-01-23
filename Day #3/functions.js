console.log('The First Challenge My Dudes');

function noVowels(message) {
    var vowels = ["a", "e", "i", "o", "u"];
    var noVowels = "";
    for(var i=0; i>=message.length; i++) {
        noVowels += message.replace(vowels, "");
    }
    return noVowels;
}

message = "Hello, how are you?";
console.log(noVowels(message));
