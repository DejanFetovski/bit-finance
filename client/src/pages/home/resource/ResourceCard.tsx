import { Coin } from 'components/Coin'

import { ResourceType } from 'types/resource.type'

const ResourceItem = ({
  title,
  value,
  className,
}: {
  title: string
  value: string
  className?: string
}) => (
  <div className={`${className} space-y-2`}>
    <h1 className="text-xs text-slate-400">{title}</h1>
    <div className="text-blue-950">{value}</div>
  </div>
)

export const ResourceCard = ({ coins, type, apy, leverage }: ResourceType) => (
  <div className="space-y-4 rounded-lg bg-white p-6">
    <div className="flex -space-x-2">
      {coins.map((item) => (
        <Coin key={item} coin={item} />
      ))}
    </div>
    <div className="flex flex-wrap gap-2">
      <ResourceItem title="Type" value={type} className="w-2/3" />
      {apy && <ResourceItem title="APY" value={apy} />}
      {leverage && <ResourceItem title="Leverage" value={leverage} />}
    </div>
  </div>
)
