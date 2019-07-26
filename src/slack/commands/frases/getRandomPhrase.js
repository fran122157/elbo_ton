const getRandomNumber = (max=99999) => Math.floor(Math.random()*max);
const getRandomElementFromArray = arr => arr[getRandomNumber(arr.length)];
const getRandomKeyFromObject = obj => getRandomElementFromArray(Object.keys(obj));

const getRandomPhrase = (phrases) => {
    const author = getRandomKeyFromObject(phrases);
    const quote = getRandomElementFromArray(phrases[author]);

    return { author, quote };
}

export default getRandomPhrase;