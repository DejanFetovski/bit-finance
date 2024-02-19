import { useState, useEffect, useCallback, Key } from 'react'

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Link,
  Tooltip,
  CircularProgress,
  Avatar,
  Button,
  Card,
  CardBody,
  Divider,
  // Image,
} from '@nextui-org/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'

// type Asset = {
//   id: number
//   asset: string
//   oraclePrice: number
//   depositApy: number
//   borrowApy: number
//   rewardApy: number
//   util: number
//   totalDeposit: number
//   totalBorrow: number
// }

/** import constant market data for test */
import { marketData } from 'constants/market.data'
type Asset = (typeof marketData.assets)[0]

/** table columns */
const columns = [
  { name: 'Asset', uid: 'asset', sortable: true, hideHeader: false },
  { name: 'Deposit APY', uid: 'depositApy', sortable: true, hideHeader: false },
  { name: 'Borrow APY', uid: 'borrowApy', sortable: true, hideHeader: false },
  { name: 'Utilization', uid: 'util', sortable: true, hideHeader: false },
  {
    name: 'Total Deposit/Borrow',
    uid: 'total',
    sortable: false,
    hideHeader: true,
  },
  { name: 'Actions', uid: 'actions', sortable: false, hideHeader: true },
]

export function Market() {
  const [marketSize, setMarketSize] = useState<number>()
  const [totalBorrow, setTotalBorrow] = useState<number>()
  const [assets, setAssets] = useState<Asset[]>([])

  useEffect(() => {
    setMarketSize(marketData.marketSize)
    setTotalBorrow(marketData.totalBorrow)
    setAssets(marketData.assets)
  }, [])

  const renderCell = useCallback((asset: Asset, columnKey: Key) => {
    const cellValue = asset[columnKey as keyof Asset]

    switch (columnKey) {
      case 'asset':
        return (
          <User
            avatarProps={{ src: asset.icon }}
            description={`Oracle Price: $${asset.oraclePrice}`}
            name={
              <Link
                href={asset.link}
                isExternal
                showAnchorIcon
                color="foreground"
                underline="hover"
                anchorIcon={
                  <FontAwesomeIcon
                    icon={faExternalLink}
                    className="ml-1 text-sm text-foreground-400"
                  />
                }
              >
                {cellValue}
              </Link>
            }
          />
        )
      case 'depositApy':
        return <p className="text-base">{cellValue}%</p>
      case 'borrowApy':
        return (
          <div className="space-y-1">
            <p className="text-base">{cellValue}%</p>
            <Tooltip showArrow content="Reward APY based on the borrow value">
              <Chip color="primary" size="md" variant="flat">
                <div className="flex items-center gap-x-1">
                  <Avatar src={asset.rewardIcon} className="h-5 w-5" />
                  {asset.rewardApy}%
                </div>
              </Chip>
            </Tooltip>
          </div>
        )
      case 'util':
        return (
          <div className="flex items-center gap-x-2">
            <CircularProgress
              aria-label="util"
              classNames={{
                svg: 'w-6 h-6',
              }}
              value={asset.util}
            />
            <p>{cellValue}%</p>
          </div>
        )
      case 'total':
        return (
          <div className="grid grid-cols-[auto_auto] justify-start gap-x-2 gap-y-1 text-xs">
            <p className="text-foreground-400">Total Deposit:</p>
            <p>${asset.totalDeposit}</p>
            <p className="text-foreground-400">Total Borrow:</p>
            <p>${asset.totalBorrow}</p>
          </div>
        )
      case 'actions':
        return (
          <div className="flex items-center gap-x-4">
            <Button href="#" as={Link} color="primary">
              Deposit/Borrow
            </Button>
            <Link href="#" size="sm" underline="always">
              Pool Info
            </Link>
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  return (
    <div className="mx-auto max-w-screen-xl space-y-6 p-6">
      <Card shadow="sm" className="bg-primary">
        {/* <Image
          removeWrapper
          className="absolute z-0 h-full w-full object-cover"
          alt="nextui logo"
          src="https://app.init.capital/static/images/market/bg-cover.svg"
        /> */}
        <CardBody className="p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white">Market</h1>
            <Card shadow="none" radius="sm">
              <CardBody className="px-6 py-4">
                <div className="flex gap-x-6">
                  <div className="min-w-40 space-y-2">
                    <h2 className="text-sm text-foreground-400">Market Size</h2>
                    <p className="text-xl">${marketSize}</p>
                  </div>
                  <Divider orientation="vertical" className="h-auto" />
                  <div className="min-w-40 space-y-2">
                    <h2 className="text-sm text-foreground-400">
                      Total Borrow
                    </h2>
                    <p className="text-xl">${totalBorrow}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>
      <Table aria-label="market">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              allowsSorting={column.sortable}
              hideHeader={column.hideHeader}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={assets}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
