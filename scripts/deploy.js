
async function main(){


   

    const Token = await ethers.getContractFactory("Token");
    const User = await ethers.getContractFactory("UserRegister");


    const token = await Token.deploy();
    await token.deployed();

    const PublicKey = "0x97883f25F10963c49F93e371839856b4160254Df";
    token.transfer(PublicKey,1000);

    const user = await User.deploy(token.address);
    await user.deployed();

    token.transfer(user.address,100000);

    console.log("Token address : " ,token.address);
    console.log("Deployed to : " , user.address);

}
























main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });