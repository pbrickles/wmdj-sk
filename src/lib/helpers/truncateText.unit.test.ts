import { truncateText } from './truncateText';

describe('truncateText', () => {
	describe('GIVEN a string shorter than the length', () => {
		it('SHOULD return the string', () => {
			expect(truncateText('hello world')).toEqual('hello world');
		});
	});
	describe('GIVEN a string longer than the length', () => {
		it('SHOULD truncate the string', () => {
			expect(truncateText('hello world', 5)).toEqual('hello...');
		});
		describe.each(['.', '?', '!'])('AND the truncated string ends in %p', (char) => {
			it(`SHOULD remove the ${char} and add ellipses`, () => {
				expect(truncateText(`hello${char} world`, 6)).toEqual(`hello...`);
			});
		});
		describe.each(['.', '?', '!', ','])(
			'AND the truncated string ends in %p and a space',
			(char) => {
				it(`SHOULD remove the ${char} and the space and add ellipses`, () => {
					expect(truncateText(`hello${char} world`, 7)).toEqual(`hello...`);
				});
			}
		);
		describe('AND the truncated string ends in a space', () => {
			it('SHOULD remove the space', () => {
				expect(truncateText('hello world', 6)).toEqual('hello...');
			});
		});
	});
});
