import { Fragment, useState } from 'react'

import { Disclosure, Menu, Transition, Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXTwitter,
  faMedium,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons'

import { NavigationType } from 'types/navigation.type'

import Logo from 'assets/svg/logo-navbar.svg?react'

const socialIcons = [faXTwitter, faMedium, faDiscord]

type NavbarProps = {
  navigation: NavigationType
  children?: React.ReactNode
}

export const Navbar = ({ navigation, children }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="border-b border-cyan-400 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between p-4 px-8 text-slate-600">
        <div className="flex items-center">
          <a href="/" aria-label="logo">
            <Logo />
          </a>
        </div>
        {navigation.links && navigation.links.length > 0 && (
          <div className="hidden lg:flex lg:gap-x-4">
            {navigation.links.map(({ name, url }, id) => (
              <a
                key={id}
                href={url}
                className="rounded-lg px-4 py-2 font-bold duration-200 hover:bg-blue-100"
              >
                {name}
              </a>
            ))}
          </div>
        )}
        <div className="flex items-center gap-x-6">
          {navigation.socialLinks && navigation.socialLinks.length > 0 && (
            <div className="hidden lg:flex lg:gap-x-6">
              {navigation.socialLinks.map(({ name, url }, id) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  className="duration-200 hover:text-blue-700"
                  aria-label={name}
                >
                  <FontAwesomeIcon icon={socialIcons[id]} size="lg" />
                </a>
              ))}
            </div>
          )}
          {children && <div className="max-lg:hidden">{children}</div>}
          <button
            type="button"
            className="inline-flex rounded-lg p-2 duration-200 hover:bg-blue-100 lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Bars3Icon className="h-6" />
          </button>
        </div>
      </nav>
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="text-slate-600 lg:hidden"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-8 sm:max-w-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <a href="/" aria-label="logo">
                    <Logo />
                  </a>
                </div>
                <button
                  type="button"
                  className="rounded-lg p-2 duration-200 hover:bg-blue-50"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <XMarkIcon className="h-6" />
                </button>
              </div>
              <div className="divide-y divide-slate-200">
                {navigation.links && navigation.links.length > 0 && (
                  <div className="space-y-2 py-4">
                    {navigation.links.map(({ name, url }, id) => (
                      <a
                        key={id}
                        href={url}
                        className="block rounded-lg px-4 py-2 font-bold duration-200 hover:bg-blue-50"
                      >
                        {name}
                      </a>
                    ))}
                  </div>
                )}
                <div className="space-y-4 py-4">
                  {navigation.socialLinks &&
                    navigation.socialLinks.length > 0 && (
                      <div className="flex gap-x-4 px-2">
                        {navigation.socialLinks.map(({ name, url }, id) => (
                          <a
                            key={id}
                            href={url}
                            target="_blank"
                            className="p-2 duration-200 hover:text-blue-700"
                            aria-label={name}
                          >
                            <FontAwesomeIcon icon={socialIcons[id]} size="lg" />
                          </a>
                        ))}
                      </div>
                    )}
                  {children && children}
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  )
}
