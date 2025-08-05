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

  let isOverlayAVisible = false;
  let isOverlayBVisible = false;
  let isOverlayCVisible = false;
  let isOverlayDVisible = false;
  let isOverlayEVisible = false;
  let isOverlayFVisible = false;
  let isOverlayGVisible = false;

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
    `Naga Sadhu`,
    "Businesses and small vendors",
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
<!-- ✦ Key stakeholders -->
<section class="relative col-span-full h-[900vh]">
  <div class="sticky top-0 h-screen overflow-hidden z-10">
    <div
      class="flex flex-col lg:flex-row items-center justify-center h-full px-4 md:px-10 gap-8"
    >
      <!-- Right: Text Content -->
      <div class="lg:w-1/4 text-left z-20">
        <h5 class="text-xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Stakeholders
        </h5>
        <p class="text-sm md:text-base lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          ullam, eveniet rerum laudantium libero nostrum vitae ab similique enim
          blanditiis error quod eligendi, distinctio autem accusamus, repellat
          ducimus repudiandae pariatur.
        </p>
      </div>

      <!-- Illustration & Overlay Container -->
      <div class="relative w-full lg:w-3/4 h-auto">
        <!-- Main Illustration -->
        <img
          src={`${base}/Main/Main-illustration.jpg`}
          alt="Spiritual and economic relationships"
          class="w-full h-auto object-contain z-0"
        />

        <!-- Overlay: Top -->
        <img
          src={`${base}/Main/Akhara.png`}
          alt="Overlay A"
          class="absolute top-0 left-0 w-full h-auto object-contain z-10 transition-opacity duration-500"
          class:opacity-0={!isOverlayAVisible}
          class:opacity-100={isOverlayAVisible}
        />

        <!-- Overlay Explainer Box -->
        <div
          class="absolute top-1/4 right-4 md:right-16 w-[80%] md:w-1/2 bg-[#f1efe2bb] backdrop-blur-lg rounded p-6 md:p-8 shadow-lg z-20 transition-opacity duration-500"
          class:opacity-0={!isOverlayAVisible}
          class:opacity-100={isOverlayAVisible}
        ><h5 class="text-xl mb-2">Akharas</h5>
          <p class="text-base leading-relaxed">{overlayExplainerTexts[0]}</p>
        </div>

        <!-- Overlay: Second -->
        <img
          src={`${base}/Main/ABAP.png`}
          alt="Overlay Second"
          class="absolute inset-0 w-full h-full object-cover z-10 fade"
          class:opacity-0={!isOverlayBVisible}
          class:opacity-100={isOverlayBVisible}
        />
        <div
          class="absolute top-1/4 left-4 md:right-16 w-[80%] md:w-1/2 bg-[#f1efe2bb] backdrop-blur-lg rounded p-6 md:p-8 shadow-lg z-20 transition-opacity duration-500"
          class:opacity-0={!isOverlayBVisible}
          class:opacity-100={isOverlayBVisible}
        >
        <h5 class="text-xl mb-2">ABAP</h5>
          <p class="text-base leading-relaxed">{overlayExplainerTexts[1]}</p>
        </div>

        <!-- Overlay: Third -->
        <img
          src={`${base}/Main/pma.png`}
          alt="Overlay C"
          class="absolute inset-0 w-full h-full object-cover z-10 fade"
          class:opacity-0={!isOverlayCVisible}
          class:opacity-100={isOverlayCVisible}
        />
        <div
          class="absolute top-1/4 right-24 md:right-24 w-1/3 bg-[#f1efe2bb] backdrop-blur-lg rounded p-6 md:p-8 shadow-lg z-20 fade"
          class:opacity-0={!isOverlayCVisible}
          class:opacity-100={isOverlayCVisible}
        >
          <h5 class="text-xl mb-2">PMA</h5>
          <p class="text-base leading-relaxed">{overlayExplainerTexts[2]}</p>
        </div>

        <!-- Overlay: Fourth -->
        <img
          src={`${base}/Main/Pandas.png`}
          alt="Overlay D"
          class="absolute inset-0 w-full h-full object-cover z-10 fade"
          class:opacity-0={!isOverlayDVisible}
          class:opacity-100={isOverlayDVisible}
        />
        <div
          class="absolute top-24 left-12 md:right-24 w-1/3 bg-[#f1efe2bb] backdrop-blur-lg rounded p-6 md:p-8 shadow-lg z-20 fade"
          class:opacity-0={!isOverlayDVisible}
          class:opacity-100={isOverlayDVisible}
        ><h5 class="text-xl mb-2">Panda Pujaris /Prayagwalas</h5>
          <p class="text-base leading-relaxed">{overlayExplainerTexts[3]}</p>
        </div>
