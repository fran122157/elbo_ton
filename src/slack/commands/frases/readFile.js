import fs from 'fs';

export default (path) => fs.readFileSync(path, { encoding: 'utf-8' });