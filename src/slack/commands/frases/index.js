import randomPhrase from './frases';
import members from '../members';

export default (payload) => {
  const phrase = randomPhrase(members);
  return {
    response_type: "in_channel",
    text: `${phrase.author} dixit: ${phrase.text} :face_with_monocle: :face_with_monocle: :face_with_monocle:`,
  }
}