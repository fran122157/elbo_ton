export const pipe = (...fncs) => x => fncs.reduce((y, f) => f(y), x);
export const ignore = (fnc, ...args) => _pipe => { fnc(_pipe, ...args); return _pipe }