interface Author {
  name: string;
  img: string;
}

interface Section {
  id: string;
  heading: string;
  text: string;
  img?: string;
}

interface RefCard {
  text: string;
  img: string;
  name: string;
}

interface BlogData {
  id: string;
  img: string;
  title: string;
  desc: string;
  author: Author;
  viewed: string;
  sections?: Section[];
  refCards?: RefCard[];
  followup?: string;
}
export const libData = [
  {
    title: "How to fix a broken TV within 24 hours",
  },
  {
    title: "Best stocks to Invest during cristmas and new year",
  },
  {
    title: "Write an email asking for leave ",
  },
  {
    title: "How to write a poem on quantum physics",
  },
  {
    title: "Create a recipe for mango icecream without sugar",
  },
];

export const blog_data: BlogData[] = [
  {
    id: "quantum-computer-doom-challenge",
    img: "/assets/quantum.png",
    title: "Quantum Computer Doom Challenge",
    desc: "According to PC Gamer, the quantum computer adaptation of the iconic game DOOM, known as Quandoom, faces significant technical challenges due to its requirement for 72,376 qubits and 80 million quantum gates, far exceeding the capabilities of today's most advanced quantum computers.",
    refCards: [
      {
        text: "Quandoom: Quantum Computer Challenges in Gaming",
        img: "https://www.google.com/s2/favicons?sz=128&domain=pcgamer.com",
        name: "PC Gamer",
      },
      {
        text: "Quantum Gaming: Doom on 72,376 Qubits",
        img: "https://www.google.com/s2/favicons?sz=128&domain=quantummagazine.org",
        name: "Quanta Magazine",
      },
      {
        text: "Quandoom: A Look Into Quantum-Powered DOOM",
        img: "https://www.google.com/s2/favicons?sz=128&domain=techradar.com",
        name: "TechRadar",
      },
    ],

    author: {
      name: "elymc",
      img: "/assets/elymc.avif",
    },
    viewed: "23,422",
    followup: "4,422",
    sections: [
      {
        id: "section-1",
        heading: "Quandoom Technical Challenges",
        img: "/assets/atom.jpeg",
        text: `
          <p>Quandoom, the quantum computer port of DOOM, presents
          significant technical challenges that push the boundaries of
          current quantum computing capabilities. The project requires a
          staggering 72,376 qubits and 80 million quantum gates to run, far
          exceeding the capabilities of even the most advanced quantum computers
          available today<span class="article-ref">1</span><span class="article-ref">2</span>.
          For comparison, the current record holder for the most powerful
          quantum computer, developed by Atom Computing, boasts only 1,225
          qubits3. This massive disparity highlights the ambitious nature of
          Quandoom and underscores the substantial advancements needed in
          quantum computing hardware before such complex applications can be
          natively executed.</p>
        `,
      },
      {
        id: "section-2",
        heading: "Simulation on Classical Computers",
        text: `
        <p>Despite the lack of suitable quantum hardware, enthusiasts can experience Quandoom through a lightweight QASM simulator designed to run on classical computers. This simulator, consisting of just 150 lines of C++ code, allows the game to achieve 10-20 frames per second on a standard laptop<span class="article-ref">1</span><span class="article-ref">2</span>. To play Quandoom, users can download the files from GitHub and drag the QASM file onto the simulator executable. However, the simulation requires a substantial 5-6 GB of RAM to load, reflecting the complexity of the quantum circuit being emulated<span class="article-ref">3</span><span class="article-ref">2</span>. This classical simulation approach provides a glimpse into the potential of quantum gaming while highlighting the significant computational demands of translating quantum algorithms to traditional hardware.</p>
        `,
      },
      {
        id: "section-3",
        heading: "Unique Gameplay Features",
        text: `
        Quandoom offers a distinctive gaming experience with its wireframe graphics, reminiscent of early vector graphics shooters from the 1980s<span class="article-ref">1</span>. This "X-ray mode" visualization provides a unique aesthetic while simplifying the rendering process for quantum computation. The game features several departures from the original DOOM, including the absence of color, music, and sound effects<span class="article-ref">2</span>. Enemies are confined to single rooms, and the imp's signature fireball attack has been transformed into a hitscan weapon<span class="article-ref">2</span>. These modifications were necessary to adapt the game for quantum computing constraints and to maintain reversibility in quantum operations<span class="article-ref">3</span>.
        `,
      },
      {
        id: "section-4",
        heading: "Development Insights and Future",
        text: `
        Luke Mortimer, the creator of Quandoom, spent approximately a year developing this ambitious project before moving on<span class="article-ref">1</span>. The development process involved writing about 8,000 lines of C++ code to create a small 3D engine and implement game logic using quantum registers<span class="article-ref">2</span>. Mortimer's work includes innovative features such as an ancilla system, a garbage system, and a quantum subroutine system<span class="article-ref">2</span>. While only the first level is currently playable, the project's GitHub repository hints at the possibility of expanding the game and making the source code available if there's sufficient interest from the community<span class="article-ref">2</span><span class="article-ref">3</span>. This groundbreaking effort not only showcases the potential for gaming on quantum architectures but also serves as a unique benchmark for the progress of quantum computing technology.
        `,
      },
    ],
  },
  {
    id: "the-mclaren-hybrid-hypercar",
    img: "https://www.motortrend.com/files/6701d85fa0855d0008fea61c/mclaren-w1-3.jpg",
    title: "The McLaren Hybrid Hypercar",
    desc: "The McLaren W1, successor to the legendary P1, is a groundbreaking hybrid hypercar that pushes the boundaries of automotive engineering with its 1,258-horsepower powertrain, advanced aerodynamics, and Formula 1-inspired technology. As reported by Car and Driver, this plug-in hybrid marvel comb",
    refCards: [
      {
        text: "2026 McLaren W1: The P1's Successor Is a 1258-HP ",
        img: "https://www.google.com/s2/favicons?sz=128&domain=caranddriver.com",
        name: "caranddriver",
      },
      {
        text: "W1: McLaren's new hybrid hypercar ",
        img: "https://www.google.com/s2/favicons?sz=128&domain=carmagazine.co.uk",
        name: "carmagazine",
      },
      {
        text: "the future of racing giants",
        img: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://gigazine.net&size=128",
        name: "carandstuff",
      },
    ],
    author: {
      name: "elymc",
      img: "/assets/elymc.avif",
    },
    viewed: "67,235",
    followup: "2432",
    sections: [
      {
        id: "section-1",
        heading: "Engineering Marvel of the McLaren W1",
        text: `
          <p>The McLaren W1 is a hybrid hypercar that pushes the boundaries of
          automotive engineering. With a 1,258-horsepower powertrain and advanced
          aerodynamics, it redefines performance standards in the world of
          hybrid vehicles. The W1's unique combination of electric motors and a
          twin-turbocharged V8 engine allows it to achieve blistering speeds
          while maintaining efficiency, making it a game-changer in the
          hypercar market<span class="article-ref">1</span><span class="article-ref">2</span>.
          As reported by Car and Driver, the McLaren W1 represents the future of
          performance, blending cutting-edge Formula 1 technology with road-legal
          practicality.</p>
        `,
      },
      {
        id: "section-2",
        heading: "Performance Beyond Limits",
        text: `
          <p>The McLaren W1 can accelerate from 0 to 60 mph in just 2.5 seconds,
          thanks to its hybrid powertrain. With a top speed of 217 mph, the W1
          stands as one of the fastest production hybrid hypercars in the world.
          The car's active aerodynamics, paired with its lightweight carbon fiber
          chassis, ensure optimal handling at high speeds<span class="article-ref">1</span><span class="article-ref">2</span>. Drivers can
          also switch between different driving modes, including an electric-only
          mode for quieter, more environmentally-friendly urban driving<span class="article-ref">3</span><span class="article-ref">2</span>. The
          seamless integration of advanced engineering and sustainability sets
          the W1 apart from other hypercars in its class.</p>
        `,
      },
      {
        id: "section-3",
        heading: "F1-Inspired Technology",
        text: `
          <p>The McLaren W1 borrows heavily from the brand’s Formula 1 experience.
          The use of hybrid technology is not only limited to performance but
          also extends to energy recovery. Much like in F1 cars, the W1's kinetic
          energy recovery system (KERS) captures energy during braking and stores
          it in the battery, boosting acceleration when needed<span class="article-ref">1</span>.
          The hypercar also features an advanced suspension system that adjusts
          to road conditions in real-time, providing the ultimate driving
          experience<span class="article-ref">2</span>. The marriage of cutting-edge F1 technology
          and futuristic design elements makes the W1 an engineering masterpiece.</p>
        `,
      },
      {
        id: "section-4",
        heading: "Future Prospects and Legacy",
        text: `
          <p>The McLaren W1 isn't just about speed; it's about setting new standards
          for the next generation of hypercars. With McLaren's ongoing commitment
          to sustainability and performance, the W1 represents the future of the
          industry<span class="article-ref">1</span>. McLaren's engineers continue to explore ways to
          push hybrid technology further, aiming to improve performance while
          reducing emissions<span class="article-ref">2</span>. The W1's legacy will not only be its
          impressive speed and power but also its role in pioneering a new era of
          hybrid performance vehicles<span class="article-ref">3</span>. McLaren has hinted at future
          models building upon the W1’s technology, ensuring the brand's dominance
          in the hypercar world for years to come.</p>
        `,
      },
    ],
  },
  {
    id: "ai-sees-faces-in-objects-too",
    img: "/assets/aiphoto.gif", // Replace with the appropriate image URL
    title: "AI Sees Faces in Objects, Too",
    desc: "Artificial intelligence systems, much like humans, are prone to pareidolia—the tendency to see faces in inanimate objects. Recent research highlights how neural networks are learning to interpret abstract patterns as faces, leading to both advancements and challenges in AI's visual processing. As reported by TechCrunch, these findings reveal intriguing similarities between human cognition and AI's pattern recognition capabilities.",
    refCards: [
      {
        text: "AI Faces: How Neural Networks Learn to See",
        img: "https://www.google.com/s2/favicons?sz=128&domain=techcrunch.com",
        name: "TechCrunch",
      },
      {
        text: "Pareidolia in AI: Neural Networks Seeing Faces",
        img: "https://www.google.com/s2/favicons?sz=128&domain=wired.com",
        name: "Wired",
      },
      {
        text: "When Machines See Faces in Random Objects",
        img: "https://www.google.com/s2/favicons?sz=128&domain=theverge.com",
        name: "The Verge",
      },
    ],
    author: {
      name: "johndoe",
      img: "/assets/elymc.avif",
    },
    viewed: "89,432",
    followup: "3121",
    sections: [
      {
        id: "section-1",
        heading: "The Phenomenon of Pareidolia",
        text: `
          <p>Pareidolia, the tendency to see faces in random objects, has been a
          well-known quirk of human cognition for centuries. But now, artificial
          intelligence is exhibiting the same behavior. Researchers have found
          that neural networks, trained on millions of images, often identify
          facial patterns in abstract shapes and objects<span class="article-ref">1</span>. This phenomenon
          is both a breakthrough and a challenge, as it mirrors human visual
          perception while raising questions about AI's ability to generalize
          beyond its training data.</p>
        `,
      },
      {
        id: "section-2",
        heading: "Advancements in AI's Visual Recognition",
        text: `
          <p>AI's ability to recognize faces in non-human objects is an unintended
          consequence of its deep learning algorithms. While these systems excel
          at identifying objects in structured environments, they are increasingly
          showing pareidolia-like tendencies<span class="article-ref">1</span>. This has led to breakthroughs
          in visual recognition tasks, but it also highlights the limitations of
          AI in interpreting abstract or ambiguous visual data<span class="article-ref">2</span>. The implications
          for fields such as surveillance, art, and digital media are significant,
          as AI becomes more integrated into visual analysis tasks.</p>
        `,
      },
      {
        id: "section-3",
        heading: "The Challenges of Misinterpretation",
        text: `
          <p>While pareidolia in humans is mostly harmless, in AI systems, it can
          lead to misinterpretations of visual data. For instance, in security
          systems that rely on AI for facial recognition, the tendency to see faces
          in non-face objects could result in false positives<span class="article-ref">2</span>. Researchers are
          working to fine-tune these systems to distinguish between real and
          imagined faces, but the challenge remains<span class="article-ref">3</span>. This issue underscores the
          need for more robust AI training datasets and algorithms to prevent
          such errors from affecting real-world applications.</p>
        `,
      },
      {
        id: "section-4",
        heading: "What This Means for AI and Society",
        text: `
          <p>The findings that AI shares human-like tendencies in visual recognition
          are a double-edged sword. On the one hand, it signifies the growing
          sophistication of AI systems, but on the other, it reveals their
          limitations<span class="article-ref">1</span>. As AI becomes more prevalent in our daily lives,
          understanding these quirks will be essential for developing reliable and
          trustworthy systems<span class="article-ref">2</span>. Future advancements in AI will need to
          address these challenges, ensuring that machines can differentiate
          between patterns and actual objects<span class="article-ref">3</span>.</p>
        `,
      },
    ],
  },

  {
    id: "taiwan-faces-energy-crunch",
    img: "https://cdnph.upi.com/svc/sv/upi_com/9031502816439/2017/1/1a5554f710ddcc07e301f79ebf4a860e/Taiwans-economic-minister-resigns-amid-nationwide-blackout.jpg",
    title: "Taiwan Faces an Energy Crunch",
    desc: "As Taiwan's energy demands surge, the island nation is facing a significant power crisis. With the ongoing phasing out of nuclear power and an over-reliance on imported fossil fuels, Taiwan must seek renewable energy solutions to secure its future. Reports from the Financial Times highlight how Taiwan's energy strategy will shape the region’s economic and environmental landscape.",
    refCards: [
      {
        text: "Taiwan's Energy Conundrum: Nuclear Phaseout and Its Consequences",
        img: "https://www.google.com/s2/favicons?sz=128&domain=ft.com",
        name: "Financial Times",
      },
      {
        text: "Renewable Energy in Taiwan: Can It Meet Growing Demands?",
        img: "https://www.google.com/s2/favicons?sz=128&domain=reuters.com",
        name: "Reuters",
      },
      {
        text: "Energy Crisis Looms as Taiwan Faces Fossil Fuel Dependency",
        img: "https://www.google.com/s2/favicons?sz=128&domain=cnn.com",
        name: "CNN",
      },
    ],
    author: {
      name: "elymc",
      img: "/assets/elymc.avif",
    },
    viewed: "53,678",
    followup: "1567",
    sections: [
      {
        id: "section-1",
        heading: "The Nuclear Phaseout and Its Impacts",
        text: `
          <p>Taiwan has embarked on a gradual phaseout of its nuclear power plants, 
          a decision driven by public safety concerns and a global shift towards renewable energy<span class="article-ref">1</span>. 
          However, this move has placed significant pressure on the island’s energy grid, leading to concerns about power shortages. 
          The closure of Taiwan's last nuclear plant, scheduled for 2025, will leave a void that renewable energy sources, such as solar and wind, 
          are not yet ready to fill<span class="article-ref">2</span>. This has sparked debates over whether the phaseout is premature given the country's growing power needs.</p>
        `,
      },
      {
        id: "section-2",
        heading: "Fossil Fuels: A Double-Edged Sword",
        text: `
          <p>With nuclear power being phased out, Taiwan is increasingly reliant on fossil fuels, particularly coal and natural gas<span class="article-ref">1</span>. 
          Currently, over 80% of Taiwan's energy comes from imported fuels, a dependency that raises both economic and environmental concerns<span class="article-ref">3</span>. 
          Taiwan has committed to reducing its carbon footprint, but the transition to cleaner energy sources is lagging behind the growing energy demands of its high-tech industries<span class="article-ref">2</span>.</p>
        `,
      },
      {
        id: "section-3",
        heading: "Renewable Energy: Slow Progress",
        text: `
          <p>Efforts to increase Taiwan’s reliance on renewable energy have been met with numerous challenges. 
          While the government has ambitious targets to expand wind and solar power, progress has been slow<span class="article-ref">1</span>. 
          Land shortages, regulatory hurdles, and public opposition to wind farms in coastal areas have hampered the growth of Taiwan's renewable sector<span class="article-ref">3</span>. 
          The island's mountainous terrain further complicates efforts to install large-scale solar farms<span class="article-ref">2</span>.</p>
        `,
      },
      {
        id: "section-4",
        heading: "The Road Ahead",
        text: `
          <p>As Taiwan grapples with its energy crunch, the island's leadership is at a crossroads. 
          Balancing the demands of its industrial sectors with environmental goals will require significant investments in new technologies<span class="article-ref">1</span>. 
          Taiwan’s ability to navigate its energy challenges will not only determine its economic future but also influence the region's overall approach to clean energy adoption<span class="article-ref">2</span>.</p>
        `,
      },
    ],
  },
  {
    id: "spy-planes-radioactive-thunderstorms",
    img: "https://imagenes.elpais.com/resizer/v2/EON4WU2NO5DN3EH6N4NLMVQT4E.jpg?auth=36088aa4f2687ddedfdbcd0f49078a361433155cb3ef53fb2e0e32fd7e10057d&width=1200",
    title: "Spy Planes Show Radioactive Thunderstorms",
    desc: "Spy planes equipped with advanced sensors have recently detected radioactive particles being generated during thunderstorms. This groundbreaking discovery provides new insights into the mysterious interactions between the atmosphere, lightning, and radioactive decay. As reported by National Geographic, these findings could alter our understanding of how natural phenomena impact global radiation levels.",
    refCards: [
      {
        text: "Spy Planes Detect Radioactive ThunderstormsSpy Planes ",
        img: "https://www.google.com/s2/favicons?sz=128&domain=nationalgeographic.com",
        name: "NG",
      },
      {
        text: "The Science Behind Radioactive Thunderstorms",
        img: "https://www.google.com/s2/favicons?sz=128&domain=scientificamerican.com",
        name: "Scientific Amer...",
      },
      {
        text: "Atmospheric Radiation: How Thunderstorms Are Involved",
        img: "https://www.google.com/s2/favicons?sz=128&domain=newscientist.com",
        name: "New Scientist",
      },
    ],
    author: {
      name: "elymc",
      img: "/assets/elymc.avif",
    },
    viewed: "45,789",
    followup: "1334",
    sections: [
      {
        id: "section-1",
        heading: "Discovery of Radioactive Thunderstorms",
        text: `
          <p>Recent missions by spy planes equipped with radiation-detecting sensors have identified a new atmospheric phenomenon: 
          thunderstorms that generate radioactive particles. These particles, previously thought to only originate from nuclear reactions or cosmic radiation, 
          are now found in areas impacted by powerful lightning strikes<span class="article-ref">1</span>. This discovery sheds light on how natural forces interact 
          with radioactive decay processes in the Earth's atmosphere<span class="article-ref">2</span>.</p>
        `,
      },
      {
        id: "section-2",
        heading: "The Role of Lightning in Radioactivity",
        text: `
          <p>Lightning has long been known to produce high-energy phenomena such as gamma-ray bursts, 
          but the detection of radioactive elements is a new revelation<span class="article-ref">1</span>. 
          Scientists believe that the intense energy produced by lightning bolts may trigger nuclear reactions 
          in the atmosphere, releasing small amounts of radioactive isotopes into the air<span class="article-ref">2</span>. 
          This could provide new information on how thunderstorms influence background radiation levels around the globe.</p>
        `,
      },
      {
        id: "section-3",
        heading: "Implications for Global Radiation Levels",
        text: `
          <p>The findings from these spy planes have broad implications for understanding global radiation levels<span class="article-ref">1</span>. 
          While the amounts of radiation detected are not harmful, they provide important clues about natural radiation sources that were previously overlooked<span class="article-ref">2</span>. 
          The data collected could help refine current models used to predict atmospheric radiation, which are critical for fields like aviation and space exploration<span class="article-ref">3</span>.</p>
        `,
      },
      {
        id: "section-4",
        heading: "Future Research and Exploration",
        text: `
          <p>This discovery opens the door for further research into the relationship between thunderstorms and radioactive particles<span class="article-ref">1</span>. 
          Scientists plan to conduct additional flights and simulations to better understand the processes that lead to the formation of these particles<span class="article-ref">2</span>. 
          The next phase of research could help determine whether similar phenomena occur in other weather systems, such as hurricanes or typhoons<span class="article-ref">3</span>.</p>
        `,
      },
    ],
  },
];

export const article_related = [
  {
    text: "What advancements are needed for quantum computers to run Quandoom smoothly",
  },
  {
    text: "How does Quandoom's performance on a simulator compare to running it on actual quantum hardware",
  },
  {
    text: "What are the potential benefits of using quantum computing for gaming",
  },
  {
    text: "How does Quandoom's development impact the field of quantum computing research",
  },
  {
    text: "What other projects is Luke Mortimer working on",
  },
];
