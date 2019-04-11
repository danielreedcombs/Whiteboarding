
// Fizz Buzz
for (i = 0 ; i < 101; i++) {
    if(i % 15 == 0)console.log("fizzBuzz");
    else if(i % 3 == 0)console.log("fizz");
    else if(i % 5 == 0)console.log("buzz");
    else console.log(i)
}

let numblist =[1,2,3,4,5,7,8,9,10]

// find missing integer in array
for (i = 0; i <= numblist.length ; i++){
    iplus = i + 1
    if (iplus == numblist[i]) console.log(numblist[i]);
    else if (iplus != numblist[i]){
        console.log("doesnt match", iplus)
        iplus = iplus + 1
    }
}

//  first non duplicate from a string
let str= "bbbbbbbbb4bbbb"
for(i = 0; i <= str.length; i++){
    if (str[i] != str[i-1])
    {console.log("different!", str[i])}
}

// counting vowels in a string

let vowelcounter = 0
let string = "hello my lady"

for (i= 0; i< string.length; i++){
    if (string[i] == "a" ||string[i] == "e" || string[i] == "i" || string[i] == "o" ||string[i] ==  "u" || string[i] == "y" ) {
        vowelcounter = vowelcounter + 1
        console.log(vowelcounter)}
    else {
        console.log("no vowels here")
    }
}

//  removing duplicates from an array

let duplicate = [1,1,1,2,3,4,5,6,7,8,8,8]
let noDuplicate= []
for (i=0; i < duplicate.length; i++){
    console.log("first loop", duplicate[i])
    for (i=0; i < duplicate.length; i++){
        console.log("second loop", duplicate[i])
    }
}