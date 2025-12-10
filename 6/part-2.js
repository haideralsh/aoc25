function parse(input) {
	let lines = input.split("\n")
	let signs = lines.pop().trim().split(/\s+/)

	return [lines, signs]
}

function solve(lines, signs) {
	function processNumbers (numbers, signIdx) {
		let sign = signs[signIdx]

		let result = numbers.reduce((prev, curr) => {
			if (sign === "*") return prev * curr
			if (sign === "+") return prev + curr
		}, sign === "*" ? 1 : 0)

		return result
	}

	let sum = 0
	let signIdx = 0
	let numbers = []

	for (let i = 0; i < lines[0].length; i++) { 
		let number = ''

		for (let j = 0; j < lines.length; j++) { 
			number += lines[j][i]
		}

		if (number.trim() !== '') {
			numbers.push(Number(number))
		} else {
			let result = processNumbers(numbers, signIdx)

			sum += result
			numbers = []
			signIdx++
		}
	}

	if (numbers.length !== 0) {
		let result = processNumbers(numbers, signIdx)

		sum += result
	}

	return sum
}

function main() {
	const input = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `

	let [lines, signs] = parse(input)
	let sum = solve(lines, signs)

	console.log(sum)
}

main()