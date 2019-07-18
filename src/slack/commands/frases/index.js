import birthdays from '../facturas/birthdays';
import randomPhrase from './frases';

export default (payload) => {
  const phrase = randomPhrase(birthdays);
  return {
    response_type: "in_channel",
    text: `${phrase.author} dixit: ${phrase.text} :face_with_monocle: :face_with_monocle: :face_with_monocle:`,
  }
}