import { ArrowRightIcon } from '@heroicons/react/24/outline'

type BannerProps = {
  url: string
  children: string
}

export const Banner = ({ url, children }: BannerProps) => (
  <div className="bg-blue-700 px-8 py-3 text-center">
    <div className="flex justify-center">
      <a
        href={url}
        target="_blank"
        className="flex items-center gap-x-1 text-sm text-white duration-200 hover:text-blue-200"
      >
        {children}
        <ArrowRightIcon className="h-4 shrink-0" />
      </a>
    </div>
  </div>
)
