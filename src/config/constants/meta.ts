import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'CupidSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by CupidSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | CupidSwap',
  },
  '/competition': {
    title: 'Trading Battle | CupidSwap',
  },
  '/prediction': {
    title: 'Prediction | CupidSwap',
  },
  '/farms': {
    title: 'Farms | CupidSwap',
  },
  '/pools': {
    title: 'Pools | CupidSwap',
  },
  '/lottery': {
    title: 'Lottery | CupidSwap',
  },
  '/collectibles': {
    title: 'Collectibles | CupidSwap',
  },
  '/ifo': {
    title: 'Initial Farm Offering | CupidSwap',
  },
  '/teams': {
    title: 'Leaderboard | CupidSwap',
  },
  '/profile/tasks': {
    title: 'Task Center | CupidSwap',
  },
  '/profile': {
    title: 'Your Profile | CupidSwap',
  },
}
