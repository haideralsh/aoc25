// Helpers 

function chunck(s, n) {
	let chuncks = []

	for (let i = 0; i < s.length; i += n) {
		chuncks.push(s.slice(i, i + n))
	}

	return chuncks
}

let sum = (arr) => arr.reduce((prev, curr) => curr + prev, 0)

// Main logic

function parseRanges(input) {
	return input.split(",").map(r => r.split("-").map(Number))
}


function findInvalid(ranges) {
	let invalid = []

	for (let [start, end] of ranges) {
		for (let n = start; n <= end; n++) {
			let sn = String(n)
			let d = sn.length - 1

			while (d > 0) {
				if (sn.length % d === 0) {
					let chuncks = chunck(sn, d)

					if (chuncks.every(p => p === chuncks[0])) {
						invalid.push(n)
						break;
					}
				}

				d--
			}
		}
	}

	return invalid
}

function main() {
	let input = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
1698522-1698528,446443-446449,38593856-38593862,565653-565659,
824824821-824824827,2121212118-2121212124` 

	let ranges = parseRanges(input)
	let invalid = findInvalid(ranges)

	console.log(sum(invalid))
}

main()

