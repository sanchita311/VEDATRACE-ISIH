import axios from 'axios';

const PINATA_API_KEY = process.env.PINATA_API_KEY;
const PINATA_SECRET_KEY = process.env.PINATA_SECRET_KEY;
const PINATA_BASE_URL = 'https://api.pinata.cloud';

if (!PINATA_API_KEY || !PINATA_SECRET_KEY) {
  throw new Error('Missing Pinata API key or secret key');
}

export async function uploadToIPFS(data: object): Promise<string> {
  const url = `${PINATA_BASE_URL}/pinning/pinJSONToIPFS`;
  const res = await axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
      pinata_api_key: PINATA_API_KEY,
      pinata_secret_api_key: PINATA_SECRET_KEY,
    },
  });
  return res.data.IpfsHash;
}

export async function fetchFromIPFS(cid: string): Promise<any> {
  const url = `https://gateway.pinata.cloud/ipfs/${cid}`;
  const res = await axios.get(url);
  return res.data;
}
