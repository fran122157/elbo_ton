import members from '../members';

const getRandomElementFromArray = array => array[Math.floor(Math.random()*array.length)];

export default (payload) => {
  const winner = getRandomElementFromArray(members);
  return {
    response_type: "in_channel",
    text: `Y el ganador es... ${winner.fullName} ${winner.lastName} :clap: :clap: :clap:`,
  }
}