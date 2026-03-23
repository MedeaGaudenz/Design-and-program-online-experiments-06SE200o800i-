//5.1.1
// let age = 25;
// let ageGroup;
// if (age < 18) 
//     {ageGroup = 'Child';} 
// else 
//     {ageGroup = 'Adult';}
// console.log("ageGroup:", ageGroup)


//5.1.2
// let age = 25;
// let ageGroup = age < 18? `child`:`adult`; 
// console.log("ageGroup:", ageGroup);

//5.1.3
// let reactionTime =100;
// switch(true)
//             {case reactionTime <200 && reactionTime >0:
//                 console.log("Fast Response!");
//             break;
//             case reactionTime <= 500 && reactionsTime >=200:
//                 console.log("Moderate Response!");
//             break;
//             case reactionTime > 500:
//                 console.log("Slow Response.");
//             break;
//             default:
//                 console.log("Invalid");}

//5.1.4
// for (let i = 1; i < 6; i++) 
// {console.log("Number:" ,i);}

//5.1.5a
// const responseTimes=[350, 420, 510];
// for (const time of responseTimes)
//     {console.log("Response Time:", time);}
// ODER
// {console.log(`Response Time: ${time} ms`);}

//5.1.5b
// const trial = { id: 1, responseTime: 350, correct: true };
// for (const key in trial)
//     {console.log(`${key}: ${trial[key]}`);}

//5.1.6
//  let i=0;
//  while (i<5)
//  {console.log(`Number: ${i}`);i++;}
// ODER
// {console.log("Number:", i);i++;}

//5.1.7
// let i=0;
// do {console.log(`Number:${i}`);
//     console.log(i);
//     i++;
//     console.log(i);} while (i<5)
//ODER
//    do {console.log(`Number:${i}`);
//     i++;} while (i<5)     

//Functions I

// function checkEligibility(age, hasParticipatedBefore, hasNormalVision, hasCognitiveImpairment)
// {if (age >= 18 && age <=35 &&
//     !hasParticipatedBefore &&
//     hasNormalVision &&
//     !hasCognitiveImpairment)
//     {console.log("Participant eligible");} 
// else{console.log("Participant not eligible");}}

// checkEligibility(22,false,true,false)


//Functions II

// const checkEligibility = function(age, hasParticipatedBefore, hasNormalVision, hasCognitiveImpairment)
// {if (age >= 18 && age <=35 &&
//     !hasParticipatedBefore &&
//     hasNormalVision &&
//     !hasCognitiveImpairment)
//     {console.log("Participant eligible");} 
// else{console.log("Participant not eligible");}}

//Functions III

// const checkEligibility = (age, hasParticipatedBefore, hasNormalVision, hasCognitiveImpairment) =>
// {if (age >= 18 && age <=35 &&
//     !hasParticipatedBefore &&
//     hasNormalVision &&
//     !hasCognitiveImpairment)
//     {console.log("Participant eligible");} 
// else{console.log("Participant not eligible");}}

