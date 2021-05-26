
// function timeCorrect (timeAsString) {
//     let splittedTime = timeAsString.split(":");
//     let ss = Number(splittedTime[2]);
//     let mm = Number(splittedTime[1]);
//     let hh = Number(splittedTime[0]);
//     if (ss > 60) {
//         mm = ~~(ss / 60) + mm;
//         ss = ss % 60;
//     }
//     if (mm > 60) {
//         hh = ~~(mm / 60) + hh;
//         mm = mm % 60;
//     }
//     if (hh > 24) {
//         hh = hh % 24;
//     }
//     console.log(`${hh}:${mm}:${ss}`);
// }
// timeCorrect('53:80:01');


// let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// function solvedString () {
//     let string = prompt("Введите строку");
//     let userNumber = Number(prompt("Введите число"));
//     let lowerCaseString = string.toLowerCase();
//     let splittedString = lowerCaseString.split("");
//     let counter = 0;
//     let alphabetIterator = 0; 
//     for (let i = 0; i < splittedString.length && counter < userNumber; i++) {
//         console.log(userNumber > counter);
//         if ( splittedString[i] == alphabet[alphabetIterator]) {
//             counter++;
//             splittedString[i] = null;
//         }
//         console.log("counter: ", counter);
//         console.log("userNumber: ", userNumber);
//     }
//     splittedString = splittedString.filter(element => element != null);
//     console.log(splittedString.join());
// }
// solvedString();



