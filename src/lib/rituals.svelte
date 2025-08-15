<script>
  export let base = "";
 
 import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let calendarSection;
  let showFirstOverlay = false;
  let showSecondOverlay = false;

  onMount(() => {
   const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset both to start fresh
          showFirstOverlay = true;
          showSecondOverlay = false;

          // After delay, switch to second overlay
          setTimeout(() => {
            showFirstOverlay = false;
            showSecondOverlay = true;
          }, 4500); // 3s display + 1.5s fade
        } else {
          // Clear when leaving viewport so it can trigger again next time
          showFirstOverlay = false;
          showSecondOverlay = false;
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (calendarSection) observer.observe(calendarSection);

    return () => observer.disconnect();
  });
</script>

<section
  bind:this={calendarSection}
  class="col-start-1 col-span-1 md:col-start-5 md:col-span-5 py-4 md:py-8 px-4 md:px-4 text-left relative"
>
  <div>
    <h2 id="chapter2" class="text-2xl font-semibold mb-4">
      Legends, Rituals, Customs and Practices at the Maha Kumbh
    </h2>

    <p class="mb-6">
      The Kumbh Mela is an assembly of rituals, with Amrit Snan (earlier Shahi Snan) being the most prominent and prevalent among all of them. These traditions, rooted deep within the Hindu cosmography, mythology, and yogic practices, serve a variety of purposes, ranging from spiritual cleansing to affirming social bonds. Most interviewees underscored that attending the Maha Kumbh at Prayagraj was not an individual pilgrimage but a moment of history that would be a memory for generations to come, considering the occurrence of the Maha Kumbh after 144 years. 

    </p>

    <p class="mb-6">
      In this section, we have detailed the rituals and their connections to mythology while interpreting them through reflections drawn from our field observations. The section details the range of rituals with water at its core, ranging from Snans as the most prominent ritual and others including Kalpavas, Aarti, and various Daans. It also describes the material engagement at the Maha Kumbh that largely comprises natural materials such as flowers, cereals (barley, rice, sesame seeds), milk, honey, etc. These engagements reflect a deep, ecologically sensitive engagement with the river in ritual performance.

    </p>
    <div class="relative w-full">
      <!-- Main Calendar Image -->
      <img
        src={`${base}/Calendar.jpg`}
        alt="Calendar"
        class="w-full h-auto object-contain justify-self-center mb-6"
      />

      <!-- Overlay 1 -->
      {#if showFirstOverlay}
        <img
          src={`${base}/Dates-overlay.png`}
          alt="Dates Overlay"
          class="absolute top-0 left-0 w-full h-full object-contain"
          in:fade={{ duration: 1500 }}
          out:fade={{ duration: 1500 }}
        />
      {/if}

      <!-- Overlay 2 -->
      {#if showSecondOverlay}
        <img
          src={`${base}/Snan-dates.png`}
          alt="Snan Dates Overlay"
          class="absolute top-0 left-0 w-full h-full object-contain"
          in:fade={{ duration: 1500 }}
        />
      {/if}
    </div>
  </div>
</section>
<section
  class="col-span-full bg-[#cce2cf] overflow-x-auto overflow-y-hidden flex gap-16 px-4 py-8 scrollbar-thin scrollbar-thumb-gray-500"
>
  <div class="flex flex-col md:flex-row items-start">
    <!-- Card 1 -->
    <div
      class="w-[640px] m-4 flex-shrink-0 p-6 flex flex-col gap-4 whitespace-normal z-0 "
    >
      <!-- Image Row -->
      <div class="flex justify-start gap-4">
        <img
          src={`${base}/Rituals/Rituals smaller/Aarti_1.webp`}
          alt="Aarti 1"
          class="flex-1 h-48 object-cover"
        />
        <img
          src={`${base}/Rituals/Rituals smaller/Aarti.webp`}
          alt="Aarti 2"
          class="flex-1 h-48 object-cover"
        />
      </div>

      <!-- Heading -->
      <h4 class="text-2xl font-semibold">Aarti</h4>

      <!-- Description -->
      <div class="space-y-4">
        <div>
          
          <p class="mt-1">
            It is performed towards the end of the puja, overcoming any
            shortcomings in the puja with a lighted lamp representing the
            removal of darkness with the arrival of divine wisdom.
          </p>
        </div>

        <div>
          <strong>Materials Inputs in the river:</strong>
          <div class="mt-2">
            <img
              src={`${base}/Rituals/Aarati.png`}
              alt="Materials visual"
              class="w-50 h-auto mb-1"
            />
            <p class="annotation leading-snug">
              Flowers, Camphor/Oil/Ghee, Deeps (earthen, flour-based, or paper
              based)
            </p>
          </div>
        </div>

        <div>
          <strong>Magnitude and Impact:</strong>
          <p class="mt-2">
            Millions of flickering lamps ignite the confluence, creating a river
            of fire that mirrors the stars.
          </p>
        </div>
      </div>
    </div>

    <!-- Vertical Divider (hidden on mobile) -->
    <div class="hidden md:block w-px bg-black mx-10 my-4 self-stretch"></div>
  </div>


  <div class="flex flex-col md:flex-row items-center">
    <!-- Card 2 -->

    <div
      class="w-[740px] m-4 flex-shrink-0 p-6 flex flex-col gap-4 whitespace-normal z-0 "
    >
      <!-- Image Row -->
      <div class="flex justify-start gap-4">
        <img
          src={`${base}/Rituals/Rituals smaller/Amrit Snan_1.webp`}
          alt="Snan 1"
          class="flex-1 h-48 object-cover rounded"
        />
        <img
          src={`${base}/Rituals/Rituals smaller/Amrit Snan_2.webp`}
          alt="Snan 2"
          class="flex-1 h-48 object-cover rounded"
        />
        <img
          src={`${base}/Rituals/Rituals smaller/Amrit Snan_3.webp`}
          alt="Snan 3"
          class="flex-1 h-48 object-cover rounded"
        />
      </div>

      <!-- Heading -->
      <h4 class="text-2xl font-semibold">Amrit Snan (‘Shahi Snan’)</h4>

      <!-- Description -->
      <div class="leading-relaxed space-y-4">
        <div> 
          <p class="mt-1">
            A bathing ritual at Kumbh Mela on specific cosmic alignments i.e.,
            Amrit Yog.
          </p>
        </div>

        <div>
          <strong>Materials Inputs in the river:</strong>
          <div class="mt-2">
            <img
              src={`${base}/Rituals/Faeces.png`}
              alt="Materials visual"
              class="w-24 h-auto mb-1"
            />
            <p class="annotation leading-snug">Human Waste/Feces</p>
          </div>
        </div>

        <div>
          <strong>Magnitude and Impact:</strong>
          <p class="mt-2">
            66 Crore visitors visited during the 45 days of Maha Kumbh, Snan was
            the most common ritual
          </p>
        </div>
      </div>
    </div>

    <!-- Vertical Divider (hidden on mobile) -->
    <div
      class="hidden md:block w-px bg-black mx-10 my-4 self-stretch"
      mx-10
    ></div>
  </div>

  <div class="flex flex-col md:flex-row items-center">
    <!-- Card 3 -->
    <div
      class="w-[640px] m-4 flex-shrink-0 p-6 flex flex-col gap-4 whitespace-normal z-0 "
    >
      <!-- Image Row -->
      <div class="flex justify-start gap-4">
        <img
          src={`${base}/Rituals/Rituals smaller/Kalpavas_1.webp`}
          alt="Snan 1"
          class="flex-1 h-48 object-cover rounded"
        />
      </div>

      <!-- Heading -->
      <h4 class="text-2xl font-semibold">Kalpavas</h4>

      <!-- Description -->
      <div class="leading-relaxed space-y-4">
        <div>
          
          <p class="mt-1">
            Kalpavas is a profound practice leading a minimalist life, observing
            fasting, and performing various rituals along the banks of the
            confluence for their spiritual evolution
          </p>
        </div>

        <div>
  <strong>Materials Inputs in the river:</strong>

  <!-- Background Repeat Image -->
  <div
    class="h-12 bg-repeat-x bg-[url('/Rituals/Barley-flower-deep.png')]"
    style="background-size: auto 100%;"  
  ></div>

  <p class="annotation leading-snug mt-2">
    Organic materials like Barley, Flowers, Deeps (earthen,
    flour-based, or paper based)
  </p>
</div>

        <div>
          <strong>Magnitude and Impact:</strong>
          <p class="mt-2">
            Estimated 10 lakh Kalpavasis resided in Maha Kumbh this year
          </p>
        </div>
      </div>
    </div>
    <!-- Vertical Divider (hidden on mobile) -->
    <div
      class="hidden md:block w-px bg-black mx-10 my-4 self-stretch"
      mx-10
    ></div>
  </div>

  <div class="flex flex-col md:flex-row items-center">
    <!-- Card 4 -->

    <div
      class="w-[740px] m-4 flex-shrink-0 p-6 flex flex-col gap-4 whitespace-normal z-0 "
    >
      <!-- Image Row -->
      <div class="flex justify-start gap-4">
        <img
          src={`${base}/Rituals/Rituals smaller/Satsang.webp`}
          alt="Snan 1"
          class="flex-1 h-48 object-cover rounded"
        />
        <img
          src={`${base}/Rituals/Rituals smaller/Spiritual teaching on the banks of Ganga.webp`}
          alt="Snan 2"
          class="flex-1 h-48 object-cover rounded"
        />
      </div>

      <!-- Heading -->
      <h4 class="text-2xl font-semibold">Satsang</h4>

      <!-- Description -->
      <div class="leading-relaxed space-y-4">
        <div>
          
          <p class="mt-1">
            The saints and sages gather at a regular interval and share their
            knowledge with various experiences for the common good
          </p>
        </div>

        <div>
          <strong>Materials Inputs in the river:</strong>
          <div class="mt-2">
            <p class="annotation leading-snug">
              No direct material inputs in the river
            </p>
          </div>
        </div>

        <div>
          <strong>Magnitude and Impact:</strong>
          <p class="mt-2">
            Spiritual Gurus dominate knowledge sharing; pilgrims hear and obey
            ritual counsel
          </p>
        </div>
      </div>
    </div>

    <!-- Vertical Divider (hidden on mobile) -->
    <div
      class="hidden md:block w-px bg-black mx-10 my-4 self-stretch"
      mx-10
    ></div>
  </div>

  <div class="flex flex-col md:flex-row items-center">
    <!-- Card 5 -->

    <div
      class="w-[640px] m-4 flex-shrink-0 p-6 flex flex-col gap-4 whitespace-normal z-0 "
    >
      <!-- Image Row -->
      <div class="flex justify-start gap-4">
        <img
          src={`${base}/Rituals/Rituals smaller/Deep Daan.webp`}
          alt="Daan 1"
          class="flex-1 h-48 object-cover rounded"
        />
        <img
          src={`${base}/Rituals/Rituals smaller/Deep Daan_1.webp`}
          alt="Daan 2"
          class="flex-1 h-48 object-cover rounded"
        />
      </div>

      <!-- Heading -->
      <h4 class="text-2xl font-semibold">Daan</h4>

      <!-- Description -->
      <div class="leading-relaxed space-y-4">
        <div>
          
          <p class="mt-1">
            Daan is a holy 'act of giving' that blesses the giver and helps the receiver. It is said to cleanse the soul and wash away past karmic sins
          </p>
        </div>

        <div>
          <strong>Materials Inputs in the river:</strong>
          <div class="mt-2">
            <img
              src={`${base}/Rituals/Aarati.png`}
              alt="Materials visual"
              class="w-50 h-auto mb-1"
            />
            <p class="annotation leading-snug">
             Flowers, Deeps (earthen, flour-based, or paper based), incense sticks, rice and Kumkum (vermillion).

            </p>
          </div>
        </div>

        <div>
          <strong>Magnitude and Impact:</strong>
          <p class="mt-2">
            Some of the most prevalent rituals (usually at least one person from the family/ group afloats Deeps).

          </p>
        </div>
      </div>
    </div>

    
  </div>

</section>
<style>
  .fade-in {
    transition: opacity 1s ease;
  }
</style>