// export default function About(){
//     return(
//         <>

//         </>
//     )
// }
import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="mb-4">About Us</h1>
          <p className="lead">
            Welcome to <strong>Company of Ranjan</strong>. We are dedicated to
            providing the best services in web development, AI, and technology
            solutions.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <h3>Our Mission</h3>
          <p>
            Our mission is to revolutionize the tech industry by offering
            innovative and efficient solutions. We believe in pushing the
            boundaries of technology to create impactful products.
          </p>
        </div>
        <div className="col-md-6">
          <h3>Our Vision</h3>
          <p>
            We envision a future where technology simplifies everyday tasks,
            enhances productivity, and improves lives. Our goal is to make this
            vision a reality through continuous innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
