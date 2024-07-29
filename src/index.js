module.exports = function toReadable (number) {
    const zeroToNine = ['zero','one','two','three','four','five','six','seven','eight','nine']
    const tenToNineteen = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    const twentyToNinety = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    const hundred = 'hundred'

    const numToString = '' + number
    const stringArr = numToString.split('')

    if (number <= 9) {
        return zeroToNine[number]
    } else if (number >= 10 && number <= 19) {
        const newNum = number - 10
        return tenToNineteen[newNum]
    } else if (number >= 20 && number <= 99) {
        const firstNum = parseInt(stringArr[0]) - 2
        const secondNum = parseInt(stringArr[1])
        if ( stringArr[1] === '0') {
            return twentyToNinety[firstNum]
        } else {
            return `${twentyToNinety[firstNum]} ${zeroToNine[secondNum]}`
        }
    } else {
        const hundredFirstNum = `${zeroToNine[parseInt(stringArr[0])]} ${hundred}`
        const hundredSecondNum = parseInt(stringArr[1])
        const hundredThirdNum = parseInt(stringArr[2])

        if (hundredSecondNum === 0 && hundredThirdNum === 0) { // only 100, 200 ...
            return hundredFirstNum
        } else if (hundredSecondNum === 0 && hundredThirdNum !== 0) { //101, 102 ...
            return `${hundredFirstNum} ${zeroToNine[hundredThirdNum]}`
        } else if (hundredSecondNum === 1 && hundredThirdNum === 0) { // 110, 210, 310 ...
            return `${hundredFirstNum} ${tenToNineteen[hundredThirdNum]}`
        } else if (hundredSecondNum === 1 && hundredThirdNum !== 0) { // 111, 112 - 19
            return `${hundredFirstNum} ${tenToNineteen[hundredThirdNum]}`
        } else if (hundredSecondNum >= 2 && hundredThirdNum !== 0) { //121 131
            return `${hundredFirstNum} ${twentyToNinety[hundredSecondNum - 2]} ${zeroToNine[hundredThirdNum]}`
        } else {
            return `${hundredFirstNum} ${twentyToNinety[hundredSecondNum - 2]}`
        }
    }
}