<!-- Overlay: Fifth -->
         <img
          src={`${base}/Main/Kalpavas.png`}
          alt="Overlay D"
          class="absolute inset-0 w-full h-full object-cover z-10 fade"
          class:opacity-0={!isOverlayEVisible}
          class:opacity-100={isOverlayEVisible}
        />
        <div
          class="absolute top-24 left-12 md:right-24 w-1/3 bg-[#f1efe2bb] backdrop-blur-lg rounded p-6 md:p-8 shadow-lg z-20 fade"
          class:opacity-0={!isOverlayEVisible}
          class:opacity-100={isOverlayEVisible}
        ><h5 class="text-xl mb-2">Kalpavas</h5>
          <p class="text-base leading-relaxed">{overlayExplainerTexts[4]}</p>
        </div>

        <!-- Overlay: Sixth -->
         <img
          src={`${base}/Main/Naga-Sadhu.png`}
          alt="Overlay D"
          class="absolute inset-0 w-full h-full object-cover z-10 fade"
          class:opacity-0={!isOverlayFVisible}
          class:opacity-100={isOverlayFVisible}
        />
        <div
          class="absolute top-24 left-12 md:right-24 w-1/3 bg-[#f1efe2bb] backdrop-blur-lg rounded p-6 md:p-8 shadow-lg z-20 fade"
          class:opacity-0={!isOverlayFVisible}
          class:opacity-100={isOverlayFVisible}
        ><h5 class="text-xl mb-2">Naga Sadhus</h5>
          <p class="text-base leading-relaxed">{overlayExplainerTexts[5]}</p>
        </div>
<!-- Overlay: Seventh -->
         <img
          src={`${base}/Main/Businesses.png`}
          alt="Overlay D"
          class="absolute inset-0 w-full h-full object-cover z-10 fade"
          class:opacity-0={!isOverlayGVisible}
          class:opacity-100={isOverlayGVisible}
        />
        <div
          class="absolute top-24 left-12 md:right-24 w-1/3 bg-[#f1efe2bb] backdrop-blur-lg rounded p-6 md:p-8 shadow-lg z-20 fade"
          class:opacity-0={!isOverlayGVisible}
          class:opacity-100={isOverlayGVisible}
        ><h5 class="text-xl mb-2">Businesses and small vendors</h5>
          <p class="text-base leading-relaxed">{overlayExplainerTexts[6]}</p>
        </div>

      </div>
    </div>
  </div>


    <!-- Scroll triggers -->
    <div
      bind:this={ATrigger}
      class="absolute top-[200vh] h-[10vh] w-full"
    ></div>
    <div
      bind:this={BTrigger}
      class="absolute top-[300vh] h-[10vh] w-full"
    ></div>
    <div
      bind:this={CTrigger}
      class="absolute top-[400vh] h-[10vh] w-full"
    ></div>
    <div
      bind:this={DTrigger}
      class="absolute top-[500vh] h-[10vh] w-full"
    ></div>
    <div
      bind:this={ETrigger}
      class="absolute top-[600vh] h-[10vh] w-full"
    ></div>
    <div
      bind:this={FTrigger}
      class="absolute top-[700vh] h-[10vh] w-full"
    ></div>
    <div
      bind:this={GTrigger}
      class="absolute top-[800vh] h-[10vh] w-full"
    ></div>

