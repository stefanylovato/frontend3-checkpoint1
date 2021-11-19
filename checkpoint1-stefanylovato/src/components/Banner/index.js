/* eslint-disable jsx-a11y/img-redundant-alt */
import profilePicture from '../../assets/profile-picture.png'
import './style.scss';

const Banner = () => {

    return (
        <section id="banner">
            <div className="banner-text">
                <div className="row featurette">
                    <div class="col-md-6 ">
                        <h2 className="display-4 mt-5 " style={{color: 'var(--blue)'}}>Hey there!<span> I'm Stefany Lovato</span></h2>
                        <p className="lead mt-4">I'm a coder and designer who love build beautiful and functional things</p>
                    </div>
                    <div className="col-md-6 ">
                        <img src={profilePicture} alt="photo of me" className='img-fluid'/>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;