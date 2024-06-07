import { component$ } from '@builder.io/qwik';
import CompanyNameLogo from '../../media/company-name.svg?jsx';
import Logo from '../../media/PaxZenara.svg?jsx';
import Enara from '../../media/zEnara.webp?jsx';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="bg-primary-100 bg-[url('../images/coming-soon-bg-mobile.webp')] bg-cover bg-center sm:bg-[url('../images/coming-soon-bg.webp')]">
      <div class="relative flex h-screen justify-around p-1 align-middle sm:flex-col sm:p-2">
        <div class="mx-auto flex w-full flex-col items-center justify-center gap-10 align-middle sm:w-[70%]">
          <CompanyNameLogo />
          {/* Glass box */}
          <div class="relative mt-16 flex w-fit justify-center gap-2 rounded-md border border-primary-200 bg-primary-100 bg-opacity-50 bg-clip-padding py-2 shadow-2xl shadow-primary-600 backdrop-blur-xl backdrop-filter sm:mt-auto sm:gap-6 sm:py-10">
            <div class="absolute inset-x-0 -top-24 flex justify-center sm:hidden">
              <Enara class="h-44 w-44 rounded-full border-primary-300 shadow-primary-600 drop-shadow-md " />
            </div>
            <div class="flex flex-col items-center justify-center gap-2 px-2 pt-20 align-middle sm:w-[60%] sm:items-start sm:gap-6 sm:px-4 sm:pt-0">
              <h1 class="font-display text-3xl text-primary-950 sm:text-6xl">
                Pure Indulgence Awaits
              </h1>
              <p class="text-center font-body text-sm leading-6 sm:text-base sm:leading-8">
                Embrace the ultimate in self-care with our exquisite collection
                of gift hampers. Each one is filled with natural, handcrafted
                soaps, bath scrubs, scented candles, bath&nbsp;bombs, and bath
                salts designed to invigorate your senses. Discover a world of
                luxury and relaxation. <br />
                <strong class="font-semibold">Launching soon!</strong>
              </p>
              <div class="flex w-full justify-center sm:justify-end">
                <Logo class="h-32 w-36 sm:h-auto sm:w-auto" />
              </div>
            </div>
            <div class="hidden w-1/3 sm:block">
              <Enara class="w-full rounded-md border-primary-300 shadow-primary-600 drop-shadow-md" />
            </div>
          </div>
          {/* End Glass box */}
        </div>
      </div>
      <footer class="sticky inset-x-2 bottom-2 flex justify-center self-center align-middle">
        <ul class="flex list-none flex-row gap-4 font-special text-xs text-primary-600">
          <li class="rounded-full bg-primary-200 px-4 py-1">
            Copyright @ 2024 PaxZenara Inc.
          </li>
          {/* <li>Privacy Policy</li>
          <li>Terms of Service</li> */}
        </ul>
      </footer>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Pure Indulgence Awaits | Luxurious Natural Gift Hampers Coming Soon',
  meta: [
    {
      name: 'description',
      content:
        'Discover our exclusive gift hampers with luxurious natural soaps, bath scrubs, and salts. Indulge in pure self-care bliss. Stay tuned for our launch!',
    },
    {
      name: 'keywords',
      content: 'coming soon',
    },
  ],
};
