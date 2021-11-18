/* eslint-disable react/jsx-no-target-blank */
import './style.scss';

function Card({ image, title, description, link }) {
    return (
            <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="card" >
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={link} target='_blank' rel='noreferrer' className="btn btn-primary">See more</a>
                    </div>
                </div>
            </div>

    )
}

export default Card;