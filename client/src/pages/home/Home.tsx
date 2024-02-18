import { Hero } from './Hero'
import { Join } from './Join'
import { Works } from './works/Works'
import { Start } from './Start'
import { Resource } from './resource/Resource'
import { FAQ } from './FAQ'
import { Blog } from './blog/Blog'

import { Banner } from 'components/Banner'
import { Navbar } from 'components/Navbar'
import { Footer } from 'components/Footer'

import { NavigationType } from 'types/navigation.type'
import { SocialUrls } from 'constants/socialUrls'

const navigation: NavigationType = {
  // links: [
  //   {
  //     name: 'Market',
  //     url: '/',
  //   },
  //   {
  //     name: 'Dashboard',
  //     url: '/',
  //   },
  //   {
  //     name: 'Point',
  //     url: '/',
  //   },
  //   {
  //     name: 'Social',
  //     url: '/',
  //   },
  // ],
  socialLinks: SocialUrls,
}

export const Home = () => (
  <>
    <div className="sticky top-0 z-50">
      <Banner url="/">Get Started With Bit Finance Now</Banner>
      <Navbar navigation={navigation}>
        <a
          href="/"
          className="inline-block rounded-full bg-cyan-400 px-8 py-4 text-center font-bold text-white duration-200 hover:bg-cyan-500"
        >
          Launch App
        </a>
      </Navbar>
    </div>
    <Hero />
    <Join />
    <Works />
    <Start />
    <Resource />
    <FAQ />
    <Blog />
    <Footer />
  </>
)
