import { pipe } from '../../../lib/pipe';
import readFile from './readFile';
import getRandomPhrase from './getRandomPhrase';
import parsePhrases from './parsePhrases';

export default (payload) => {
  const phrases = readFile(`${__dirname}/phrases.txt`);

  const phrase = pipe(
    parsePhrases,
    getRandomPhrase
  )(phrases);

  return {
    response_type: "in_channel",
    text: `${phrase.author}: ${phrase.quote}`,
  }
}