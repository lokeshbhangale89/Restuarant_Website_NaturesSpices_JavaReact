// import react from "react";
import chefs from "../../../data/chef_data.js"

const OurChef = () => {
    return (
        <div className="container mb-5">
            <h2 className="text-center mb-5">Our Chefs</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {chefs.map((chef) => (
                    <div key={chef.id} className="col col-12">
                        <div className="card h-100">
                            <img src={chef.image} alt="" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{chef.name}</h5>
                                <p className="card-text">{chef.position}</p>
                                <p className="card-text">{chef.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurChef