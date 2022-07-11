import { Container} from "react-bootstrap"
import './projects.css';
import pokethat from '../media/images/pokethatVertical.png'
import theQuiz from '../media/images/the-quiz.png';
import youscout from '../media/images/youscout.png'
import { Card } from "./card";
import {Helmet} from "react-helmet";
import homepagePic from '../media/images/homepagePic.png';
import theGamer from '../media/images/the-gamer.png';
import theAdventurer from '../media/images/theAdventurer.png';
import theRacer from '../media/images/theRacer.png'
import helmiHelsinki from '../media/images/helmiHelsinki.png';

export const Projects = () => {
    return (
        <div className="page-container">
            <Helmet>
                <title>Andre Miranda | Projects</title>
                <meta 
                    name="description"
                    property="description"
                    content="Check all my projects. You can try them live or read more about my experience on creating them"
                />
                <meta property="og:title" content="Projects" />
                <meta property="og:url" content="https://affmde.github.io/my-react-portfolio/#/projects" />
                <meta property="og:image" content={homepagePic} />
            </Helmet>
            <div>
                <h2 className="center" id="projects-title">My Projects</h2>
            </div>
            <div style={{marginBottom:'10vh'}}>
                <h3 className="projectsType" id="professionalProjects">Professional projects</h3>
                <Container className="projects-container">
                <Card
                    image={helmiHelsinki} 
                    title="Helmi Helsinki"
                    subtitle="Hairdress salon"
                    description="Hairdress salon from Helsinki, Finland. Website can be access in Finnish, Swedish and English."
                    url="https://helmihelsinki.fi"
                    index={6}
                    />
                </Container>
            </div>


            <div>
                <h3 className="projectsType" id="personalProjects">Personal Projects</h3>
                <Container className="projects-container">

                <Card
                image={theRacer} 
                title="The Racer"
                subtitle="Multiplayer and single player racing game"
                description="Play against other 20 racers or challenge yourself trying to get the fastest lap ever. RPG racing game where your scores will give you rewards that will allow you to buy different and better cars."
                url="https://the-racer.herokuapp.com/"
                index={5}
                />

                <Card
                image={theAdventurer} 
                title="The Adventurer"
                subtitle="Save the princess"
                description="Dress the skin of our adventurer boy and try to save Princess Elb after her kidnapping. In this RPG game you will have to fight against other adventurers and monsters in your journey to save the princess."
                url="https://affmde.github.io/monsterThat/"
                index={4}
                />
                
                <Card
                image={pokethat} 
                title="PokeThat"
                subtitle="Pokemon based web-app"
                description="Go on the wild and try to find and catch all pokemons from first generation.
                But dont worry, if you are too scared for it, just open your pokedex and discover all 151
                pokemons available"
                url="https://pokethat.herokuapp.com/"
                index={0}
                />
            
                <Card
                image={theQuiz} 
                title="The Quiz"
                subtitle="Test your knowledge"
                description="General questions quiz. Answer correctly to the 15 questions and you are
                guaranteed a place in the top rankng of this amazing quiz.
                If you dont get everything right, dont worry, play again and try to be top 5."
                url="https://the-quiz-affm.herokuapp.com/"
                index={1}
                />
            
                <Card
                image={theGamer} 
                title="The gamer"
                subtitle="Interactive html and javascript games"
                description="Play this games and challenge yourself with this games. In food paketi you can try to collect the most fruits/points possible, and try to get a highscore to put you in the top! Golem is a Super Mario style game. Can you complete the game?"
                url="https://the-gamer-interactive.herokuapp.com/index.html"
                index={3}
                />

                <Card
                image={youscout} 
                title="Youscout"
                subtitle="Create reports about the football players you scout"
                description="Web app designed thinking specially on football scouts, who travel the world looking for the next football star.
                Organize your schedules and create/edit your player reports in an easy way with Youscout"
                url="https://youscout.herokuapp.com/home"
                index={2}
                />
                    
            </Container>
            </div>
            
        </div>
    )
}