<script>
  export let base = "";
  import { onMount } from "svelte";

  let isOverlay1Visible = false;
  let isOverlay2Visible = false;

  let fadeTrigger1;
  let fadeTrigger2;
  let isOverlayTopVisible = false;
  let isOverlaySecondVisible = false;
  let isOverlayThirdVisible = false;
  let isOverlayBottomVisible = false;

  let topTrigger;
  let secondTrigger;
  let thirdTrigger;
  let bottomTrigger;

  const overlayTexts = [
    `The Akharas—monastic orders—sit at the apex of spiritual authority. Their decisions influence the rituals performed and the sequence of holy bathing.`,
    `Spiritual leaders and socio-cultural organizations serve as intermediaries, providing both spiritual guidance and logistical infrastructure for followers.`,
    `Pandas and Purohits are the ritual specialists who facilitate the ceremonies and serve as local cultural authorities within the Mela.`,
    `Pilgrims and Kalpavasis, though at the base of the structure, are central to the scale and sanctity of the event through their participation and devotion.`,
  ];

  onMount(() => {
    const createObserver = (element, setter) => {
      if (!element) return;
      const observer = new IntersectionObserver(
        ([entry]) => setter(entry.isIntersecting),
        { threshold: 0.5 },
      );
      observer.observe(element);
    };

    createObserver(topTrigger, (val) => (isOverlayTopVisible = val));
    createObserver(secondTrigger, (val) => (isOverlaySecondVisible = val));
    createObserver(thirdTrigger, (val) => (isOverlayThirdVisible = val));
    createObserver(bottomTrigger, (val) => (isOverlayBottomVisible = val));

    createObserver(fadeTrigger1, (val) => (isOverlay1Visible = val));
    createObserver(fadeTrigger2, (val) => (isOverlay2Visible = val));
   
  });

 
</script>

<!-- ✦ SECTION: Textual Explanation -->
<section
  class="col-start-1 col-span-1 md:col-start-5 md:col-span-5 py-4 md:py-8 px-4 text-left"
>
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
<section class="relative col-span-full h-[900vh]">
  <div class="sticky top-0 h-screen overflow-hidden z-10">
    <!-- Background -->
    <img
      src={`${base}/Pyramid/Main-illustration.jpg`}
      alt="Power relationships"
      class="w-full h-full object-cover"
    />

    
    <!-- Overlay 1 -->
    <img
      src={`${base}/Pyramid/ABAP-Akhara-overlay.png`}
      alt="Overlay Layer 1"
      class="absolute inset-0 w-full h-full object-cover z-30 transition-opacity duration-800"
      class:opacity-0={!isOverlay1Visible}
      class:opacity-100={isOverlay1Visible}
    />

    <img
      src={`${base}/Pyramid/pma.png`}
      alt="Overlay Layer 1"
      class="absolute inset-0 w-full h-full object-cover z-30 transition-opacity duration-800"
      class:opacity-0={!isOverlay2Visible}
      class:opacity-100={isOverlay2Visible}
    />
    </div>

     <!-- Spacer for triggering overlay -->
  <div class="h-[100vh]"></div>

  <!-- Additional Overlay Boxes -->
  <div class="absolute top-[50vh] left-[40vw] w-full z-20">
    <div
      class="bg-[#fcf5eb] backdrop-blur-lg rounded p-6 md:p-8 w-11/12 md:max-w-lg mr-2 mb-[100vh] shadow-lg"
    >
      <p class="text-base leading-relaxed">
       <strong>Akhil Bharatiya Akhara Parishad</strong>  negotiates with Prayagraj Mela Authority
        for the conduction of Kumbh Mela. Leaders of the 13 Akharas dominate the
        spiritual hierarchy at Mahakumbh. Final authority on rituals, disputes,
        and Akhara policies.
      </p> <br>
      <p class="text-base leading-relaxed">
        An <strong>Akhara</strong> literally means a ‘wrestling ring’ in Sanskrit, but also
        stands for a place of debate. These are monastic orders of ascetics that
        date as far back as the early 8th century. Sri Adi Shankaracharya is
        believed to have established 7 Akharas evolved from the Dasnaami
        tradition: Mahanirvani, Niranjani, Juna, Atal, Avahan, Agni and Anand
        Akhara. The saints and ascetics associated with an Akhara specialized in
        both scriptures and armaments.
      </p>
    </div>
    
    <div
      class="bg-[#fcf5eb] backdrop-blur-lg rounded p-6 md:p-8 w-11/12 md:max-w-lg mr-2 mb-[100vh] shadow-lg"
    >
      <p class="text-base leading-relaxed">
       The Uttar Pradesh government, through the Uttar Pradesh Prayagraj Mela Authority (Allahabad Act) of 2017, established the Prayagraj Mela Authority for the management of Magh Melas annually and the Ardh Kumbh and the Kumbh Mela at intervals of 6 and 12 years, respectively. The Authority is a body corporate and has been assigned the mandate of infrastructure provision, including civic amenities, health facilities, and power supply
      </p>
    </div>
  </div>

  <!-- Trigger for first overlay -->
  <div
    bind:this={fadeTrigger1}
    class="absolute top-[10vh] h-[10vh] w-full"
  ></div>
  <div
    bind:this={fadeTrigger2}
    class="absolute top-[390vh] h-[10vh] w-full"
  ></div>
  </section>
