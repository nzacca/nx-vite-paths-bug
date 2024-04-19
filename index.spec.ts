import index from "./index";

describe('index can import css', () => {
	it('should not fail due to css import', () => {
		expect(index).toEqual(".foo { color: red; }");
	});
});
