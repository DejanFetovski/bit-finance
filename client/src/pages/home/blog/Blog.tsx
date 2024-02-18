import { BlogType } from 'types/blog.type'

import { BlogCard } from './BlogCard'

import BlogImg0 from 'assets/images/blog-0.png'
import BlogImg1 from 'assets/images/blog-1.png'
import BlogImg2 from 'assets/images/blog-2.png'

const blogData: BlogType[] = [
  {
    image: BlogImg0,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
    url: '',
  },
  {
    image: BlogImg1,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
    url: '',
  },
  {
    image: BlogImg2,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
    url: '',
  },
]

export const Blog = () => (
  <section className="bg-white">
    <div className="mx-auto max-w-screen-xl space-y-12 px-8 py-16 sm:py-24 xl:py-32">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold text-blue-950 sm:text-4xl xl:text-5xl">
          Our Blog
        </h1>
        <p className="text-slate-600">
          Members gain access to a curated selection of exclusive opportunities.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3">
        {blogData.map(({ image, description, url }, id) => (
          <BlogCard
            key={id}
            image={image}
            description={description}
            url={url}
          />
        ))}
      </div>
    </div>
  </section>
)
