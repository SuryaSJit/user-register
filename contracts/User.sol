//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./Token.sol";

contract UserRegister is Token {


    Token public token;

    constructor(Token _token) public {
        token = _token;
    }

    struct profile {
      
        string name;
       

    }

    mapping(address => profile) user;

    function register (string memory _name) public {
        require(token.balanceOf(msg.sender)>100,"Insufficient balance to register");
        user[msg.sender] = profile(_name);
        token.transferFrom(msg.sender, address(this), 100);

    }

}