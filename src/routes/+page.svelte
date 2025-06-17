<script>
  import { onMount } from "svelte";
  import Rituals from "$lib/rituals.svelte";
  import Riversociety from "$lib/riversociety.svelte";
  import Spatial from "$lib/spatial.svelte";
  import Power from "$lib/power.svelte";
  import { base } from "$app/paths";
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&family=Lora:ital,wght@0,400..700;1,400..700&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<header class="w-full py-4 px-6 absolute top-0 left-0 z-20 text-white">
  <div class="flex items-center justify-end px-6 py-4">
    <!-- Menu (right) -->
    <nav>
      <ul class="flex space-x-10 text-sm text-black">
        <a
          href="https://cprindia.org/research/treads-transboundary-rivers-ecologies-development-studies/"
        >
          <li><h4>About TREADS</h4></li>
        </a>
      </ul>
    </nav>
  </div>
</header>

<section class="relative w-full h-screen overflow-hidden">
  <!-- Background Image -->
  <img
    src={`${base}/Background.webp`}
    alt="Background"
    class="absolute inset-0 w-full h-full object-cover"
  />

  <!-- Dark overlay for better text visibility (optional but recommended) -->
  <div
    class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"
  ></div>

  <!-- Centered Content -->
  <div
    class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 transform md:-translate-y-20"
  >
    <h1
      class="text-4xl tracking-wider md:text-6xl font-bold border-b-2 border-white"
      style="font-family: 'Bebas Neue', sans-serif;"
    >
      A water rejuvenation lesson from the Maha Kumbh
    </h1>
    <h6
      class="text-base tracking-wider md:text-base font-medium"
      style="font-family: 'Inter', sans-serif;"
    >
      Indigenous practices often embody an ecological ethic of conservation
    </h6>
  </div>

  <!-- Bottom Flex Container (4 boxes) -->
  <div
    class="absolute bottom-2 w-full h-[20%] z-10 px-6 py-2 flex flex-wrap md:flex-nowrap justify-between items-stretch text-white uppercase"
  >
    <!-- Box 1 -->
    <div class="w-1/2 md:w-1/4 text-center flex items-start justify-center">
      <a href="#chapter1">
        <h1>1</h1>
        <h6
          class="text-xl font-light"
          style="font-family: 'Khand', sans-serif;"
        >
          Reading Rituals for Rejuvenating Rivers
        </h6>
      </a>
    </div>

    <!-- Vertical Divider (hidden on mobile) -->
    <div class="hidden md:block w-px bg-white"></div>

    <!-- Box 2 -->
    <div class="w-1/2 md:w-1/4 text-center flex items-start justify-center">
      <a href="#chapter2">
        <h1>2</h1>
        <h6
          class="text-xl font-light"
          style="font-family: 'Khand', sans-serif;"
        >
          LEGENDS, RITUALS, CUSTOMS & PRACTICES AT THE MAHA KUMBH
        </h6>
      </a>
    </div>

    <!-- Vertical Divider -->
    <div class="hidden md:block w-px bg-white"></div>

    <!-- Box 3 -->
    <div class="w-1/2 md:w-1/4 text-center flex items-start justify-center">
      <a href="#chapter3">
        <h1>3</h1>
        <h6
          class="text-xl font-light"
          style="font-family: 'Khand', sans-serif;"
        >
        PERMEATING POWER: SPIRITUAL & SPATIAL (RIVER-SOCIETY INTERSECTION)  
        
        </h6>
      </a>
    </div>

    <!-- Vertical Divider -->
    <div class="hidden md:block w-px bg-white"></div>

    <!-- Box 4 -->
    <div class="w-1/2 md:w-1/4 text-center flex items-start justify-center">
      <a href="#chapter4">
        <h1>4</h1>
        <h6
          class="text-xl font-light"
          style="font-family: 'Khand', sans-serif;"
        >
          Maha Kumbh - Spatial Context
        </h6>
      </a>
    </div>
  </div>
</section>

<main
  class="grid grid-cols-1 md:grid-cols-12 gap-4 w-full"
  style="font-family: 'Lora', serif;"
>
  <Riversociety {base} />
  <Rituals {base} />
    <Power {base} />
  <Spatial {base} />

</main>

<style>
  /* Import fonts from Google Fonts */
  @import url("https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&family=Lora:ital,wght@0,400..700;1,400..700&display=swap");

  /* Base styles */
  body {
    font-family: "Lora", serif;
    font-weight: 400;
    line-height: 1.6;
    font-size: 1rem;
    color: #111;
    margin: 0;
    padding: 0;
    text-align: justify;
  }
  .wrap-image {
    float: left;
    width: 400px; /* adjust as needed */
    margin: 0 0 1.5rem 1.5rem;
    shape-outside: ellipse(50% 50%);
    shape-margin: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    font-family: "Khand", sans-serif;
    font-weight: 600;
    margin-top: 1.5em;
    margin-bottom: 0.2em;
    line-height: 1.3;
  }

  h1 {
    font-size: 2.5rem;
  }

  :global(h2) {
    font-family: "Khand", sans-serif;
    font-weight: 600;
    font-size: 2rem;
  }
  :global(h2::after) {
    content: "";
    display: block;
    margin-top: 0.5rem;
    width: 1000px; /* adjust to match image width */
    height: 10px; /* adjust to match image height */
    background-image: url("/Border.png"); /* from static folder */
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
    margin-left: auto;
    margin-right: auto;
  }
  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  :global(p,
  li) {
    font-family: "Lora", serif;
    font-weight: 400;
    font-size: 1rem;
    margin-bottom: 1.25rem;
    text-align: justify;
  }

  .annotation {
    font-family: "Inter", sans-serif;
    font-weight: 300;
    font-size: 0.875rem; /* Smaller size */

    color: #555;
    margin-bottom: 1rem;
  }
</style>
