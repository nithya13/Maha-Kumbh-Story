<script>
  import { onMount } from "svelte";


  import { base } from '$app/paths';

  let isOverlayVisible = false;
  let isPointsVisible = false;
  let fadeTrigger;
  let pointsTrigger;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isOverlayVisible = entry.isIntersecting;
      },
      { threshold: 0.5 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        isPointsVisible = entry.isIntersecting;
      },
      { threshold: 0.5 }
    );

    if (fadeTrigger) observer.observe(fadeTrigger);
    if (pointsTrigger) observer2.observe(pointsTrigger);
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
  <div class="flex items-center justify-between px-6 py-4">
    <!-- Logo or Title (left) -->
    <div
      class="text-xl tracking-wider"
      style="font-family: 'Bebas Neue', sans-serif;"
    >
      Reading Rituals for River Rejuvenation
    </div>

    <!-- Menu (right) -->
    <nav>
      <ul class="flex space-x-10 text-sm">
        <li class="hover:underline">About</li>
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
  <div class="absolute inset-0" style="background: rgba(0, 0, 0, 0.1);"></div>

  <!-- Centered Content -->
  <div
    class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 transform md:-translate-y-20"
  >
    <h1
      class="text-4xl tracking-wider md:text-6xl font-bold mb-4 border-b-2 border-white"
      style="font-family: 'Bebas Neue', sans-serif;"
    >
      A water rejuvenation lesson from the Maha Kumbh
    </h1>
    <h2
      class="text-xl tracking-wider md:text-2xl font-medium"
      style="font-family: 'Bebas Neue', sans-serif;"
    >
      Indigenous practices often embody an ecological ethic of conservation
    </h2>
  </div>
</section>

<main
  class="grid grid-cols-1 md:grid-cols-12 gap-4 w-full"
  style="font-family: 'Lora', serif;"
