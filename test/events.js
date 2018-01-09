var SomeContract = artifacts.require('./SomeContract.sol');

contract('SomeContract', function (accounts) {
  it('it should call a function that triggers an event that is then found in the past', function () {
    return SomeContract.deployed().then(function (instance) {
      instance.triggerEvent.call({from: accounts[0]});
      return instance;
    }).then(function (instance) {
      var event = instance["SomeEvent"]();
      event.watch();
      event.get(function (error, logs) {
        if (!error) {
          console.log("Some event");
          console.log(logs);
        } else {
          console.log("Error");
          console.log(error);
        }
      });
      event.stopWatching();
    });
  });
});
