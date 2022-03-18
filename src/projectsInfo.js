import pokethat1 from './media/images/pokethat1.png';
import pokethat2 from './media/images/pokethat2.png';
import pokethat3 from './media/images/pokethat3.png';
import reactBootstrap from './media/images/react-bootstrap.png'
import theQuiz1 from './media/images/theQuiz1.png';
import theQuiz2 from './media/images/theQuiz2.png';
import theQuiz3 from './media/images/theQuiz3.png';
import youscout1 from './media/images/youscout1.png';
import youscout2 from './media/images/youscout2.png';
import youscout3 from './media/images/youscout3.png';

export const projectsInfo = [
    {
    title: 'PokeThat',
    images:[ pokethat1, pokethat2, pokethat3],
    overview:['This was my favorite personal project until now. I decided to create this project as a way to practice more about fetching data from APIs and introduce myself to React-Bootstrap.',
              <br></br>,
            'As I was developing this project, I came with the idea to create a simple game of catching pokemons, in a way to challenge my javascript capacabilities.',
            <br/>,
            'This project was also very demanding from the backend point of view. I used MongoDB to register all data, from new users creation, to the user data itself.',
            <br/>,
            'This was really interesting for me to undestand how to handle all the promises and their asynchronous process.'] ,
    mainLessons:['In the beggining I did not realized how complicated this was going to be. For the way I wanted to make this project, PokéAPI required me to handle nested fetching.',
            <br/>,
            'That was first time i faced that. I realized that was a problem when I decided to individually fetch pokemons in their individual card. This brought me a problem, because all time the state changed, then all cards were being fetched again.',
            <br/>,
            'I had to make use of better useState and useEffect hooks to handle it better, so that cards were not all fetching, but ony the specific card was being updated.',
            <br/>,
            'Another problem I found, was managing the pictures fetching with the pokemon data fetching. Due to the way the API is designed, this both crucial elements come from diferent endpoints, both pointing to different pokemon ids, which cause me troubles to fit the right pic on the right Pokemon',
            <br/>,
            'This project was very good to make me understand the basics of working with React-Bootstrap. I was really interesting to try different properties of the different components, and see how it interacted with the other components.',
            <br/>,
            'Also it was very interesting to see how the app performed in different kind of devices. Now it is possible to use it both in laptop as in a mobile phone.'
        ],
    stackUsed: ['https://img.icons8.com/office/2x/react.png',
                reactBootstrap,
                'https://img.icons8.com/ios/344/css.png',
                'https://img.icons8.com/color/344/nodejs.png',
                'https://img.icons8.com/color/344/mongodb.png',
                'https://img.icons8.com/ios-glyphs/344/github.png',
                'https://img.icons8.com/ios/344/heroku.png'
                ]
    },

    {
        title: 'The Quiz',
        images:[theQuiz1, theQuiz2, theQuiz3],
        overview:['Since I started understanding a bit more about coding, I always wanted to create an interactive quiz.',
                <br/>,
                'I have tried it before, but basically it was just a following up from a video from Youtube. Now I wanted to do something by myself and test what my actual knowledge allowed me to do.',
                <br/>,
                'By this time i add just finished a course about react, so i wanted to use it and try it without the help of a tutor.',
                <br/>,
                'To publish the website, I used Node.js and express, and then Heroku to deploy the project.', 
                ],
        mainLessons:['Until this point I had no knowledge at all about backend. This forced me to search for lot of info, and I ended up following very good tutorials about how to set up a server using node.js and express, how to create and integrate a database with MongoDB and mongoose, and then how to publish the project on heroku.',
                    <br/>,
                    'That was quite a learn for me.',
                    <br/>,
                    'Building this quiz was also a good oportunity to implement react router, and learn more about it.',
                    <br/>,
                    'This project was pretty good to learn how to organise my own data, and how to get the access from that data (for example the questions, and answers).'  
                    ],
        stackUsed: ['https://img.icons8.com/office/2x/react.png',
                    'https://img.icons8.com/ios/344/css.png',
                    'https://img.icons8.com/color/344/nodejs.png',
                    'https://img.icons8.com/color/344/mongodb.png',
                    'https://img.icons8.com/ios-glyphs/344/github.png',
                    'https://img.icons8.com/ios/344/heroku.png'
                    ]
        },


    {
        title: 'Youscout',
        images:[youscout1, youscout2, youscout3],
        overview:['This was my final project on Front End Career Path course from Codecademy. In this project it was supposed to put in practice all the content that was addressed during this long course',
                  <br/>,
                  'Coming from the football area, it was quite logic that I would try to build some web app that could be applied in the Football world. So I came up with this Youscout app intended to allow football scouts to register reports as well as schedule activities.',
                ],
        mainLessons:['By the time i did it, this was my biggest project. It made me understand the importance of planning the project before to start writting lines of code. It was also the first time I did a big project without the help of a tutor.',
                    <br/>,
                    'This was a good way of practice the search for information in goodgle, and also, how to use Stack Overflow.',
                    <br/>,
                    'In this project I understood how a page that required users to loggin works, and how I can separate the content of the page between authorized pages and not authorized ones.',
                    <br/>,
                    'I made all this projects whithout the use of any styling framework or library, so this was a quite good training of CSS. Althought there is still a lot that can be improved, as for example, the responsivness to smaller devices. I made this project mostly thinking on computer devices.',
                    <br/>,
                    'Even though it was not a target for the project, but this was also a good way to practice the backend. I used again node.js and mongoDB. There is also a lot to improve still in here. By the time, i did not have knowledge enought about databases, so i could not individualize every acount and their data. Soon, i planned to fix it, since now i am already able to do that, as shown in the pokethat project. '

                ],
        stackUsed: ['https://img.icons8.com/office/2x/react.png',
        'https://img.icons8.com/ios/344/css.png',
        'https://img.icons8.com/color/344/nodejs.png',
        'https://img.icons8.com/color/344/mongodb.png',
        'https://img.icons8.com/ios-glyphs/344/github.png',
        'https://img.icons8.com/ios/344/heroku.png']
        },
    
]