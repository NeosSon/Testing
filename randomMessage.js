//random number from 0-4 inclusive.
/*let randNum = Math.floor(Math.random() * 5)
let message = ""
switch (randNum) {
    case 0:
        message = "When you feel like giving up, remember why you held on for so long in the first place. Paulo Coelho"
        break;
    case 1:
        message = "You can win a lot in life just by being the last one to give up. James Clear"
        break;
    case 2:
        message = "One day, in retrospect, the years of struggle will strike you as the most beautiful. Sigmund Freud"
        break;
    case 3:
        message = "I intend to live forever. So far, so good. Steven Wright"
        break;
    case 4:
        message = "Take up the battle, take it up. It is yours. This is your life, this is your world. Maya Angelou"
        break;
}
console.log(message)
*/

// For three pieces of data. Theory: random message should be composed of three random components.

const messageInComponents = {
    //key-value pairs
        subject: ["Your life","You","Your career","Your relationships"],
        body: ["will be composed of","can have","will be full of"],
        conclusion: ["great memories.","fufilling times.","hungry moments.","lots of laughs."]
} 

let randSubject = Math.floor(Math.random() * messageInComponents.subject.length)
let randBody = Math.floor(Math.random() * messageInComponents.body.length)
let randConclusion = Math.floor(Math.random() * messageInComponents.conclusion.length)

let message = `${messageInComponents.subject[randSubject]} ${messageInComponents.body[randBody]} ${messageInComponents.conclusion[randConclusion]}` 
console.log(message) 
