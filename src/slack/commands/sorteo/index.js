import custom from './custom';
import byTeam from './byTeam';
import fromCandidates from './fromCandidates';

import { TEAMS } from '../teams';
import members from '../members';

const teamNamesPiped = Object.keys(TEAMS).reduce((str, team, i) =>
  i === 0 ?
    team :
    `${str}|${team}`
, '')

const RAFFLE_TYPES = {
  all: { test: /^$/, handler: (_, buildSuccess) => { return buildSuccess(fromCandidates(members)) }},
  byTeam: { test: new RegExp(`^team (${teamNamesPiped})$`, 'i'),  handler: byTeam },
  custom: {  test: /^custom (.*)/, handler: custom }
}

const buildSuccess = (winner) => ({
  response_type: "in_channel",
  text: `Y el ganador es... ${winner} :clap: :clap: :clap:`,
});

const buildFail = (error) => ({
  response_type: "in_channel",
  text: `${error}`,
});

export default (payload) => {
  let match = null;
  let winner = null;

  Object.keys(RAFFLE_TYPES).some(raffle => {
    match = RAFFLE_TYPES[raffle].test.exec(payload.text);
    if (match) { winner = RAFFLE_TYPES[raffle].handler(match[1], buildSuccess, buildFail) }
    return match;
  });

  if (!match) { return buildFail(`Comando inválido, lee la docu...`) }
  if (!winner) { return buildFail(`Ups! Algo salió mal...`) }

  return winner;

}