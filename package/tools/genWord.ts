


export const genWord = () => {
	const len = Math.floor(Math.random() * 10) + 1
	let i = 0
	// 97 - 122
	let string = []
	while (i < len) {
		let number = Math.floor(Math.random() * 26 + 97)
		string.push(String.fromCharCode(number))
		i++
	}
	return string.join('')
}

export const genSentence = () => {
	let len = Math.floor(Math.random() * 100) + 1
	let i = 0
	let sentence = []
	while (i < len) {
		let word = genWord()
		sentence.push(word)
		i++
	}
	return sentence.join(' ')
}