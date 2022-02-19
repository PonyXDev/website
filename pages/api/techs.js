export default async(req, res) => { 
    const techs = [
        {
            "name": "Javascript",
            "src": "/assets/techs/javascript.svg"
        },
        {
            "name": "HTML5",
            "src": "/assets/techs/html.svg"
        },
        {
            "name": "Nuxt.js",
            "src": "/assets/techs/nuxt.svg"
        },
        {
            "name": "Vue.js",
            "src": "/assets/techs/vue.svg"
        },
        {
            "name": "TailwindCSS",
            "src": "/assets/techs/tailwindcss.svg"
        },
        {
            "name": "Node.js",
            "src": "/assets/techs/nodejs.svg"
        },
        {
            "name": "Typescript",
            "src": "/assets/techs/typescript.svg"
        },
        {
            "name": "Sass",
            "src": "/assets/techs/sass.svg"
        },
        {
            "name": "PHP",
            "src": "/assets/techs/php.svg"
        },
        {
            "name": "Next.js",
            "src": "/assets/techs/nextjs.svg"
        },
        {
            "name": "React",
            "src": "/assets/techs/react.svg"
        },
        {
            "name": "Bulma",
            "src": "/assets/techs/bulmacss.svg"
        }
    ]
    res.status(200).json(techs)
}