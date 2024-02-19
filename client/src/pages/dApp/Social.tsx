import { useCurrentAccount } from '@mysten/dapp-kit'

import { useState } from 'react'

import {
  User,
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Input,
  Link,
} from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons'

import { createSocial } from 'services/users'

import { SocialReqDataType, SocialResDataType } from 'types/apiData.type'

import { users } from 'constants/social.data'

const howTo = [
  'Share your unique link with friends to earn extra points',
  'Earn more points through the referrals made by friends who join under your account',
  'Track your points on our leaderboard',
]

export function Social() {
  const [telegramId, setTelegramId] = useState('')
  const [discordId, setDiscordId] = useState('')
  const [isTwitter, setIsTwitter] = useState(false)
  const [isTelegram, setIsTelegram] = useState(false)
  const [isDiscord, setIsDiscord] = useState(false)

  const [twitterUrl, setTwitterUrl] = useState('')
  const [telegramUrl, setTelegramUrl] = useState('')
  const [discordUrl, setDiscordUrl] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const account = useCurrentAccount()

  const handleSubmit = () => {
    if (account) {
      setIsLoading(true)
      const socialReqData: SocialReqDataType = {
        address: account.address,
        isTwitter,
        telegramId: isTelegram ? telegramId : '',
        discordId: isDiscord ? discordId : '',
      }

      createSocial(socialReqData).then((resData: SocialResDataType) => {
        setTwitterUrl(resData.twitterUrl)
        setTelegramUrl(resData.telegramUrl)
        setDiscordUrl(resData.discordUrl)
        setIsLoading(false)
      })
    }
  }

  return (
    <div className="mx-auto max-w-screen-xl space-y-6 p-6">
      <Card shadow="sm" className="gap-y-4 bg-primary py-6">
        <CardHeader className="px-6 py-0">
          <h2 className="text-xl font-bold text-white">
            Join us in the movement
          </h2>
        </CardHeader>
        <CardBody className="gap-y-4 px-6 py-0">
          <p className="text-sm text-white/60">How to use invite:</p>
          <ul className="space-y-1 text-white">
            {howTo.map((item, id) => (
              <li key={id} className="flex items-center gap-x-2">
                <FontAwesomeIcon icon={faCheckCircle} className="text-lg" />
                {item}
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
      <div className="grid grid-cols-3 items-start gap-6">
        <Card shadow="sm" className="col-span-2">
          <CardBody className="gap-y-4 p-6">
            <Input
              onValueChange={(value) => setTelegramId(value)}
              isDisabled={!account}
              label="Your Telegram"
              labelPlacement="outside"
              startContent={
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="text-lg text-foreground-400"
                />
              }
            />
            <Input
              onValueChange={(value) => setDiscordId(value)}
              isDisabled={!account}
              label="Your Discord"
              labelPlacement="outside"
              startContent={
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="text-lg text-foreground-400"
                />
              }
            />
            <Checkbox
              onValueChange={(value) => setIsTwitter(value)}
              isDisabled={!account}
            >
              Follow us on Twitter to qualify
              {twitterUrl && (
                <Link href={twitterUrl} className="ml-2" isExternal>
                  {twitterUrl}
                </Link>
              )}
            </Checkbox>
            <Checkbox
              onValueChange={(value) => setIsTelegram(value)}
              isDisabled={!account}
            >
              Join our Telegram Group
              {telegramUrl && (
                <Link href={telegramUrl} className="ml-2" isExternal>
                  {telegramUrl}
                </Link>
              )}
            </Checkbox>
            <Checkbox
              onValueChange={(value) => setIsDiscord(value)}
              isDisabled={!account}
            >
              Join our community on Discord
              {discordUrl && (
                <Link href={discordUrl} className="ml-2" isExternal>
                  {discordUrl}
                </Link>
              )}
            </Checkbox>
            {/* <Checkbox isDisabled={!account}>
              I've completed all the above to be qualified
            </Checkbox> */}
            <Button
              color="primary"
              isDisabled={!account}
              className="self-center"
              onPress={handleSubmit}
              isLoading={isLoading}
            >
              Submit and get invite code
            </Button>
          </CardBody>
        </Card>
        <Card shadow="sm" className="gap-y-4 py-6">
          <CardHeader className="px-6 py-0">
            <h1 className="text-2xl font-bold">Recent Joins</h1>
          </CardHeader>
          <CardBody className="gap-y-4 px-6 py-0">
            {users.map(({ id, name, inviter, time, avatar }) => (
              <div key={id} className="flex justify-between">
                <User
                  name={name}
                  description={`${inviter && `Invited by ${inviter}`}`}
                  avatarProps={{ src: avatar }}
                />
                <p className="text-sm text-primary">{time}h age</p>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
