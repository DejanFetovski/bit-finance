import { ChevronRightIcon } from '@heroicons/react/24/outline'

import { BlogType } from 'types/blog.type'

export const BlogCard = ({ image, description, url }: BlogType) => (
  <div className="group/card space-y-4">
    <div className="aspect-7/5 overflow-hidden rounded-lg">
      <img
        src={image}
        alt="blog"
        className="duration-200 group-hover/card:rotate-3 group-hover/card:scale-110"
      />
    </div>
    <p className="text-blue-950 sm:text-lg xl:text-xl">{description}</p>
    <a
      href={url}
      className="group/link inline-flex items-center font-medium text-indigo-400 duration-200 hover:text-indigo-500"
    >
      <span>Read More</span>
      <ChevronRightIcon className="h-5 opacity-0 duration-200 group-hover/link:translate-x-1 group-hover/link:opacity-100" />
    </a>
  </div>
)
