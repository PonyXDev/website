export default async (req, res) => {
    const data = [
      {
        id: 1,
        image: "/assets/techs/phoenix1.jpeg",
        name: "Who am I?",
        description:
          "The information I wrote about myself is here soon!",
        link: "https://ponyxdev.xyz",
        language: "Blog",
        languageIcon: "./assets/techs/nextjs.svg",
      },
    ];
    res.status(200).json(data);
  };