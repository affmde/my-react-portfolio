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
import theGamer1 from './media/images/theGamer1.png';
import theGamer2 from './media/images/theGamer2.png';
import theGamer3 from './media/images/theGamer3.png';
import phaser3 from './media/images/phaser3.png';
import theAdventurer1 from './media/images/theAdventurer1.png';
import theAdventurer2 from './media/images/theAdventurer2.png';
import theAdventurer3 from './media/images/theAdventurer3.png';
import theRacer1 from './media/images/theRacer1.png';
import theRacer2 from './media/images/theRacer2.png';
import theRacer3 from './media/images/theRacer3.png';

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
        mainLessons:['By the time I did it, this was my biggest project. It made me understand the importance of planning the project before to start writting lines of code. It was also the first time I did a big project without the help of a tutor.',
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

        {
            title: 'The Gamer',
            images:[theGamer1, theGamer2, theGamer3],
            overview:['After completing a small course about game developing using the Phaser 3 library, I found it very interesting and decided to give it a go. So I decided to create two different games. Food paketi, a fruit collecting game where fruits are falling from the top and you must move your basket to pick the most fruits possible, while avoiding the bombs.',
            <br/>,
            'The other games is The Golem. Is a gamed with same style of classic Super Mario games. There are 6 levels and you have to jump from platform to platform until achieve the door. Avoid the enemy and do not fall or you will lose.'
                    ],
            mainLessons:[
                'This project came as a way to practice and learn more about Phaser games engine. Since I had taken only a small course from Codecademy, this project required me many ours of searching and reading on google, or viewing tutorials from Youtube.',
                <br/>,
                'By building food paketi game, I used a lot oj Javascript to handle the creation of the fruits and bombs and to place it in the screen. Since I had a score functionality, I thought it would make sence to allow the users to save it and compare it with the other players. For that I made use of my knowledge of backend, by creating a Node.js and express server.',
                <br/>,
                'The most I learned from Phaser3 in this game was about how to use the colliders and their callback functions. I used it to detect when fruits collided against the basket and then destroy the fruit and get points, and as well, with the bombs, when, after contacting with the basket, would cause the physics to stop and as the game as gome to an end.',
                <br/>,
                'The Golem game required much more use from the Phaser 3 physics. I had to make use of much more collisions and overlaps. Also I used group and staticGroup to handle easier all the many of the game objects created. Also a new feature for me was to handle animaltions and spritesheets. Also, I made now use of Multi scenes, having creating different scenes for homepage, all levels, gameover, and endPage. So this way, all game was now processed inside of the Phaser game, not as food paketi, where there is user contact with the DOM.',
                <br/>,
                'A big time I spent was on trying to find a way to make the game usable in both desktop or mobile devices. I tryed the scale manager offered by Phaser, but it was not working as I intended. So I tryed to use the innerWidth and innerHeight of devices to handle the configuration of the game, regardess of the devices. I also created a mobile pad making use of Alpha manipulation on images.'                        
                    ],
            stackUsed: [
             phaser3,
            'https://img.icons8.com/color/2x/javascript.png',
            'https://img.icons8.com/ios/344/css.png',
            'https://img.icons8.com/color/344/nodejs.png',
            'https://img.icons8.com/color/344/mongodb.png',
            'https://img.icons8.com/ios-glyphs/344/github.png',
            'https://img.icons8.com/ios/344/heroku.png',
            ]
        },

        {
            title: 'The Adventurer',
            images:[theAdventurer1, theAdventurer2, theAdventurer3],
            overview:[
                'After learn the basis of Phaser and create my first simple games, I decided to give a chance to something more complex using Tilemaps. I have always been a fan of Pokemon games even since old GameBoy. This way, I based this game on a mix of that old GameBoy pokemon games with the new Pokemon Go battle system. So, in the Adventurer you will walk in a 2D world where you must interact with different characters and objects. As an RPG you will collect items and improve your power and skills. The battle system is an interactive touching game where you must kill the opponent by tapping on him. But be fast because they also attack you as well. In the game you walk into different cities and to move forward you will need to defeat the Gym Leader that will give you a badge, what makes the city guards to go away of your way.'
                    ],
            mainLessons:[
                "This project come as a way to pratice and learn more about Phaser, and specially how to use tilesets and tilemaps. Since it was the first time I builded a game with a tilemap, It forced me to read a lot in google, to learn how to import it and utilize it inside my javascript file.",
                <br/>,
                "It's important to say that a good part of this project was spent using the Tiled software, building the map of the game.That was a very interesting part of the project, and since I had 0 knowledge of Tiled before to start, it took me many hours of reading and try and fix to make the map to work and look as I intended.",
                <br/>,
                "Being an RPG game, this means I needed to work with a lot of data and states. This was also a very good practice to mange how to handle the change of data, for example, the hp, or the experience, or the money, since many components of the game were taking influence in it.",
                <br/>,
                "For mobile devices, I used a plugin from Rex to create a joystick. It was the first time I used a joystick for my games so It was interesting to adapt it to work and have affect on the player moves."                      
                    ],
            stackUsed: [
                phaser3,
            'https://img.icons8.com/color/2x/javascript.png',
            'https://img.icons8.com/ios/344/css.png',
            'https://img.icons8.com/ios-glyphs/344/github.png',
            ]
        },


        {
            title: 'The Racer',
            images:[theRacer1, theRacer2, theRacer3],
            overview:[
                'This is anothor Phaser based project. This time my intention was to create a multiplayer racing game using Phaser and also socket.io. This game has plenty of features. You can take yourself in a  multiplayer race, where you can compete against up to 20 other people. If you prefer to play alone, you have a single player mode, where you face a one lap time trial, where you trty to beat the record of fastest lap ever. All your scores will give you experience and coins, which you can use to buy new and better cars. There also different drivers available that you can choose on your profile. The game also has a objectives system that will reward you for your achievements.'
                    ],
            mainLessons:[
                "Main objective for me with this project was to develop more my backend capacity and specially the ability to work with sockets. For that I used the socket.io library. Hnadling the communication between sockets and server was quite challanging what gave me a lot of work and learning.",
                <br/>,
                "This project also allow me to work a lot with mongoDb through mongoose. That was a lot interesting to combine both mongoose and socket.io in the server.",
                <br/>,
                "This game required as well a lot of javascript work to make it interactive and to control all the variables. That was a really rich javascript training for me.",
                <br/>,
                ""                      
                    ],
            stackUsed: [
             phaser3,
            'https://img.icons8.com/color/2x/javascript.png',
            'https://img.icons8.com/ios/344/css.png',
            'https://img.icons8.com/ios-glyphs/344/github.png',
            'https://symbols.getvecta.com/stencil_96/16_socketio-icon.cd2204de3e.svg',
            'https://img.icons8.com/color/344/nodejs.png',
            'https://img.icons8.com/color/344/mongodb.png',
            ]
        },
    
]