import nextBirthday from './nextBirthday';
import members from '../members'

export default (payload) => {
    const next = nextBirthday(members);
    return {
      response_type: "in_channel",
      text: `El proximo a traer es ${next.name} ya que cumple en ${next.remainingDays} días :croissant: :croissant: :croissant:`
    }
}