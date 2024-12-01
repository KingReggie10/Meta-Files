##Create_Token Contract

This Solidity smart contract implements a simple ERC20-like token called `Create_Token`. It provides basic functionalities for minting and burning tokens.

## Description

**Minting:** Creates new tokens and assigns them to a specified address.
**Burning:** Destroys existing tokens from a specified address.

## Getting Started

### Executing program

To run this program, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at https://remix.ethereum.org/.

Once you are on the Remix website, create a new file by clicking on the "+" icon in the left-hand sidebar. Save the file with a .sol extension (e.g., Create_Token.sol). Copy and paste the following code into the file:

```javascript
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

```

To compile the code, click on the "Solidity Compiler" tab in the left-hand sidebar. Make sure the "Compiler" option is set to "0.8.4" (or another compatible version), and then click on the "Compile HelloWorld.sol" button.

Once the code is compiled, you can deploy the contract by clicking on the "Deploy & Run Transactions" tab in the left-hand sidebar. Select the "Create_token" contract from the dropdown menu, and then click on the "Deploy" button.
## Authors

Reggie Dimagiba Jr.
@ReggieDimagiba16@gmail.com


## License

This project is licensed under the MIT License - see the LICENSE.md file for details
