import { Fragment } from "react";
import projeto1 from '../../assets/projeto1.jpg';
import trocae from '../../assets/trocae.jpg';
import coletivamente from '../../assets/coletivamente.jpg';
import dhmarket from '../../assets/dhmarket.jpg';

import Card from "./Card";

function Cards() {
    const projectsList = [
        {
            id: 0,
            image: projeto1,
            title: 'Checkpoint I',
            description: 'Developed in HTML and JavaScript',
            link: 'https://github.com/stefanylovato/checkpoint2-front2'
        },
        {
            id: 1,
            image: trocae,
            title: 'TrocaE App',
            description: 'Developed in Figma',
            link: 'https://www.figma.com/file/Imp8x8fAADkzRZpWCGRJbt/Telas?node-id=0%3A1'
        },
        {
            id: 2,
            image: coletivamente,
            title: 'ColetivaMente',
            description: 'Developed in Figma',
            link: 'https://www.figma.com/file/RZRN0BoHQTHWpxDmVeUGyK/coletivamente?node-id=4%3A0'
        },
        {
            id: 3,
            image: dhmarket,
            title: 'DH Market',
            description: 'Developed in HTML and CSS',
            link: ''
        }
    ]

    return (
        <div id="projects" className="block">
            <div className="container">
                <div className="row">
                    <h2 className="display-6 mt-3 mb-3" style={{color: 'white'}}>My latest projects</h2>
                </div>
                <div className="row">
                    {
                        projectsList.map(({id, image, title, description, link}) => {
                            return (
                                <Fragment key={id}>
                                    <Card 
                                    image={image}
                                    title={title}
                                    description={description}
                                    link={link}
                                    />
                                </Fragment>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Cards;