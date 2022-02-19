export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "/assets/techs/website.png",
      name: "My Website",
      description:
        "My personal website, blog and much more!",
      link: "https://ponyxdev.xyz",
      language: "Next.js",
      languageIcon: "./assets/techs/nextjs.svg",
    },
    {
      id: 2,
      image: "/assets/techs/magnetlogodash.png",
      name: "Magnet Bot",
      description: "Bot and dash were made by the team experienced on Discord. (Support is not provided.) ",
      link: "https://top.gg/tr/bot/692787967806144582",
      language: "Node.js",
      languageIcon: "./assets/techs/nextjs.svg",
    },
    {
      id: 4,
      image: "/assets/techs/botslablogo.png",
      name: "BotsLab",
      description:
        "With Botslab discover the new Discord bot list. (Support is not provided.)",
      link: "https://botslab.net",
      language: "Vue.js",
      languageIcon: "./assets/techs/nextjs.svg",
    },
    {
      id: 5,
      image: "/assets/techs/rankbot.png",
      name: "Cağıl Rank Bot",
      description:
        "An advanced coin/rank specific to the Community. (Support is not provided.)",
      link: "https://xp.steambedavaoyunkazan.com",
      language: "Nuxt.js",
      languageIcon: "./assets/techs/php.svg",
    },
  ];
  res.status(200).json(data);
};