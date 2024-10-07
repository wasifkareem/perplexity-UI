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

export const blog_data = [
  {
    img: "src/assets/quantum.png",
    title: "Quantum Computer Doom Challenge",
    desc: "According to PC Gamer, the quantum computer adaptation of the iconic game DOOM, known as Quandoom, faces significant technical challenges due to its requirement for 72,376 qubits and 80 million quantum gates, far exceeding the capabilities of today's most advanced quantum computers.",
    author: {
      name: "elymc",
      img: "src/assets/elymc.avif",
    },
    viewed: "23,422",
  },
  {
    img: "https://www.motortrend.com/files/6701d85fa0855d0008fea61c/mclaren-w1-3.jpg",
    title: "The McLaren Hybrid Hypercar",
    desc: "he McLaren W1, successor to the legendary P1, is a groundbreaking hybrid hypercar that pushes the boundaries of automotive engineering with its 1,258-horsepower powertrain, advanced aerodynamics, and Formula 1-inspired technology. As reported by Car and Driver, this plug-in hybrid marvel comb",
    author: {
      name: "elymc",
      img: "src/assets/elymc.avif",
    },
    viewed: "67,235",
  },
  {
    img: "src/assets/aiphoto.gif",
    title: " AI Sees Faces in Objects, Too",
    desc: "Recent research from MIT, awaiting peer review, reveals that artificial intelligence can now recognize faces in inanimate objects, a phenomenon known as pareidolia, opening new avenues for understanding both machine learning and human cognition. This capability, while initially challenging for AI,",
    author: {
      name: "elymc",
      img: "src/assets/elymc.avif",
    },
    viewed: "11,230",
  },
  {
    img: "src/assets/floyd.jpg",
    title: "Cult of Lloyd McKenzie",
    desc: "According to PC Gamer, the quantum computer adaptation of the iconic game DOOM, known as Quandoom, faces significant technical challenges due to its requirement for 72,376 qubits and 80 million quantum gates, far exceeding the capabilities of today's most advanced quantum computers.",
    author: {
      name: "elymc",
      img: "src/assets/elymc.avif",
    },
    viewed: "11,235",
  },
  {
    img: "https://imagenes.elpais.com/resizer/v2/EON4WU2NO5DN3EH6N4NLMVQT4E.jpg?auth=36088aa4f2687ddedfdbcd0f49078a361433155cb3ef53fb2e0e32fd7e10057d&width=1200",
    title: "Spy Planes Show Radioactive Thunderstorms",
    desc: "Based on reports from Nature, a retrofitted U-2 spy plane has revealed that most tropical thunderstorms are radioactive, producing various forms of gamma radiation far more frequently than previously t",
    author: {
      name: "elymc",
      img: "src/assets/elymc.avif",
    },
    viewed: "99,235",
  },
];

export const article_sections = [
  {
    id: "section-1",
    heading: "Quandoom Technical Challenges",
    img: "src/assets/atom.jpeg",
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
