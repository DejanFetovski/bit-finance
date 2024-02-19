import MainIllust from 'assets/svg/join.svg?react'

export const Join = () => (
  <section className="bg-white">
    <div className="mx-auto flex max-w-screen-xl items-center gap-y-12 px-8 pt-16 max-lg:flex-col sm:gap-y-16 sm:pt-24 lg:gap-x-16 xl:gap-x-24 xl:pt-32">
      <div className="rounded-3xl bg-slate-50 px-8 py-12 sm:px-12 sm:py-16 xl:px-16 xl:py-24">
        <MainIllust className="h-auto w-full" />
      </div>
      <div className="flex-1 space-y-8 max-lg:text-center">
        <div className="space-y-4">
          <h1 className="font-bold text-blue-700">Join Now</h1>
          <h2 className="text-3xl font-bold text-blue-950 sm:text-4xl xl:text-5xl">
            Join Us and Enjoy
          </h2>
        </div>
        <div className="space-y-4 text-slate-600">
          <p>
            Embark on a journey of financial exploration with The Liquidity Hook
            Money Market. Designed to empower investors and businesses alike,
            our platform offers a gateway to discover the dynamic world of money
            markets.
          </p>
          <p>
            Explore the depths of liquidity and financial stability as you
            navigate through a myriad of investment opportunities tailored to
            meet your objectives. With transparency.
          </p>
        </div>
        <a
          href="/dapp"
          target="_blank"
          className="inline-block min-w-56 rounded-full bg-cyan-400 px-8 py-4 text-center font-bold text-white duration-200 hover:bg-cyan-500"
        >
          Launch App
        </a>
      </div>
    </div>
  </section>
)
