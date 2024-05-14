import { color } from "framer-motion";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  linkedin,
  portfolio,
  dribble,
  behance,
  reactjs,
  redux,
  tailwind,
  git,
  wordpress,
  bootstrap,
  netlify,
  figma,
  avm,
  threejs,
  analytics,
  dashboard,
  Provid,
  hoobank,
  quote,
  github,
  portfoliosample,
  blockchain,
  csharp,
  django,
  python,
  rust,
  solidity,
  go,
  forta,
  solana_token,
  xion_finance,
  dicether,
  quest,
  centrifuge,
  twitterbot,
  monox,
  medley,
  jdlandscaping,
  gmail,
  discord,
  skype,
  judge,
  evo,
  clarityscan,
  sigma,
  poker,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full stack developer",
    icon: web,
  },
  {
    title: "BlockChain developer",
    icon: blockchain,
  },
];

const technologies = [
  {
    name: "blockchain",
    icon: blockchain,
  },
  {
    name: "solidity",
    icon: solidity,
  },
  {
    name: "rust",
    icon: rust,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Go",
    icon: go,
  },
  {
    name: "Csharp",
    icon: csharp,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Smart contract developer",
    company_name: "dApp Technology Inc",
    icon: solidity,
    iconBg: "#E6DEDD",
    date: "2022 – 2024",
    points: [
      "Built several smart contracts of different features such as extension of ERC3525 semi-fungible token standard, random number generation using Solidity and Foundry framework.",
      "Implemented important logic in P2E games to extend ERC4907 (NFT rental) standard and enabled to split profits between owner, borrower, and third parties, and developed smart contract using Beacon Proxy that deploys the profit share given an ERC721 regular NFT.",
      "Developed subgraph that watches events of the three smart contracts, i.e. factory, manager, NFT valut to dynamically watch data sources.",
    ],
  },

  {
    title: "Full Stack and Web3 Engineer",
    company_name: "InfoDrive Solutions",
    icon: threejs,
    iconBg: "#E6DEDD",
    date: "2019 – 2022",
    points: [
      "Collaborated with full stack and UE developers to integrate smart contracts with the decentralized applications.",
      "Developed a custom cryptocurrency token with unique staking/minting functionality, currently powering Belacam.com, a cryptocurrency-centric Instagram competitor.",
      "Worked as a full stack blockchain developer focused on building innovative web3 features and supporting infrastructure to maximize yield generation across multiple blockchains and DeFi protocols.",
    ],
  },

  {
    title: "Full Stack developer",
    company_name: "PLEXURE",
    icon: html,
    iconBg: "#E6DEDD",
    date: "2016 – 2019",
    points: [
      "Improved old-fashioned React.js & Angular.js components with modularity and DRY principles in mind.",
      "Built and analyzed an ad exchange platform with React.js and Vue.js and three.js frameworks.",
      "Mentored 8 new junior developers on team in expanding Node.js, Python/Php/Java/C#, React.js skillset.",
      "Performed full-stack development for the high-profile external web app, resulting in 5 bug-free releases deployed.",
    ],
  },
];

const testimonials = [
  {
    key: 1,
    testimonial:
      "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
    name: "Jun kai",
    image: linkedin,
    link: "https://www.linkedin.com/in/om-patel-401068143/",
  },
  {
    key: 2,
    testimonial:
      "Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
    name: "Jun kai",
    image: github,
    link: "https://github.com/kai-610",
  },
  {
    key: 3,
    testimonial:
      "Gmail is a widely used email service provided by Google. please check my gmail account.",
    name: "Jun kai",
    image: gmail,
    link: "mailto:brightstar681206@gmail.com",
  },
  {
    key: 4,
    testimonial:
      "Discord is powerful community for developers. Reach out to me on Discord.",
    name: "lemeote",
    image: discord,
    link: "https://discord.gg/B9yz4n5bJ4",
  },
  {
    key: 5,
    testimonial: "Skype is software that enables the world's conversations.",
    name: "Dream",
    image: skype,
    link: "https://join.skype.com/invite/uCPWNFt8hrkc",
  },
];

