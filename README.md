# ganache-core-filter-test
To reproduce the issue:
* Clone this repository
  * `git clone https://github.com/NickFitton/ganache-core-filter-test.git`
* Get dependencies
  * `npm install`
* Startup the ganache-cli
  * `npm run localChain`
* Run the test to see events
  * `npm run test`

The console will produce the following upon success:
```
Using network 'local'.



  Contract: SomeContract
    ✓ it should call a function that triggers an event that is then found in the past (165ms)


  1 passing (193ms)

Some event
[]
```

The `[]` represents the events emitted by the contract, there should be 1 entry yet it is empty.
