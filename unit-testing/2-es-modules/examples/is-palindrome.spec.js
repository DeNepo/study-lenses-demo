import { isPalindrome } from './is-palindrome.js';

describe('isPalindrome: checks if a string is the same forwards and backwards', () => {
	describe('what is a palindrome', () => {
		it('is a string that reads the same forwards and backwards', () => {
			const actual = isPalindrome('racecar');
			expect(actual).toStrictEqual(true);
		});
		it('cannot be different forwards and backwards', () => {
			const actual = isPalindrome('apple');
			expect(actual).toStrictEqual(false);
		});
		it('is case sensitive', () => {
			const actual = isPalindrome('Racecar');
			expect(actual).toStrictEqual(false);
		});
		it('can have more than just letters', () => {
			const actual = isPalindrome('!.Han naH.!');
			expect(actual).toStrictEqual(true);
		});
	});
	describe("the function's default parameters", () => {
		it('should be a palindrome', () => {
			const actual = isPalindrome();
			expect(actual).toStrictEqual(true);
		});
	});
});
