export let colors = ["rgb(100, 80, 255)", "rgb(90,200,110)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Javier",
    lastName: "Fonseca",
    initials: "jf", // the example uses first and last, but feel free to use three or more if you like.
    position: "Desarrollador Full Stack",
    //selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: "💻",
            text: "Ingeniero Electrónico"
        },
        {
            emoji: '🗿',
            text: 'Vivo en Chámeza - Casanare'
        },
        {
            emoji: "📧",
            text: "javierrfl1985@gmail.com"
        },
        {
            emoji: '📱',
            text: '+57 3133568694'
        }
        
    ],
    socials: [
        {
            link: "https://www.facebook.com/javierrodrigo.fonsecaleal/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        //{
        //    link: "https://instagram.com",
        //    icon: 'fa fa-instagram',
        //    label: 'instagram'
        //},
        {
            link: "https://github.com/javierfonsi",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/javier-rodrigo-fonseca-leal-25a53521/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        //{
        //    link: "https://twitter.com",
        //    icon: "fa fa-twitter",
        //    label: 'twitter'
        //}
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Soy Javier Fonseca. Finalicé estudios de pregrado como Ingeniero Electrónico en la universidad Santo Tomás, sede Bogotá. Ejercí durante una decada como profesional de campo, sin embargo, mi pasión es la programación, por esto disfruto mi trabajo como desarrollador back End. Desde mi experiencia he brindado soluciones a las necesidades de los usuarios a través de la tecnología, lo cual les ha permitido mejorar sus condiciones de vida.",
    skills:
        {
            competentecon: ['javascript', 'nodejs', 'express', 'postgress', 'git', 'github', 'html5', 'css3'],
            exposedTo: ['nest', 'react', 'python']
        }
    ,
    hobbies: [
        {
            label: 'Leer',
            emoji: '📖'
        },
        //{
        //    label: 'Orar',
        //    emoji: '⛪'
        //},
        {
            label: 'Viajar',
            emoji: '✈'
        },
        {
            label: 'Ver peliculas',
            emoji: '🎥'
        },
        {
            label: 'Cocinar',
            emoji: '🌶'
        }//,
        //{
        //    label: 'Descargar cv',
        //    emoji: '📥',
        //}
        

    ],
    portfolio: [ 
        {
            title: "Project 1",
            live: "https://pokedex-javierfonseca.netlify.app", 
            source: "https://github.com/javierfonsi/pokedex", 
            //image: mock1
        },
        {
            title: "Project 2",
            live: "https://apprestaurantapijr.herokuapp.com/api/v1/doc/",
            source: "https://github.com/javierfonsi/restaurant_menu",
            //image: mock2
        },
        {
            title: "Project 3",
            live: "https://moviesappbyjrfl.herokuapp.com/api/v1/doc",
            source: "https://github.com/javierfonsi/moviesApp-nodejs",
            //image: mock3
        },
        {
            title: "Project 4",
            live: "https://ecommerce-nodejs3.herokuapp.com/api/v1/doc",
            source: "https://github.com/javierfonsi/ecomerce-nodejs",
            //image: mock4
        },
        //{
        //    title: "Project 5",
        //    live: "https://todoapp-nodejsbyjf.herokuapp.com/api/v1/doc",
        //    source: "https://github.com/javierfonsi/todo-nodejs/tree/main/api",
        //    image: mock5
        //}
    ]
}