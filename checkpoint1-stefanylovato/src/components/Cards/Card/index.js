/* eslint-disable react/jsx-no-target-blank */
import './style.scss';

function Card({ image, title, description, link }) {
    return (
            <div className="cards col-sm-12 col-md-6 col-lg-3 mt-3 mb-3">
                <div className='background'>
                <div className="card h-100 d-inline-block ">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <div className='d-flex justify-content-center'>
                        <a href={link} target='_blank' rel='noreferrer' className="btn btn-primary px-5">See more</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>

    )
}

export default Card;