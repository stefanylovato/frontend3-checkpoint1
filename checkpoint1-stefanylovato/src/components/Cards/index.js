import { Fragment } from "react";
import Card from "./Card";

function Cards() {
    const projectsList = [
        {
            id: 0,
            image: '../../assets/projeto1.jpg',
            title: 'aiha',
            description: 'dsdsads',
            link: 'https://github.com/stefanylovato/checkpoint2-front2'
        },
        {
            id: 1,
            image: '',
            title: '',
            description: '',
            link: ''
        },
        {
            id: 2,
            image: '',
            title: '',
            description: '',
            link: ''
        },
        {
            id: 3,
            image: '',
            title: '',
            description: '',
            link: ''
        },
    ]

    return (
        <div id="projects" className="block">
            <div className="container">
                <div className="row">
                    <h2 className="display-5">My latest projects</h2>
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