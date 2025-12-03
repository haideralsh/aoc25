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
			current = (current + amount) % 100

		case 'L':
			current = (current + (100 - amount)) % 100
	}

	if (current === 0) password++
}

console.log({password})
