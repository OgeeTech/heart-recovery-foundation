import React, { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Calendar,
  ExternalLink,
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

const LatestNews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalNews, setModalNews] = useState(null);
  const videoRefs = useRef({});

  const newsItems = [
    {
      id: 1,
      type: "image",
      title: "Health campaign at JSS Bwari Central",
      description:
        "We successfully launched a Health campaign at JSS Bwari Central, Abuja, educating students on heart health.",
      fullText:
        "We successfully launched our first heart surgery program, providing life-saving interventions to 15 children. The program will continue across multiple regions with more support coming in.",
      image: "/news/new5.jpg",
      date: "2024-01-15",
      category: "Program Launch",
      link: "#",
    },
    {
      id: 2,
      type: "video",
      title: "Health awareness campaign at GSS Tudun Wada, Abuja",
      description:
        "Watch highlights from our recent community health workshop where we educated students about heart health.",
      fullText:
        "Watch highlights from our recent community health workshop where we educated 200+ families about heart health and early diagnosis. Watch the full video and interviews from experts.",
      image: "/news/new3.mp4",
      date: "2025-02-01",
      category: "Community Outreach",
    },
    {
      id: 3,
      type: "video",
      title: "Another Health Campaign in Abuja",
      description:
        "More outreach efforts to support heart health awareness across schools.",
      fullText:
        "Our latest event covered two more schools in Abuja, reaching over 300 students with practical heart health advice and materials.",
      image: "/news/new4.mp4",
      date: "2025-02-01",
      category: "Community Outreach",
    },
    {
      id: 4,
      type: "video",
      title: "Heart Awareness Campaign Extended",
      description: "Extending our campaign to more communities around Abuja.",
      fullText:
        "With support from local volunteers and health workers, we reached additional communities and offered health checks and resources.",
      image: "/news/new6.mp4",
      date: "2025-02-01",
      category: "Community Outreach",
    },
  ];
  

  const featuredNews = [
    {
      id: 1,
      title:
        "Breaking: Congenital Heart Failure Survivor Advocates Subsidised Heart Care",
      description:
        "Gilbert Kiaka Goodness, a congenital heart failure survivor and founder of the Heart Recovery Foundation (HRF)..",
      fullText:
        "Gilbert Kiaka Goodness, a congenital heart failure survivor and founder of the Heart Recovery Foundation (HRF), has called on the federal government to subsidise treatment and care for patients with congenital heart diseases, stressing that the high cost often prevents many from accessing life-saving care.",
      image: "/news/new1.png",
      date: "2025-05-20",
      readTime: "2 min read",
      link: "https://newtelegraphng.com/congenital-heart-failure-survivor-advocates-subsidised-heart-care/",
    },
    {
      id: 2,
      title: "Breaking: Foundation Calls For 30% Subsidy On Heart Surgeries",
      description:
        "The Heart Recovery Foundation (HRF) has urged the government to introduce a 30 per cent subsidy on heart surgeries to ease the financial burden on patients battling life-threatening cardiovascular conditions...",
      fullText:
        "The Heart Recovery Foundation (HRF) has urged the government to introduce a 30 per cent subsidy on heart surgeries to ease the financial burden on patients battling life-threatening cardiovascular conditions. The organisation emphasised that thousands of Nigerians cannot afford critical heart procedures, and a government-backed subsidy could save countless lives by improving access to timely and affordable care.",
      image: "/news/new2.png",
      date: "2025-05-20",
      readTime: "2 min read",
      link: "https://leadership.ng/foundation-calls-for-30-subsidy-on-heart-surgeries/#google_vignette",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(newsItems.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(newsItems.length / 3)) %
        Math.ceil(newsItems.length / 3)
    );
  };

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const openModal = (news) => setModalNews(news);
  const closeModal = () => setModalNews(null);

  const handlePlayClick = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      video.play();
      video.setAttribute("controls", true);
    }
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4">News & Updates</h2>
          <p className="lead">
            Stay updated with our latest programs, success stories, and
            community impact
          </p>
        </div>

        <h3 className="mb-4">Featured Stories</h3>
        <div className="row mb-5">
          {featuredNews.map((news) => (
            <div key={news.id} className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={news.image}
                  className="card-img-top"
                  alt={news.title}
                />
                <div className="card-body position-relative">
                  {news.title.includes("Breaking:") && (
                    <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                      Breaking
                    </span>
                  )}
                  <h5 className="card-title">{news.title}</h5>
                  <p className="card-text text-muted small mb-1">
                    <Calendar size={16} /> {formatDate(news.date)} |{" "}
                    {news.readTime}
                  </p>
                  <p className="card-text">{news.description}</p>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => openModal(news)}
                  >
                    Read More <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>Latest Updates</h3>
          <div>
            <button
              onClick={prevSlide}
              className="btn btn-outline-secondary me-2"
            >
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextSlide} className="btn btn-outline-secondary">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="row">
          {newsItems
            .slice(currentSlide * 3, currentSlide * 3 + 3)
            .map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="position-relative">
                    {item.type === "video" ? (
                      <video
                        ref={(el) => (videoRefs.current[item.id] = el)}
                        src={item.image}
                        className="card-img-top"
                        preload="metadata"
                      />
                    ) : (
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt={item.title}
                      />
                    )}
                    {item.type === "video" && (
                      <div
                        className="position-absolute top-50 start-50 translate-middle"
                        onClick={() => handlePlayClick(item.id)}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="bg-white rounded-circle p-2 shadow">
                          <Play className="text-primary" />
                        </div>
                      </div>
                    )}
                    <span className="position-absolute top-0 start-0 bg-primary text-white px-2 py-1 small">
                      {item.category}
                    </span>
                  </div>
                  <div className="card-body">
                    <p className="text-muted small mb-1">
                      <Calendar size={14} /> {formatDate(item.date)}
                    </p>
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text small">{item.description}</p>
                   
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {modalNews && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onClick={closeModal}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalNews.title}</h5>
                <button className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                {modalNews.type === "video" ? (
                  <video
                    src={modalNews.image}
                    controls
                    className="w-100 mb-3"
                  />
                ) : (
                  <img
                    src={modalNews.image}
                    alt={modalNews.title}
                    className="img-fluid mb-3"
                  />
                )}
                <p className="text-muted small">
                  <Calendar size={14} /> {formatDate(modalNews.date)} |{" "}
                  {modalNews.category}
                </p>
                <p>{modalNews.fullText}</p>
              </div>
              <div className="modal-footer">
                {modalNews.link && (
                  <a
                    href={modalNews.link}
                    className="btn btn-outline-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Original <ExternalLink size={16} />
                  </a>
                )}
                <button className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LatestNews;
