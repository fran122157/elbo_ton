const getRandomElementFromArray = array => array[Math.floor(Math.random()*array.length)];

export default (members) => {
    const winner = getRandomElementFromArray(members);
    return `${winner.fullName} ${winner.lastName}`;
}