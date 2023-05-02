export const Heros = () => {
    return (

        <div className="container" id="hero">
            {/* Desktop */}
            <div className="d-none d-lg-block">
                <div className="row g-0 mt-5">
                    <div className="col-md-6">
                        <div className="col-image-left"></div>
                    </div>

                    <div className="col-md-6 container px-5 mt-3">
                        <div className="ml-2">
                            <h1>What have you been reading</h1>
                            <p className="lead">
                                The library team would love to know what you have been reading.
                                Whether it is to learn new skill or grow within one,
                                we will be able to provide the top content for you!
                            </p>
                            <a type="button" href="#" className="btn btn-primary  btn-large text-white">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row g-0 mb-3">
                    <div className="col-md-6 container px-5 mt-3">
                        <div className="ml-2 ">
                            <h1>Our collection is always changing!</h1>
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Debitis, similique architecto perferendis illum aliquid
                                quaerat explicabo culpa cupiditate, aut veritatis reiciendis
                                sint. Voluptatum officia aut animi similique alias excepturi esse?
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="col-image-right">

                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="d-lg-none">
                <div className="row g-0 mt-5">
                    <div className="col-lg-6">
                        <div className="col-image-left"></div>
                    </div>

                    <div className="col-lg-6 px-3 mt-3">
                        <div className="ml-2 mb-2">
                            <h1>What have you been reading</h1>
                            <p className="lead">
                                The library team would love to know what you have been reading.
                                Whether it is to learn new skill or grow within one,
                                we will be able to provide the top content for you!
                            </p>
                            <a type="button" href="#" className="btn btn-primary  btn-large text-white">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row g-0 mb-3">
                    <div className="col-lg-6">
                        <div className="col-image-right">
                        </div>
                    </div>
                    <div className="col-lg-6 px-3 mt-3">
                        <div className="ml-2 ">
                            <h1>Our collection is always changing!</h1>
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Debitis, similique architecto perferendis illum aliquid
                                quaerat explicabo culpa cupiditate, aut veritatis reiciendis
                                sint. Voluptatum officia aut animi similique alias excepturi esse?
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}