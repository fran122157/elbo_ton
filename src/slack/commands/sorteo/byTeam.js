import fromCandidates from "./fromCandidates";
import members from "../members";
import { TEAMS } from "../teams";

export default (team, buildSucess, buildFail) => {
    const candidates = members.filter(member => member.team.toLowerCase() === team.toLowerCase());
    
    if (!TEAMS[team.toUpperCase()]) { return buildFail('El equipo no existe') }
    
    if (!candidates.length) { return buildFail('El equipo no tiene integrantes registrados'); }
    
    return buildSucess(fromCandidates(candidates));
}