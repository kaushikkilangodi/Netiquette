import React from "react";
import Header from "./Header";

function Home() {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://netiquetteinfo.com/wp-json/wp/v2/posts"
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  return (
    <>
    <Header/>
      <section className="hero-empowerment-area">
        <div className="custom-container">
          <div className="custom-row align-items-center">
            <div className="hero-empowerment-left-content">
              <p className="section-subtitle">
                Empowering Enterprises, Crafting Tomorrow
              </p>
              <h1 className="section-title fade-in">
                Your Vision,
                <br />
                Our Commitment: Tailored Solutions.
              </h1>{" "}
              <p>
                We design and develop custom software applications tailored to
                streamline your business processes, improve efficiency, and
                enhance productivity.
              </p>
              <div className="btns-group d-flex">
                <a href="/about-us/" className="theme-btn">
                  Learn More
                </a>

                <a href="/contact/" className="theme-btn2">
                  Let's Talk <i className="iconoir-arrow-up-right"></i>
                </a>
              </div>
            </div>

            <div className="hero-empowerment-right-content">
              <div className="top-content">
                <img
                  decoding="async"
                  className="desktop fade-in"
                  src="/wp-content/uploads/2024/06/Hero-Image-1.png"
                />

                <div className="experience-box simple-shadow bounce-in">
                  <div className="experience-body d-flex align-items-center">
                    <img decoding="async" src="" />

                    <div className="experience-content d-flex align-items-center">
                      <h1></h1>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bottom-content d-flex">
                <div className="our-expert-team-box simple-shadow  delay-2">
                  <a href="">
                    <div className="our-expert-team-box-inner d-flex align-items-center">
                      <div className="imgs imgs1 d-flex align-items-center">
                        <img decoding="async" src="" />
                      </div>
                      <p></p>
                    </div>
                  </a>
                </div>

                <div className="google-reviews-box simple-shadow bounce-in delay-3">
                  <div className="left">
                    <span></span>
                    <img decoding="async" src="" />
                  </div>
                  <div className="right">
                    <div className="stars d-flex align-items-center">
                      <i className=""></i>
                    </div>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="client-area">
<div className="clients clients-marquee d-flex align-items-center" style="touch-action: pan-y; cursor: grab; user-select: none;">

        <div className="client-logo simple-shadow" style="translate: none; rotate: none; scale: none; transform: translate(796.9%, 0%) translate3d(0px, 0px, 0px); touch-action: pan-y;">
        <img decoding="async" src="/wp-content/uploads/2024/05/indoco.png" style="touch-action: pan-y;"/>
    </div>
        <div className="client-logo simple-shadow" style="translate: none; rotate: none; scale: none; transform: translate(796.9%, 0%) translate3d(0px, 0px, 0px); touch-action: pan-y;">
        <img decoding="async" src="/wp-content/uploads/2024/05/morans.png" style="touch-action: pan-y;"/>
    </div>
        <div className="client-logo simple-shadow" style="translate: none; rotate: none; scale: none; transform: translate(796.9%, 0%) translate3d(0px, 0px, 0px); touch-action: pan-y;">
        <img decoding="async" src="/wp-content/uploads/2024/05/Naas.png" style="touch-action: pan-y;"/>
    </div>
        <div className="client-logo simple-shadow" style="translate: none; rotate: none; scale: none; transform: translate(796.9%, 0%) translate3d(0px, 0px, 0px); touch-action: pan-y;">
        <img decoding="async" src="/wp-content/uploads/2024/05/Raiz.png" style="touch-action: pan-y;"/>
    </div>
        <div className="client-logo simple-shadow" style="translate: none; rotate: none; scale: none; transform: translate(796.9%, 0%) translate3d(0px, 0px, 0px); touch-action: pan-y;">
        <img decoding="async" src="/wp-content/uploads/2024/05/Reve.png" style="touch-action: pan-y;"/>
    </div>
        <div className="client-logo simple-shadow" style="translate: none; rotate: none; scale: none; transform: translate(796.9%, 0%) translate3d(0px, 0px, 0px); touch-action: pan-y;">
        <img decoding="async" src="/wp-content/uploads/2024/05/96.png" style="touch-action: pan-y;"/>
    </div>
        <div className="client-logo simple-shadow" style="translate: none; rotate: none; scale: none; transform: translate(796.9%, 0%) translate3d(0px, 0px, 0px); touch-action: pan-y;">
        <img decoding="async" src="/wp-content/uploads/2024/05/allthings.png" style="touch-action: pan-y;"/>
    </div>
        <div className="client-logo simple-shadow" style="translate: none; rotate: none; scale: none; transform: translate(796.9%, 0%) translate3d(0px, 0px, 0px); touch-action: pan-y;">
        <img decoding="async" src="/wp-content/uploads/2024/05/aurumine-naturals.png" style="touch-action: pan-y;"/>
    </div>
        <div className="client-logo simple-shadow" style="translate: none; rotate: none; scale: none; transform: translate(796.9%, 0%) translate3d(0px, 0px, 0px); touch-action: pan-y;">
        <img decoding="async" src="/wp-content/uploads/2024/05/EN-aaaaateL.png" style="touch-action: pan-y;"/>
    </div>
        <div className="client-logo simple-shadow" style="translate: none; rotate: none; scale: none; transform: translate(796.9%, 0%) translate3d(0px, 0px, 0px); touch-action: pan-y;">
        <img decoding="async" src="/wp-content/uploads/2024/05/eyoha.png" style="touch-action: pan-y;"/>
    </div>
        <div className="client-logo simple-shadow" style="translate: none; rotate: none; scale: none; transform: translate(796.9%, 0%) translate3d(0px, 0px, 0px); touch-action: pan-y;">
        <img decoding="async" src="/wp-content/uploads/2024/05/focus-fable.png" style="touch-action: pan-y;"/>
    </div>
        <div className="client-logo simple-shadow" style="translate: none; rotate: none; scale: none; transform: translate(796.9%, 0%) translate3d(0px, 0px, 0px); touch-action: pan-y;">
        <img decoding="async" src="/wp-content/uploads/2024/05/graphics.png" style="touch-action: pan-y;"/>
    </div>
        <div className="client-logo simple-shadow" style="translate: none; rotate: none; scale: none; transform: translate(796.9%, 0%) translate3d(0px, 0px, 0px); touch-action: pan-y;">
        <img decoding="async" src="/wp-content/uploads/2024/05/Jewelia.png" style="touch-action: pan-y;"/>
    </div>
        <div className="client-logo simple-shadow" style="translate: none; rotate: none; scale: none; transform: translate(-1503.1%, 0%) translate3d(0px, 0px, 0px); touch-action: pan-y;">
        <img decoding="async" src="/wp-content/uploads/2024/05/kosmos.png" style="touch-action: pan-y;"/>
    </div>
        <div className="client-logo simple-shadow" style="translate: none; rotate: none; scale: none; transform: translate(-1503.1%, 0%) translate3d(0px, 0px, 0px); touch-action: pan-y;">
        <img decoding="async" src="/wp-content/uploads/2024/05/Rovertale.png" style="touch-action: pan-y;"/>
    </div>
        <div className="client-logo simple-shadow" style="translate: none; rotate: none; scale: none; transform: translate(-1503.1%, 0%) translate3d(0px, 0px, 0px); touch-action: pan-y;">
        <img decoding="async" src="/wp-content/uploads/2024/05/The-house-of.png" style="touch-action: pan-y;"/>
    </div>
        <div className="client-logo simple-shadow" style="translate: none; rotate: none; scale: none; transform: translate(-1503.1%, 0%) translate3d(0px, 0px, 0px); touch-action: pan-y;">
        <img decoding="async" src="/wp-content/uploads/2024/05/the-paper-shop.png" style="touch-action: pan-y;"/>
    </div>
        <div className="client-logo simple-shadow" style="translate: none; rotate: none; scale: none; transform: translate(-1503.1%, 0%) translate3d(0px, 0px, 0px); touch-action: pan-y;">
        <img decoding="async" src="/wp-content/uploads/2024/05/total-pharmacy.png" style="touch-action: pan-y;"/>
    </div>
        <div className="client-logo simple-shadow" style="translate: none; rotate: none; scale: none; transform: translate(-1503.1%, 0%) translate3d(0px, 0px, 0px); touch-action: pan-y;">
        <img decoding="async" src="/wp-content/uploads/2024/05/wwd.png" style="touch-action: pan-y;"/>
    </div>
        <div className="client-logo simple-shadow" style="translate: none; rotate: none; scale: none; transform: translate(-1503.1%, 0%) translate3d(0px, 0px, 0px); touch-action: pan-y;">
        <img decoding="async" src="/wp-content/uploads/2024/05/XE-dea.png" style="touch-action: pan-y;" alt=''/>
    </div>
    
    <div className="client-logo" style="min-width: 0px; translate: none; rotate: none; scale: none; transform: translate3d(0px, 0px, 0px); touch-action: pan-y;"></div>
</div>
</section> */}

      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-b5df180 elementor-widget elementor-widget-synckhomev2about"
          data-id="b5df180"
          data-element_type="widget"
          data-widget_type="synckhomev2about.default"
        >
          <div className="elementor-widget-container">
            <section className="about2-area">
              <div className="custom-container">
                <div className="about2-inner-box">
                  <div className="about2-header">
                    <h5 className="section-subtitle">Our Services</h5>
                    <h1 className="section-title">
                      Visualize. Develop. Scale.
                    </h1>
                  </div>

                  <ul className="nav nav-tabs about2-tabs" role="tablist">
                    <li className="nav-item">
                      <button
                        className="nav-link active"
                        id="business_strategy-tab"
                        data-bs-toggle="tab"
                        href="#business_strategy"
                        role="tab"
                        aria-controls="business_strategy"
                        aria-selected="true"
                      >
                        <span className="icon">
                          <img
                            decoding="async"
                            src="/wp-content/uploads/2024/05/Product-Prototyping.png"
                          />
                        </span>{" "}
                        Product Prototyping{" "}
                      </button>
                    </li>

                    <li className="nav-item">
                      <button
                        className="nav-link"
                        id="market_analysis-tab"
                        data-bs-toggle="tab"
                        href="#market_analysis"
                        role="tab"
                        aria-controls="market_analysis"
                        aria-selected="false"
                      >
                        <span className="icon">
                          <img
                            decoding="async"
                            src="/wp-content/uploads/2024/05/Web-Application-Development.png"
                            alt="Icon"
                          />
                        </span>{" "}
                        Web Application Development{" "}
                      </button>
                    </li>

                    <li className="nav-item">
                      <button
                        className="nav-link"
                        id="process_optimation-tab"
                        data-bs-toggle="tab"
                        href="#process_optimation"
                        role="tab"
                        aria-controls="process_optimation"
                        aria-selected="false"
                      >
                        <span className="icon">
                          <img
                            decoding="async"
                            src="/wp-content/uploads/2024/05/Mobile-App-Development-Icon.png"
                            alt="Icon"
                          />
                        </span>{" "}
                        Mobile App Development{" "}
                      </button>
                    </li>

                    <li className="nav-item">
                      <button
                        className="nav-link"
                        id="performance_improvement-tab"
                        data-bs-toggle="tab"
                        href="#performance_improvement"
                        role="tab"
                        aria-controls="performance_improvement"
                        aria-selected="false"
                      >
                        <span className="icon">
                          <img
                            decoding="async"
                            src="/wp-content/uploads/2024/05/SEO-Marketing.png"
                            alt="Icon"
                          />
                        </span>{" "}
                        SEO &amp; Marketing{" "}
                      </button>
                    </li>

                    <li className="nav-item">
                      <button
                        className="nav-link"
                        id="entrepreneurial_guidance-tab"
                        data-bs-toggle="tab"
                        href="#entrepreneurial_guidance"
                        role="tab"
                        aria-controls="entrepreneurial_guidance"
                        aria-selected="false"
                      >
                        <span className="icon">
                          <img
                            decoding="async"
                            src="/wp-content/uploads/2024/05/Custom-Application-Development-Icon.png"
                            alt="Icon"
                          />
                        </span>{" "}
                        Custom Application Development{" "}
                      </button>
                    </li>

                    <li className="nav-item">
                      <button
                        className="nav-link"
                        id="organizational_excellence-tab"
                        data-bs-toggle="tab"
                        href="#organizational_excellence"
                        role="tab"
                        aria-controls="organizational_excellence"
                        aria-selected="false"
                      >
                        <span className="icon">
                          <img
                            decoding="async"
                            src="/wp-content/uploads/2024/05/HR-Consultancy-Icon.png"
                            alt="Icon"
                          />
                        </span>{" "}
                        HR Consultancy{" "}
                      </button>
                    </li>

                    <li className="nav-item">
                      <button
                        className="nav-link"
                        id="market_research-tab"
                        data-bs-toggle="tab"
                        href="#market_research"
                        role="tab"
                        aria-controls="market_research"
                        aria-selected="false"
                      >
                        <span className="icon">
                          <img
                            decoding="async"
                            src="/wp-content/uploads/2024/05/Online-Reputation-Management-ORM.png"
                            alt="Icon"
                          />
                        </span>{" "}
                        Online Reputation Management (ORM){" "}
                      </button>
                    </li>
                  </ul>

                  <div className="tab-content about2-tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="business_strategy"
                      role="tabpanel"
                      aria-labelledby="business_strategy-tab"
                    >
                      <div className="about2-tab-content-body d-flex gap-24">
                        <div className="img-box">
                          <img
                            decoding="async"
                            src="/wp-content/uploads/2024/06/Product-Prototyping.png"
                          />
                        </div>

                        <div className="content-box card-h">
                          <div className="mac-btns-wrap d-flex align-items-center justify-content-between">
                            <div className="mac-buttons d-flex align-items-center">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>

                            <div className="action-btn d-flex align-items-center">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>

                          <h1>
                            <span className="icon">
                              <img
                                decoding="async"
                                src="/wp-content/uploads/2024/05/Product-Prototyping.png"
                                alt="Icon"
                              />
                            </span>{" "}
                            Turning Ideas into Tangible Reality: Rapid
                            Prototyping for Swift Innovation.{" "}
                          </h1>
                          <div className="content">
                            <p>
                              Dive into the realm of innovation with our
                              prototyping services. We offer a fast-track
                              approach to exploring new ideas, validating
                              concepts, and testing groundbreaking innovations.
                              By blending creativity with technology, we
                              meticulously craft prototypes that showcase your
                              product's potential. Our swift and precise process
                              transforms your vision into a tangible model,
                              setting the stage for your product's success.{" "}
                            </p>{" "}
                          </div>
                          <a
                            href="/services/product-prototyping/"
                            className="theme-btn"
                          >
                            <i className="iconoir-arrow-up-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="market_analysis"
                      role="tabpanel"
                      aria-labelledby="market_analysis-tab"
                    >
                      <div className="about2-tab-content-body d-flex gap-24">
                        <div className="img-box">
                          <img
                            decoding="async"
                            src="/wp-content/uploads/2024/06/Web-Application-Development.png"
                          />
                        </div>

                        <div className="content-box card-h">
                          <div className="mac-btns-wrap d-flex align-items-center justify-content-between">
                            <div className="mac-buttons d-flex align-items-center">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>

                            <div className="action-btn d-flex align-items-center">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>

                          <h1>
                            <span className="icon">
                              <img
                                decoding="async"
                                src="/wp-content/uploads/2024/05/Web-Application-Development.png"
                                alt="Icon"
                              />
                            </span>{" "}
                            Crafting Dynamic Web Solutions: Tailored Development
                            to Elevate Online Presence.{" "}
                          </h1>
                          <div className="content">
                            <p>
                              Step up your digital game with our bespoke web
                              application development services. We specialize in
                              creating dynamic web solutions that resonate with
                              your audience, enhancing your online presence and
                              driving engagement. With a focus on user-centric
                              design and robust functionality, we build websites
                              that not only look great but also perform
                              seamlessly across devices.
                            </p>{" "}
                          </div>
                          <a
                            href="/services/web-application-development/"
                            className="theme-btn"
                          >
                            <i className="iconoir-arrow-up-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="process_optimation"
                      role="tabpanel"
                      aria-labelledby="process_optimation-tab"
                    >
                      <div className="about2-tab-content-body d-flex gap-24">
                        <div className="img-box">
                          <img
                            decoding="async"
                            src="/wp-content/uploads/2024/06/Mobile-App-Development.png"
                          />
                        </div>

                        <div className="content-box card-h">
                          <div className="mac-btns-wrap d-flex align-items-center justify-content-between">
                            <div className="mac-buttons d-flex align-items-center">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>

                            <div className="action-btn d-flex align-items-center">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>

                          <h1>
                            <span className="icon">
                              <img
                                decoding="async"
                                src="/wp-content/uploads/2024/05/Mobile-App-Development-Icon.png"
                                alt="Icon"
                              />
                            </span>{" "}
                            Empowering Mobility: Customized App Development for
                            Seamless User Experiences.{" "}
                          </h1>
                          <div className="content">
                            <p>
                              Navigate the mobile landscape with confidence
                              through our tailored app development services. We
                              create user-friendly mobile applications that
                              deliver seamless experiences, catering to your
                              specific business needs. Our team leverages the
                              latest technologies to ensure your app stands out
                              in the crowded marketplace, driving user
                              engagement and loyalty.
                            </p>{" "}
                          </div>
                          <a
                            href="/services/mobile-app-development/"
                            className="theme-btn"
                          >
                            <i className="iconoir-arrow-up-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="performance_improvement"
                      role="tabpanel"
                      aria-labelledby="performance_improvement-tab"
                    >
                      <div className="about2-tab-content-body d-flex gap-24">
                        <div className="img-box">
                          <img
                            decoding="async"
                            src="/wp-content/uploads/2024/06/SEO-Marketing.png"
                          />
                        </div>

                        <div className="content-box card-h">
                          <div className="mac-btns-wrap d-flex align-items-center justify-content-between">
                            <div className="mac-buttons d-flex align-items-center">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>

                            <div className="action-btn d-flex align-items-center">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>

                          <h1>
                            <span className="icon">
                              <img
                                decoding="async"
                                src="/wp-content/uploads/2024/05/SEO-Marketing.png"
                                alt="Icon"
                              />
                            </span>{" "}
                            Boosting Visibility, Driving Growth: Strategic SEO
                            and Marketing Solutions.{" "}
                          </h1>
                          <div className="content">
                            <p>
                              Elevate your brand's online visibility with our
                              strategic SEO and marketing services. We craft
                              data-driven strategies that optimize your
                              website's performance, enhance search engine
                              rankings, and drive organic traffic. With targeted
                              marketing campaigns, we amplify your brand's
                              reach, attracting and retaining valuable
                              customers.
                            </p>{" "}
                          </div>
                          <a
                            href="/services/seo-and-marketing/"
                            className="theme-btn"
                          >
                            <i className="iconoir-arrow-up-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="entrepreneurial_guidance"
                      role="tabpanel"
                      aria-labelledby="entrepreneurial_guidance-tab"
                    >
                      <div className="about2-tab-content-body d-flex gap-24">
                        <div className="img-box">
                          <img
                            decoding="async"
                            src="/wp-content/uploads/2024/06/Custom-Application-Development.png"
                          />
                        </div>

                        <div className="content-box card-h">
                          <div className="mac-btns-wrap d-flex align-items-center justify-content-between">
                            <div className="mac-buttons d-flex align-items-center">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>

                            <div className="action-btn d-flex align-items-center">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>

                          <h1>
                            <span className="icon">
                              <img
                                decoding="async"
                                src="/wp-content/uploads/2024/05/Custom-Application-Development-Icon.png"
                                alt="Icon"
                              />
                            </span>{" "}
                            Tailored Solutions for Unique Needs: Custom
                            Applications that Fit Like a Glove.{" "}
                          </h1>
                          <div className="content">
                            <p>
                              Experience the power of custom solutions tailored
                              to your unique business requirements. Our custom
                              application development services are designed to
                              address specific challenges, streamline
                              operations, and boost productivity. By
                              understanding your business goals, we deliver
                              applications that align perfectly with your
                              vision, driving efficiency and innovation.
                            </p>{" "}
                          </div>
                          <a
                            href="/services/custom-application-development/"
                            className="theme-btn"
                          >
                            <i className="iconoir-arrow-up-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="organizational_excellence"
                      role="tabpanel"
                      aria-labelledby="organizational_excellencey-tab"
                    >
                      <div className="about2-tab-content-body d-flex gap-24">
                        <div className="img-box">
                          <img
                            decoding="async"
                            src="/wp-content/uploads/2024/06/HR-Consultancy.png"
                          />
                        </div>

                        <div className="content-box card-h">
                          <div className="mac-btns-wrap d-flex align-items-center justify-content-between">
                            <div className="mac-buttons d-flex align-items-center">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>

                            <div className="action-btn d-flex align-items-center">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>

                          <h1>
                            <span className="icon">
                              <img
                                decoding="async"
                                src="/wp-content/uploads/2024/05/HR-Consultancy-Icon.png"
                                alt="Icon"
                              />
                            </span>{" "}
                            Strategic HR Solutions for Business Excellence:
                            Unlocking Human Potential.{" "}
                          </h1>
                          <div className="content">
                            <p>
                              Empower your organization with our strategic HR
                              consultancy services. We offer personalized
                              solutions that focus on talent acquisition,
                              development, and retention. By aligning HR
                              strategies with your business objectives, we help
                              you build a high-performing workforce that drives
                              organizational success.
                            </p>{" "}
                          </div>
                          <a
                            href="/services/hr-consultancy/"
                            className="theme-btn"
                          >
                            <i className="iconoir-arrow-up-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="market_research"
                      role="tabpanel"
                      aria-labelledby="market_research-tab"
                    >
                      <div className="about2-tab-content-body d-flex gap-24">
                        <div className="img-box">
                          <img
                            decoding="async"
                            src="/wp-content/uploads/2024/06/Online-Reputation-Management-ORM.png"
                          />
                        </div>

                        <div className="content-box card-h">
                          <div className="mac-btns-wrap d-flex align-items-center justify-content-between">
                            <div className="mac-buttons d-flex align-items-center">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>

                            <div className="action-btn d-flex align-items-center">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>

                          <h1>
                            <span className="icon">
                              <img
                                decoding="async"
                                src="/wp-content/uploads/2024/05/Online-Reputation-Management-ORM.png"
                                alt="Icon"
                              />
                            </span>{" "}
                            Safeguard Your Online Reputation: Build Trust, Drive
                            Growth{" "}
                          </h1>
                          <div className="content">
                            <p>
                              Maintaining a positive online reputation is
                              critical for success in today's digital age. Our
                              comprehensive reputation management services help
                              you take control of your online narrative, build
                              trust with potential customers, and cultivate
                              lasting customer relationships, ultimately driving
                              business growth.
                            </p>{" "}
                          </div>
                          <a
                            href="/services/online-reputation-management/"
                            className="theme-btn"
                          >
                            <i className="iconoir-arrow-up-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- <script>
    AOS.init({
        duration: 1500,
        once: true,

    });</script>  --> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
