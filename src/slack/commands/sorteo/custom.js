const getRandomElementFromArray = array => array[Math.floor(Math.random()*array.length)];

export default (members, buildSuccess, buildFail) => {
    const candidates = members.split(',');
    if (!members) { return buildFail('Si no me pasas nombres no puedo elegir a nadie, crack...') }
    if (candidates.length === 1) { return buildFail('El mínimo para sortear son 2. Mejor suerte la próxima!') }
    
    const winner = getRandomElementFromArray(candidates);

    if (winner === '') { return buildFail('Esta mal tu comando. No puede ganar un espacio en blanco.') }

    return buildSuccess(winner.trim());
}