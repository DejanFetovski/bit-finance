import React from 'react'

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Avatar,
  Button,
  Card,
  CardBody,
  Divider,
  // Image,
  Skeleton,
} from '@nextui-org/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faWallet } from '@fortawesome/free-solid-svg-icons'

/** import constant dashboard data for test */
import { dashboardData, Position } from 'constants/dashboard.data'

/** table columns */
const columns = [
  { name: 'Asset', uid: 'asset', sortable: true },
  { name: 'Health Factor', uid: 'healthFactor', sortable: true },
  { name: 'Net APY', uid: 'netApy', sortable: true },
  { name: 'Deposit', uid: 'deposit', sortable: true },
  { name: 'Borrow', uid: 'borrow', sortable: true },
]

const NET_APY_TOOLTIP =
  'The Net APY is the difference between the weighted average APY of the deposit and the borrow APY of the position.'
const HEALTH_FACTOR_TOOLTIP =
  "Health Factor (HF) is calculated based on the position's collateral and debt value ratio. The position will be at liquidation risk when the HF is <= 1"

export function Dashboard() {
  const renderCell = React.useCallback(
    (position: Position, columnKey: React.Key) => {
      const cellValue = position[columnKey as keyof Position]

      switch (columnKey) {
        // case 'asset':
        //   return (
        //   )
        // case 'healthFactor':
        //   return (
        //   )
        // case 'netApy':
        //   return (
        //   )
        // case 'deposit':
        //   return (
        //   )
        // case 'borrow':
        //   return (
        //   )
        default:
          return cellValue
      }
    },
    [],
  )

  return (
    <div className="mx-auto max-w-screen-xl space-y-6 p-6">
      <Card shadow="sm" className="bg-primary">
        <CardBody className="p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-white">Your Dashboard</h1>
            <Card shadow="none" radius="sm">
              <CardBody className="px-6 py-4">
                <div className="flex items-center gap-x-6">
                  <div className="min-w-28 space-y-1">
                    <h2 className="text-xs text-foreground-400">
                      Total Supply
                    </h2>
                    <p>${dashboardData.totalSupply}</p>
                  </div>
                  <Divider
                    orientation="vertical"
                    className="h-auto self-stretch"
                  />
                  <div className="min-w-28 space-y-1">
                    <h2 className="text-xs text-foreground-400">
                      Total Borrow
                    </h2>
                    <p>${dashboardData.totalBorrow}</p>
                  </div>
                  <Divider
                    orientation="vertical"
                    className="h-auto self-stretch"
                  />
                  <div className="min-w-32 space-y-1">
                    <h2 className="flex items-center gap-x-1 text-xs text-foreground-400">
                      Net APY
                      <Tooltip
                        showArrow
                        placement="right"
                        content={<p className="w-72">{NET_APY_TOOLTIP}</p>}
                      >
                        <FontAwesomeIcon icon={faCircleInfo} />
                      </Tooltip>
                    </h2>
                    <p>{dashboardData.netApy}%</p>
                  </div>
                  <Divider
                    orientation="vertical"
                    className="h-auto self-stretch"
                  />
                  <div className="min-w-56 space-y-2">
                    <h2 className="text-xs text-foreground-400">
                      Claimable Reward
                    </h2>
                    <div className="flex items-center gap-x-2">
                      <Avatar
                        src={dashboardData.rewardIcon}
                        className="h-6 w-6"
                      />
                      <Skeleton className="h-4 w-10 rounded-sm" />
                      <Button size="sm" color="primary" isDisabled>
                        Claim
                      </Button>
                    </div>
                    <Skeleton className="h-3 w-32 rounded-sm" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>
      <h1 className="text-xl font-bold">Deposit & Borrow Position</h1>
      <Table aria-label="dashboard">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} allowsSorting={column.sortable}>
              {column.uid === 'healthFactor' || column.uid === 'netApy' ? (
                <div className="inline-flex items-center gap-x-1">
                  {column.name}
                  <Tooltip
                    showArrow
                    placement="right"
                    content={
                      <p className="w-72">
                        {column.uid === 'healthFactor' && HEALTH_FACTOR_TOOLTIP}
                        {column.uid === 'netApy' && NET_APY_TOOLTIP}
                      </p>
                    }
                  >
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </Tooltip>
                </div>
              ) : (
                column.name
              )}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={dashboardData.positions}
          emptyContent={
            <div className="flex flex-col items-center gap-y-4 py-12">
              <FontAwesomeIcon icon={faWallet} className="text-8xl" />
              <p>Connect Wallet to visit your positions</p>
              <Button color="primary">Connect Wallet</Button>
            </div>
          }
        >
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
///
