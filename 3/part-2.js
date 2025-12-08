const sum = (arr) => arr.reduce((prev, curr) => curr + prev, 0)

function parseLines(input) {
	return input.split("\n").map(line => line.split("").map(Number))
} 

function findHighestDigits(nums) {
	let out = []
	let pos = 0

	for (let i = 0; i < 12; i++) {
		let highest = -1
		let last 

		for (let j = pos; j <= nums.length - (12 - i); j++) {
			if (nums[j] > highest) {
				highest = nums[j]
				last = j
			}
		}

		out.push(highest)
		pos = last + 1
	}

	return Number(out.join(""))
}


function main() {
	let input = `987654321111111
811111111111119
234234234234278
818181911112111`

	let lines = parseLines(input)
	let highs = []

	for (let line of lines) {
		highs.push(findHighestDigits(line))
	}

	console.log(sum(highs))
}

main()
