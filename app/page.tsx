"use client";

import ProfileCard from "../components/ProfileCard";
import GooeyNav from "../components/GooeyNav";
import DotGrid from "../components/DotGrid";
import ScrollFloat from "../components/ScrollFloat";
import FallingText from "../components/FallingText";
import ElectricBorder from "../components/ElectricBorder";
import ProjectCard from "../components/ProjectCard";
import LogoLoop from "../components/LogoLoop";
import Game from "../components/Game";

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  // Single "Game" entry that scrolls to the play section
  { label: 'Game', href: '#play' }
];

const knownLogos = [
  { title: 'React', href: 'https://react.dev' },
  { title: 'Next.js', href: 'https://nextjs.org' },
  { title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { title: 'Solidity', href: 'https://docs.soliditylang.org' },
  { title: 'Foundry', href: 'https://getfoundry.sh' },
  { title: 'Discord', href: 'https://discord.com/' },
  { title: 'Stack', href: 'https://stackoverflow.com/questions' },
  { title: 'Neovim', href: 'https://neovim.io/' },
];

const learningLogos = [
  { title: 'Rust', href: 'https://www.rust-lang.org' },
  { title: 'Huff', href: 'https://docs.huff.sh/' },
  { title: 'C', href: 'https://move-lang.com' },
  { title: 'zkSNARKs', href: 'https://zokrates.github.io' },
];

export default function Home() {
  return (
  <div className="min-h-screen">
      {/* DotGrid background (covers viewport) */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <DotGrid
          style={{}}
          dotSize={5}
          gap={15}
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
          baseColor="#271E37"
          activeColor="#5227FF"
        >
          {/* Colors: baseColor rgb(39,30,55) (#271E37), activeColor rgb(82,39,255) (#5227FF) */}
        </DotGrid>
      </div>

      {/* Fixed top-right nav */}
      <div className="fixed top-6 right-6 z-50">
        <GooeyNav items={navItems} />
      </div>
      <main className="relative z-10 w-full mx-auto">
        {/* Hero section: fills the viewport and centers the ProfileCard initially */}
        <section className="min-h-screen w-full flex items-center justify-center">
          <div className="w-full max-w-3xl px-8 flex justify-center">
              <ProfileCard
              name="Gaurav Poudel"
              title="Blockchain Security Researcher"
              handle="0xh4ck3rm4n"
              status="Online"
              contactText="Github"
              avatarUrl="/portfolio-card-img.png"
              iconUrl="/icon-img.jpeg"
              behindGradient={'radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)'}
              innerGradient={'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)'}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => window.open('https://github.com/0xh4ck3rm4n', '_blank')}
            />
          </div>
        </section>

        {/* Content section — scrolling moves the hero up and reveals the About Me heading */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-6xl px-8">
            <div className="h-20 md:h-[20vh]" />

            <div id="about">
              <ScrollFloat
                containerClassName="mb-8 text-center"
                textClassName="text-white"
                stagger={0.03}
                ease={"back.inOut(2)"}
                scrollStart={"center bottom+=50%"}
                scrollEnd={"bottom bottom-=40%"}
                animationDuration={1}
                scrub={1.2}
              >
                About Me
              </ScrollFloat>
            </div>

            {/* Logo loops: Known technologies and Learning will be placed below the FallingText box */}

            {/* FallingText inside a larger transparent bordered box with the Nepal banner at the right */}
            <div className="w-full flex items-center justify-between gap-6 p-6 md:gap-10 md:p-10 border-2 border-[#271E37] rounded-2xl bg-transparent overflow-hidden flex-col md:flex-row min-h-[24rem] md:min-h-[30rem]">
              <div className="flex-1 h-full">
                <FallingText
                  className="w-full h-full"
                  text={"I'm Gaurav Poudel, a blockchain enthusiast from Kathmandu, Nepal, currently pursuing my studies at Softwarica College. I specialize in building decentralized applications (dApps) and conducting research on blockchain security and smart contract vulnerabilities. My focus is on creating secure, efficient, and transparent systems within the Web3 ecosystem."}
                  trigger="scroll"
                  collapse={false}
                  highlightWords={["Gaurav", "Poudel", "Kathmandu", "Nepal", "Softwarica", "College", "building", "decentralized", "applications", "(dApps)", "blockchain", "security", "smart", "contract", "vulnerabilities", "Web3", "ecosystem"] as any}
                  fontSize="1.6rem"
                  gravity={1}
                  wireframes={false}
                />
              </div>

              <div className="flex-shrink-0">
                <img src="/nepal-banner.png" alt="Nepal banner" className="w-80 md:w-96 lg:w-[28rem] h-auto rounded-2xl object-cover" />
              </div>
            </div>

            {/* Logo loops: Known technologies and Learning */}
            <div className="w-full my-8">
              <div className="w-full max-w-6xl mx-auto px-4">
                <h4 className="text-white text-xl mb-3">Languages & Technologies I know</h4>
                <LogoLoop
                  logos={knownLogos as any}
                  speed={100}
                  direction="left"
                  logoHeight={60}
                  gap={90}
                  pauseOnHover={true}
                  scaleOnHover={true}
                  fadeOut={true}
                  fadeOutColor="#000000"
                  ariaLabel="Technologies I know"
                />

                <h4 className="text-white text-xl mt-6 mb-3">Learning / Exploring</h4>
                <LogoLoop
                  logos={learningLogos as any}
                  speed={100}
                  direction="left"
                  logoHeight={60}
                  gap={90}
                  pauseOnHover={true}
                  scaleOnHover={true}
                  fadeOut={true}
                  fadeOutColor="#000000"
                  ariaLabel="Technologies I'm learning"
                />
              </div>
            </div>

            {/* spacer to match About Me <-> ProfileCard gap */}
            <div className="h-16 md:h-[20vh]" />

            {/* Projects heading (scroll-animated) */}
            <div id="projects" className="w-full">
              <ScrollFloat
                containerClassName="mt-12 mb-8 text-center"
                textClassName="text-white"
                stagger={0.03}
                ease={"back.inOut(2)"}
                scrollStart={"center bottom+=50%"}
                scrollEnd={"bottom bottom-=40%"}
                animationDuration={1}
                scrub={1.2}
              >
                Projects
              </ScrollFloat>
            </div>

            {/* Grid of 4 ElectricBorder-wrapped Project cards */}
            <div className="w-full flex justify-center">
              <div className="w-full max-w-6xl px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 mt-6 md:mt-8">
                  <ElectricBorder color="#7df9ff" className="p-3 h-80 md:h-96" speed={1} chaos={0.5} thickness={2} style={{}}>
                    <ProjectCard
                      title="Decentralized Voting"
                      description="A small-scaled decentralized voting application built on Ethereum blockchain that ensures transparent, secure, and tamper-proof elections."
                      href="https://github.com/0xh4ck3rm4n/decentralized-voting"
                    />
                  </ElectricBorder>

                  <ElectricBorder color="#7df9ff" className="p-3 h-80 md:h-96" speed={1} chaos={0.5} thickness={2} style={{}}>
                    <ProjectCard
                      title="DeFi Stablecoin"
                      description="A decentralized, over-collateralized stablecoin protocol pegged to USD. Users can deposit crypto collateral (WETH, WBTC) to mint GEC stablecoins."
                      href="https://github.com/0xh4ck3rm4n/eth-defi-stablecoin"
                    />
                  </ElectricBorder>

                  <ElectricBorder color="#7df9ff" className="p-3 h-80 md:h-96" speed={1} chaos={0.5} thickness={2} style={{}}>
                    <ProjectCard
                      title="Raffle"
                      description="A decentralized raffle lottery built on Ethereum, powered by Chainlink VRF for provably fair randomness. Participants enter by paying an ETH entrance fee, and a random winner is automatically selected at regular intervals."
                      href="https://github.com/0xh4ck3rm4n/eth-raffle"
                    />
                  </ElectricBorder>

                  <ElectricBorder color="#7df9ff" className="p-3 h-80 md:h-96" speed={1} chaos={0.5} thickness={2} style={{}}>
                    <ProjectCard
                      title="Cross Chain Rebase Token"
                      description="Cross-chain rebasing tokens via Chainlink CCIP — users deposit assets into a vault to mint interest-accruing tokens that can be bridged between networks while synchronizing user-specific rates."
                      href="https://github.com/0xh4ck3rm4n/eth-mood-NFT"
                    />
                  </ElectricBorder>
                </div>
              </div>
            </div>

            {/* increased spacer so Play heading renders fully below Projects */}
            <div className="h-24 md:h-[28vh]" />

            {/* Interactive game section (replaces Contact) */}
            <div id="play" className="w-full">
              <ScrollFloat
                containerClassName="mt-12 mb-8 text-center"
                textClassName="text-white"
                stagger={0.03}
                ease={"back.inOut(2)"}
                scrollStart={"center bottom+=50%"}
                scrollEnd={"bottom bottom-=40%"}
                animationDuration={1}
                scrub={1.2}
              >
                Play
              </ScrollFloat>

              <div className="w-full flex justify-center">
                <div className="w-full max-w-4xl px-4">
                  <Game />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
