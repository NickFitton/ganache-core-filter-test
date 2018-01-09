pragma solidity ^0.4.18;

contract SomeContract {

  event SomeEvent(address _value);

  function triggerEvent() public {
    SomeEvent(msg.sender);
  }
}
