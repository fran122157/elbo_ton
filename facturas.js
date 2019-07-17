const supplyTeam = require('./supply-team');

const today = new Date();

const milliSecondsToDays = ms => {
    return ms / (1000 * 3600 * 24);
};

const getMemberBirthday = date => {
    const splitted = date.split('-');
    const currentYear = today.getFullYear();
    return new Date(`${currentYear}-${splitted[1]}-${splitted[2]}`);
};

const reducer = (closestMember, member) => {
    const memberBirthday = getMemberBirthday(member.birthDate);
    const remainingDays = Math.floor(milliSecondsToDays(memberBirthday - today));
    
    if ( remainingDays < 0 ) return closestMember; //Ya pasó este cumpleañito' 

    if ( remainingDays > closestMember.remainingDays) return closestMember //cumple después que el closestMember

    return { //nuevo closest
        name: member.nickName, 
        remainingDays: remainingDays 
    };
};

const reference = {
    name: "A year from now",
    remainingDays: 365,
};

module.exports = supplyTeam.reduce( (closestMember, member) => reducer(closestMember, member), reference);;