import { component$ } from '@builder.io/qwik';
import CompanyNameLogo from '@assets/images/comapny-name.svg?jsx';
import Logo from '@assets/images/PaxZenara.svg?jsx';
import Enara from '@assets/images/zEnara.webp?jsx';

export default component$(() => {
  return (
    <div class="bg-primary-100 bg-[url('../images/coming-soon-bg-mobile.webp')] bg-cover bg-center sm:bg-[url('../images/coming-soon-bg.webp')]">
      <div class="relative flex h-screen flex-col justify-around  p-1 align-middle  sm:p-2">
        <div class="mx-auto flex w-[70%] flex-col items-center justify-center gap-10 align-middle">
          <CompanyNameLogo />
          <div class="flex w-fit justify-center gap-6 rounded-md border border-primary-200 bg-primary-100 bg-opacity-50 bg-clip-padding py-10 shadow-2xl shadow-primary-600 backdrop-blur-xl backdrop-filter">
            <div class="flex w-[60%] flex-col items-start justify-center gap-6 px-4">
              <h1 class="font-display text-6xl text-primary-950">
                Pure Indulgence Awaits
              </h1>
              <p class="font-body leading-8">
                Embrace the ultimate in self-care with our exquisite collection
                of gift hampers. Each one is filled with natural, handcrafted
                soaps, bath scrubs, scented candles, bath&nbsp;bombs, and bath
                salts designed to invigorate your senses. Discover a world of
                luxury and relaxation. <br />
                <strong>Launching soon!</strong>
              </p>
              <div class="flex w-full justify-end">
                <Logo />
              </div>
            </div>
            <div class="w-1/3 ">
              <Enara class="w-full rounded-md border-primary-300 shadow-primary-600 drop-shadow-md" />
            </div>
          </div>
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
