<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">

</svelte:head>

<script>
 
</script>


<section class="relative w-full h-screen overflow-hidden">
  <!-- Background Image -->
  <img 
    src="/Background.webp" 
    alt="Background" 
    class="absolute inset-0 w-full h-full object-cover" 
  />

  <!-- Dark overlay for better text visibility (optional but recommended) -->
  <div class="absolute inset-0" style="background: rgba(0, 0, 0, 0.1);"></div>

  <!-- Centered Content -->
  <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 transform -translate-y-70 md:-translate-y-20">
    <h1 class="text-4xl tracking-wider md:text-6xl font-bold mb-4 border-b-2 border-white" style="font-family: 'Bebas Neue', sans-serif;">
      A water rejuvenation lesson from the Maha Kumbh
    </h1>
    <h2 class="text-xl tracking-wider md:text-2xl font-medium" style="font-family: 'Bebas Neue', sans-serif;">
      Indigenous practices often embody an ecological ethic of conservation
    </h2>
  </div>
</section>

  <main class="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
  <section
    class="col-start-1 col-span-1 md:col-start-2 md:col-span-10 py-4 md:py-8 px-4 md:px-0 text-left"
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
    <p>The Maha Kumbh in Prayagraj takes place along a stretch of about 20 km and in an
      area of 40 square km around the sangam of the Ganga, the Yamuna and the mythical
      Saraswati. The river bed and surrounding area are transformed into a temporary
      settlement to receive the pilgrims and visitors. A Harvard University study called it
      an “ephemeral mega-city”. Built in just eight to 10 weeks in the belly of the river, the
      city is unbuilt as swiftly, before the river begins to swell. An amazing convergence of
      cultural, economic and political interests produces this spectacle of making and
      unmaking the ephemeral city. The city turns into a theatre for celebrating the
      spiritual connection with the river.</p>
      <p>
        At the same time, the staggering footfall and the mind-numbing scale of rituals and
practices along the river stretch, over such a short period, raise concerns about their
impact on the river. The Central Pollution Control Board’s (CPCB) monitoring during
this Maha Kumbh, as well as the one in 2013, showed high levels of faecal coliform,
more so during the amrit snan (auspicious bathing) days. There have been deliberate
efforts to respond and mitigate this by allowing adequateows in the river. There
has also been an upsurge of environmental action, both by state institutions and civil
society, to mitigate the impact.
      </p>
  </section>

  <section class="relative col-span-full h-[500vh]">
    <div class="sticky top-0 h-screen overflow-hidden z-10">
      <img
        src="./Map.png"
        alt="Zoning"
        class=" w-full h-full object-contain"
      />
    </div>

    <div class="absolute top-[100vh] w-full z-20">
      <div
        class="bg-white/80 backdrop-blur-lg rounded-2xl p-6 md:p-8 w-11/12 md:max-w-lg mx-auto mb-[100vh] shadow-lg"
      >
        <h2 class="text-xl mb-2">Indigenous Practices and Water</h2>
        <p class="text-base leading-relaxed">
          Many indigenous traditions hold rivers sacred and teach sustainable
          water use practices rooted in spirituality.
        </p>
      </div>

      <div
        class="bg-white/80 backdrop-blur-lg rounded-2xl p-6 md:p-8 w-11/12 md:max-w-lg mx-auto mb-[100vh] shadow-lg"
      >
        <h2 class="text-xl mb-2">Rituals as Conservation</h2>
        <p class="text-base leading-relaxed">
          Events like the Maha Kumbh show that faith-based gatherings can
          support conservation goals if approached thoughtfully.
        </p>
      </div>
    </div>
  </section>
</main>
