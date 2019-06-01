
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

let array = [1,2,3,4,5]

array.forEach(num =>{
    if(num != 3) console.log("chicken",num)
    else  console.log("monkey", num)
})

console.log(array)

array.push(6)
console.log(array)

// calculator +
let numberAdder = (addNum1,addNum2) =>{
    console.log("numbers being added", addNum1, "/", addNum2)
    let newNum = addNum1 + addNum2
    console.log(newNum)
}

numberAdder(2,4)


//  calculator *
function numberMultiplier(num1, num2) {
    newNum = num1* num2
    console.log(newNum)
}

// calculator /
let numberDivider = (num1, num2) => {
newNum = num1/num2
console.log(newNum)
}

numberDivider(10,2)

let garage = ["truck","garbage", "stuff to keep", "alien"]

let garageCleaner = (garage) => {
    // for (i=0; i< garage.length; i++){
    //     if(garage[i] === "truck" || garage[i] === "stuff to keep") console.log("dont throw out")
    //     else if (garage[i] == "garbage") console.log("toss it")
    //     else console.log("what is this?")
    // }
    garage.forEach(item =>{
        if (item == "truck" || item == "stuff to keep") console.log("dont throw out")
        else if(item == "garbage") console.log("toss it")
        else console.log("what is this?")
    })
}
garageCleaner(garage)


// string manipulator putting a space between each letter

let daniel = "daniel"

let spacer = (x) => {
    let newstringy = ""
        for(i =0; i <= x.length; i ++){
            letterWithSpace = x[i] + " "
            newstringy += letterWithSpace
        }
    return newstringy
}

spacer(daniel)

// cutting a middle letter out

let cutter = (x) => {
    let newword= ""
    for(i = 0 ; i <= x.length; i ++){
        if (x.length % i === 0  || x.length % i === .5 ) {
            console.log(x[i])
        }
        else {
            newword += x[i]
        }
    }
    return newword
}

cutter(daniel)

let listOfStuff = ["tony", "bill", "tiffany", "burt"]

let factcreator = (x) => {
    x.forEach((i)=> {
        console.log("person, ", i)
        console.log("length, ", i.length)
        console.log("type, ", typeof(i))
        if (i == "bill") {
            console.log("likes to party")
        }
        else{
            console.log("does NOT like to party")
        }
    })
}

factcreator(listOfStuff)


let names = "daniel"
let nameflipper = (x) => {
    let newname
        for(i = x.length; i>= 0 ; i--) {
            newname += x[i]
            console.log(x[i])
        }
    console.log(newname)
}

nameflipper(names)