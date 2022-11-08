Automated testing with Mocha
Automated testing will be used in further tasks, and it’s also widely used in real projects.

Why do we need tests?
When we write a function, we can usually imagine what it should do: which parameters give which results.

During development, we can check the function by running it and comparing the outcome with the expected one. For instance, we can do it in the console.

If something is wrong – then we fix the code, run again, check the result – and so on till it works.

But such manual “re-runs” are imperfect.

When testing a code by manual re-runs, it’s easy to miss something.

For instance, we’re creating a function f. Wrote some code, testing: f(1) works, but f(2) doesn’t work. We fix the code and now f(2) works. Looks complete? But we forgot to re-test f(1). That may lead to an error.

That’s very typical. When we develop something, we keep a lot of possible use cases in mind. But it’s hard to expect a programmer to check all of them manually after every change. So it becomes easy to fix one thing and break another one.

Automated testing means that tests are written separately, in addition to the code. They run our functions in various ways and compare results with the expected.
