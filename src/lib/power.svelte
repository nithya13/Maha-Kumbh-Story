<script>
  export let base = "";
  import { onMount } from "svelte";

  
  let isOverlay1Visible = false;

    let fadeTrigger;
let isOverlayTopVisible = false;
  let isOverlaySecondVisible = false;
  let isOverlayThirdVisible = false;
  let isOverlayBottomVisible = false;

  let topTrigger;
  let secondTrigger;
  let thirdTrigger;
  let bottomTrigger;
  

  onMount(() => {
    const createObserver = (element, setter) => {
      if (!element) return;
      const observer = new IntersectionObserver(
        ([entry]) => setter(entry.isIntersecting),
        { threshold: 0.5 }
      );
      observer.observe(element);
    };

     createObserver(topTrigger, val => isOverlayTopVisible = val);
    createObserver(secondTrigger, val => isOverlaySecondVisible = val);
    createObserver(thirdTrigger, val => isOverlayThirdVisible = val);
    createObserver(bottomTrigger, val => isOverlayBottomVisible = val);

    createObserver(fadeTrigger, val => isOverlay1Visible = val);
  });
</script>

<!-- ✦ SECTION: Textual Explanation -->
<section class="col-start-1 col-span-1 md:col-start-5 md:col-span-5 py-4 md:py-8 px-4 text-left">
  <h2 id="chapter4" class="text-2xl font-semibold mb-4">
    Permeating Power: Spiritual and Spatial (River-Society Intersection)
  </h2>
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

<!-- ✦ SECTION: First Visual with Overlay 1 -->
<section class="relative col-span-full h-[900vh]">
  <div class="sticky top-0 h-screen overflow-hidden z-10">
    <h2 class="absolute top-6 left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl font-semibold z-20">
      Permeating Power
    </h2>

    <!-- Background -->
    <img
      src={`${base}/Pyramid/Main-illustration.jpg`}
      alt="Power relationships"
      class="w-full h-full object-cover"
    />

    <!-- Overlay 1 -->
    <img
      src={`${base}/Pyramid/Main-overlay-1.png`}
      alt="Overlay Layer 1"
      class="absolute inset-0 w-full h-full object-cover z-30 transition-opacity duration-800"
      class:opacity-0={!isOverlay1Visible}
      class:opacity-100={isOverlay1Visible}
    />
  </div>

  <!-- Spacer for triggering overlay -->
  <div class="h-[100vh]"></div>

  <!-- Additional Overlay Boxes -->
  <div class="absolute top-[200vh] left-[40vw] w-full z-20">
    <div class="bg-[#c4b2a9] backdrop-blur-lg rounded p-6 md:p-8 w-11/12 md:max-w-lg mr-2 mb-[100vh] shadow-lg">
      <p class="text-base leading-relaxed">
        Akhil Bharatiya Akhara Parishad negotiates with Prayagraj Mela Authority
        for the conduction of Kumbh Mela. Leaders of the 13 Akharas dominate the
        spiritual hierarchy at Mahakumbh. Final authority on rituals, disputes,
        and Akhara policies.
      </p>
    </div>
    <div class="bg-[#c4b2a9] backdrop-blur-lg rounded p-6 md:p-8 w-11/12 md:max-w-lg mr-14 mb-[100vh] shadow-lg">
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

  <!-- Trigger for first overlay -->
  <div bind:this={fadeTrigger} class="absolute top-[90vh] h-[10vh] w-full"></div>
</section>

<!-- ✦ SECTION: Sequential Image Overlays on Scroll -->
<section class="relative col-span-full h-[900vh]">
  <div class="sticky top-0 h-screen overflow-hidden z-10">
    <h5 class="absolute top-6 left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl font-semibold z-20">
      Permeating Power
    </h5>
    <img
      src={`${base}/Power-mappings.png`}
      alt="Power relationships"
      class="w-full h-full object-cover z-0"
    />

    <!-- Overlay: Top -->
    <img
      src={`${base}/Top.png`}
      alt="Overlay Top"
      class="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-700"
      class:opacity-0={!isOverlayTopVisible}
      class:opacity-100={isOverlayTopVisible}
    />

    <!-- Overlay: Second -->
    <img
      src={`${base}/Second.png`}
      alt="Overlay Second"
      class="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-700"
      class:opacity-0={!isOverlaySecondVisible}
      class:opacity-100={isOverlaySecondVisible}
    />

    <!-- Overlay: Third -->
    <img
      src={`${base}/Third.png`}
      alt="Overlay Third"
      class="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-700"
      class:opacity-0={!isOverlayThirdVisible}
      class:opacity-100={isOverlayThirdVisible}
    />

    <!-- Overlay: Bottom -->
    <img
      src={`${base}/Bottom.png`}
      alt="Overlay Bottom"
      class="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-700"
      class:opacity-0={!isOverlayBottomVisible}
      class:opacity-100={isOverlayBottomVisible}
    />
  </div>

  <!-- Scroll triggers -->
  <div bind:this={topTrigger} class="absolute top-[200vh] h-[10vh] w-full"></div>
  <div bind:this={secondTrigger} class="absolute top-[300vh] h-[10vh] w-full"></div>
  <div bind:this={thirdTrigger} class="absolute top-[400vh] h-[10vh] w-full"></div>
  <div bind:this={bottomTrigger} class="absolute top-[500vh] h-[10vh] w-full"></div>
</section>