import nextBirthday from './nextBirthday';
import birthdays from './birthdays'

export default (payload) => {
    const next = nextBirthday(birthdays);
    return {
      response_type: "in_channel",
      text: `El proximo a traer es ${next.name} ya que cumple en ${next.remainingDays} días :croissant: :croissant: :croissant:`
    }
}