const sum = (arr) => arr.reduce((prev, curr) => curr + prev, 0)

function parseLines(input) {
	return input.split("\n").map(line => line.split("").map(Number))
} 

function findHighest(line) {
	let highest = line[0]
	let secondHighest = line[1]

	for (let i = 1; i < line.length; i++) {
		if (i !== line.length - 1 && line[i] > highest) {
			highest = line[i]
			secondHighest = line[i + 1] 
			continue
		}

		if (line[i] > secondHighest) {
			secondHighest = line[i]
		}
	}

	return Number(`${highest}${secondHighest}`)
}

function main() {
	let input = `987654321111111
811111111111119
234234234234278
818181911112111`

	let lines = parseLines(input)
	let highs = []

	for (let line of lines) {
		highs.push(findHighest(line))
	}

	console.log(sum(highs))
}

main()
