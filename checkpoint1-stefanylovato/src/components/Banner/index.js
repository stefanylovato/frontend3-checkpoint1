import './style.scss';

const Banner = () => {

    return (
        <section id="banner">
            <div className="banner-text">
                <div className="row featurette">
                    <div class="col-md-6">
                        <h2 className="display-4">Hey there!<span style={{color: 'var(--blue)'}}> I'm Stefany Lovato</span></h2>
                        <p className="lead">I'm a coder and designer who love to build beautiful things</p>
                    </div>
                    <div className="col-md-6">
                        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;