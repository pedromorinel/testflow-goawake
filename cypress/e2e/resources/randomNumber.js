export function generateRandomNumber() {
    const length = 11;
    let randomNumber = '';
    for (let i = 0; i < length; i++) {
        randomNumber += Math.floor(Math.random() * 10);
    }
    return randomNumber;
}