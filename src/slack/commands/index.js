import ping from './ping';
import facturas from './facturas';
import frases from './frases';
import sorteo from './sorteo';

const commands = {
    ping,
    facturas,
    frases,
    sorteo
}

const isValid = (command) => (command && command.indexOf('/') === 0);

const exec = (command, payload = {}) => {
    const withoutSlash = command.replace('/', '');
    const handler = commands[withoutSlash] || false;
    
    if (!handler) return { text: '// TODO ask NicoCuellar\nEl comando esta registrado en slack pero no esta implementado' }
    
    return handler(payload);
}

export default (req, res) => {
    const { command='' } = req.body;
    if (!isValid(command)) { return res.status(500).send('Sin comando no hay paraiso'); }
    res.status(200).send(exec(command, req.body));
}