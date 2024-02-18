import MainIllust from 'assets/svg/start.svg?react'

export const Start = () => (
  <section className="bg-blue-700">
    <div className="mx-auto flex max-w-screen-xl items-center gap-y-12 px-8 max-lg:flex-col sm:gap-y-16 lg:gap-x-16 xl:gap-x-24">
      <div className="flex-1 space-y-8 max-lg:text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
          Get Started With Us
        </h2>
        <div className="space-y-4 text-white">
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
          href="/"
          className="inline-block min-w-56 rounded-full bg-cyan-400 px-8 py-4 text-center font-bold text-white duration-200 hover:bg-cyan-500"
        >
          Launch App
        </a>
      </div>
      <div>
        <MainIllust className="h-auto w-full" />
      </div>
    </div>
  </section>
)
