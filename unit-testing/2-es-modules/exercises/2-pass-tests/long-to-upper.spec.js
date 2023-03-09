import { longToUpper } from './long-to-upper.js';

describe('longToUpper: makes all long strings in an array upper case', () => {
	describe('making long strings upper case', () => {
		it('defaults to uppercasing all strings', () => {
			const actual = longToUpper(['a', 'bc', 'def', 'g']);
			expect(actual).toStrictEqual(['A', 'BC', 'DEF', 'G']);
		});
		it('changes all strings if length arg is 0', () => {
			const actual = longToUpper(['a', 'bc', 'def', 'g'], 0);
			expect(actual).toStrictEqual(['A', 'BC', 'DEF', 'G']);
		});
		it('changes no strings if all are too short', () => {
			const actual = longToUpper(['hi', 'hyf', 'good', 'day'], 5);
			expect(actual).toStrictEqual(['hi', 'hyf', 'good', 'day']);
		});
		it('changes all strings if all long enough', () => {
			const actual = longToUpper(
				['computers', 'always', 'copy', 'paste', 'code'],
				3,
			);
			expect(actual).toStrictEqual([
				'COMPUTERS',
				'ALWAYS',
				'COPY',
				'PASTE',
				'CODE',
			]);
		});
		it('changes only the strings that are long', () => {
			const actual = longToUpper(
				['computers', 'always', 'copy', 'paste', 'code'],
				5,
			);
			expect(actual).toStrictEqual([
				'COMPUTERS',
				'ALWAYS',
				'copy',
				'PASTE',
				'code',
			]);
		});
	});
	describe('there are no side-effects', () => {
		it('returns a new array', () => {
			const arg = ['a', 'b', 'c'];
			const returned = longToUpper(arg, 1);
			expect(arg !== returned).toStrictEqual(true);
		});
		it('does not modify the array argument', () => {
			const arg = ['a', 'b', 'c'];
			longToUpper(arg, 1);
			expect(arg).toStrictEqual(['a', 'b', 'c']);
		});
	});
});
