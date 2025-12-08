const parseGrid = (input) => input.split("\n").map(line => line.split(""))

function solve(grid) {
	let count = 0
	let hasMore = true

	while (hasMore) {
		let currentCount = count

		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[i].length; j++) {
				let n = grid[i - 1]?.[j]
				let ne = grid[i - 1]?.[j + 1]
				let nw = grid[i - 1]?.[j - 1]

				let s = grid[i + 1]?.[j]
				let se = grid[i + 1]?.[j + 1]
				let sw = grid[i + 1]?.[j - 1]

				let e = grid[i]?.[j + 1]
				let w = grid[i]?.[j - 1]

				let c = [n, ne, nw, s, se, sw, e, w].filter(e => e === "@").length

				if (grid[i][j] === "@" && c < 4) {
					count++
					grid[i][j] = "."
				} 
			}
		}

		if (count - currentCount === 0)  hasMore = false
	}

	return count
}

function main() {
	let input = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`

	let grid = parseGrid(input)
	let count = solve(grid)

	console.log(count)
}

main()