
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