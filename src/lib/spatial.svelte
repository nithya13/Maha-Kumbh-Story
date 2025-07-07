<script>
     export let base = "";

  import { onMount } from "svelte";


  let isOverlayVisible = false;
  let isPointsVisible = false;
  let isNightVisible = false;
  let fadeTrigger;
  let pointsTrigger;
  let nightTrigger;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isOverlayVisible = entry.isIntersecting;
      },
      { threshold: 0.5 },
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        isPointsVisible = entry.isIntersecting;
      },
      { threshold: 0.5 },
    );
    const observer3 = new IntersectionObserver(
      ([entry]) => {
        isNightVisible = entry.isIntersecting;
      },
      { threshold: 0.5 },
    );
    if (fadeTrigger) observer.observe(fadeTrigger);
    if (pointsTrigger) observer2.observe(pointsTrigger);
    if (nightTrigger) observer3.observe(nightTrigger);
  });
</script>


  <section id="chapter3" class="relative col-span-full h-[700vh]">
    <div class="sticky top-0 h-screen overflow-hidden z-10">
      <!-- Heading at top over image -->
      <h2
        class="absolute top-6 left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl font-semibold z-20"
      >
        Maha Kumbh - Spatial Context
      </h2>
      <!-- Base Map -->
      <img
        src={`${base}/Basemap.png`}
        alt="Zoning"
        class="w-full h-full object-cover"
      />

      <!-- First overlay -->
      <img
        src={`${base}/Fecal-coliform.png`}
        alt="Overlay"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-800"
        class:opacity-0={!isOverlayVisible}
        class:opacity-100={isOverlayVisible}
      />

      <!-- Second overlay (points) -->
      <img
        src={`${base}/Flower-tributes.png`}
        alt="Points"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        class:opacity-0={!isPointsVisible}
        class:opacity-100={isPointsVisible}
      />

      <img
        src={`${base}/Nightmap.jpg`}
        alt="Points"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        class:opacity-0={!isNightVisible}
        class:opacity-100={isNightVisible}
      />
    </div>

    <!-- Trigger area between the first and second overlay -->
    <div
      bind:this={fadeTrigger}
      class="absolute top-[190vh] h-[10vh] w-full"
    ></div>

    <!-- Trigger area for points overlay -->
    <div
      bind:this={pointsTrigger}
      class="absolute top-[320vh] h-[10vh] w-full"
    ></div>

    <!-- Trigger area for night overlay -->
    <div
      bind:this={nightTrigger}
      class="absolute top-[470vh] h-[10vh] w-full"
    ></div>

    <!-- Floating cards area -->
    <div class="absolute top-[100vh] left-[10vw] w-full z-20">
      <div
        class="bg-#c4b2a9 backdrop-blur-lg rounded p-6 md:p-8 w-11/12 md:max-w-lg mr-3 mb-[100vh] shadow-lg"
      >
        <h5 class="text-xl mb-2">
          Fecal coliform rose on snan days and then fell
        </h5>
        <p class="text-base leading-relaxed">
          The Central Pollution Control Board’s (CPCB) monitoring during this
          Maha Kumbh as well as that in 2013 showed high levels of fecal coli,
          more so during the Amrit Snan (auspicious bathing) days. There have
          been deliberate efforts to respond and mitigate this by allowing
          adequate flows in the river. As witnessed at the Kumbh of Prayag Raj,
          there has also been an upsurge of environmental action to mitigate the
          impact, both by the state institutions and the civic society.
        </p>
      </div>

      <div
        class="bg-#c4b2a9 backdrop-blur-lg rounded p-6 md:p-8 w-11/12 md:max-w-lg mr-3 mb-[100vh] shadow-lg"
      >
        <h5 class="text-xl mb-2">Floral waste</h5>
        <p class="text-base leading-relaxed">
          With all attempts at waste management, visible piles of floral waste
          congregated along the banks, where sanitation teams frequented
          discarded offerings for disposal. Significantly, vendors stood
          strategically on both riverbanks and the Panda Pujaris (priests) to
          make it convenient for pilgrims.
        </p>
      </div>

      <div
        class="bg-#bac0be backdrop-blur-lg rounded p-6 md:p-8 w-11/12 md:max-w-lg mr-3 mb-[100vh] shadow-lg"
      >
        <h5 class="text-xl mb-2">Deep Daan</h5>
        <p class="text-base leading-relaxed">
          During observations, it was seen that Deep Daan — offering lighted
          lamps to the river — was one of the most commonly done rituals after
          the religious Snan or Aarti sessions. There were several vendors
          positioned around the banks selling Deep Daan kits, usually consisting
          of a small disposable dish containing flowers, vermilion
          (Kumkum/Sindoor), incense sticks, and a lamp. Worshipers were spotted
          moving towards the riverbank boundaries, especially by the floating
          interceptors that distinguish shallow banks from the main channel,
          where they lit their lamps and let them float on the water.
        </p>
      </div>
    </div>
  </section>