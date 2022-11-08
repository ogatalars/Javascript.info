The flow of development usually looks like this:

An initial spec is written, with tests for the most basic functionality.
An initial implementation is created.
To check whether it works, we run the testing framework Mocha (more details soon) that runs the spec. While the functionality is not complete, errors are displayed. We make corrections until everything works.
Now we have a working initial implementation with tests.
We add more use cases to the spec, probably not yet supported by the implementations. Tests start to fail.
Go to 3, update the implementation till tests give no errors.
Repeat steps 3-6 till the functionality is ready.
