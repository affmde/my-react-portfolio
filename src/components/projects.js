import { Container } from "react-bootstrap"
import './projects.css';
import pokethat from '../media/images/pokethatVertical.png'
import theQuiz from '../media/images/the-quiz.png';
import youscout from '../media/images/youscout.png'
import { Card } from "./card";
import {Helmet} from "react-helmet";

export const Projects = () => {
    return (
        <div className="page-container">
            <Helmet>
                <title>Projects</title>
                <meta 
                    name="description"
                    content="Check all my projects. You can try them live or read more about my experience on creating them"
                />
            </Helmet>
            <div>
                <p className="center" id="projects-title">My Projects</p>
            </div>
            <Container id="projects-container">
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
    )
}