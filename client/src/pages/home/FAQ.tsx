import { Disclosure, Transition } from '@headlessui/react'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'

import { FAQType } from 'types/faq.type'

import BgIllust from 'assets/svg/faq-bg.svg?react'
import { useState, Fragment } from 'react'

const faqData: FAQType[] = [
  {
    title: 'What is The Liquidity Hook Money Market?',
    description:
      'Members gain access to a curated selection of exclusive investment opportunities within The Liquidity Hook Money Market, providing a chance to diversify their portfolio.\n\nEnjoy enhanced returns on investments compared to non-members, thanks to preferential rates and priority access to lucrative financial instruments. Members receive personalized financial advice and guidance from expert advisors, ensuring their investment strategies align with their financial goals.',
  },
  {
    title: 'How do I become a member of The Liquidity Hook Money Market?',
    description:
      'Members gain access to a curated selection of exclusive investment opportunities within The Liquidity Hook Money Market, providing a chance to diversify their portfolio.\n\nEnjoy enhanced returns on investments compared to non-members, thanks to preferential rates and priority access to lucrative financial instruments. Members receive personalized financial advice and guidance from expert advisors, ensuring their investment strategies align with their financial goals.',
  },
  {
    title: 'What types of investment opportunities are available?',
    description:
      'Members gain access to a curated selection of exclusive investment opportunities within The Liquidity Hook Money Market, providing a chance to diversify their portfolio.\n\nEnjoy enhanced returns on investments compared to non-members, thanks to preferential rates and priority access to lucrative financial instruments. Members receive personalized financial advice and guidance from expert advisors, ensuring their investment strategies align with their financial goals.',
  },
  {
    title: 'How does The Liquidity Hook prioritize security and compliance?',
    description:
      'Members gain access to a curated selection of exclusive investment opportunities within The Liquidity Hook Money Market, providing a chance to diversify their portfolio.\n\nEnjoy enhanced returns on investments compared to non-members, thanks to preferential rates and priority access to lucrative financial instruments. Members receive personalized financial advice and guidance from expert advisors, ensuring their investment strategies align with their financial goals.',
  },
  {
    title: 'What are the advantages of being a member?',
    description:
      'Members gain access to a curated selection of exclusive investment opportunities within The Liquidity Hook Money Market, providing a chance to diversify their portfolio.\n\nEnjoy enhanced returns on investments compared to non-members, thanks to preferential rates and priority access to lucrative financial instruments. Members receive personalized financial advice and guidance from expert advisors, ensuring their investment strategies align with their financial goals.',
  },
  {
    title: 'Can I get financial advice as a member of The Liquidity Hook?',
    description:
      'Members gain access to a curated selection of exclusive investment opportunities within The Liquidity Hook Money Market, providing a chance to diversify their portfolio.\n\nEnjoy enhanced returns on investments compared to non-members, thanks to preferential rates and priority access to lucrative financial instruments. Members receive personalized financial advice and guidance from expert advisors, ensuring their investment strategies align with their financial goals.',
  },
  {
    title: 'How does The Liquidity Hook handle customer support?',
    description:
      'Members gain access to a curated selection of exclusive investment opportunities within The Liquidity Hook Money Market, providing a chance to diversify their portfolio.\n\nEnjoy enhanced returns on investments compared to non-members, thanks to preferential rates and priority access to lucrative financial instruments. Members receive personalized financial advice and guidance from expert advisors, ensuring their investment strategies align with their financial goals.',
  },
]

export const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(0)

  return (
    <section className=" relative overflow-hidden bg-slate-100">
      <BgIllust className="absolute left-1/2 top-0 -translate-x-1/2" />
      <div className="relative mx-auto max-w-screen-xl space-y-16 px-8 py-16 sm:py-24 xl:py-32">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold text-blue-950 sm:text-4xl xl:text-5xl">
            Frequently Ask Question
          </h1>
          <p className="text-slate-600">
            Members gain access to a curated selection of exclusive investment
            opportunities.
          </p>
        </div>
        <div className="mx-auto space-y-8 lg:w-4/5">
          {faqData.map(({ title, description }, id) => (
            <Disclosure key={id}>
              <Disclosure.Button
                className="rounded-4xl shadow-glow flex w-full items-center justify-between bg-white px-8 py-4 text-left text-lg text-blue-950 shadow-indigo-400/10 duration-200 hover:text-indigo-400"
                onClick={() => setOpenId(id === openId ? null : id)}
              >
                {title}
                {id === openId ? (
                  <MinusIcon className="h-5" />
                ) : (
                  <PlusIcon className="h-5" />
                )}
              </Disclosure.Button>
              <Transition
                as={Fragment}
                show={id === openId}
                enter="transition duration-100 ease-in"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-100 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  static={id === openId}
                  className="rounded-4xl shadow-glow space-y-2 whitespace-pre-line bg-white p-8 text-slate-600 shadow-indigo-400/10"
                >
                  {description}
                </Disclosure.Panel>
              </Transition>
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  )
}