<!-- ✦ SECTION: First Visual with Overlay 1 -->
<section class="relative col-span-full h-[100vh]">
  <div class="sticky top-0 h-screen overflow-hidden z-10">
   

    <!-- Background -->
    <img
      src={`${base}/Pyramid/Main-illustration.png`}
      alt="Power relationships"
      class="w-full h-full object-contain"
    />

  </div>

 
</section>

<!-- ✦ SECTION: Sequential Image Overlays on Scroll -->
<section class="relative col-span-full h-[900vh] ">
  <div class="sticky top-0 h-screen overflow-hidden z-10">
    <h5
      class="absolute top-6 left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl font-semibold z-20"
    >
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
      class="absolute inset-0 w-full h-full object-cover z-10 fade"
      class:opacity-0={!isOverlayTopVisible}
      class:opacity-100={isOverlayTopVisible}
    />
    <div
      class="absolute top-1/4 right-12 md:right-24 w-1/3 bg-[#c4b2a9] backdrop-blur-lg rounded p-6 md:p-8 shadow-lg z-20 fade"
      class:opacity-0={!isOverlayTopVisible}
      class:opacity-100={isOverlayTopVisible}
    >
      <p class="text-base leading-relaxed">{overlayTexts[0]}</p>
    </div>

    <!-- Overlay: Second -->
    <img
      src={`${base}/Second.png`}
      alt="Overlay Second"
      class="absolute inset-0 w-full h-full object-cover z-10 fade"
      class:opacity-0={!isOverlaySecondVisible}
      class:opacity-100={isOverlaySecondVisible}
    />
    <div
      class="absolute top-1/4 right-12 md:right-24 w-1/3 bg-[#c4b2a9] backdrop-blur-lg rounded p-6 md:p-8 shadow-lg z-20 fade"
      class:opacity-0={!isOverlaySecondVisible}
      class:opacity-100={isOverlaySecondVisible}
    >
      <p class="text-base leading-relaxed">{overlayTexts[1]}</p>
    </div>

    <!-- Overlay: Third -->
    <img
      src={`${base}/Third.png`}
      alt="Overlay Third"
      class="absolute inset-0 w-full h-full object-cover z-10 fade"
      class:opacity-0={!isOverlayThirdVisible}
      class:opacity-100={isOverlayThirdVisible}
    />
    <div
      class="absolute top-1/4 right-12 md:right-24 w-1/3 bg-[#c4b2a9] backdrop-blur-lg rounded p-6 md:p-8 shadow-lg z-20 fade"
      class:opacity-0={!isOverlayThirdVisible}
      class:opacity-100={isOverlayThirdVisible}
    >
      <p class="text-base leading-relaxed">{overlayTexts[2]}</p>
    </div>

    <!-- Overlay: Bottom -->
    <img
      src={`${base}/Bottom.png`}
      alt="Overlay Bottom"
      class="absolute inset-0 w-full h-full object-cover z-10 fade"
      class:opacity-0={!isOverlayBottomVisible}
      class:opacity-100={isOverlayBottomVisible}
    />
    <div
      class="absolute top-1/4 right-12 md:right-24 w-1/3 bg-[#c4b2a9] backdrop-blur-lg rounded p-6 md:p-8 shadow-lg z-20 fade"
      class:opacity-0={!isOverlayBottomVisible}
      class:opacity-100={isOverlayBottomVisible}
    >
      <p class="text-base leading-relaxed">{overlayTexts[3]}</p>
    </div>
  </div>

  <!-- Scroll triggers -->
  <div
    bind:this={topTrigger}
    class="absolute top-[200vh] h-[10vh] w-full"
  ></div>
  <div
    bind:this={secondTrigger}
    class="absolute top-[300vh] h-[10vh] w-full"
  ></div>
  <div
    bind:this={thirdTrigger}
    class="absolute top-[400vh] h-[10vh] w-full"
  ></div>
  <div
    bind:this={bottomTrigger}
    class="absolute top-[500vh] h-[10vh] w-full"
  ></div>
</section>

<section class = "relative col-span-full h-screen">
  <div class="sticky top-0 h-screen overflow-hidden z-10">
    <img
      src={`${base}/Institutional-framework.png`}
      alt="Background"
      class="w-[70%] mx-10 mt-20 h-auto object-contain">
  </div>
</section>

<style>
  .fade {
    transition: opacity 0.8s ease;
  }
</style>
