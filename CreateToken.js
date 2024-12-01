// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract Create_Token {

    // Public variables for token details
    string public tokenName = "KING";
    string public tokenAbbrv = "KNG";
    uint public totalSupply = 0;

    // Mapping to store balances
    mapping(address => uint) public balances;

    // Mint function to create new tokens
    function mint(address _address, uint _value) public {
        
        totalSupply += _value;

        // Increase balance of recipient
        balances[_address] += _value;
    }

    // Burn function to destroy tokens
    function burn(address _address, uint _value) public {
        
        if (balances[_address] >= _value){
             // Decrease total supply
        totalSupply -= _value;
       
        balances[_address] -= _value;
        }
    }
}
