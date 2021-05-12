import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'COC- LP',
    lpAddresses: {
      97: '',
      56: '0xd8b522DBcA4B4E0ba99be9cE8920048291bdE7F0',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 251,
    lpSymbol: 'COC-BNB',
    lpAddresses: {
      97: '',
      56: '0xd8b522DBcA4B4E0ba99be9cE8920048291bdE7F0',
    },
    token: tokens.COC,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 252,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0xd8b522DBcA4B4E0ba99be9cE8920048291bdE7F0',
      56: '',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */

  {
    pid: 365,
    lpSymbol: 'BTCB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xf45cd219aef8618a92baa7ad848364a158a24f33',
    },
    token: tokens.btcb,
    quoteToken: tokens.busd,
  },
  {
    pid: 283,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1',
    },
    token: tokens.usdc,
    quoteToken: tokens.busd,
  },
  {
    pid: 282,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489',
    },
    token: tokens.dai,
    quoteToken: tokens.busd,
  },
  {
    pid: 262,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
    },
    token: tokens.btcb,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 261,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
    },
    token: tokens.eth,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 258,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    token: tokens.usdt,
    quoteToken: tokens.busd,
  },
  {
    pid: 255,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF',
    },
    token: tokens.dot,
    quoteToken: tokens.wbnb,
  },
  /**
   * V2 farms, set to be removed once unstaked
   */
  {
    pid: 172,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x05FC2ac8a4FA697501087C916c87b8a5dc4f7b46',
    },
    token: tokens.usdc,
    quoteToken: tokens.busd,
  },
  {
    pid: 171,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xdaFE10aA3AB6758596aDAC70f6873C49F5a9bf86',
    },
    token: tokens.dai,
    quoteToken: tokens.busd,
  },
  {
    pid: 152,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4160910ca32eAD83B6d4b32107974397D2579c2d',
    },
    token: tokens.usdt,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 150,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x356b7d0d3c54F22C82B7a670C6Ba9E2381b0624c',
    },
    token: tokens.btcb,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 149,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4D7078a6B348766E7a16cD6e6fCb3064721bc6a6',
    },
    token: tokens.eth,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 146,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x28b81C6b155fd9152AE4A09c4eeB7E7F1C114FaC',
    },
    token: tokens.usdt,
    quoteToken: tokens.busd,
  },
  {
    pid: 143,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3aFfc4dd05286ed6B7206Fc85219d222130e35a9',
    },
    token: tokens.dot,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 141,
    lpSymbol: 'ADA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xec0C5719cC100DfB6c6F371bb48d3D079ab6A6D2',
    },
    token: tokens.ada,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 140,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9bdEdb0c876fC0Da79D945DF28942b898Af89Fc7',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  }
]

export default farms