</section>
<!-- ✦ Spiritual and economic relationships -->
<section class="relative col-span-full h-screen">
  <div class="sticky top-0 h-screen overflow-hidden z-10">
    <div
      class="flex flex-col lg:flex-row items-center justify-center h-full px-4 md:px-10 gap-8"
    >
      <!-- Left: Image -->
      <img
        src={`${base}/Pyramid/Main-illustration.png`}
        alt="Background"
        class="w-full lg:w-3/4 h-auto object-contain mt-10 lg:mt-0"
      />

      <!-- Right: Text Content -->
      <div class="lg:w-1/4 text-left z-20">
        <h5 class="text-xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Spiritual and economic relationships
        </h5>
        <p class="text-sm md:text-base lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          ullam, eveniet rerum laudantium libero nostrum vitae ab similique enim
          blanditiis error quod eligendi, distinctio autem accusamus, repellat
          ducimus repudiandae pariatur.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- ✦ SECTION: Pyramid -->
<section class="relative col-span-full h-[900vh]">
  <div class="sticky top-0 h-screen overflow-hidden z-10">
    <!-- Title -->
    <h5
      class="absolute top-6 left-1/2 transform -translate-x-1/2 text-xl md:text-3xl lg:text-4xl font-semibold z-20 text-center px-4"
    >
      Permeating Power
    </h5>
    <!-- Subheading -->
    <p
      class="absolute top-20 left-1/2 transform -translate-x-1/2 text-base text-left px-4 max-w-xl z-20"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
      Sed viverra, sapien a hendrerit blandit, enim elit ultrices urna, ac
      dignissim risus lorem ac neque.
    </p>
    <!-- Background image -->
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
      class="absolute top-1/4 right-4 md:right-10 lg:right-20 w-11/12 sm:w-4/5 md:w-1/2 lg:w-1/3 max-w-md bg-[#f1efe2] backdrop-blur-lg rounded p-4 md:p-6 shadow-sm z-20 fade"
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
      class="absolute top-1/4 right-4 md:right-12 lg:right-24 w-11/12 sm:w-4/5 md:w-1/2 lg:w-1/3 max-w-md bg-[#c4b2a9] backdrop-blur-lg rounded p-4 md:p-6 shadow-lg z-20 fade"
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
      class="absolute top-1/4 right-4 md:right-12 lg:right-24 w-11/12 sm:w-4/5 md:w-1/2 lg:w-1/3 max-w-md bg-[#c4b2a9] backdrop-blur-lg rounded p-4 md:p-6 shadow-lg z-20 fade"
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
      class="absolute top-1/4 right-4 md:right-12 lg:right-24 w-11/12 sm:w-4/5 md:w-1/2 lg:w-1/3 max-w-md bg-[#c4b2a9] backdrop-blur-lg rounded p-4 md:p-6 shadow-lg z-20 fade"
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

<section class="relative col-span-full h-screen">
  <div class="sticky top-0 h-screen overflow-hidden z-10">
    <div
      class="flex flex-col lg:flex-row items-center justify-center h-full px-4 md:px-10 gap-8"
    >
      <!-- Left: Image -->
      <img
        src={`${base}/Institutional-framework.png`}
        alt="Background"
        class="w-full lg:w-2/3 h-auto object-contain mt-10 lg:mt-0"
      />

      <!-- Right: Text Content -->
      <div class="lg:w-1/3 text-left z-20">
        <h5 class="text-xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Institutional Framework
        </h5>
        <p class="text-sm md:text-base lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          ullam, eveniet rerum laudantium libero nostrum vitae ab similique enim
          blanditiis error quod eligendi, distinctio autem accusamus, repellat
          ducimus repudiandae pariatur.
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
