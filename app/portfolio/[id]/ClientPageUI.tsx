"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "./Clientstyle.css";

import { StrategyPillarIcon } from "../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  client: any;
};

export default function ClientPageUI({ client }: Props) {
  const router = useRouter();

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div
          className="hero-image"
          style={{ backgroundImage: `url(${client.imageUrl})` }}
        />
        <div className="hero-content">
          <div className="client-logo">{client.client}</div>
          <p className="hero-subheadline">{client.description}</p>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="challenge-section">
        <div>
          <div className="challenge-heading">Client Brief</div>
          <div className="challenge-body">
            {client.client} {client.challenge}
          </div>
        </div>

        <div
          className="challenge-image"
          style={{ backgroundImage: `url(${client.challengeImage})` }}
        />
      </section>

      {/* DASHBOARD */}
      <section className="dashboard">
        <h2 className="section-title">What We Delivered</h2>
        <div className="dashboard-grid">
          {client.performanceMetrics?.map((metric: any, index: number) => (
            <Metric key={index} value={metric.value} label={metric.label} />
          ))}
        </div>
      </section>

      {/* STRATEGY */}
      <section className="pillars-section">
        <h2 className="section-title">Our Strategic Approach</h2>

        <div className="pillar-swiper-outer">
          <div className="pillar-arrow pillar-prev">‹</div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            loop
            navigation={{
              prevEl: ".pillar-prev",
              nextEl: ".pillar-next",
            }}
            pagination={{
              el: ".pillar-dots",
              clickable: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="center-carousel"
          >
            {client.pillars?.map(
              (pillar: StrategyPillarIcon, index: number) => (
                <SwiperSlide key={index}>
                  <Pillar {...pillar} />
                </SwiperSlide>
              ),
            )}
          </Swiper>

          <div className="pillar-arrow pillar-next">›</div>
        </div>

        <div className="pillar-dots" />
      </section>

      {/* RESULT */}
      <section className="result-section">
        <h2 className="section-title">Strategic Outcome</h2>
        <p className="result-text">{client.systemicResult}</p>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2 className="cta-heading">
          Let’s bring clarity to how your business grows.
        </h2>

        <button
          onClick={() => router.push("/contact")}
          className="bg-brand-purple text-white px-5 py-2 font-bold"
        >
          Book a Call
        </button>
      </section>
    </>
  );
}

/* helpers */

const Metric = ({ value, label }: { value: string; label: string }) => (
  <div className="metric-card">
    <div className="metric-number">{value}</div>
    <div className="metric-label">{label}</div>
  </div>
);

const Pillar: React.FC<StrategyPillarIcon> = ({ title, points, outcome }) => (
  <div className="pillar-card">
    <h3 className="pillar-title">{title}</h3>

    {points.map((p, i) => (
      <p key={i} className="pillar-content">
        {p}
      </p>
    ))}

    {outcome && (
      <div className="pillar-outcome">
        <strong>{outcome.value}</strong>
        <span>{outcome.label}</span>
      </div>
    )}
  </div>
);
