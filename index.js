// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*", adjective = "special"){
    const innerFunction = function (flair, adjective){
        return `You are ${flair}${adjective}${flair}!`
    }
    return innerFunction(adjective, flair)
}
const encouragingPromptFunction = wrapAdjective("!!!")