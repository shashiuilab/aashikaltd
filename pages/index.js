/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Navigation from '../components/Navigation';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center">

      <div className="logo me-auto">
        <h1><Link href="index.html">AASHIKA LTD</Link></h1>
      </div>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><Link className="nav-link scrollto active" href="#hero">Home</Link></li>
          <li><Link className="nav-link scrollto" href="#about">About</Link></li>
          <li><Link className="nav-link scrollto" href="#services">Services</Link></li>
          <li><Link className="nav-link scrollto " href="#portfolio">Portfolio</Link></li>
          <li><Link className="nav-link scrollto" href="#testimonials">Testimonials</Link></li>
          <li><Link className="nav-link scrollto" href="#contact">Contact</Link></li>
        </ul>
        <Link href="#"><i className="bi bi-list mobile-nav-toggle"></i></Link>
      </nav>

      <div className="header-social-links d-flex align-items-center">
        <Link href="#" className="twitter"><i className="bi bi-twitter"></i></Link>
        <Link href="#" className="facebook"><i className="bi bi-facebook"></i></Link>
        <Link href="#" className="instagram"><i className="bi bi-instagram"></i></Link>
        <Link href="#" className="linkedin"><i className="bi bi-linkedin"></i></Link>
      </div>
      </div>
  </header>
  <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="container text-center text-md-left" data-aos="fade-up">
      <h1>Welcome to <span>Aashika Ltd</span></h1>
      <h2>We are team of talented digital solutions provider</h2>
      <Link href="#about" className="btn-get-started scrollto">Get Started</Link>
    </div>
  </section>

  <main id="main">
    <section id="what-we-do" className="what-we-do">
      <div className="container">

        <div className="section-title">
          <h2>What We Do</h2>
          <p>Magnam dolores commodi suscipit consequatur ex aliquid</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4><Link href="">Lorem Ipsum</Link></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4><Link href="">Sed ut perspiciatis</Link></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4><Link href="">Magni Dolores</Link></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="about" className="about">
      <div className="container">

        <div className="row">
          <div className="col-lg-6">
            <img src="assets/img/Placeholder_view_vector.png" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            </ul>
            <div className="row icon-boxes">
              <div className="col-md-6">
                <i className="bx bx-receipt"></i>
                <h4>Corporis voluptates sit</h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <i className="bx bx-cube-alt"></i>
                <h4>Ullamco laboris nisi</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section id="skills" className="skills">
      <div className="container">

        <div className="row skills-content">

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">HTML <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">CSS <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">JavaScript <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">PHP <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">WordPress/CMS <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Photoshop <i className="val">55%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
    <section id="counts" className="counts">
      <div className="container">

        <div className="row">

          <div className="col-lg-3 col-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
              <p>Happy Clients</p>
            </div>
          </div>

          <div className="col-lg-3 col-6">
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
              <p>Projects</p>
            </div>
          </div>

          <div className="col-lg-3 col-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-headset"></i>
              <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
              <p>Hours Of Support</p>
            </div>
          </div>

          <div className="col-lg-3 col-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-people"></i>
              <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
              <p>Hard Workers</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="services" className="services section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Services</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="icon-box">
              <i className="bi bi-briefcase"></i>
              <h4><Link href="#">Lorem Ipsum</Link></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-lg-0">
            <div className="icon-box">
              <i className="bi bi-card-checklist"></i>
              <h4><Link href="#">Dolor Sitema</Link></h4>
              <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="icon-box">
              <i className="bi bi-bar-chart"></i>
              <h4><Link href="#">Sed ut perspiciatis</Link></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="icon-box">
              <i className="bi bi-binoculars"></i>
              <h4><Link href="#">Nemo Enim</Link></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="icon-box">
              <i className="bi bi-brightness-high"></i>
              <h4><Link href="#">Magni Dolore</Link></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="icon-box">
              <i className="bi bi-calendar4-week"></i>
              <h4><Link href="#">Eiusmod Tempor</Link></h4>
              <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section id="portfolio" className="portfolio">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit</p>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/portfolio.png" className="img-fluid" alt="" />
                <Link href="assets/img/portfolio/portfolio.png" data-gallery="portfolioGallery" className="link-preview portfolio-lightbox" title="Preview"><i className="bx bx-plus"></i></Link>
                <Link href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></Link>
              </figure>

              <div className="portfolio-info">
                <h4><Link href="portfolio-details.html">App 1</Link></h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/portfolio.png" className="img-fluid" alt="" />
                <Link href="assets/img/portfolio/portfolio.png" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></Link>
                <Link href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></Link>
              </figure>

              <div className="portfolio-info">
                <h4><Link href="portfolio-details.html">Web 3</Link></h4>
                <p>Web</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/portfolio.png" className="img-fluid" alt="" />
                <Link href="assets/img/portfolio/portfolio.png" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></Link>
                <Link href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></Link>
              </figure>

              <div className="portfolio-info">
                <h4><Link href="portfolio-details.html">App 2</Link></h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/portfolio.png" className="img-fluid" alt="" />
                <Link href="assets/img/portfolio/portfolio.png" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></Link>
                <Link href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></Link>
              </figure>

              <div className="portfolio-info">
                <h4><Link href="portfolio-details.html">Card 2</Link></h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/portfolio.png" className="img-fluid" alt="" />
                <Link href="assets/img/portfolio/portfolio.png" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></Link>
                <Link href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></Link>
              </figure>

              <div className="portfolio-info">
                <h4><Link href="portfolio-details.html">Web 2</Link></h4>
                <p>Web</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/portfolio.png" className="img-fluid" alt="" />
                <Link href="assets/img/portfolio/portfolio.png" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></Link>
                <Link href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></Link>
              </figure>

              <div className="portfolio-info">
                <h4><Link href="portfolio-details.html">App 3</Link></h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/portfolio.png" className="img-fluid" alt="" />
                <Link href="assets/img/portfolio/portfolio.png" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></Link>
                <Link href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></Link>
              </figure>

              <div className="portfolio-info">
                <h4><Link href="portfolio-details.html">Card 1</Link></h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp" data-wow-delay="0.1s">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/portfolio.png" className="img-fluid" alt="" />
                <Link href="assets/img/portfolio/portfolio.png" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></Link>
                <Link href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></Link>
              </figure>

              <div className="portfolio-info">
                <h4><Link href="portfolio-details.html">Card 3</Link></h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/portfolio.png" className="img-fluid" alt="" />
                <Link href="assets/img/portfolio/portfolio.png" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></Link>
                <Link href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></Link>
              </figure>

              <div className="portfolio-info">
                <h4><Link href="portfolio-details.html">Web 1</Link></h4>
                <p>Web</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="testimonials" className="testimonials section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Testimonials</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
        </div>

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonals.png" className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonals.png" className="testimonial-img" alt="" />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonals.png" className="testimonial-img" alt="" />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonals.png" className="testimonial-img" alt="" />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonals.png" className="testimonial-img" alt="" />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>

          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section>
    <section id="team" className="team">
      <div className="container">

        <div className="section-title">
          <h2>Team</h2>
          <p>Sit sint consectetur velit quos quisquam cupiditate nemo qui</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src="assets/img/team/team.png" alt="" />
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
              <p>
                Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
              </p>
              <div className="social">
                <Link href=""><i className="bi bi-twitter"></i></Link>
                <Link href=""><i className="bi bi-facebook"></i></Link>
                <Link href=""><i className="bi bi-instagram"></i></Link>
                <Link href=""><i className="bi bi-linkedin"></i></Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src="assets/img/team/team.png" alt="" />
              <h4>Sarah Jhinson</h4>
              <span>Product Manager</span>
              <p>
                Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
              </p>
              <div className="social">
                <Link href=""><i className="bi bi-twitter"></i></Link>
                <Link href=""><i className="bi bi-facebook"></i></Link>
                <Link href=""><i className="bi bi-instagram"></i></Link>
                <Link href=""><i className="bi bi-linkedin"></i></Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src="assets/img/team/team.png" alt="" />
              <h4>William Anderson</h4>
              <span>CTO</span>
              <p>
                Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
              </p>
              <div className="social">
                <Link href=""><i className="bi bi-twitter"></i></Link>
                <Link href=""><i className="bi bi-facebook"></i></Link>
                <Link href=""><i className="bi bi-instagram"></i></Link>
                <Link href=""><i className="bi bi-linkedin"></i></Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="contact" className="contact section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fuga</p>
        </div>

        <div className="row mt-5 justify-content-center">

          <div className="col-lg-10">

            <div className="info-wrap">
              <div className="row">
                <div className="col-lg-4 info">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street<br />New York, NY 535022</p>
                </div>

                <div className="col-lg-4 info mt-4 mt-lg-0">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com<br />contact@example.com</p>
                </div>

                <div className="col-lg-4 info mt-4 mt-lg-0">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 51<br />+1 5589 22475 14</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

  </main>
  </>
  )
}
