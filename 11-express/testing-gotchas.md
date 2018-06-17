# API Testing Gotchas

List of common errors during testing of Labs 11 and 12


- res.status is a method, res.statusCode is a number
	- `res.status(400)` is fine
	- `res.statusCode = 400` is fine.
	- but you can't do `res.status = 400` 
		- Well, unfortunately you can without any complaint from JavaScript but it surely **NOT** what you want to do.
- Making your tests asynchronous
	- 2 ways to handled async operations in your Jest tests.
		- pass in (done) to the `it` function then call done() when you're test is complete.
		- return a Promise from your `it` function.
		- [Jest - Testing Asynchronous Code](https://facebook.github.io/jest/docs/en/asynchronous.html)
- Require/exports vs Import/Export
	- If you `import` a module that does `module.exports` and/or `require` a module that does `export` then unpredictable things happen that are very hard to track down. So give your modules a quick scan for that to save much consternation later.