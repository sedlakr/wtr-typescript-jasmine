// typescript spec example
import {sum} from '../src/sum.ts';

describe("sum test suite", () => {
		it('sums up 2 numbers', () => {
			expect(sum(1, 1)).toEqual(2);
			expect(sum(3, 12)).toEqual(15);
		});

		it('sums up 3 numbers', () => {
			expect(sum(1, 1, 1)).toEqual(3);
			expect(sum(3, 12, 5)).toEqual(20);
		});
	}
)
