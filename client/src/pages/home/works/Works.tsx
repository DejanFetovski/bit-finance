import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

import { WorksItem } from './WorksItem'

import { WorksType } from 'types/works.type'

import ShadowTopIllust from 'assets/svg/works-shadow-top.svg?react'
import ShadowBottomIllust from 'assets/svg/works-shadow-bottom.svg?react'
import Users0Illust from 'assets/svg/works-users-0.svg?react'
import Users1Illust from 'assets/svg/works-users-1.svg?react'
import Users2Illust from 'assets/svg/works-users-2.svg?react'

const worksData: WorksType[][] = [
  [
    {
      svg: Users0Illust,
      description: 'Choose an asset to select a Liquidity Hook.',
    },
    {
      svg: Users1Illust,
      description:
        'Choose a Liquidity Hook to yield returns on your asset holdings.',
    },
    {
      svg: Users2Illust,
      description:
        "Effectively manage all positions using INIT's all-inclusive dashboard solution.",
    },
  ],
  /** replace dApps data here */
  [
    {
      svg: Users0Illust,
      description: 'Choose an asset to select a Liquidity Hook.',
    },
    {
      svg: Users1Illust,
      description:
        'Choose a Liquidity Hook to yield returns on your asset holdings.',
    },
    {
      svg: Users2Illust,
      description:
        "Effectively manage all positions using INIT's all-inclusive dashboard solution.",
    },
  ],
]

const topics = ['Users', 'dApps']

export const Works = () => {
  const [topic, setTopic] = useState(topics[0])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-blue-700" />
      <div className="relative mx-auto max-w-screen-xl px-8 py-16 sm:py-24 xl:py-32">
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <ShadowTopIllust />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <ShadowBottomIllust />
        </div>
        <div className="relative space-y-12 rounded-2xl bg-white p-12 sm:p-16 xl:p-24">
          <div className="mx-auto space-y-4 text-center sm:w-4/5 lg:w-2/5">
            <h1 className="text-3xl font-bold text-blue-950 sm:text-4xl xl:text-5xl">
              How It Works?
            </h1>
            <p className="text-slate-600">
              Embark on a journey of financial exploration with The Liquidity
              Hook Money Market.
            </p>
          </div>
          <RadioGroup
            value={topic}
            onChange={setTopic}
            className="flex cursor-pointer justify-center"
          >
            <div className="grid w-96 grid-cols-2 overflow-hidden rounded-full ring-1 ring-inset ring-cyan-400">
              {topics.map((item) => (
                <RadioGroup.Option key={item} value={item}>
                  {({ checked }) => (
                    <div
                      className={`${
                        checked
                          ? 'bg-cyan-400 text-xl text-white hover:bg-cyan-500'
                          : 'text-slate-400 hover:text-cyan-400'
                      } flex h-14 items-center justify-center rounded-full text-center font-bold duration-200`}
                    >
                      {item}
                    </div>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8">
            {worksData[topics.indexOf(topic)].map(
              ({ svg, description }, id) => (
                <WorksItem key={id} svg={svg} description={description} />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
