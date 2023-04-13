const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	// throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here

	let resString = '';

	if (!Array.isArray(members)) return false;

	let arrNames = members.filter((member) => typeof member === 'string');

	arrNames = arrNames.map((member) => {
		return member.trim().toUpperCase();
	});

	arrNames.sort().forEach((name) => {
		resString += name[0];
	});

	if (resString.length === 0) return false;
	return resString;
}

// console.log(createDreamTeam([' Olivia', 1111, 'Lily', 'Oscar', true, null]));

module.exports = {
	createDreamTeam,
};
