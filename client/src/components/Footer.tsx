import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXTwitter,
  faMedium,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons'

import { NavigationType } from 'types/navigation.type'
import { SocialUrls } from 'constants/socialUrls'

import Logo from 'assets/svg/logo-footer.svg?react'

const navigation: NavigationType = {
  links: [
    { name: 'Docs', url: '' },
    { name: 'Audit', url: '' },
    { name: 'Media Kit', url: '' },
    { name: 'Terms of Use', url: '' },
  ],
  socialLinks: SocialUrls,
}

const socialIcons = [faXTwitter, faMedium, faDiscord]

export const Footer = () => (
  <footer className="bg-slate-900 text-center text-white">
    <div className="flex flex-col items-center gap-y-4 px-8 py-12 sm:gap-y-6 sm:py-16 xl:gap-y-8 xl:py-24">
      <Logo />
      {navigation.links && navigation.links.length > 0 && (
        <ul className="flex flex-wrap justify-center gap-2">
          {navigation.links.map(({ name, url }, id) => (
            <li key={id} className="px-4 py-2 font-bold sm:text-lg xl:text-xl">
              <a href={url} className="underline-offset-2 hover:underline">
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
      {navigation.socialLinks && navigation.socialLinks.length > 0 && (
        <div className="flex gap-x-8">
          {navigation.socialLinks.map(({ name, url }, id) => (
            <a
              key={id}
              href={url}
              target="_blank"
              className="duration-200 hover:text-indigo-400"
              aria-label={name}
            >
              <FontAwesomeIcon icon={socialIcons[id]} size="2x" />
            </a>
          ))}
        </div>
      )}
    </div>
    <div className="bg-slate-800 px-8 py-4 text-sm">
      <p>Copyright © {new Date().getFullYear()} | All Rights Reserved</p>
    </div>
  </footer>
)
