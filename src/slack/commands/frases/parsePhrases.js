import { pipe } from "../../../lib/pipe";

const toArray = str => str.split('\n');
const removeEmptyLines = arr => arr.filter(line => line.length > 0)
const toObject_Author_Phrases = arr => {
    let author = '';
    let authors = {};
    const authorRegex = /(Autora?:?[ ]*)(.*)/i;
    
    arr.forEach(line => {
        const isAuthor = authorRegex.exec(line);
        
        if (!isAuthor) { 
            authors[author].push(line);
            return;
        } else {
            author = isAuthor[2];
            authors[author] = []
            return;
        }
    });

    return authors;
}

const parse = (raw) => pipe(
        toArray,
        removeEmptyLines,
        toObject_Author_Phrases
    )(raw)

export default parse;