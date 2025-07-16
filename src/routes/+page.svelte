<script>
  import { onMount } from "svelte";
  import Rituals from "$lib/rituals.svelte";
  import Riversociety from "$lib/riversociety.svelte";
  import Spatial from "$lib/spatial.svelte";
  import Power from "$lib/power.svelte";
  import { base } from "$app/paths";

  let showButton = false;

  // Show the button only after user scrolls a bit
  const handleScroll = () => {
    showButton = window.scrollY > 300;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Attach scroll listener on mount
  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&family=Lora:ital,wght@0,400..700;1,400..700&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<header class="w-full py-4 px-6 absolute top-0 left-0 z-20 text-white">
  <div class="flex items-center justify-end px-6 py-4">
    <!-- Menu (right) -->
    <nav>
      <ul class="flex space-x-10 text-sm text-white">
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
   <!-- Background Video -->
  <video
    autoplay
    muted
    loop
    playsinline
    class="absolute inset-0 w-full h-full object-cover"
  >
    <source src={`${base}/Drone clip.mp4`} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <!-- Dark overlay for better text visibility (optional but recommended) -->
  <div
    class="absolute inset-0 bg-gradient-to-b from-black-60 to-black/80"
  ></div>

  <!-- Centered Content -->
  <div
    class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 transform md:-translate-y-20 text-white"
  >
    <h1
      class="text-5xl uppercase tracking-wider md:text-6xl font-bold border-b-2 border-white"
      style="font-family: 'Khand', sans-serif;"
    >
      A water rejuvenation lesson from the Maha Kumbh
    </h1>
    <h6
      class="text-xl md:text-base font-medium"
      style="font-family: 'Lora', serif;"
    >
      Indigenous practices often embody an ecological ethic of conservation
    </h6>
  </div>

  <!-- Bottom Flex Container (4 boxes) -->
  <div
    class="absolute bottom-2 w-full md:h-[10%] h-[30%] z-10 px-6 py-2 flex flex-wrap md:flex-nowrap justify-between items-stretch uppercase text-white"
  >
    <!-- Box 1 -->
    <div class="w-1/2 md:w-1/4 text-center flex items-start justify-center">
      <a href="#chapter1">
        <!-- <h1>1</h1> -->
        <h6
          class="md:text-2xl font-regular hover:font-bold"
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
        <!-- <h1>2</h1> -->
        <h6
          class="md:text-2xl font-regular px-2 hover:font-bold"
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
        <!-- <h1>3</h1> -->
        <h6 
          class="md:text-2xl font-regular px-2 hover:font-bold"
          style="font-family: 'Khand', sans-serif;"
        >
          Maha Kumbh - Spatial Context
        </h6>
      </a>
    </div>

    <!-- Vertical Divider -->
    <div class="hidden md:block w-px bg-white"></div>

    <!-- Box 4 -->
    <div class="w-1/2 md:w-1/4 text-center flex items-start justify-center">
      <a href="#chapter4">
        <!-- <h1>4</h1> -->
        <h6
          class="md:text-2xl font-regular px-2 hover:font-bold"
          style="font-family: 'Khand', sans-serif;"
        >
          PERMEATING POWER: SPIRITUAL & SPATIAL (RIVER-SOCIETY INTERSECTION)
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
  <div class="h-[10vh]"></div>
  <Spatial {base} />
  <Power {base} />
  <section
  class="annotation col-start-1 col-span-1 md:col-start-5 md:col-span-5 py-4 md:py-8 px-4 md:px-4 text-left"
>
  <p class = "annotation">
    This is a pilot project supported by the National Mission for Clean Ganga
    (NMCG) under the CPR–NMCG Collaborative Research Programme towards shaping
    informed, evidence-based policy and governance frameworks for the
    rejuvenation of India’s rivers. The project aspires to evolve into a more
    expansive programme documenting the river-society intersection through the
    various river gatherings and festivals and how they can potentially
    contribute to river rejuvenation efforts. 
  </p>
  <div class = "leading-loose"><ul><strong>Team Project Lead:</strong> Dr. Srinivas
    Chokkakula

    </ul> 
    <ul><strong>Design and Visualization Lead:</strong> <a href="poppadomco.com"
      class="text-slate-700 hover:text-slate-700 hover:font-bold">
      Nithya Subramanian
    </a></ul>
    <ul><strong>Project Team: </strong> Archit Shukla, Subia Ahmad, Debarshee Dasgupta, Sarang Barbarwar</ul>
     
    <ul><a href = "https://treads.org.in/" class="text-slate-700 hover:text-slate-700 hover:font-bold">TREADS Website</a></ul></div>
    
  
</section>
</main>
<!-- Return to Top Button -->
{#if showButton}
  <button
    on:click={scrollToTop}
    class="fixed bottom-6 right-6 z-50 bg-gray-700 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-500 transition-opacity duration-300"
  >
    ↑
  </button>
{/if}

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
    font-weight: 500;
    margin-top: 1.5em;
    margin-bottom: 0.2em;
    line-height: 1.3;
  }

  h1 {
    font-size: 2.5rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  /* :global(p,
  li) {
    font-family: "Lora", serif;
    font-weight: 400;
    font-size: 1rem;
    margin-bottom: 1.25rem;
    text-align: justify-left;
  } */

  :global(.annotation) {
    font-family: "Inter", sans-serif;
    font-weight: 300;
    font-size: 0.875rem; /* Smaller size */

    margin-bottom: 1rem;
  }
</style>
