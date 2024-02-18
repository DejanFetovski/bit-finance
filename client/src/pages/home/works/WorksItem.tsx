import { WorksType } from 'types/works.type'

import FlowIllust from 'assets/svg/works-flow.svg?react'

export const WorksItem = (props: WorksType) => (
  <div className="group relative text-center">
    <div className="space-y-8">
      <props.svg className="mx-auto" />
      <p className="text-lg text-blue-950 sm:text-xl xl:text-2xl">
        {props.description}
      </p>
    </div>
    <FlowIllust className="absolute left-full top-1/3 z-10 -translate-x-1/3 -translate-y-1/2 group-last-of-type:hidden max-lg:hidden" />
  </div>
)
