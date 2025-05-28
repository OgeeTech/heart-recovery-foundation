import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./TeamSection.css";

const teamMembers = [

  { img: "/img/officerblessing.jpg", name: "Blessing Moses", position: "Program Officer" },
  { img: "/img/officer2.jpg", name: "Bala David", position: "ICT Technician" },
  { img: "/img/officeromolade.jpg", name: "Olude Omolade Christiana", position: "Information officer" },
  { img: "/img/officerlucky.jpg", name: "Mr. Osaretin Lucky", position: "Public health Consultant" },
  { img: "/img/officerjenifer.jpg", name: "Jennifer Labi", position: "Monitoring & Evaluation Officer" },
  { img: "/img/officerglory.jpg", name: "Glory Aleburu M.", position: "Bussiness Admin." },
  { img: "/img/officer1.jpg", name: "Roseline Osarugue", position: "Legal Practioner" },
];

const TeamSection = () => {
  return (
    <div className="team-section container py-5">
      <h2 className="text-center mb-4 heading">Meet Our Team</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 4 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="team-card text-center">
              <img src={member.img} alt={member.name} className="team-img" />
              <h5 className="mt-3">{member.name}</h5>
              <p className="text-muted">{member.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSection;
