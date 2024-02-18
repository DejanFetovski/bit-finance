import { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

import { Coin } from 'components/Coin'

import { ResourceCard } from './ResourceCard'

import { Hooks, ResourceType } from 'types/resource.type'
import { Coins } from 'types/coin.type'

import BgIllust from 'assets/svg/resource-bg.svg?react'
import ShadowIllust from 'assets/svg/resource-shadow.svg?react'

const resourceData: ResourceType[] = [
  {
    coins: [Coins.SUI],
    type: Hooks.Looping,
    apy: '30.00%',
  },
  {
    coins: [Coins.ETH, Coins.USDC],
    type: Hooks.Margin,
    leverage: '2-5x',
  },
  {
    coins: [Coins.ETH, Coins.USDT],
    type: Hooks.Pair,
    apy: '225.00%',
    leverage: '30.00%',
  },
  {
    coins: [Coins.ETH, Coins.USDC],
    type: Hooks.Pair,
    leverage: '30.00%',
  },
]

const coins = [Coins.ETH, Coins.SUI, Coins.USDC, Coins.USDT]

export const Resource = () => {
  const [selected, setSelected] = useState(coins[0])

  return (
    <section className="relative overflow-hidden bg-slate-100">
      <div className="absolute inset-x-0 top-0 h-2/5 bg-blue-700" />
      <div className="relative mx-auto max-w-screen-xl px-8 pt-16 sm:pt-24 xl:pt-32">
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <ShadowIllust />
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-700 px-8 py-12 sm:py-16 xl:py-24">
          <BgIllust className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="flex flex-col items-center gap-y-12">
            <div className="relative space-y-4 text-center text-white sm:w-4/5 lg:w-3/5">
              <h1 className="text-3xl/tight font-bold sm:text-4xl/tight xl:text-5xl/tight">
                Select a Resource for Previewing Liquidity Hook
              </h1>
              <p>
                Embark on a journey of financial exploration with The Liquidity
                Hook Money Market.
              </p>
            </div>
            <Listbox value={selected} onChange={setSelected}>
              {({ open }) => (
                <div className="relative w-full cursor-pointer space-y-1 sm:w-3/4 lg:w-1/2">
                  <Listbox.Button className="group flex w-full gap-x-2 rounded-full bg-white p-2 text-blue-950">
                    <div className="flex grow items-center gap-x-2">
                      <Coin coin={selected} />
                      {Coins[selected]}
                    </div>
                    <div className="h-10 w-10 rounded-full bg-blue-700 p-2 text-white duration-200 group-hover:bg-blue-500">
                      <ChevronDownIcon
                        className={`${open && 'rotate-180'} duration-200`}
                      />
                    </div>
                  </Listbox.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-in duration-100"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-out duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 w-full overflow-hidden rounded-lg bg-white shadow-xl">
                      {coins.map((coin) => (
                        <Listbox.Option
                          key={coin}
                          className={({ active }) =>
                            `${active ? 'bg-blue-700 text-white' : 'text-blue-950'} p-2 duration-200`
                          }
                          value={coin}
                        >
                          {({ selected }) => (
                            <div
                              className={`${selected && 'font-bold'} flex items-center gap-x-2`}
                            >
                              <Coin coin={coin} />
                              {Coins[coin]}
                            </div>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              )}
            </Listbox>
            <div className="relative grid grid-cols-4 gap-6">
              {resourceData.map(({ coins, type, apy, leverage }, id) => (
                <ResourceCard
                  key={id}
                  coins={coins}
                  type={type}
                  apy={apy}
                  leverage={leverage}
                />
              ))}
            </div>
            <div className="flex gap-x-2">
              <label className="h-1.5 w-6 rounded-full bg-blue-700 has-[:checked]:w-10 has-[:checked]:bg-white">
                <input type="radio" aria-label="indicator" className="hidden" />
              </label>
              <label className="h-1.5 w-6 rounded-full bg-blue-700 has-[:checked]:w-10 has-[:checked]:bg-white">
                <input
                  type="radio"
                  aria-label="indicator"
                  className="hidden"
                  defaultChecked
                />
              </label>
              <label className="h-1.5 w-6 rounded-full bg-blue-700 has-[:checked]:w-10 has-[:checked]:bg-white">
                <input type="radio" aria-label="indicator" className="hidden" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
