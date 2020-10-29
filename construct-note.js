// add whatever parameters you deem necessary

/**
 * Build two frequency counters. If any of the message characters are not
 *  found in the 'letters' characters, or if there are not enough of them,
 *  return false. Otherwise return true.
 */

// Basic FREQUENCY COUNTER
// =======================

// const freqCounter = (str) => {
//   const frequency = {}
// 	for (let val of str) {
//     frequency[val] = (frequency[val] + 1|| 1)
//   }
//   return frequency
// };

// const freqCounter = (str) => {
// 	const frequency = new Map();

// 	for (let val of str) {
// 		let valCount = frequency.get(val) || 0;
// 		frequency.set(val, valCount + 1);
// 	}
// 	return frequency;
// };

function constructNote(message, letters) {
	const ltrFrequency = {};
	const msgFrequency = {};

	// build frequency counter for messages
	for (let val of message) {
		msgFrequency[val] = msgFrequency[val] + 1 || 1;
	}

	// build frequency counter of letters
	for (let char of letters) {
		ltrFrequency[char] = ltrFrequency[char] + 1 || 1;
	}

	// compare the two parameters (message and letters)
	for (let char in msgFrequency) {
		if (!ltrFrequency[char]) return false;
		if (msgFrequency[char] > ltrFrequency[char]) return false;
	}

	return true;
}
