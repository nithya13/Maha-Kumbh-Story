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
        institutions, groups, and individuals—who shape ritual practices and
        mediate interactions between the river and society in both formal and
        informal settings. In this section, through visual illustrations, we
        outline the key stakeholders and their interactions, the informal
        hierarchical power structures that influence pilgrims and ultimately the
        rituals, and, finally, the formal institutional framework responsible
        for managing river water quality during the Kumbh Mela.
    </p>
    <p>
        This visual captures the spiritual and cultural hierarchy that informs
        ritual practices and shapes informal interactions with devotees and
        pilgrims. The illustration delineates four levels within this projection
        of power or influence—beginning with the Akharas at the top, followed by
        influential spiritual gurus and socio-cultural organizations, then the
        Pandas and Purohits, and finally culminating in the pilgrims and
        Kalpavasis, who constitute the base of this hierarchical structure.
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
        class:opacity-0={!isOverlayVisible}
        class:opacity-100={isOverlayVisible}
      />

      
    </div>

    
   
   


    <!-- Spacer -->
    <!-- <div class="h-[100vh]"></div> -->

    <!-- Overlay Layer 2 -->
    <div class="absolute top-[200vh] left-[40vw] w-full z-20">
        <div
            class="z-50 bg-#c4b2a9 backdrop-blur-lg rounded p-6 md:p-8 w-11/12 md:max-w-lg mr-2 mb-[100vh] shadow-lg"
        >
            <p class="text-base leading-relaxed">
                Akhil Bharatiya Akhara Parishad negotiates with Prayagraj Mela
                Authority for the conduction of Kumbh Mela. Leaders of the 13
                Akharas dominate the spiritual hierarchy at Mahakumbh. Final
                authority on rituals, disputes, and Akhara policies
            </p>
        </div>
        <div
            class="z-50 bg-#c4b2a9 backdrop-blur-lg rounded p-6 md:p-8 w-11/12 md:max-w-lg mr-14 mb-[100vh] shadow-lg"
        >
            <p class="text-base leading-relaxed">
                An Akhara literally means a ‘wrestling ring’ in Sanskrit, but
                also stands for a place of debate. These are monastic orders of
                ascetics that date as far back as the early 8th century. Sri Adi
                Shankaracharya is believed to have established 7 Akharas evolved
                from the Dasnaami tradition: Mahanirvani, Niranjani, Juna, Atal,
                Avahan, Agni and Anand Akhara. The saints and ascetics
                associated with an Akhara specialized in both scriptures and
                armaments.
            </p>
        </div>
    </div>

     <div
      bind:this={fadeTrigger}
      class="absolute top-[90vh] h-[10vh] w-full"
    ></div>

</section>
