import HeroImg from 'assets/images/hero.png'

export const Hero = () => (
  <section className="relative border-b border-cyan-400 bg-gradient-to-b from-slate-100 to-white">
    <div className="mx-auto flex max-w-screen-xl px-8 pt-16 max-xl:flex-col max-xl:items-center sm:pt-24 xl:py-32">
      <div className="z-10 space-y-8 max-xl:text-center xl:max-w-lg">
        <h1 className="text-5xl/tight font-black text-blue-950 sm:text-6xl/tight xl:text-7xl/tight">
          Explore The
          <div className="text-blue-700">Liquidity Hook</div>
          Money Market
        </h1>
        <p className="text-slate-600 sm:text-lg xl:text-xl">
          Embark on a financial journey and explore the dynamic landscape of The
          Liquidity Hook Money Market. Uncover a realm where financial
          opportunities converge with strategic investments, offering a platform
          tailored to meet your liquidity needs.
        </p>
        <a
          href="/"
          className="inline-block min-w-56 rounded-full bg-cyan-400 px-8 py-4 text-center font-bold text-white duration-200 hover:bg-cyan-500"
        >
          Launch App
        </a>
      </div>
      <img
        src={HeroImg}
        alt="hero"
        className="xl:absolute xl:bottom-0 xl:right-0"
      />
    </div>
  </section>
)
