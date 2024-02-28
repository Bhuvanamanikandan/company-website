import React from 'react';
import './Profile.css'; 

const Profile = () => {
  return (
    <div className="profile-container">
      <section className="about-section">
        <h2>About HARISHNI INDUSTRIES</h2>
        <p>
          HARISHNI INDUSTRIES, established in [Year], has grown to become a leader in the field of computer wiring harness manufacturing. With a focus on innovation and quality, our products cater to a wide range of industries worldwide. Our dedicated team works tirelessly to ensure that each product meets the highest standards of reliability and performance. At HARISHNI INDUSTRIES, we are committed to delivering exceptional value to our customers through our state-of-the-art manufacturing processes and customer-centric approach.
        </p>
        <p>
          Our mission is to empower businesses by providing them with cutting-edge wiring solutions that enhance efficiency and drive growth. Through continuous improvement and a keen focus on sustainability, we strive to not only meet but exceed our customers' expectations.
        </p>
      </section>

      <section className="certification-section">
        <h2>Certifications</h2>
        <p>
          We are proud to have earned various certifications that stand testament to our commitment to excellence:
        </p>
        <ul>
          <li>ISO 9001:2015 - Quality Management System</li>
          <li>ISO 14001:2015 - Environmental Management System</li>
          <li>OHSAS 18001:2007 - Occupational Health and Safety Management System</li>
          <li>UL Certified - Safety Standards for Electrical and Electronic Products</li>
        </ul>
        <p>
          These certifications reflect our dedication to maintaining the highest levels of quality, safety, and environmental stewardship in all aspects of our operations.
        </p>
      </section>
    </div>
  );
};

export default Profile;
