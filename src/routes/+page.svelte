<script>
  import { onMount } from "svelte";

  import { base } from "$app/paths";

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
    <!-- Logo or Title (left) -->
    <!-- <div
      class="text-xl tracking-wider"
      style="font-family: 'Bebas Neue', sans-serif;"
    >
      Reading Rituals for River Rejuvenation

      
    </div> -->

    <!-- Menu (right) -->
    <nav>
      <ul class="flex space-x-10 text-sm text-black">
        <a href = "https://cprindia.org/research/treads-transboundary-rivers-ecologies-development-studies/">
         <li><h4 >About TREADS</h4></li>
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
 <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>

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
    <div class="w-1/2 md:w-1/4 text-center flex items-center justify-center">
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
    <div class="w-1/2 md:w-1/4 text-center flex items-center justify-center">
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
    <div class="w-1/2 md:w-1/4 text-center flex items-center justify-center">
      <a href="#chapter3">
        <h1>3</h1>
        <h6
          class="text-xl font-light"
          style="font-family: 'Khand', sans-serif;"
        >
          Maha Kumbh - Spatial Context
        </h6>
      </a>
    </div>

    <!-- Vertical Divider -->
    <div class="hidden md:block w-px bg-white"></div>

    <!-- Box 4 -->
    <div class="w-1/2 md:w-1/4 text-center flex items-center justify-center">
      <a href="#chapter4">
        <h1>4</h1>
        <h6
          class="text-xl font-light"
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
  <!-- Table of Contents -->
  <!-- <aside class="hidden md:block col-start-2 col-span-2 y-4 md:py-8 px-4 text-left">
  <nav class="space-y-4 text-sm font-bold text-gray-700">
    <a href="#chapter1" class="block border-b border-black pb-1">1. Reading Rituals for Rejuvenating Rivers 
</a>
    <a href="#chapter2" class="block border-b border-black pb-1">2.Legends, Rituals, Customs and Practices</a>
    <a href="#chapter2" class="block border-b border-black pb-1">3. Spatial Mapping</a>
        <a href="#chapter2" class="block border-b border-black pb-1">4. Power Mapping</a>
    <a href="#chapter2" class="block border-b border-black pb-1">5. Annexures</a>
  </nav>