const projects = [
  {
    name: "SigmaSwap Bridge",
    description:
      "☁️ Sigmaswap is like a magical bridge 🌉 that connects Luxo Chain with other blockchains. It enables users to seamlessly transfer their assets (tokens) between Luxo Chain and other compatible chains.🚀🌌",
    tags: [
      { name: "Next", color: "orange-text-gradient" },
      { name: "Solidity", color: "blue-text-gradient" },
      { name: "web3", color: "green-text-gradient" },
    ],
    image: sigma,
    vercel_link: "https://m8-b-bridge-app.vercel.app/en",
    source_code_link: "https://github.com/kai-610/M8B_BridgeApp.git",
  },
  {
    name: "ClarityScan",
    description:
      "AI-driven smart contract audit tool automating thorough examination and validation of multiple smart contract types, detecting vulnerabilities and suggesting optimizations.",
    tags: [
      { name: "React", color: "orange-text-gradient" },
      { name: "postgreSQL", color: "blue-text-gradient" },
      { name: "Clarity", color: "green-text-gradient" },
      { name: "openAI", color: "orange-text-gradient" },
    ],
    image: clarityscan,
    netlify_link: "https://main.d8cg59j3fa9ta.amplifyapp.com/",
    source_code_link: "https://github.com/kai-610/clarityscan-frontend.git",
  },
  {
    name: "Evox Exchange",
    description:
      "Developing EVOX Exchange's smart contracts empowering decentralized margin trading and DAO governance exhibits my expertise in inventive DeFi solution design using profound knowledge of blockchain tech and token mechanics.",
    tags: [{ name: "Solidity", color: "orange-text-gradient" }],
    image: evo,
    online_link: "https://www.evo.exchange/",
    source_code_link:
      "https://github.com/kai-610/evox-margintrading-smart-contracts.git",
  },
  {
    name: "Poker Game",
    description:
      "Our Poker Game is a full-stack web application built using modern technologies like React, Node.js, and MongoDB. Players can join rooms, play Texas Hold'em style poker, and compete against opponents in real-time.",
    tags: [
      { name: "React", color: "green-text-gradient" },
      { name: "Node", color: "blue-text-gradient" },
    ],
    image: poker,
    vercel_link: "https://react-poker-two.vercel.app/",
    source_code_link: "https://github.com/kai-610/React_Poker.git",
  },
  {
    name: "JudgePrivateSale",
    description:
      "Judge privatesale platform is a decentralized crowdfunding solution built on the Solana blockchain, providing secure and swift token sales through customizable whitelisting and allocation management, streamlined purchase flows, and real-time analytics.",
    tags: [
      { name: "React", color: "orange-text-gradient" },
      { name: "Rust", color: "blue-text-gradient" },
      { name: "Solana", color: "green-text-gradient" },
      { name: "web3", color: "orange-text-gradient" },
    ],
    image: judge,
    vercel_link: "https://jarvis-solana-presale-frontend.vercel.app/",
    source_code_link:
      "https://github.com/kai-610/Jarvis-Solana-Presale-Frontend-.git",
  },
  {
    name: "Forta Threat Intelligence",
    description:
      "Forta network is a defi project which aims for providing several interesting data feeds like detecting scam, crypto phishing, spamming etc powering by AI.",
    tags: [
      { name: "React", color: "orange-text-gradient" },
      { name: "Solidity", color: "blue-text-gradient" },
    ],
    image: forta,
    online_link: "https://app.forta.network/?search=",
  },
  {
    name: "Solana Token Sale Contract",
    description:
      "Smart contract designed for facilitating the sale of SPL tokens with additional features, including a presale mechanism and allocation tickets. The contract is built using the Anchor framework",
    tags: [
      { name: "Solana", color: "orange-text-gradient" },
      { name: "Solidity", color: "blue-text-gradient" },
    ],
    image: solana_token,
    source_code_link: "https://github.com/kai-610/spl-vending-machine",
    online_link:
      "https://support.gemini.com/hc/en-us/articles/4428485024155-What-is-an-SPL-token",
  },
  {
    name: "Xion-finance",
    description:
      "Xion finance is a Decentralized Exchange which is similar to uniswap and pancakeswap but also supports the despoit and withdraw from the bank",
    tags: [
      { name: "Solidity", color: "orange-text-gradient" },
      { name: "Web3", color: "blue-text-gradient" },
    ],
    image: xion_finance,
    online_link: "https://www.xion.finance/",
  },
  {
    name: "Dicether",
    description: "Enjoy this on-chain crypto casino game with EVM networks",
    tags: [
      { name: "React", color: "orange-text-gradient" },
      { name: "Node", color: "blue-text-gradient" },
    ],
    image: dicether,
    online_link: "https://dicether.com/",
  },
  {
    name: "Quest",
    description:
      "Developer friendly game platform which you can test and enjoy your game products with EVM test networks like goerli and sepolia etc",
    tags: [
      { name: "Solidity", color: "orange-text-gradient" },
      { name: "Web3", color: "blue-text-gradient" },
      { name: "React", color: "orange-text-gradient" },
    ],
    image: quest,
    online_link: "https://testnet.gg.quest/",
  },
  {
    name: "Centrifuge-chain",
    description:
      "Centrifuge Chain: the layer-1 blockchain for real-world assets, built on Substrate",
    tags: [],
    image: centrifuge,
    online_link: "https://www.kraken.com/learn/what-is-centrifuge-cfg",
    source_code_link: "https://github.com/kai-610/centrifuge-chain",
  },
  {
    name: "BlogTO Bot",
    description:
      "BlogTO Bot is a Twitter bot that reads blogTO's clickbaity tweets and replies with a short summary of the article",
    tags: [],
    image: twitterbot,
    source_code_link: "https://github.com/kai-610/BlogTOBot",
    online_link: "https://en.wikipedia.org/wiki/Twitter_bot",
  },
  {
    name: "MonoX Protocol",
    description:
      "MonoX Finance is a decentralized Exchange which supports the features like swap, farming and also bonding",
    tags: [],
    image: monox,
    online_link: "https://monox.finance/home",
  },
  {
    name: "Medley",
    description:
      "Medley doesn't need any description. Just please use it and enjoy this decentralized social platform and its exclusive functionalities",
    tags: [],
    image: medley,
    online_link: "https://www.medley.gg/i/about",
  },
  {
    name: "J & D Landscaping",
    description:
      "J & D Landscaping is a small business with an efficient installation process and we pass the savings onto our customers",
    tags: [],
    image: jdlandscaping,
    online_link: "https://jdlandscaping.net/",
  },
];

export { services, technologies, experiences, testimonials, projects };
