function parse(input) {
	return input.split("\n").map(line => line.trim().split(/\s+/))
}

function solve(parsed) {
	let sum = 0
	let columnIndex = 0

	while (columnIndex < parsed[0].length) {
		let collection = []

		for (let i = 0; i < parsed.length - 1; i++) {
			collection.push(Number(parsed[i][columnIndex]))
		}

		let sign = parsed[parsed.length - 1][columnIndex]

		sum += collection.reduce((prev, curr) => {
			if (sign === "*") return prev * curr
			if (sign === "+") return prev + curr
		}, sign === "*" ? 1 : 0)


		columnIndex++
	}

	return sum
}

function main() {
	const input = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `

	let parsed = parse(input)

	let sum = solve(parsed)

	console.log(sum)
}

main()