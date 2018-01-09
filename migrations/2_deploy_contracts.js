var SomeContract = artifacts.require("./SomeContract.sol");

module.exports = function(deployer) {;
  deployer.deploy(SomeContract);
};