>
  <section
    class="col-start-1 col-span-1 md:col-start-4 md:col-span-6 py-4 md:py-8 px-4 md:px-0 text-left"
  >
    <p class="text-base leading-relaxed">
      Prayagraj hosted more than 60 crore pilgrims and visitors over a span of
      45 days during the Maha Kumbh, according to the estimates of the Uttar
      Pradesh government. The world has witnessed the religious and spiritual
      fervour that moved the entire nation while it celebrated its reverence for
      the river goddess Ganga. Yet, the event is fundamentally a manifestation
      of a profound and deep-seated river- society relationship. Cultural
      gatherings such as the Maha Kumbh are known to happen along rivers and
      water bodies. Can we leverage this relationship for the enduring
      rejuvenation of rivers and water bodies?
    </p>
    <br />
    <p>
      The Maha Kumbh in Prayagraj takes place along a stretch of about 20 km and
      in an area of 40 square km around the sangam of the Ganga, the Yamuna and
      the mythical Saraswati. The river bed and surrounding area are transformed
      into a temporary settlement to receive the pilgrims and visitors. A
      Harvard University study called it an “ephemeral mega-city”. Built in just
      eight to 10 weeks in the belly of the river, the city is unbuilt as
      swiftly, before the river begins to swell. An amazing convergence of
      cultural, economic and political interests produces this spectacle of
      making and unmaking the ephemeral city. The city turns into a theatre for
      celebrating the spiritual connection with the river.
    </p>
    <p>
      <br />
      At the same time, the staggering footfall and the mind-numbing scale of rituals
      and practices along the river stretch, over such a short period, raise concerns
      about their impact on the river. The Central Pollution Control Board’s (CPCB)
      monitoring during this Maha Kumbh, as well as the one in 2013, showed high
      levels of faecal coliform, more so during the amrit snan (auspicious bathing)
      days. There have been deliberate efforts to respond and mitigate this by allowing
      adequateows in the river. There has also been an upsurge of environmental action,
      both by state institutions and civil society, to mitigate the impact.
    </p>
    <br />
    <p>
      The spectacle of the Maha Kumbh is, thus, subject to two seemingly
      divergent narratives. One that is focused on society and spirituality — it
      eulogises the virtues of the Indian spiritual traditions of respect and
      reverence towards nature. The other, shaped by the emerging environmental
      challenges, is the impact of mass gatherings and a variety of ritual
      practices on river ecologies.
    </p>
    <br />
    <p>
      On the face of it, the two appear conflicting. But a focus on the
      river-society relationship, embodied by the Maha Kumbh and similar events,
      can lead to progressive outcomes. The profundity of the relationship is as
      unfathomable as that of the spectacular nature of the Maha Kumbh. Often
      described as aastha (deeper than the loose translation, faith), can this
      embedded spiritual consciousness be deployed for ecological purposes?
    </p>
    <br />
    <p>
      It would not be a stretch of imagination to say that indigenous practices
      — spiritual or non-spiritual — often embody an ecological ethic of
      conservation. Using indigenous metaphors and practices can be very
      effective in pursuing environmental outcomes. The recent example of the
      popular leader Morari Bapu’s successful campaign to protect the whale
      shark in the Saurashtra coastal region is one example. Such deployment of
      spiritual consciousness can possibly address a critical gap in the efforts
      to rejuvenate rivers, especially the Namami Gange programme to clean the
      Ganga. The programme is unprecedented in its scope, scale and significance
      and has led to a visible and tangible impact in improving the river’s
      ecological status. But there are two challenges in sustaining this impact.
      One pertains to the sub-national institutionalisation of the programme for
      its enduring impact. Discernible institutional mandates or budgetary
      allocations at the sub-national scale remain elusive. The other is the
      continuing pollution loads from non-point sources — these are contributed
      by a multitude of stakeholder interest groups along the river.
    </p>
    <br />
    <p>
      The latter is difficult to address without changing the behaviour of
      people in their everyday engagement with the river. People’s engagement
      with the river must complement and catalyse the efforts of agencies like
      the National Mission for Clean Ganga (NMCG). They provide the sub-national
      churning and accountability that are necessary to make river rejuvenation
      efforts enduring. Building on aastha can turn the mission into a truly
      people’s programme for an improved ecological status of the river.
    </p>
    <br />
    <p>
      The challenge, however, is about unpacking aastha and turning it into an
      astra — an instrument. While much needs to be understood about the
      enigmatic aastha, it can begin with its material manifestations — the
      rituals and practices that impact the river’s ecologies. There is a risk
      here of privileging ritual practices and reinforcing the social and
      spiritual power hierarchies. These can be avoided through a deeper
      understanding of the ecosystem that sanctions and sustains the rituals and
      practices.
    </p>
    <br />
    <p>
      Thus, the takeaway is to bring the rituals and practices to the centre of
      our analysis. Not just for channelling spiritual consciousness but also to
      unravel the underlying ecological ethic. This requires recognising that
      the rituals and practices are informed and constructed by a web of agents,
      actors and networks. These range from priests, pandas and pandits to
      popular preachers and spiritual thought-leaders as well as institutions
      such as ashrams and akharas. These networks transcend the spiritual realm.
      They can often be driven by the interests of the political economy. The
      reimagining of rituals must involve working with these networks and
      institutions to produce means and meanings that can complement river
      rejuvenation efforts.
    </p>
    <br />
    <p>
      India’s rivers and water bodies host gatherings of cultural and spiritual
      signi cance — a legend usually provides the convening power. And, the
      river-society relationship unravels in myriad ways: Legends, rituals,
      beliefs, and practices. It is not restricted to kumbh gatherings but
      extends to other festivals — the Chhath Puja, for instance. It is time to
      bring the confluence of culture with river ecologies to the centre of
      analysis for an Indian model of river rejuvenation and water conservation.
    </p>
  </section>

  <section class="relative col-span-full h-[700vh]">
    <div class="sticky top-0 h-screen overflow-hidden z-10">
      <!-- Base Map -->
      <img
        src={`${base}/Map.png`}
        alt="Zoning"
        class="w-full h-full object-contain"
      />
  
      <!-- First overlay -->
      <img
        src={`${base}/overlay.png`}
        alt="Overlay"
        class="absolute inset-0 w-full h-full object-contain transition-opacity duration-1000"
        class:opacity-0={!isOverlayVisible}
        class:opacity-100={isOverlayVisible}
      />
  
      <!-- Labels overlay -->
      <img
        src={`${base}/labels.png`}
        alt="Labels"
        class="absolute inset-0 w-full h-full object-contain transition-opacity duration-1000"
        class:opacity-0={!isOverlayVisible}
        class:opacity-100={isOverlayVisible}
      />
  
      <!-- Second overlay (points) -->
      <img
        src={`${base}/points.png`}
        alt="Points"
        class="absolute inset-0 w-full h-full object-contain transition-opacity duration-1000"
        class:opacity-0={!isPointsVisible}
        class:opacity-100={isPointsVisible}
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
  
    <!-- Floating cards area -->
    <div class="absolute top-[100vh] w-full z-20">
      <div
        class="bg-white/80 backdrop-blur-lg rounded p-6 md:p-8 w-11/12 md:max-w-lg mx-auto mb-[100vh] shadow-lg"
      >
        <h2 class="text-xl mb-2">Zoning</h2>
        <p class="text-base leading-relaxed">
          The area around the sangam is classified into zones for administrative purposes.
        </p>
      </div>
  
      <div
        class="bg-white/80 backdrop-blur-lg rounded p-6 md:p-8 w-11/12 md:max-w-lg mx-auto mb-[100vh] shadow-lg"
      >
        <h2 class="text-xl mb-2">Rituals as Conservation</h2>
        <p class="text-base leading-relaxed">
          Events like the Maha Kumbh show that faith-based gatherings can support conservation goals if approached thoughtfully.
        </p>
      </div>
  
      <div
        class="bg-white/80 backdrop-blur-lg rounded p-6 md:p-8 w-11/12 md:max-w-lg mx-auto mb-[100vh] shadow-lg"
      >
        <h2 class="text-xl mb-2">Power Structures</h2>
        <p class="text-base leading-relaxed">
          The organization and functioning of the ephemeral city reflect deep social hierarchies, with power embedded in spatial and infrastructural choices.
        </p>
      </div>
    </div>
  </section>
</main>
