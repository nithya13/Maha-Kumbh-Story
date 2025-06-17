<script>
    export let base = "";

    let currentSlide = 0;
    const slides = [
        `${base}/Amrit snan/Snan-1.jpg`,
        `${base}/Amrit snan/Snan-2.jpg`,
        `${base}/Amrit snan/Snan-3.jpg`,
    ];

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }
</script>

<section class="relative col-span-full">
    <div class="grid grid-cols-12">
        <div
            class="col-start-1 col-span-1 md:col-start-5 md:col-span-5 py-4 md:py-8 px-4 text-left"
        >
            <h2 id="chapter2" class="text-2xl font-semibold mb-4">
                Chapter 2: Legends, Rituals, Customs and Practices at the Maha
                Kumbh
            </h2>

            <p class="mb-6">
                The Kumbh Mela is an assembly of rituals and the largest sacred
                cultural gathering in the world – Amrit Snan being the most
                prominent and prevalent among all of them. These traditions,
                rooted deep within the Hindu cosmography, mythology, and yogic
                practices, serve a variety of purposes – spiritual cleansing to
                affirm social bonds. Most interviewees underscored that
                attending the Maha Kumbh at Prayagraj was not an individual
                pilgrimage but a moment of history that would be an iconic
                memory for generations to come, considering the unusual
                phenomenon of having such a magnificent Maha Kumbh after 144
                years. The Rituals and Practices reflect the traditions of
                Sanatana, which have been followed throughout the centuries. In
                this section, we have detailed the rituals and their connections
                to mythology, while interpreting them through reflections drawn
                from our field observations. The section highlights the
                centrality of water-based rituals ranging from Snans as the most
                prominent ritual and others including Tarpan, Kalpavas and
                Daans. It also describes the material engagement at the Maha
                Kumbh that largely comprises natural materials such as flowers,
                cereals (barley, rice, sesame seeds), milk, and honey. These
                engagements reflect a deep ecologically sensitive engagement
                with the river in ritual performance.
            </p>

            <!-- Sticky Calendar Image -->
            <div class="sticky top-0 overflow-hidden z-10 mt-8">
                <img
                    src={`${base}/Calendar.jpg`}
                    alt="Calendar"
                    class="w-60 h-60 object-contain"
                />
            </div>
        </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">Ritual Highlight: Snan</h2>
    <div class="relative w-screen overflow-x-hidden pt-8 pb-8">
  <!-- Slides Container -->
  <div
    class="flex transition-transform duration-500 ease-in-out"
    style="transform: translateX(-{currentSlide * 55}vw); width: {slides.length * 55}vw;"
  >
    {#each slides as slide}
      <div class="w-[50vw] pr-[5vw] flex-shrink-0">
        <img
          src={slide}
          alt="Snan Image"
          class="w-full h-auto object-cover rounded-sm shadow-lg"
        />
      </div>
    {/each}
  </div>

  <!-- Navigation Buttons -->
  <button
    on:click={prevSlide}
    class="absolute top-1/2 left-10 transform -translate-y-1/2 bg-black/40 text-white p-2 z-10 hover:bg-black"
  >
    ‹
  </button>
  <button
    on:click={nextSlide}
    class="absolute top-1/2 right-10 transform -translate-y-1/2 bg-black/40 text-white p-2 z-10 hover:bg-black"
  >
    ›
  </button>
</div>
</section>
