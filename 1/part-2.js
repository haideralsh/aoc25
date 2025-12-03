let input = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`

const rotations = input.split("\n")
					   .map(v => v.match(/([L|R])(\d+)/))
					   .map(m => [m[1], Number(m[2])])


let current = 50
let password = 0

for (let [dir, amount] of rotations) {
	switch (dir) {
		case "R":
			while (amount !== 0) {
				current++
				amount--

				if (current === 100) current = 0 
				if (current === 0) password++
			}


		case 'L':
			while (amount !== 0) {
				current--
				amount--

				if (current === -1)  current = 99
				if (current === 0) password++
			}

	}
}

console.log({ password })