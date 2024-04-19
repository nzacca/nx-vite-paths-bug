import { foo } from "~foo/foo.js"; // Remove .js extension to pass

describe('foo', () => {
	it('foo', () => {
		expect(foo).toEqual("bar");
	});
});
