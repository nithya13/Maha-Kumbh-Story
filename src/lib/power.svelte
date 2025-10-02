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


  let isOverlayMTopVisible = false;
  let isOverlayMSecondVisible = false;
  let isOverlayMThirdVisible = false;
  let isOverlayMBottomVisible = false;

  let isOverlayAVisible = false;
  let isOverlayBVisible = false;
  let isOverlayCVisible = false;
  let isOverlayDVisible = false;
  let isOverlayEVisible = false;
  let isOverlayFVisible = false;
  let isOverlayGVisible = false;

  let isOverlayMAVisible = false;
  let isOverlayMBVisible = false;
  let isOverlayMCVisible = false;
  let isOverlayMDVisible = false;
  let isOverlayMEVisible = false;
  let isOverlayMFVisible = false;

  let isOverlayMGVisible = false;
  let MATrigger;
  let MBTrigger;
  let MCTrigger;
  let MDTrigger;
  let METrigger;
  let MFTrigger;
  let MGTrigger;

  let ATrigger;
  let BTrigger;
  let CTrigger;
  let DTrigger;
  let ETrigger;
  let FTrigger;
  let GTrigger;

  let topTrigger;
  let secondTrigger;
  let thirdTrigger;
  let bottomTrigger;

  let topMobileTrigger;
  let secondMobileTrigger;
  let thirdMobileTrigger;
  let bottomMobileTrigger;

  const overlayTexts = [
    `The Akharas—monastic orders—sit at the apex of spiritual authority. Their decisions influence the rituals performed and the sequence of holy bathing.`,
    `Spiritual leaders and socio-cultural organizations serve as intermediaries, providing both spiritual guidance and logistical infrastructure for followers.`,
    `Pandas and Purohits are the ritual specialists who facilitate the ceremonies and serve as local cultural authorities within the Mela.`,
    `Pilgrims and Kalpavasis, though at the base of the structure, are central to the scale and sanctity of the event through their participation and devotion.`,
  ];

  const overlayExplainerTexts = [
    `An Akhara literally means a ‘wrestling ring’ in Sanskrit, but also stands for a place of debate. These are monastic orders of ascetics that date as far back as the early 8th century. Sri Adi Shankaracharya is believed to have established 7 Akharas evolved from the Dasnaami tradition: Mahanirvani, Niranjani, Juna, Atal, Avahan, Agni and Anand Akhara. The saints and ascetics associated with an Akhara specialized in both scriptures and armaments.`,
    `The Akhil Bharatiya Akhara Parishad (ABAP) is an organization of the Akharas that was formed in 1954 post the tragic stampede at Prayagraj Kumbh Mela. The organization acts as a link between the saints, akharas, people and the administration aiding the management of the event and continuance of the customs, practices and rituals of Kumbh Mela in a proper manner. The Parishad does this task at all the four venues of the Mela. The committee of ABAP consists of two members from each Akharas and it recognizes thirteen Akharas except for the Kinnar Akhara and the Dasnami Sanyasini Akhara.
`,
    `The Uttar Pradesh government, through the Uttar Pradesh Prayagraj Mela Authority (Allahabad Act) of 2017, established the Prayagraj Mela Authority for the management of Magh Melas annually and the Ardh Kumbh and the Kumbh Mela at intervals of 6 and 12 years, respectively. The Authority is a body corporate and has been assigned the mandate of infrastructure provision, including civic amenities, health facilities, and power supply.
`,
    `The Prayagwals, or the Pragwals, are the priests, or Panda Pujaris, associated with the sacred Triveni Sangam similar to the Gayawals at Gaya or the Gangaputras at Varanasi. They lead the pilgrims through the rituals that are performed at the confluence. The Pragwals belong to the Brahmins and also claim to be the ones with privileged rights to perform pujas since Akbar’s reign, according to a royal decree from 1593.
`,
    `Kalpavas is a profound practice leading a minimalist life, observing fasting, and performing various rituals along the banks of the confluence for their spiritual evolution.`,
    `A revered warrior ascetic order established by Adi Shankaracharya with the founding of the Akharas embodies spiritual supremacy. Traditionally leading the holy dip during Amrit Snan, being the first army protecting the dharma.`,
    "They play a vital role by providing essential goods, food, and services to crores of pilgrims, supporting the event's vast logistical needs. Their participation not only enriches the visitor experience but also creates significant livelihood opportunities and economic activity throughout the Mela period.",
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

    createObserver(topMobileTrigger, (val) => (isOverlayMTopVisible = val));
    createObserver(secondMobileTrigger, (val) => (isOverlayMSecondVisible = val));
    createObserver(thirdMobileTrigger, (val) => (isOverlayMThirdVisible = val));
    createObserver(bottomMobileTrigger, (val) => (isOverlayMBottomVisible = val));

    createObserver(topTrigger, (val) => (isOverlayAVisible = val));
    createObserver(secondTrigger, (val) => (isOverlayBVisible = val));
    createObserver(thirdTrigger, (val) => (isOverlayCVisible = val));
    createObserver(bottomTrigger, (val) => (isOverlayDVisible = val));
    createObserver(bottomTrigger, (val) => (isOverlayEVisible = val));
    createObserver(bottomTrigger, (val) => (isOverlayFVisible = val));
    createObserver(bottomTrigger, (val) => (isOverlayGVisible = val));

    createObserver(ATrigger, (val) => (isOverlayAVisible = val));
    createObserver(BTrigger, (val) => (isOverlayBVisible = val));
    createObserver(CTrigger, (val) => (isOverlayCVisible = val));
    createObserver(DTrigger, (val) => (isOverlayDVisible = val));
    createObserver(ETrigger, (val) => (isOverlayEVisible = val));
    createObserver(FTrigger, (val) => (isOverlayFVisible = val));
    createObserver(GTrigger, (val) => (isOverlayGVisible = val));

createObserver(MATrigger, (val) => (isOverlayMAVisible = val));
    createObserver(MBTrigger, (val) => (isOverlayMBVisible = val));
    createObserver(MCTrigger, (val) => (isOverlayMCVisible = val));
    createObserver(MDTrigger, (val) => (isOverlayMDVisible = val));
    createObserver(METrigger, (val) => (isOverlayMEVisible = val));
    createObserver(MFTrigger, (val) => (isOverlayMFVisible = val));
    createObserver(MGTrigger, (val) => (isOverlayMGVisible = val));



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
    settings. In this section, through visual illustrations, we outline:
  </p>
  <br />
  <ul class="list-disc list-inside">
    <li>
      <strong>Stakeholders:</strong> The key stakeholders and their interactions.
    </li>
    <br />
    <li>
      <strong>Spiritual Religious and Economic Relationships:</strong> The political
      economy of large scale human gathering for spiritual and religious purposes
      — interactions and transactions between the pilgrims and large and small scale
      businesses.
    </li>
    <br />
    <li>
      <strong>Permeating Power:</strong> The informal hierarchical power structures
      which influence the pilgrims and their ritual practice.
    </li>
    <br />
    <li>
      <strong>Institutional Framework:</strong> The state institutions across scales
      — from the central government to the local bodies responsible for the management
      of the river water quality during the Kumbh Mela
    </li>
  </ul>
</section>

<!-- ✦ Key stakeholders DESKTOP-->
<section class="hidden lg:block relative col-span-full h-[900vh]">
  <!-- Sticky Container -->
  <div class="md:sticky md:top-0 md:h-screen overflow-hidden z-10">
    <div
      class="flex flex-col lg:flex-row items-center justify-center h-full px-4 md:px-10 gap-8"
    >
      <!-- Text Content -->
      <div class="lg:w-1/4 text-left z-20">
        <h5 class="text-xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Stakeholders
        </h5>
        <p class="text-sm md:text-base lg:text-lg">
          The visual depicts a varied and vast set of stakeholders engaged in
          the Maha Kumbh. Maha Kumbh is not only about the pilgrims but is also
          known for its huge economic impact. This manifests in various economic
          and social interactions with varied intensity. The Kumbh Mela displays
          delicate interactions between rituals and commerce. The interactions
          are further shaped by various power relations.
        </p>
        <br />
        <p class="annotation">
          (Our stakeholder mapping and field observations indicated that Akharas
          had considerable power to negotiate crucial matters such as in
          procession planning and land allocation. The interaction between the
          PMA and Akaharas are indicative of this where the PMA actively
          consults with the Akahadas in advance in planning of the Mahalumbh.
          The Akhara leaders, who were elected in their traditional councils,
          coordinated both intra- and inter-Akhara and made sure that their
          spatial and ritualistic concerns were protected.)
        </p>
      </div>

      <!-- Illustration & Overlays -->
      <div class="relative w-full lg:w-3/4 h-auto">
        <!-- Main Illustration -->
        <img
          src={`${base}/Main/Main-illustration.webp`}
          alt="Spiritual and economic relationships"
          class="w-full h-auto object-contain z-0"
        />

        <!-- Overlay A -->
        <img
          src={`${base}/Main/Akhara.webp`}
          alt="Overlay A"
          class="absolute top-0 left-0 w-full h-auto object-contain z-10 transition-opacity duration-500"
          class:opacity-0={!isOverlayAVisible}
          class:opacity-100={isOverlayAVisible}
        />
        <div
          class="lg:absolute lg:top-1/4 lg:right-16 w-full lg:w-1/2 bg-[#f1efe2bb] backdrop-blur-lg
                 rounded p-6 md:p-8 shadow-lg z-20 transition-opacity duration-500 mt-4 lg:mt-0"
          class:opacity-0={!isOverlayAVisible}
          class:opacity-100={isOverlayAVisible}
        >
          <h5 class="text-xl mb-2">Akharas</h5>
          <p class="text-base leading-relaxed">{overlayExplainerTexts[0]}</p>
        </div>

        <!-- Overlay B -->
        <img
          src={`${base}/Main/ABAP.webp`}
          alt="Overlay B"
          class="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500"
          class:opacity-0={!isOverlayBVisible}
          class:opacity-100={isOverlayBVisible}
        />
        <div
          class="absolute top-1/4 left-4 md:right-16 w-[80%] md:w-1/2 bg-[#f1efe2bb] backdrop-blur-lg
                 rounded p-6 md:p-8 shadow-lg z-20 transition-opacity duration-500"
          class:opacity-0={!isOverlayBVisible}
          class:opacity-100={isOverlayBVisible}
        >
          <h5 class="text-xl mb-2">Akhil Bharatiya Akhara Parishad</h5>
          <p class="text-base leading-relaxed">{overlayExplainerTexts[1]}</p>
        </div>

        <!-- Overlay C -->
        <img
          src={`${base}/Main/pma.webp`}
          alt="Overlay C"
          class="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500"
          class:opacity-0={!isOverlayCVisible}
          class:opacity-100={isOverlayCVisible}
        />
        <div
          class="absolute top-1/3 left-14 md:right-24 w-1/3 bg-[#f1efe2bb] backdrop-blur-lg
                 rounded p-6 md:p-8 shadow-lg z-20 transition-opacity duration-500"
          class:opacity-0={!isOverlayCVisible}
          class:opacity-100={isOverlayCVisible}
        >
          <h5 class="text-xl mb-2">Prayagraj Mela Authority</h5>
          <p class="text-base leading-relaxed">{overlayExplainerTexts[2]}</p>
        </div>

        <!-- Overlay D -->
        <img
          src={`${base}/Main/Pandas.webp`}
          alt="Overlay D"
          class="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500"
          class:opacity-0={!isOverlayDVisible}
          class:opacity-100={isOverlayDVisible}
        />
        <div
          class="absolute top-24 left-12 md:right-24 w-1/3 bg-[#f1efe2bb] backdrop-blur-lg
                 rounded p-6 md:p-8 shadow-lg z-20 transition-opacity duration-500"
          class:opacity-0={!isOverlayDVisible}
          class:opacity-100={isOverlayDVisible}
        >
          <h5 class="text-xl mb-2">Panda Pujaris </h5>
          <p class="text-base leading-relaxed">{overlayExplainerTexts[3]}</p>
        </div>

        <!-- Overlay E -->
        <img
          src={`${base}/Main/Kalpavas.webp`}
          alt="Overlay E"
          class="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500"
          class:opacity-0={!isOverlayEVisible}
          class:opacity-100={isOverlayEVisible}
        />
        <div
          class="absolute bottom-10 left-12 md:right-24 w-1/3 bg-[#f1efe2bb] backdrop-blur-lg
                 rounded p-6 md:p-8 shadow-lg z-20 transition-opacity duration-500"
          class:opacity-0={!isOverlayEVisible}
          class:opacity-100={isOverlayEVisible}
        >
          <h5 class="text-xl mb-2">Kalpavas</h5>
          <p class="text-base leading-relaxed">{overlayExplainerTexts[4]}</p>
        </div>

        <!-- Overlay F -->
        <img
          src={`${base}/Main/Naga-Sadhu.webp`}
          alt="Overlay F"
          class="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500"
          class:opacity-0={!isOverlayFVisible}
          class:opacity-100={isOverlayFVisible}
        />
        <div
          class="absolute top-24 left-12 md:right-24 w-1/3 bg-[#f1efe2bb] backdrop-blur-lg
                 rounded p-6 md:p-8 shadow-lg z-20 transition-opacity duration-500"
          class:opacity-0={!isOverlayFVisible}
          class:opacity-100={isOverlayFVisible}
        >
          <h5 class="text-xl mb-2">Naga Sadhus</h5>
          <p class="text-base leading-relaxed">{overlayExplainerTexts[5]}</p>
        </div>

        <!-- Overlay G -->
        <img
          src={`${base}/Main/Businesses.webp`}
          alt="Overlay G"
          class="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500"
          class:opacity-0={!isOverlayGVisible}
          class:opacity-100={isOverlayGVisible}
        />
        <div
          class="absolute top-24 left-24 md:right-24 w-1/3 bg-[#f1efe2bb] backdrop-blur-lg
                 rounded p-6 md:p-8 shadow-lg z-20 transition-opacity duration-500"
          class:opacity-0={!isOverlayGVisible}
          class:opacity-100={isOverlayGVisible}
        >
          <h5 class="text-xl mb-2">Businesses and Small Vendors</h5>
          <p class="text-base leading-relaxed">{overlayExplainerTexts[6]}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Scroll Triggers -->
  <div bind:this={ATrigger} class="absolute top-[200vh] h-[10vh] w-full"></div>
  <div bind:this={BTrigger} class="absolute top-[300vh] h-[10vh] w-full"></div>
  <div bind:this={CTrigger} class="absolute top-[400vh] h-[10vh] w-full"></div>
  <div bind:this={DTrigger} class="absolute top-[500vh] h-[10vh] w-full"></div>
  <div bind:this={ETrigger} class="absolute top-[600vh] h-[10vh] w-full"></div>
  <div bind:this={FTrigger} class="absolute top-[700vh] h-[10vh] w-full"></div>
  <div bind:this={GTrigger} class="absolute top-[800vh] h-[10vh] w-full"></div>
</section>


<!-- Mobile Section -->
<section class="block lg:hidden relative col-span-full">
  <!-- Intro Text -->
  <div class="px-4 md:px-6 py-8 text-left">
    <h5 class="text-xl md:text-3xl font-semibold mb-4">Stakeholders</h5>
    <p class="text-sm md:text-base">
      The visual depicts a varied and vast set of stakeholders engaged in the
      Maha Kumbh. Mahakumbh is not only about the pilgrims but is also known for
      its huge economic impact. This manifests in various economic and social
      interactions with varied intensity. The Kumbh Mela displays delicate
      interactions between rituals and commerce. The interactions are further
      shaped by various power relations.
    </p>
    <br />
    <p class="annotation text-sm">
      (Our stakeholder mapping and field observations indicated that Akharas had
      considerable power to negotiate crucial matters such as in procession
      planning and land allocation. The interaction between the PMA and Akaharas
      are indicative of this where the PMA actively consults with the Akaharas
      in advance in planning of the Mahakumbh. The Akhara leaders, who were
      elected in their traditional councils, coordinated both intra- and
      inter-Akhara and made sure that their spatial and ritualistic concerns
      were protected.)
    </p>
  </div>

  <!-- Sticky Illustration & Overlay Container -->
  <div class="relative h-[850vh]">
    <div class="sticky top-20 h-screen w-full">
      <!-- Main Illustration -->
      <img
        src={`${base}/Main/Main-illustration.webp`}
        alt="Spiritual and economic relationships"
        class="w-full h-auto object-contain z-0"
      />

      <!-- Overlay A -->
      <img
        src={`${base}/Main/Akhara.webp`}
        alt="Overlay A"
        class="absolute inset-0 w-full h-auto object-contain z-10 transition-opacity duration-500"
        class:opacity-0={!isOverlayMAVisible}
        class:opacity-100={isOverlayMAVisible}
      />

      <!-- Overlay B -->
      <img
        src={`${base}/Main/ABAP.webp`}
        alt="Overlay B"
        class="absolute inset-0 w-full h-auto object-contain z-10 transition-opacity duration-500"
        class:opacity-0={!isOverlayMBVisible}
        class:opacity-100={isOverlayMBVisible}
      />
      <!-- Overlay C -->
      <img
        src={`${base}/Main/pma.webp`}
        alt="Overlay C"
        class="absolute inset-0 w-full h-auto object-contain z-10 transition-opacity duration-500"
        class:opacity-0={!isOverlayMCVisible}
        class:opacity-100={isOverlayMCVisible}
      />

      <!-- Overlay D -->
      <img
        src={`${base}/Main/Pandas.webp`}
        alt="Overlay D"
        class="absolute inset-0 w-full h-auto object-contain z-10 transition-opacity duration-500"
        class:opacity-0={!isOverlayMDVisible}
        class:opacity-100={isOverlayMDVisible}
      />

      <!-- Overlay E -->
      <img
        src={`${base}/Main/Kalpavas.webp`}
        alt="Overlay E"
        class="absolute inset-0 w-full h-auto object-contain z-10 transition-opacity duration-500"
        class:opacity-0={!isOverlayMEVisible}
        class:opacity-100={isOverlayMEVisible}
      />
      <!-- Overlay F -->
      <img
        src={`${base}/Main/Naga-Sadhu.webp`}
        alt="Overlay F"
        class="absolute inset-0 w-full h-auto object-contain z-10 transition-opacity duration-500"
        class:opacity-0={!isOverlayMFVisible}
        class:opacity-100={isOverlayMFVisible}
      />

      <!-- Overlay G -->
      <img
        src={`${base}/Main/Businesses.webp`}
        alt="Overlay G"
        class="absolute inset-0 w-full h-auto object-contain z-10 transition-opacity duration-500"
        class:opacity-0={!isOverlayMGVisible}
        class:opacity-100={isOverlayMGVisible}
      />
    </div>

    <!-- Explainer Texts (fixed, independent) -->
    <div
      class="fixed bottom-60 left-4 right-10 z-20  transition-opacity duration-300"
      class:opacity-0={!isOverlayMAVisible}
      class:opacity-100={isOverlayMAVisible}
    >
      <h5>Akharas</h5>
      <p>{overlayExplainerTexts[0]}</p>
    </div>

    <div
      class="fixed bottom-60 left-4 right-10 z-20  transition-opacity duration-300"
      class:opacity-0={!isOverlayMBVisible}
      class:opacity-100={isOverlayMBVisible}
    >
      <h5>Akhil Bharatiya Akhara Parishad</h5>
      <p>{overlayExplainerTexts[1]}</p>
    </div>

    <div
      class="fixed bottom-60 left-4 right-10 z-20  transition-opacity duration-300"     
       class:opacity-0={!isOverlayMCVisible}
      class:opacity-100={isOverlayMCVisible}
    >
      <h5>Prayagraj Mela Authority</h5>
      <p>{overlayExplainerTexts[2]}</p>
    </div>

    <div
      class="fixed bottom-60 left-4 right-10 z-20  transition-opacity duration-300"
      class:opacity-0={!isOverlayMDVisible}
      class:opacity-100={isOverlayMDVisible}
    >
      <h5>Panda Pujaris / Prayagwalas</h5>
      <p>{overlayExplainerTexts[3]}</p>
    </div>
    <div
      class="fixed bottom-60 left-4 right-10 z-20  transition-opacity duration-300"
      class:opacity-0={!isOverlayMEVisible}
      class:opacity-100={isOverlayMEVisible}
    >
      <h5>Kalpavas</h5>
      <p>{overlayExplainerTexts[4]}</p>
    </div>
    <div
      class="fixed bottom-60 left-4 right-10 z-20  transition-opacity duration-300"
      class:opacity-0={!isOverlayMFVisible}
      class:opacity-100={isOverlayMFVisible}
    >
      <h5>Naga Sadhus</h5>
      <p>{overlayExplainerTexts[5]}</p>
    </div>
    <div
      class="fixed bottom-60 left-4 right-10 z-20  transition-opacity duration-300"
      class:opacity-0={!isOverlayMGVisible}
      class:opacity-100={isOverlayMGVisible}
    >
      <h5>Businesses and Small Vendors</h5>
      <p>{overlayExplainerTexts[6]}</p>
    </div>
  </div>

  <!-- Scroll Trigger for Overlay A -->
  <div bind:this={MATrigger} class="absolute top-[200vh] h-[10vh] w-full"></div>
  <div bind:this={MBTrigger} class="absolute top-[300vh] h-[10vh] w-full"></div>
  <div bind:this={MCTrigger} class="absolute top-[400vh] h-[10vh] w-full"></div>
  <div bind:this={MDTrigger} class="absolute top-[500vh] h-[10vh] w-full"></div>
  <div bind:this={METrigger} class="absolute top-[600vh] h-[10vh] w-full"></div>
  <div bind:this={MFTrigger} class="absolute top-[700vh] h-[10vh] w-full"></div>
  <div bind:this={MGTrigger} class="absolute top-[800vh] h-[10vh] w-full"></div>
</section>

<!-- ✦ Spiritual and economic relationships -->

<section class="relative col-span-full bg-[#f1efe2]">
  <div class="sticky top-0 z-10 mt-10">
    <div
      class="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen lg:h-screen px-4 md:px-10 gap-8"
    >
      <!-- Left: Image -->
      <picture class="w-full lg:w-2/3">
        <!-- Mobile -->
        <source
          srcset={`${base}/Alluvial-mobile.webp`}
          media="(max-width: 1023px)"
        />
        <!-- Desktop -->
        <img
          src={`${base}/Alluvial.webp`}
          alt="Institutional Framework"
          class="w-full h-auto object-contain mt-10 lg:mt-0"
        />
      </picture>

      <!-- Right: Text Content -->
      <div class="lg:w-1/3 text-left z-20">
        <h5 class="text-xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Spiritual and economic relationships
        </h5>
        <p class="text-sm md:text-base lg:text-lg">
          The fringes of this organised spiritual-commercial space were
          inhabited by miniature vendors and spiritual-cultural organisations.
          Vendors offering Puja-related items, cuisine, Deep Daan lamps, and
          religious paraphernalia did business informally. The PMA determined
          whether or not they could do business.
          <br />
          In parallel, cultural and religious organisations organised Satsangs, Kathas,
          Havans, and other large devotional events. They provided a valuable spiritual
          add-on, with varied points of interaction for pilgrims, but were once again
          reliant on PMA's event permissions and land allocation. Here too, a hierarchy
          emerged: larger, wealthier organisations got better locations and timings,
          while smaller organisations had less preferred conditions.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- ✦ SECTION: desktop Pyramid -->
<section class="hidden lg:block relative col-span-full h-[600vh] bg-[#f1efe2]">
  <div class="sticky top-0 h-auto overflow-hidden z-10">
    <!-- Title -->
    <h5
      class="absolute top-4 left-2/3 transform -translate-x-1/2 text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold z-20 text-center px-2 sm:px-4"
    >
      Permeating Power
    </h5>
    <!-- Subheading -->
    <p
      class="absolute top-20 left-2/3 transform -translate-x-1/2 text-base text-left px-4 max-w-xl z-20"
    >
      This visual captures the spiritual and cultural hierarchy that informs
      ritual practices and shapes informal interactions with devotees and
      pilgrims. The illustration delineates four levels within this projection
      of power or influence—beginning with the Akharas at the top, followed by
      influential spiritual gurus and socio-cultural organisations, then the
      Pandas and Purohits, and finally culminating in the pilgrims and
      Kalpavasis, who constitute the base of this hierarchical structure.
    </p>
    <!-- Background image -->
    <img
      src={`${base}/Power-mappings.png`}
      alt="Power relationships"
      class="w-full h-full object-contain sm:object-cover z-0"
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
  class="absolute top-1/3 right-24 lg:right-48 
         w-80 h-80 bg-[#e5e3d7dd] backdrop-blur-lg 
         rounded-full p-10 shadow-sm z-20 
         flex items-center justify-center text-center"

      class:opacity-0={!isOverlayTopVisible}
      class:opacity-100={isOverlayTopVisible}
    >
      <p class="text-sm md:text-base leading-relaxed">{overlayTexts[0]}</p>
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
  class="absolute top-1/3 right-24 lg:right-48 
         w-80 h-80 bg-[#e5e3d7dd] backdrop-blur-lg 
         rounded-full p-10 shadow-sm z-20 
         flex items-center justify-center text-center"
      class:opacity-0={!isOverlaySecondVisible}
      class:opacity-100={isOverlaySecondVisible}
    >
      <p class="text-sm md:text-base leading-relaxed">{overlayTexts[1]}</p>
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
  class="absolute top-1/3 right-24 lg:right-48 
         w-80 h-80 bg-[#e5e3d7dd] backdrop-blur-lg 
         rounded-full p-10 shadow-sm z-20 
         flex items-center justify-center text-center"
      class:opacity-0={!isOverlayThirdVisible}
      class:opacity-100={isOverlayThirdVisible}
    >
      <p class="text-sm md:text-base leading-relaxed">{overlayTexts[2]}</p>
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
  class="absolute top-1/3 right-24 lg:right-48 
         w-80 h-80 bg-[#e5e3d7dd] backdrop-blur-lg 
         rounded-full p-10 shadow-sm z-20 
         flex items-center justify-center text-center"
      class:opacity-0={!isOverlayBottomVisible}
      class:opacity-100={isOverlayBottomVisible}
    >
      <p class="text-sm md:text-base leading-relaxed">{overlayTexts[3]}</p>
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


<!-- Mobile Section -->
<section class="block lg:hidden relative col-span-full">
  <!-- Intro Text -->
  <div class="px-4 md:px-6 py-8 text-left">
    <h5 class="text-xl md:text-3xl font-semibold mb-4">Permeating Power</h5>
    <p class="text-sm md:text-base">
      This visual captures the spiritual and cultural hierarchy that informs
      ritual practices and shapes informal interactions with devotees and
      pilgrims. The illustration delineates four levels within this projection
      of power or influence—beginning with the Akharas at the top, followed by
      influential spiritual gurus and socio-cultural organisations, then the
      Pandas and Purohits, and finally culminating in the pilgrims and
      Kalpavasis, who constitute the base of this hierarchical structure.
    </p>
    
  </div>

  <!-- Sticky Illustration & Overlay Container -->
  <div class="relative h-[450vh]">
    <div class="sticky top-20 h-screen w-full">
      <!-- Main Illustration -->
      <img
        src={`${base}/Mobile-pyramid.png`}
        alt="Pyramid"
        class="w-full h-auto object-contain z-0"
      />

      <!-- Overlay top -->
      <img
        src={`${base}/Mobile-top.png`}
        alt="Overlay top"
        class="absolute inset-0 w-full h-auto object-contain z-10 transition-opacity duration-500"
        class:opacity-0={!isOverlayMTopVisible}
        class:opacity-100={isOverlayMTopVisible}
      />
      <!-- Overlay second -->
      <img
        src={`${base}/Mobile-second.png`}
        alt="Overlay second"
        class="absolute inset-0 w-full h-auto object-contain z-10 transition-opacity duration-500"
        class:opacity-0={!isOverlayMSecondVisible}
        class:opacity-100={isOverlayMSecondVisible}
      />
      <!-- Third overlay -->
      <img
        src={`${base}/Mobile-third.png`}
        alt="Overlay third"
        class="absolute inset-0 w-full h-auto object-contain z-10 transition-opacity duration-500"
        class:opacity-0={!isOverlayMThirdVisible}
        class:opacity-100={isOverlayMThirdVisible}
      />
      <!-- Bottom overlay -->
      <img
        src={`${base}/Mobile-bottom.png`}
        alt="Overlay bottom"
        class="absolute inset-0 w-full h-auto object-contain z-10 transition-opacity duration-500"
        class:opacity-0={!isOverlayMBottomVisible}
        class:opacity-100={isOverlayMBottomVisible}
      />
    </div>
    
  <!-- Scroll Trigger for Overlays -->
  <div bind:this={topMobileTrigger} class="absolute top-[100vh] h-[10vh] w-full"></div>
  <div bind:this={secondMobileTrigger} class="absolute top-[200vh] h-[10vh] w-full"></div>
  <div bind:this={thirdMobileTrigger} class="absolute top-[300vh] h-[10vh] w-full"></div>
  <div bind:this={bottomMobileTrigger} class="absolute top-[400vh] h-[10vh] w-full"></div>
  
</section>

<!-- ✦ SECTION: Institutional Framework -->
<section class="relative col-span-full bg-[#f1efe2]">
  <div class="sticky top-0 z-10 mt-10">
    <div
      class="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen lg:h-screen px-4 md:px-10 gap-8"
    >
      <!-- Left: Image -->
      <picture class="w-full lg:w-2/3">
        <!-- Mobile -->
        <source
          srcset={`${base}/Institutional-Framework-mobile.png`}
          media="(max-width: 1023px)"
        />
        <!-- Desktop -->
        <img
          src={`${base}/Institutional-framework.png`}
          alt="Institutional Framework"
          class="w-full h-auto object-contain lg:mt-0"
        />
      </picture>

      <!-- Right: Text Content -->
      <div class="lg:w-1/3 text-left z-20">
        <h5 class="text-xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Institutional Framework
        </h5>
        <p class="text-sm md:text-base lg:text-lg">
          At Maha Kumbh 2025, river water quality and sanitation were managed
          through a multi-tiered institutional framework involving judicial
          bodies like the NGT, regulatory agencies such as CPCB and UPPCB, and
          implementing bodies like NMCG, UP Jal Nigam, and the Prayagraj Mela
          Authority. These institutions coordinated efforts across legal,
          infrastructural, and administrative levels to balance river water
          quality compliance.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .fade {
    transition: opacity 0.8s ease;
  }
</style>
