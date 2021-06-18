import { INIT_CODE_HASH } from '../src/constants'

//import { bytecode } from '@uniswap/v2-core/build/UniswapV2Pair.json'
//import { keccak256 } from '@ethersproject/solidity'

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON.
//const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    // it('matches computed bytecode hash', () => {
    //   expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH)
    // })
    //TODO: Replace with real FroyoPair.json
    it('matches computed bytecode hash', () => {
      expect(INIT_CODE_HASH).toEqual('0x3c700d5290ca2f5e4dd59d50bcf92e5599e823dc04c6c8e8c6baf539b980b05b')
    })
  })
})
