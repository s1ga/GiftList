const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

const INCLUDES_NAME = 'Lester Parisian';
const NOT_INCLUDES_NAME = 'Siarhei';

async function main() {
  const name = INCLUDES_NAME;
  const merkleTree = new MerkleTree(niceList);
  const proof = merkleTree.getProof(niceList.indexOf(name));

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name, proof,
  });

  console.log({ gift });
}

main();