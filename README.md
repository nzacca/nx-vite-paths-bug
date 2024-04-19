Steps to Reproduce:

1. Clone the repo
2. npm i
3. npm test
4. Note the error: `Error: Failed to load url ~foo/foo.js (resolved id: ~foo/foo.js)`
5. Remove the extension from the import in `index.spec.ts` to see the test pass.
