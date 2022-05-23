// var mystring = prompt();
// var arrayHelp = [];
// function Words(longString) {
//   var spaceCounter = 0;
//   for (i = 0; i < longString.length; i++) {
//
// --הניסיון שלי על פתרון של יעקב
/*if (longString[0] == " ") {
      longString.substr(0, 1);
      i--;
    } else if (longString[longString.length - 1] == " ") {
      longString.substr(longString.length - 1, 1);
      i--;
    } else if (longString[i] == " " && longString[i + 1] != " ") {
      spaceCounter++;
    } else if (longString[i] == " " && longString[i + 1] == " ") {
      longString.substr(i + 1, 1);
      i--;
    }*/
//
//--הפיתרון של יעקב
//     if (longString[i] == " ") {
//       spaceCounter++;
//     }
//   }
//   if (spaceCounter >= 1) {
//     if (spaceCounter >= 2) {
//       if (spaceCounter > 2) {
//         return "to many spaces";
//       }
//       return longString;
//     }
//     arrayHelp.push(longString.slice(0, i));
//     arrayHelp.push(longString.slice(i));
//     return arrayHelp;
//   }
//   return longString[0].toUpperCase()+longString.slice(1);
// }
//
//--השיטה שלי
/*var longStringoriginalLength = true;
  for (i = 0; i < longString.length; i++) {
    if (longString[i] == " ") {
      if (longString[i + 1] != " ") {
        longStringoriginalLength = false;
        for (j = i + 1; j < longString.length; j++) {
          if (longString[j] == " " && longString[j + 1] != " ") {
            return longString;
          } else if (longString[j] == " " && longString[j + 1] == " ") {
            longString.splice(j, 1);
            j--;
          } else if (j == longString.length - 1) {
            arrayHelp.push(longString.slice(0, i));
            arrayHelp.push(longString.slice(i));
            return arrayHelp;
          }
        }
      } else {
        longString.splice(i, 1);
        i--;
      }
    }
  }
  if (longStringoriginalLength == true) {
    longString[0].toUpperCase();
    return longString;
  }
 }*/
// console.log(Words(mystring));

// function randomNum(){
//     var firstname= prompt()
//     var firstname2= prompt()
//     var age= +prompt()
//     var age2= +prompt()
//     if(firstname[0].toLowerCase==firstname2[0].toLowerCase){
//         console.log(Math.floor(math.random()*100))
//     }
//     if(firstname[firstname.length-1].toLowerCase==firstname2[firstname2.length-1].toLowerCase){
//         alert(firstname2[firstname2.length-1])
//     }
//     else{
//         console.log( age + age2)
//     }
// }

// function evenString(UserString) {
//   var helper = "";
//   for (var i = 0; i < UserString.length; i++) {
//     if (i % 2 == 0) {
//       helper += "2";
//     } else {
//       helper += UserString[i];
//     }
//   }
//   return helper;
// }
// console.log(evenString("hello"));

// function fromStrToArray(str) {
//     var arrayStr= []
//     var helper =0
//     for(i=0;i<str.length;i++){
//         if(str[i]==","){
//             arrayStr.push(str.slice[helper,i])
//             helper=i+1
//         }
//         else if(i==str.length-1){
//             arrayStr.push(str.slice[helper,i])
//         }
//     }
//     return arrayStr
// }
// console.log(fromStrToArray("12,3,455"))

// function trueIfItsE() {
//     var words=prompt();
//     if(words[words.length-1]=="E"){
//         return console.log("yes")
//     }
//     else{
//         return console.log("no")
//     }
// }
// function jsString3B() {

// }
