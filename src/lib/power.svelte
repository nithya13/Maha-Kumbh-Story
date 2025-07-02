<script>
  export let base = "";
  import { onMount } from "svelte";
  // Reactive variable to control visibility of the overlay
  let showOverlay = false;

  // Reference to the DOM element that will act as a scroll trigger
  let trigger;

  let isOverlay1Visible = false;
  let isOverlay2Visible = false;
  let isOverlay3Visible = false;
  let fadeTrigger;
  let pointsTrigger;
  let nightTrigger;

  onMount(() => {
    // Create a new IntersectionObserver
    // It will observe when the trigger element enters the viewport
    const observerPower = new IntersectionObserver(
      ([entry]) => {
        // When the trigger is at least 50% visible, toggle `showOverlay`
        showOverlay = entry.isIntersecting;
      },
      {
        threshold: 0.5, // 50% visibility triggers the observer
      },
    );

    // Start observing the `trigger` element if it's present
    if (trigger) observerPower.observe(trigger);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isOverlay1Visible = entry.isIntersecting;
      },
      { threshold: 0.5 },
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        isOverlay2Visible = entry.isIntersecting;
      },
      { threshold: 0.5 },
    );
    const observer3 = new IntersectionObserver(
      ([entry]) => {
        isOverlay3Visible = entry.isIntersecting;
      },
      { threshold: 0.5 },
    );
    if (fadeTrigger) observer.observe(fadeTrigger);
    if (pointsTrigger) observer2.observe(pointsTrigger);
    if (nightTrigger) observer3.observe(nightTrigger);
  });
</script>

<section
  class="col-start-1 col-span-1 md:col-start-5 md:col-span-5 py-4 md:py-8 px-4 md:px-4 text-left"
>
  <h2 id="chapter3" class="text-2xl font-semibold mb-4">
    Chapter 3: Permeating Power: Spiritual and Spatial (River-Society
    Intersection)
  </h2>
  <!-- <p class="text-base leading-relaxed"></p> -->
  <p>
    The Maha Kumbh involves a diverse array of stakeholders—including
    institutions, groups, and individuals—who shape ritual practices and mediate
    interactions between the river and society in both formal and informal
    settings. In this section, through visual illustrations, we outline the key
    stakeholders and their interactions, the informal hierarchical power
    structures that influence pilgrims and ultimately the rituals, and, finally,
    the formal institutional framework responsible for managing river water
    quality during the Kumbh Mela.
  </p>
  <p>
    This visual captures the spiritual and cultural hierarchy that informs
    ritual practices and shapes informal interactions with devotees and
    pilgrims. The illustration delineates four levels within this projection of
    power or influence—beginning with the Akharas at the top, followed by
    influential spiritual gurus and socio-cultural organizations, then the
    Pandas and Purohits, and finally culminating in the pilgrims and Kalpavasis,
    who constitute the base of this hierarchical structure.
  </p>
</section>

<section class="relative col-span-full h-[900vh]">
  <div class="sticky top-0 h-screen overflow-hidden z-10">
    <!-- Heading at top over image -->
    <h2
      class="absolute top-6 left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl font-semibold z-20"
    >
      Permeating Power
    </h2>
    <!-- Base Map -->
    <img
      src={`${base}/Pyramid/Main-illustration.jpg`}
      alt="Power relationships"
      class="w-full h-full object-cover"
    />

    <!-- First overlay -->
    <img
      src={`${base}/Pyramid/Main-overlay-1.png`}
      alt="Overlay"
      class="z-30 absolute inset-0 w-full h-full object-cover transition-opacity duration-800"
      class:opacity-0={!isOverlay1Visible}
      class:opacity-100={isOverlay1Visible}
    />
  </div>

  <!-- Spacer -->
  <div class="h-[100vh]"></div>

  <!-- Overlay Layer 2 -->
  <div class="absolute top-[200vh] left-[40vw] w-full z-20">
    <div
      class="z-50 bg-#c4b2a9 backdrop-blur-lg rounded p-6 md:p-8 w-11/12 md:max-w-lg mr-2 mb-[100vh] shadow-lg"
    >
      <p class="text-base leading-relaxed">
        Akhil Bharatiya Akhara Parishad negotiates with Prayagraj Mela Authority
        for the conduction of Kumbh Mela. Leaders of the 13 Akharas dominate the
        spiritual hierarchy at Mahakumbh. Final authority on rituals, disputes,
        and Akhara policies
      </p>
    </div>
    <div
      class="z-50 bg-#c4b2a9 backdrop-blur-lg rounded p-6 md:p-8 w-11/12 md:max-w-lg mr-14 mb-[100vh] shadow-lg"
    >
      <p class="text-base leading-relaxed">
        An Akhara literally means a ‘wrestling ring’ in Sanskrit, but also
        stands for a place of debate. These are monastic orders of ascetics that
        date as far back as the early 8th century. Sri Adi Shankaracharya is
        believed to have established 7 Akharas evolved from the Dasnaami
        tradition: Mahanirvani, Niranjani, Juna, Atal, Avahan, Agni and Anand
        Akhara. The saints and ascetics associated with an Akhara specialized in
        both scriptures and armaments.
      </p>
    </div>
  </div>

  <div
    bind:this={fadeTrigger}
    class="absolute top-[90vh] h-[10vh] w-full"
  ></div>
