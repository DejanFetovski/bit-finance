import { CoinType } from 'types/coin.type'

import Coin0Img from 'assets/images/coin-0.png'
import Coin1Img from 'assets/images/coin-1.png'
import Coin2Img from 'assets/images/coin-2.png'
import Coin3Img from 'assets/images/coin-3.png'

const coins = [Coin0Img, Coin1Img, Coin2Img, Coin3Img]

export const Coin = ({ coin }: CoinType) => (
  <div className="shadow-glow h-10 w-10 overflow-hidden rounded-full shadow-indigo-400/20">
    <img src={coins[coin]} alt="coin" />
  </div>
)
