function parse(input) {
	const [g1, g2] = input.split("\n\n")

	const ranges = g1.split('\n').map(r => r.split("-").map(Number))
	const ingredients = g2.split("\n").map(Number)

	return [ranges, ingredients]
}


function solve(ranges, ingredients) {
	let count = 0

	for (let ingredient of ingredients) {
		for (let [start, end] of ranges) {
			if (ingredient >= start && ingredient <= end) {
				count++
				break
			}
		}
	}

	return count
}

function main() {
	let input = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`

	let [ranges, ingredients] = parse(input)

	let solution = solve(ranges, ingredients)

	console.log(solution)
}

main()