</section>

<section class="relative col-span-full h-[900vh]">
  <!-- Sticky container with background image and overlay -->
  <div class="sticky top-0 h-screen overflow-hidden z-10">
    <!-- Title displayed at the top -->
    <h2
      class="absolute top-6 left-2/3 transform -translate-x-1/2 text-2xl md:text-4xl font-semibold z-20"
    >
      Permeating Power
    </h2>

    <!-- Fullscreen background image -->
    <img
      src={`${base}/Power-mappings.webp`}
      alt="Power relationships"
      class="w-full h-full object-cover"
    />
<div
      class="absolute top-2/13 left-1/9 w-1/2 transform -translate-y-1/2 z-30 transition-opacity duration-700 justify-start"
      class:opacity-100={showOverlay}
      class:opacity-0={!showOverlay}
    >
    
      <h3>ABAP</h3>
    </div>
<div
      class="absolute top-1/15 left-2/15 w-1/2 transform -translate-y-1/2 z-30 transition-opacity duration-700 justify-center"
      class:opacity-100={showOverlay}
      class:opacity-0={!showOverlay}
    >
    
      <h3>Acharya Mahamandaleshwar</h3>
    </div>
    <div
      class="absolute top-3/15 left-4/15 w-1/2 transform -translate-y-1/2 z-30 transition-opacity duration-700 justify-center"
      class:opacity-100={showOverlay}
      class:opacity-0={!showOverlay}
    >
    
      <h3>Mahamandaleshwar</h3>
    </div>

    <div
      class="absolute top-5/15 left-5/15 w-1/2 transform -translate-y-1/2 z-30 transition-opacity duration-700 justify-center"
      class:opacity-100={showOverlay}
      class:opacity-0={!showOverlay}
    >
    
      <h3>Sri Mahant, Mahant, and other members associated with Akharas</h3>
    </div>
    <!-- Overlay that appears/disappears based on scroll -->
    <div
      class="absolute top-1/10 left-1/5 w-1/2 transform -translate-y-1/2 z-30 transition-opacity duration-700"
      class:opacity-100={showOverlay}
      class:opacity-0={!showOverlay}
    >
    
      <!-- The line takes up all remaining space -->
      <!-- Horizontal line with text aligned at the end -->
      <div class="flex items-center gap-4">
        <!-- The line takes up all remaining space -->
        <div class="h-px flex-grow bg-black"></div>

        <!-- The text appears at the end of the line -->
        <p class="overlays text-lg  whitespace-nowrap">
          Akhil Bharatiya Akhara Parishad negotiates with Prayagraj Mela
          Authority for the conduction of Kumbh Mela.
        </p>
      </div>
    </div>

    <div
      class="absolute top-1/6 left-1/3 w-1/2 transform -translate-y-1/2 z-30 transition-opacity duration-700"
      class:opacity-100={showOverlay}
      class:opacity-0={!showOverlay}
    >
      <!-- Horizontal line with text aligned at the end -->
      <div class="flex items-center gap-4">
        <!-- The line takes up all remaining space -->
        <div class="h-px flex-grow bg-black"></div>

        <!-- The text appears at the end of the line -->
        <p class="overlays text-lg">
          Leaders of the 13 Akharas dominate the spiritual hierarchy at Mahakumbh. Final authority on rituals, disputes, and Akhara policies

        </p>
      </div>
    </div>
  </div>

  <!-- Invisible div that acts as the scroll trigger -->
  <!-- When this div enters the viewport, `showOverlay` becomes true -->
  <div bind:this={trigger} class="absolute top-[200vh] h-[10vh] w-full"></div>
</section>
