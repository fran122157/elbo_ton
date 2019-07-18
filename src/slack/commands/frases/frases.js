const getRandomElementFromArray = array => {
    return array[Math.floor(Math.random()*array.length)];
}

const randomPhrase = (birthdays) => {
    const membersWithPhrases = birthdays.filter( member => {
        return member.phrases;
    });

    const randomMember = getRandomElementFromArray(membersWithPhrases);
    const randomPhrase = getRandomElementFromArray(randomMember.phrases);

    return {
        author: randomMember.nickName,
        text: randomPhrase,
    };
}

export default (randomPhrase);