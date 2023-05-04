const HelloWorld = artifacts.require("Items");

module.exports = function (deployer) {
  deployer.deploy(HelloWorld);
};