require("@nomiclabs/hardhat-waffle");
require('dotenv').config()


const {INFURA_PROJECT_ID, PRIVATE_KEY, PRIVATE_KEY_MUMBAI} = process.env

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [PRIVATE_KEY_MUMBAI]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
      acounts: [PRIVATE_KEY]
    }
  },
  solidity: "0.8.4",
};
