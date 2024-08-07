function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
const collectiveWisdom = {
    signInfo: ['lechugas', 'galletas', 'chicles', 'ojuelas'],
    fortuneOutput: ['dinero','suerte', 'habilidad', 'penas',],
    advice: ['comerlas','regalarlas', 'gardarlas', 'disfrutarlas',]
}

// Store the 'wisdom' in an array
let personalWisdom = []

// Iterate over the object
for(let prop in collectiveWisdom) {
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length)

    // use the object's properties to customize the message being added to personalWisdom  
    switch(prop) {
        case 'signInfo':
        personalWisdom.push(`Tienes muchas: "${collectiveWisdom[prop][optionIdx]}".`)
        break
        case 'fortuneOutput':
        personalWisdom.push(`Porque tienes: "${collectiveWisdom[prop][optionIdx]}".`)
        break
        case 'advice':
        personalWisdom.push(`deberias: "${collectiveWisdom[prop][optionIdx]}".`)
        break
        default:
        personalWisdom.push('There is not enough info.')
    }
}

function formatWisdom(wisdom) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = personalWisdom.join('\n')
    console.log(formatted)
}

formatWisdom(personalWisdom);