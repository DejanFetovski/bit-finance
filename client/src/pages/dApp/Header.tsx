import { ConnectButton } from '@mysten/dapp-kit'
import { useCurrentAccount } from '@mysten/dapp-kit'

import { useState, useEffect } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  // Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react'

import Logo from 'assets/svg/logo-navbar.svg?react'
import { getUserInfo } from 'services/users'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [point, setPoint] = useState<number>()

  const account = useCurrentAccount()

  useEffect(() => {
    if (account) {
      getUserInfo(account.address).then((resData) => {
        setPoint(resData.point)
      })
    }
  }, [account])

  const menuItems = [
    {
      name: 'Market',
      url: '/dapp',
    },
    {
      name: 'Dashboard',
      url: '/dapp/dashboard',
    },
    {
      name: 'Points',
      url: '/dapp/points',
    },
    {
      name: 'Social',
      url: '/dapp/social',
    },
  ]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered maxWidth="xl">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="start">
        {menuItems.map(({ name, url }, index) => (
          <NavbarItem key={index}>
            <Link color="foreground" href={url}>
              {name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {account && <NavbarItem>{point}</NavbarItem>}
        <NavbarItem>
          <ConnectButton />
          {/* <Button color="primary">Connect Wallet</Button> */}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map(({ name, url }, index) => (
          <NavbarMenuItem key={index}>
            <Link color="foreground" className="w-full" href={url} size="lg">
              {name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