</aside> -->

  <section
    class="col-start-1 col-span-1 md:col-start-5 md:col-span-5 py-4 md:py-8 px-4 md:px-4 text-left"
  >
    <h2 id="chapter1" class="text-2xl font-semibold mb-4">
      Chapter 1: Rituals and River-societies
    </h2>
    <!-- <p class="text-base leading-relaxed"></p> -->
    <p>
      The Maha Kumbh of 2025 in Prayagraj, Uttar Pradesh, at the Triveni Sangam
      of the Ganga, Yamuna, and the mythical Saraswati gathered over 60 crore
      pilgrims and visitors over a span of 45 days. A spectacle embodying
      people’s spiritual connection with the river.
    </p>
    <p>A measure of the river’s cultural convening power.</p>
    <p>
      An ecological ethic deeply embedded in religious practices, legends, and
      beliefs.
    </p>
    <p>
      This colossal event of Maha Kumbh has been subjected to two outwardly
      divergent narratives. One focused on society and spirituality: the virtues
      of the Indian spiritual traditions of respect and reverence towards
      nature. The other on the environmental concerns and sensibilities: how
      mass gatherings and the ritual practices impact river ecologies. These two
      appear conflicting, but we see powerful convergence for river
      rejuvenation. We believe it is possible if we focus on the river-society
      relationship embodying Maha Kumbh and similar gatherings along the rivers
      and explore beyond the binary views of the spiritual and the
      environmental. The river-society relationship is often described as Aastha
      (loosely translated from faith). Aastha is the most potent power
      mobilizing the masses of populations to come and express their deep
      reverence to the river Ganga (the Goddess) in the form of a variety of
      rituals and practices along the river. The primary goal of our research is
      to unpack and understand the Aastha and turn it into Astra for river
      rejuvenation. This is a pilot project initiated by the TREADS Initiative
      at CPR and supported by the NMCG, beginning with an audio-visual
      documentation of rituals at the Maha Kumbh of Prayagraj. We showcase the
      work carried out under this project on this website. Towards the above
      goal, our research is driven by the following questions.
    </p>
    <p>
      What are the rituals and practices along the river? How do these impact
      the river ecologies?
    </p>
    <p>
      What/who informs, prescribes, and sanctions the rituals and practices -
      the spiritual consciousness?
    </p>
    <p>
      Embedded within these networks are complex power relations. At the apex
      are the Akharas and their heads (such as the Acharya Mahamandaleshwar),
      who hold significant spiritual and organizational authority. Influential
      gurus and socio-cultural organizations further shape the discourse and
      mobilize followers. The pandas and purohits act as intermediaries,
      directly engaging with pilgrims and facilitating ritual practices. At the
      grassroots are the pilgrims and Kalpavasis, whose participation and faith
      drive the scale and significance of the event. These layers of authority
      and influence interact with political and economic interests, creating a
      dynamic ecosystem where spiritual, social, and material powers converge
      and negotiate the meaning and practice of rituals along the river.
    </p>
    <p>
      Can we unpack and understand the ecological ethic, if any, underlying the
      spiritual consciousness?
    </p>
    <p>
      Can we reimagine the rituals and practices for river rejuvenation? How can
      we redeploy the power relations towards river rejuvenation?
    </p>
    <p>
      How can we pursue Rejuvenating Rivers as a people’s programme, where
      people’s engagement in the river-society intersectional spaces contribute
      to improving rivers’ ecological status? We want to bring rituals and
      practices to the centre of analysis in thinking about rejuvenating rivers.
      The approach recognizes that the rituals and practices are informed and
      produced by an ecosystem where a variety of agents, actors, and networks
      actively participate. These range from priests, pandas, pandits to popular
      preachers and spiritual thought-leaders - extending to the
      institutionalized versions including ashrams, akharas, and other
      institutional forms. Political and economic interests too are part of the
      ecosystem, transcending the spiritual or religious networks. Reimagining
      rituals must work with these networks and institutions towards making
      rejuvenating rivers a truly people’s programme. India’s rivers and water
      bodies are often hosts to gatherings and events of cultural and spiritual
      significance. These are not restricted to Kumbh gatherings alone but
      extend to other festivals such as the Chhath Puja. It is time for bringing
      this cultural confluence with river ecologies to the centre of analysis
      for an Indian model of river rejuvenation and water conservation.
    </p>

    <!-- Image with float for text wrapping -->
    <img src={`${base}/Satsang.jpg`} alt="Satsang" />
    <p class="annotation">Devotees gather for a satsang</p>
  </section>
  
  <section
    class="col-start-1 col-span-1 md:col-start-5 md:col-span-5 py-4 md:py-8 px-4 md:px-4 text-left"
  >
    <h2 id="chapter2" class="text-2xl font-semibold mb-4">
      Chapter 2: Legends, Rituals, Customs and Practices at the Maha Kumbh
    </h2>
    <!-- <p class="text-base leading-relaxed"></p> -->
    <p>
      The Kumbh Mela is an assembly of rituals and the largest sacred cultural
      gathering in the world - Amrit Snan being the most prominent and prevalent
      among all of them. These traditions, rooted deep within the Hindu
      cosmography, mythology, and yogic practices, serve a variety of purposes –
      spiritual cleansing to affirm social bonds. Most interviewees underscored
      that attending the Maha Kumbh at Prayagraj was not an individual
      pilgrimage but a moment of history that would be an iconic memory for
      generations to come, considering the unusual phenomenon of having such a
      magnificent Maha Kumbh after 144 years. The Rituals and Practices reflect
      the traditions of Sanatana, which have been followed throughout the
      centuries. In this section, we have detailed the rituals and their
      connections to mythology, while interpreting them through reflections
      drawn from our field observations. The section highlights the centrality
      of water-based rituals ranging from Snans as the most prominent ritual and
      others including Tarpan, Kalpavas and Daans. It also describes the
      material engagement at the Maha Kumbh that largely comprises natural
      materials such as flowers, cereals (barley, rice, sesame seeds), milk, and
      honey. These engagements reflect a deep ecologically sensitive engagement
      with the river in ritual performance.
    </p>

    <div class="sticky top-0 h-screen overflow-hidden z-10">
      <!-- Base Map -->
      <img
        src={`${base}/Calendar.jpg`}
        alt="Zoning"
        class="w-full h-full object-contain"
      />
    </div>
  </section>

  <section id="chapter3" class="relative col-span-full h-[700vh]">
    <div class="sticky top-0 h-screen overflow-hidden z-10">
      <!-- Heading at top over image -->
      <h2
        class="absolute top-6 left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl font-semibold z-20"
      >
        Chapter 3: Spatial Context
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
        <h2 class="text-xl mb-2">
          Fecal coliform rose on snan days and then fell
        </h2>
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
        <h2 class="text-xl mb-2">Floral waste</h2>
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
        <h2 class="text-xl mb-2">Deep Daan</h2>
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

  <section
    class="col-start-1 col-span-1 md:col-start-5 md:col-span-5 py-4 md:py-8 px-4 md:px-4 text-left"
  >
    <h2 id="chapter4" class="text-2xl font-semibold mb-4">
      Chapter 4: Permeating Power: Spiritual and Spatial (River-Society
      Intersection)
    </h2>
    <!-- <p class="text-base leading-relaxed"></p> -->
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

  <section class="relative col-span-full h-[500vh]">
    
    <!-- Sticky Background River Image -->
    <div class="sticky top-0 h-screen z-10">
      <h3 
        class="absolute top-6 left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl font-semibold z-100"
      >
        Permeating Power: Spiritual and Spatial 
      </h3>
      <img
        src={`${base}/Pyramid/Main-illustration.jpg`}
        alt="River"
        class="w-full h-auto"
      />
    </div>
 <!-- Spacer to control scroll timing -->
    <div class="h-[100vh]"></div>
    <!-- Phase 2: ABAP + Operational Heads Layer -->
    <div
      class="sticky top-0 h-screen z-20 "
    >
      <div class="flex flex-col items-start">
        
        <img
          src={`${base}/Pyramid/Main-overlay-1.png`}
          alt="ABAP"
          class="h-full object-cover
          "
        />
        
       
      </div>
    </div>

    <!-- Spacer to control scroll timing -->
    <div class="h-[100vh]"></div>

    <!-- Phase 3: Akhara Layer -->
    <div
      class="sticky top-0 h-screen z-30 flex items-start"
    >
      <div class="flex flex-col items-end">
        
         <img
          src={`${base}/Pyramid/Text-overlay.png`}
          alt="Operational"
          class="object-cover"
        />
        <!-- <h3 class="text-2xl font-semibold mb-2">Akharas</h3>
        <img
          src={`${base}/Pyramid/Akhara.png`}
          alt="Akhara"
          class="max-w-[50%] object-contain"
        />
        <h3 class="text-2xl font-semibold mb-2">Naga Sadhus</h3>
        <img
          src={`${base}/Pyramid/Naga-Sadhus.png`}
          alt="Naga Sadhus"
          class="max-w-[50%] object-contain"
        /> -->
      </div>
    </div>

    
  </section>
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

  h2 {
    font-size: 2rem;
  }
  :global(h2::after) {
    content: "";
    display: block;
    margin-top: 0.5rem;
    width: 1000px; /* adjust to match image width */
    height: 20px; /* adjust to match image height */
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

  p,
  li {
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
