import { useState, useEffect, useCallback, useMemo, Key } from 'react'

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  // Tooltip,
  User,
  Button,
  Card,
  CardBody,
  Divider,
  CardHeader,
  // Accordion,
  // AccordionItem,
  // Image,
} from '@nextui-org/react'

// import { getPoints } from 'services/users'

// type Point = {
//   rank: number
//   address: string
//   totalPts: number
//   ptsPerDay: number
//   referralPts: number
//   bonusPts: number
// }

/** import constant points data for test */
import { pointsData } from 'constants/points.data'
type Point = (typeof pointsData.points)[0]

const columns = [
  { name: 'Rank', uid: 'rank', sortable: false },
  { name: 'Address', uid: 'address', sortable: false },
  { name: 'Total Points', uid: 'totalPts', sortable: true },
  { name: 'Est. Points/day', uid: 'ptsPerDay', sortable: true },
  { name: 'Referral Points', uid: 'referralPts', sortable: true },
  { name: 'Bonus Points', uid: 'bonusPts', sortable: true },
]

export function Points() {
  const [updateDate, setUpdateDate] = useState<Date>(new Date())
  const [points, setPoints] = useState<Point[]>([])

  useEffect(() => {
    // getPoints().then((initialData: { updateDate: Date; points: Point[] }) => {
    //   setUpdateDate(initialData.updateDate)
    //   setPoints(initialData.points)
    // })
    /** constant data for test */
    setUpdateDate(pointsData.updateDate)
    setPoints(pointsData.points)
  }, [])

  const renderCell = useCallback((point: Point, columnKey: Key) => {
    const cellValue = point[columnKey as keyof Point]

    switch (columnKey) {
      case 'address':
        return (
          <User
            name={
              <div className="font-bold lowercase">{`${point.address.slice(0, 6)}...${point.address.slice(-4)}`}</div>
            }
            avatarProps={{ size: 'sm' }}
          />
        )
      case 'totalPts':
      case 'referralPts':
      case 'bonusPts':
        return `${cellValue.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} pts`
      case 'ptsPerDay':
        return `${cellValue.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} pts/day`
      default:
        return cellValue
    }
  }, [])

  const topContent = useMemo(() => {
    return (
      updateDate && (
        <div className="flex justify-end">
          <p className="text-xs text-foreground-400">
            (Last Update: {updateDate.toLocaleString(undefined)})
          </p>
        </div>
      )
    )
  }, [])

  return (
    <div className="mx-auto max-w-screen-xl space-y-6 p-6">
      <Card shadow="sm" className="gap-y-4 bg-primary py-6">
        <CardHeader className="px-6 py-0">
          <h1 className="text-xl font-bold text-white">
            Collect INIT Points and Get Rewarded
          </h1>
        </CardHeader>
        <CardBody className="gap-y-4 px-6 py-0">
          <div className="flex items-center justify-between">
            <div className="max-w-96 space-y-4">
              <p className="text-sm text-white/60">
                Deposit, Borrow, or Refer INIT to accumulate points and
                kickstart your rewards journey.
              </p>
              <Button color="primary" variant="flat" className="bg-white">
                Connect Wallet
              </Button>
            </div>
            <Card shadow="none" radius="sm">
              <CardBody className="px-6 py-4">
                <div className="flex gap-x-6">
                  <div className="min-w-40 space-y-2">
                    <h2 className="text-sm text-foreground-400">Depositing</h2>
                    <p className="text-xl text-primary">
                      1 point{' '}
                      <span className="text-xs text-foreground">
                        /$100 per 24hr
                      </span>
                    </p>
                  </div>
                  <Divider orientation="vertical" className="h-auto" />
                  <div className="min-w-40 space-y-2">
                    <h2 className="text-sm text-foreground-400">Borrowing</h2>
                    <p className="text-xl text-primary">
                      7 point{' '}
                      <span className="text-xs text-foreground">
                        /$100 per 24hr
                      </span>
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>
      <Table
        aria-label="points"
        topContent={topContent}
        topContentPlacement="outside"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} allowsSorting={column.sortable}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={points}>
          {(item) => (
            <TableRow key={item.address}>
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
