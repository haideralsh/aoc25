function parse(input) {
	return input.split('\n')
				.map(range => range.split("-").map(Number))
				.sort((r1, r2) => r1[0] - r2[0])
}

function mergeRanges(ranges) {
	let merged = [ranges[0]]
	let count = 0

	for (let i = 1; i < ranges.length; i++) {
		let start = ranges[i][0]
		let lastEnd = merged[merged.length - 1][1]

		if (start <= lastEnd + 1) {
			merged[merged.length - 1][1] = Math.max(lastEnd, ranges[i][1])
		} else {
			merged.push(ranges[i])
		}
	}

	return merged
}

function main() {
	let input = `3-5
10-14
16-20
12-18`

	let ranges = parse(input)

	let merged = mergeRanges(ranges)
	let count = 0

	merged.forEach(([s, e]) => count += e - s + 1)

	console.log(count)
}

main()