
import React, {useState,useEffect} from 'react';
import { TezosContractIntrospector, setLogLevel } from 'conseiljs';

const conseiljssoftsigner = require('conseiljs-softsigner');

const faucetAccount = {
    "mnemonic": [
      "plate",
      "coconut",
      "owner",
      "lyrics",
      "salute",
      "attend",
      "stove",
      "help",
      "police",
      "dream",
      "target",
      "blur",
      "attack",
      "sauce",
      "steel"
    ],
    "secret": "d7923e68f3a686d2f0ead132ab25818fb80de49c",
    "amount": "8539683576",
    "pkh": "tz1bN4N7B7tB3pt8R5jGNbg28gVcmWebeb1a",
    "password": "szKYGTMhOY",
    "email": "ppihkeeu.felcdccd@tezos.example.org"
  }
async function initAccount() {
    const keystore = await conseiljssoftsigner.KeyStoreUtils.restoreIdentityFromFundraiser(faucetAccount.mnemonic.join(' '), faucetAccount.email, faucetAccount.password, faucetAccount.pkh);
    console.log(`public key: ${keystore.publicKey}`);
    console.log(`secret key: ${keystore.secretKey}`);
}

initAccount();




export default function interaction() {
    const [name, setName]= useState( '' );
    const [hor, setHor]= useState( '' );
    const [ver, setVer]= useState( '' );
  return (
      
    <div>
        <input type="text" placeholder="name" onChange={e => setName(e.target.value)}></input>
      <button>change_name</button>
        <br></br><br></br>
        <input type="numeric" placeholder="val" onChange={e => setHor(e.target.value)}></input>
      <button >move_horizontally</button>
      <br></br><br></br>
      <input type="text" placeholder="val" onChange={e => setVer(e.target.value)}></input>
      <button >move_vertically</button>
      <br></br><br></br>
      <button >Shoot_alien</button>
    </div>
  );
}
