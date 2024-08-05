<script lang="ts">
  // Generate dummy blog data
  const blogs = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Blog Title ${i + 1}`,
    description: `This is a brief description of blog post ${i + 1}.`,
    image: `https://dummyimage.com/600x400/000/fff&text=Blog+${i + 1}`
  }));
</script>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Blogs</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
        Explore our latest blog posts.
      </p>
    </div>
    <div class="flex flex-wrap -m-4">
      {#each blogs as blog}
        <div class="p-4 lg:w-1/3 md:w-1/2 w-full">
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={blog.image} alt={blog.title} />
            <div class="p-6">
              <h2 class="text-xl font-medium text-gray-900 title-font mb-2">{blog.title}</h2>
              <p class="leading-relaxed text-base">{blog.description}</p>
              <div class="flex items-center flex-wrap mt-4">
                <a href="/" class="text-teal-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">
                  Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
