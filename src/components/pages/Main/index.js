import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import t1 from "./images/t1.png";
import t2 from "./images/t2.png";
import t3 from "./images/t3.png";
import t4 from "./images/t4.png";
import t5 from "./images/t5.png";
import t6 from "./images/t6.png";
import t7 from "./images/t7.png";
import t8 from "./images/t8.png";
import t9 from "./images/t9.png";

import Smoke from "./images/Smoke.mp4";
import { Link } from "react-router-dom";

export default function Main() {
  const [forTalent, setForTalent] = useState(true);
  const [tname, setTname] = useState("");
  const [tlo, setTlo] = useState("");
  const [tdesc, setTdesk] = useState("");
  const [tlink, setTlink] = useState("");
  const [tImg, setTimg] = useState(t1);

  const [showModal, setShowmodal] = useState(false);

  const names = [
    "Haris Hussain",
    "Babar Ali",
    "Aslihan Sarigül",
    "David Tunold",
    "Mohsin Bashir",
    "James Ooi",
    "Shruti Kohli",
    "Karin Veri",
    "Valerie Leroy",
  ];

  const desc = [
    "Highly knowledgeable with both traditional businesses and blockchain ecosystems. Successful track record in start-up and experienced in marketing, e-commerce, distribution as well as creative direction.",
    "Top of his class and successful in many startups, Babar possesses skills in blockchain and business development. He is a master of growth, strategic connections and international expansion.",
    "Gifted in terms of creative thinking and has the ability brew up great ideas on her feet. Experienced with broad fields of study in arts and sociology with experience in photography, design and illustration.",
    "Experienced with sales and management and an aspiring musician with an original style of his own. David is skilled in building connections and has an eye to seek out talent.",
    "Accounting, finance and research, Mohsin is power packed with skills. He is a master of bookkeeping and is always trying to explore and learn new ways to improve his talent.",
    "James is very social and enthusiastic about crypto and blockchain technology. He loves to talk about new ideas to be able to connect with the community and has a keen interest in the future of metaverse",
    "Passionate and enthusiast aptly define her. She has an extensive experience in the telecom and digital sector addressing tax, regulatory and business structure issues. She loves the emerging world of crypto.",
    "Passionate about all things digital and their social-political impact on the civil society. She is also an experienced arts and theatre producer, with a vast international network of artists and creators.",
    "She has great industry insight and a problem-solving approach. Valerie has leadership skills and knows how to get the job done. Her skills and talent make her prepared to deal with any outcome on her feet.",
  ];

  const lo = [
    "FOUNDER & CEO",
    "CO-FOUNDER",
    "CONCEPT DEVELOPER",
    "TALENT MANAGER",
    "ACCOUNTS & FINANCE",
    "COMMUNITY MANAGER",
    "PARTNERSHIP ADVISOR",
    "PARTNERSHIP ADVISOR",
    "BUSINESS ADVISOR",
  ];

  const links = [
    "https://www.linkedin.com/in/qazi-haris-hussain/",
    "https://www.linkedin.com/in/babar110/",
    "https://www.linkedin.com/in/asl%C4%B1han-s-109569109/",
    "https://www.linkedin.com/in/david-tunold-a5b362225/",
    "https://www.linkedin.com/in/mohsin-bashir/",
    "https://www.linkedin.com/in/james-ooi-1bb677177/",
    "https://www.linkedin.com/in/shruti-kohli-35377b52/",
    "https://www.linkedin.com/in/karinaverigina/",
    "https://www.linkedin.com/in/leroyvalerie/",
  ];

  const [path, setPath] = useState(0);

  const moveRoad = (direction) => {
    if (direction === "right") {
      setPath(path - 300);
      if (path <= -1200) {
        setPath(-1200);
      }
    }

    if (direction === "left") {
      setPath(path + 300);
      if (path >= 0) {
        setPath(0);
      }
    }
  };

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const setTeam = (index) => {
    setTname(names[index]);
    setTlo(lo[index]);
    setTdesk(desc[index]);
    setTlink(links[index]);

    if (index === 0) {
      setTimg(t1);
    }

    if (index === 1) {
      setTimg(t2);
    }

    if (index === 2) {
      setTimg(t3);
    }

    if (index === 3) {
      setTimg(t4);
    }

    if (index === 4) {
      setTimg(t5);
    }

    if (index === 5) {
      setTimg(t6);
    }

    if (index === 6) {
      setTimg(t7);
    }

    if (index === 7) {
      setTimg(t8);
    }
    if (index === 8) {
      setTimg(t9);
    }
    setShowmodal(true);
  };

  const classFooter =
    document.body.scrollHeight <= offset + window.innerHeight
      ? "section6item gr--sec6item"
      : "section6item ";
  return (
    <React.Fragment>
      {showModal ? (
        <React.Fragment>
          <div onClick={() => setShowmodal(false)} className="teamOverlay">
            <div className="teamOverlayOuter">
              <div
                onClick={(e) => e.stopPropagation()}
                className="teamOverlayModal"
              >
                <div
                  onClick={() => setShowmodal(false)}
                  className="teamOverlayModalCross"
                >
                  <i class="fa-solid fa-x"></i>
                </div>
                <div className="teamOverlayModalLeft">
                  <img src={tImg} />
                </div>
                <div className="teamOverlayModalRight">
                  <div className="teamOverlayModalRight1">{tname}</div>
                  <div className="teamOverlayModalRight2">{tlo}</div>
                  <div className="teamOverlayModalRight3">{tdesc}</div>
                  <a
                    target="_blank"
                    href={tlink}
                    className="teamOverlayModalRight4"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : null}

      <div
        className={showModal ? "bodyWrapper bodyWrapperBlured" : "bodyWrapper"}
      >
        <div className="dancer"></div>

        <div className="section section1">
          <div className="sectionWrapper">
            <div className="smokeWrapper">
              <div className="smoke smoke1"></div>
              <div className="smoke smoke1"></div>
              <div className="smoke smoke1"></div>
              <div className="smoke smoke1"></div>
            </div>
            <div className="section1main">
              <div className="section1arrowLeft">
                {forTalent ? null : (
                  <i
                    onClick={() => {
                      setForTalent(true);
                    }}
                    class="fa-solid fa-caret-left"
                  ></i>
                )}
              </div>

              {forTalent ? (
                <div className="section1image">
                  <div className="section1imageTalent"></div>
                </div>
              ) : null}

              {forTalent ? null : (
                <div className="section1image">
                  <div className="section1imageVoters"></div>
                </div>
              )}

              <div className="section1Content">
                <div className="section1ContentSwitcher">
                  <div
                    onClick={() => setForTalent(true)}
                    className={
                      forTalent
                        ? "section1ContentSwitcherItem section1ContentSwitcherItemActive"
                        : "section1ContentSwitcherItem"
                    }
                  >
                    COMPETE TO EARN
                  </div>
                  <div
                    onClick={() => setForTalent(false)}
                    className={
                      forTalent
                        ? "section1ContentSwitcherItem"
                        : "section1ContentSwitcherItem section1ContentSwitcherItemActive2"
                    }
                  >
                    VOTE TO EARN
                  </div>
                </div>

                {forTalent ? (
                  <div className="section1ContentTitle">
                    Join contests to earn rewards and title
                  </div>
                ) : null}

                {forTalent ? null : (
                  <div className="section1ContentTitle section1ContentTitleB">
                    Earn rewards for voting in contests
                  </div>
                )}

                {forTalent ? (
                  <div className="section1ContentText">
                    Hood Legends is a community driven, blockchain based mobile
                    application platform for artists such as singers, dancers,
                    magicians, comedians, actors, etc. to compete with each
                    other for rewards and title.
                  </div>
                ) : null}

                {forTalent ? null : (
                  <div className="section1ContentText section1ContentTextB">
                    As community, you can earn tokens for voting in contests. We
                    have designed an ecosystem that helps you engage like never
                    before, making Hood Legends a one of a kind and the first
                    ever talent platform for community.
                  </div>
                )}

                <div className="section1ContentHint">
                  COMING SOON TO ANDROID & IOS
                </div>
              </div>

              <div className="section1arrowRight">
                {forTalent ? (
                  <i
                    onClick={() => {
                      setForTalent(false);
                    }}
                    class="fa-solid fa-caret-right"
                  ></i>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="section section2">
          <div className="sectionWrapper">
            <div className="sectionSmallTitle">TRUE WEB 3.0 IS HERE</div>
            <div className="sectionBigTitle">The stage is now truly yours</div>

            <div className="section2video">
              <iframe
                src="https://www.youtube.com/embed/LQkRBM68Ocs?controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="section section3">
          <div className="sectionWrapper">
            <div className="sectionSmallTitle">PLATFORM FEATURES</div>
            <div className="sectionBigTitle">Blockchain meets use-case</div>

            <div className="section3text">
              We are solving a huge problem that many professional and talented
              people go through. Our platform gives a fair and equal chance to
              everyone.
            </div>

            <div className="section3itemsWrapper">
              <div className="section3item">
                <div className="section3itemTitle">Stage for everyone</div>
                <div className="section3itemText">
                  Our platform is open to anyone who wishes to compete and
                  showcase their talent. We have no barrier to entry so everyone
                  gets a fair chance.
                </div>
              </div>

              <div className="section3item section3item2">
                <div className="section3itemTitle">Community voting</div>
                <div className="section3itemText">
                  No more monopoly of judges, our decision makers are the people
                  themselves. Who wins or who loses is entirely decided by the
                  people.
                </div>
              </div>

              <div className="section3item">
                <div className="section3itemTitle">3-Way Economy</div>
                <div className="section3itemText">
                  We have designed an ecosystem that rewards stakers true value
                  such as voting rights, viewing rights, etc. instead of
                  unsustainable returns.
                </div>
              </div>

              <div className="section3item section3item2">
                <div className="section3itemTitle">Marketplace</div>
                <div className="section3itemText">
                  Our voters can enjoy exclusive rewards that will be available
                  only at our marketplace. We will offer both digital and
                  physical goods.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section section4">
          <div className="sectionWrapper">
            <div className="sectionSmallTitle">MEET THE TEAM</div>
            <div className="sectionBigTitle">Ready to change the world</div>
            <div className="section3text">
              A super diverse team of talented people known to get things done.
              We have people from all around the globe with a common goal, to
              make Web 3.0 accessible to all.
            </div>

            <div className="section4itemsWrapper">
              <div onClick={() => setTeam(0)} className="section4item">
                <div className="section4itemImage section4itemImage1">
                  <img src={t1} />
                </div>
                <div className="section4itemName">HARIS HUSSAIN</div>
                <div className="section4itemHint">FOUNDER & CEO</div>
              </div>

              <div onClick={() => setTeam(1)} className="section4item">
                <div className="section4itemImage section4itemImage2">
                  <img src={t2} />
                </div>
                <div className="section4itemName">BABAR ALI</div>
                <div className="section4itemHint">CO-FOUNDER</div>
              </div>

              <div onClick={() => setTeam(2)} className="section4item">
                <div className="section4itemImage section4itemImage3">
                  <img src={t3} />
                </div>
                <div className="section4itemName">ASLIHAN SARIGÜL</div>
                <div className="section4itemHint">CONCEPT DEVELOPER</div>
              </div>

              <div onClick={() => setTeam(3)} className="section4item">
                <div className="section4itemImage section4itemImage4">
                  <img src={t4} />
                </div>
                <div className="section4itemName">DAVID TUNOLD</div>
                <div className="section4itemHint">TALENT MANAGER</div>
              </div>

              <div className="teamSpacer"></div>

              <div onClick={() => setTeam(4)} className="section4item">
                <div className="section4itemImage section4itemImage5">
                  <img src={t5} />
                </div>
                <div className="section4itemName">MOHSIN BASHIR</div>
                <div className="section4itemHint">ACCOUNTS & FINANCE</div>
              </div>

              <div onClick={() => setTeam(5)} className="section4item">
                <div className="section4itemImage section4itemImage6">
                  <img src={t6} />
                </div>
                <div className="section4itemName">JAMES OOI</div>
                <div className="section4itemHint">COMMUNITY MANAGER</div>
              </div>

              <div onClick={() => setTeam(6)} className="section4item">
                <div className="section4itemImage section4itemImage7">
                  <img src={t7} />
                </div>
                <div className="section4itemName">SHRUTI KOHLI</div>
                <div className="section4itemHint">PARTNERSHIP ADVISOR</div>
              </div>

              <div onClick={() => setTeam(7)} className="section4item">
                <div className="section4itemImage section4itemImage8">
                  <img src={t8} />
                </div>
                <div className="section4itemName">KARIN VERI</div>
                <div className="section4itemHint">PARTNERSHIP ADVISOR</div>
              </div>

              <div onClick={() => setTeam(8)} className="section4item">
                <div className="section4itemImage section4itemImage9">
                  <img src={t9} />
                </div>
                <div className="section4itemName">VALERIE LEROY</div>
                <div className="section4itemHint">BUSINESS ADVISOR</div>
              </div>
            </div>
          </div>
        </div>

        <div className="section section5">
          <div className="sectionWrapper">
            <div className="sectionSmallTitle">ROADMAP</div>
            <div className="sectionBigTitle">Prioritizing what matters</div>
            <div className="section3text">
              We are a diverse team of talented people who love what they do. We
              have people from all around the globe with a common goal, to make
              Web 3.0 accessible to all.
            </div>

            <div class="section5masterWrapper">
              <div className="section5outer">
                <div
                  style={{ transform: `translateX(${path}px)` }}
                  className="section5itemsWrapper"
                >
                  <div className="section5item">
                    <div className="section5itemTitle">Q4 2022</div>
                    <div className="section5itemLine section5itemLineDone">
                      <i class="fa-solid fa-circle-check"></i> Preliminary Team
                      Formation
                    </div>
                    <div className="section5itemLine section5itemLineDone">
                      <i class="fa-solid fa-circle-check"></i> Initial Concepts
                    </div>
                    <div className="section5itemLine section5itemLineDone">
                      <i class="fa-solid fa-circle-check"></i> Preliminary
                      Market Research
                    </div>
                    <div className="section5itemLine section5itemLineNow">
                      <i class="fa-solid fa-circle-dot"></i> Pre-Seed Round
                    </div>
                    <div className="section5itemLine section5itemLineNow">
                      <i class="fa-solid fa-circle-dot"></i> Economic Research
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Tokenomics
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Whitepaper
                    </div>
                  </div>

                  <div className="section5item">
                    <div className="section5itemTitle">Q1 2023</div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Application
                      Wireframes
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Application
                      Development
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Website Development
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Marketing Exploration
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Seed / Private Round
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Deploy Smart
                      Contracts
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Security Audit
                    </div>
                  </div>

                  <div className="section5item">
                    <div className="section5itemTitle">Q2 2023</div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Continued Development
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Media Partnerships
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Influencer Engagement
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Preliminary Marketing
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Presale A & B
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Legal Advice
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Progress Analysis
                    </div>
                  </div>

                  <div className="section5item">
                    <div className="section5itemTitle">Q3 2023</div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i>Alpha Testing
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Hood Legends Trailer
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Initiate Marketing
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Launchpads
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Token Generation
                      Event
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Holders Incentive
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> CEX Listing
                    </div>
                  </div>

                  <div className="section5item">
                    <div className="section5itemTitle">Q4 2023</div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Closed Beta
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Continued Marketing
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Launch & Growth
                      Strategy
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Marketplace
                      Development
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Marketplace
                      Partnerships
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Secondary Audits
                    </div>
                    <div className="section5itemLine">
                      <i class="fa-regular fa-circle"></i> Progress & Growth
                      Analysis
                    </div>
                  </div>
                </div>
              </div>

              <div className="section5overlay">
                {path >= 0 ? null : (
                  <div className="section5overlayLeft">
                    <i
                      onClick={() => moveRoad("left")}
                      class="fa-solid fa-caret-left"
                    ></i>
                  </div>
                )}

                {path <= -1200 ? null : (
                  <div className="section5overlayRight">
                    <i
                      onClick={() => moveRoad("right")}
                      class="fa-solid fa-caret-right"
                    ></i>
                  </div>
                )}
              </div>
            </div>

            <div className="section5legend">
              <div className="section5legendItem section5legendItem1">
                <i class="fa-solid fa-circle-check"></i> Completed
              </div>
              <div className="section5legendItem section5legendItem2">
                <i class="fa-solid fa-circle-dot"></i> In-Progress
              </div>
              <div className="section5legendItem section5legendItem3">
                <i class="fa-regular fa-circle"></i> Incomplete
              </div>
            </div>
          </div>
        </div>

        <div className="section section6">
          <div className="sectionWrapper">
            <div className="section6title">hello@hoodlegends.io</div>

            <div className="copyright">
              COPYRIGHT HOOD LEGENDS 2022 - ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </div>

      {showModal ? null : (
        <React.Fragment>
          <div
            className={offset === 0 ? "newHeader newHeaderTra" : "newHeader"}
          >
            <div
              style={{ transform: `translateY(-${offset}px)` }}
              className={
                offset === 0
                  ? "bodyWrapperEffect bodyWrapperEffectTra"
                  : "bodyWrapperEffect"
              }
            >
              <div className="dancer"></div>

              <div className="section section1">
                <div className="sectionWrapper">
                  <div className="smokeWrapper">
                    <div className="smoke smoke1"></div>
                    <div className="smoke smoke1"></div>
                    <div className="smoke smoke1"></div>
                    <div className="smoke smoke1"></div>
                  </div>
                  <div className="section1main">
                    <div className="section1arrowLeft">
                      {forTalent ? null : (
                        <i
                          onClick={() => {
                            setForTalent(true);
                          }}
                          class="fa-solid fa-caret-left"
                        ></i>
                      )}
                    </div>

                    {forTalent ? (
                      <div className="section1image">
                        <div className="section1imageTalent"></div>
                      </div>
                    ) : null}

                    {forTalent ? null : (
                      <div className="section1image">
                        <div className="section1imageVoters"></div>
                      </div>
                    )}

                    <div className="section1Content">
                      <div className="section1ContentSwitcher">
                        <div
                          onClick={() => setForTalent(true)}
                          className={
                            forTalent
                              ? "section1ContentSwitcherItem section1ContentSwitcherItemActive"
                              : "section1ContentSwitcherItem"
                          }
                        >
                          COMPETE TO EARN
                        </div>
                        <div
                          onClick={() => setForTalent(false)}
                          className={
                            forTalent
                              ? "section1ContentSwitcherItem"
                              : "section1ContentSwitcherItem section1ContentSwitcherItemActive2"
                          }
                        >
                          VOTE TO EARN
                        </div>
                      </div>

                      {forTalent ? (
                        <div className="section1ContentTitle">
                          Join contests to earn rewards and title
                        </div>
                      ) : null}

                      {forTalent ? null : (
                        <div className="section1ContentTitle section1ContentTitleB">
                          Earn rewards for voting in contests
                        </div>
                      )}

                      {forTalent ? (
                        <div className="section1ContentText">
                          Hood Legends is a community driven, blockchain based
                          mobile application platform for artists such as
                          singers, dancers, magicians, comedians, actors, etc.
                          to compete with each other for rewards and title.
                        </div>
                      ) : null}

                      {forTalent ? null : (
                        <div className="section1ContentText section1ContentTextB">
                          As community, you can earn tokens for voting in
                          contests. We have designed an ecosystem that helps you
                          engage like never before, making Hood Legends a one of
                          a kind and the first ever talent platform for
                          community.
                        </div>
                      )}

                      <div className="section1ContentHint">
                        COMING SOON TO ANDROID & IOS
                      </div>
                    </div>

                    <div className="section1arrowRight">
                      {forTalent ? (
                        <i
                          onClick={() => {
                            setForTalent(false);
                          }}
                          class="fa-solid fa-caret-right"
                        ></i>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              <div className="section section2">
                <div className="sectionWrapper">
                  <div className="sectionSmallTitle">TRUE WEB 3.0 IS HERE</div>
                  <div className="sectionBigTitle">
                    The stage is now truly yours
                  </div>

                  <div className="section2video">
                    <iframe
                      src="https://www.youtube.com/embed/LQkRBM68Ocs?controls=0"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="section section3">
                <div className="sectionWrapper">
                  <div className="sectionSmallTitle">PLATFORM FEATURES</div>
                  <div className="sectionBigTitle">
                    Blockchain meets use-case
                  </div>

                  <div className="section3text">
                    We are solving a huge problem that many professional and
                    talented people go through. Our platform gives a fair and
                    equal chance to everyone.
                  </div>

                  <div className="section3itemsWrapper">
                    <div className="section3item">
                      <div className="section3itemTitle">
                        Stage for everyone
                      </div>
                      <div className="section3itemText">
                        Our platform is open to anyone who wishes to compete and
                        showcase their talent. We have no barrier to entry so
                        everyone gets a fair chance.
                      </div>
                    </div>

                    <div className="section3item section3item2">
                      <div className="section3itemTitle">Community voting</div>
                      <div className="section3itemText">
                        No more monopoly of judges, our decision makers are the
                        people themselves. Who wins or who loses is entirely
                        decided by the people.
                      </div>
                    </div>

                    <div className="section3item">
                      <div className="section3itemTitle">3-Way Economy</div>
                      <div className="section3itemText">
                        We have designed an ecosystem that rewards stakers true
                        value such as voting rights, viewing rights, etc.
                        instead of unsustainable returns.
                      </div>
                    </div>

                    <div className="section3item section3item2">
                      <div className="section3itemTitle">Marketplace</div>
                      <div className="section3itemText">
                        Our voters can enjoy exclusive rewards that will be
                        available only at our marketplace. We will offer both
                        digital and physical goods.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section section4">
                <div className="sectionWrapper">
                  <div className="sectionSmallTitle">MEET THE TEAM</div>
                  <div className="sectionBigTitle">
                    Ready to change the world
                  </div>
                  <div className="section3text">
                    A super diverse team of talented people known to get things
                    done. We have people from all around the globe with a common
                    goal, to make Web 3.0 accessible to all.
                  </div>

                  <div className="section4itemsWrapper">
                    <div onClick={() => setTeam(0)} className="section4item">
                      <div className="section4itemImage section4itemImage1">
                        <img src={t1} />
                      </div>
                      <div className="section4itemName">HARIS HUSSAIN</div>
                      <div className="section4itemHint">FOUNDER & CEO</div>
                    </div>

                    <div onClick={() => setTeam(1)} className="section4item">
                      <div className="section4itemImage section4itemImage2">
                        <img src={t2} />
                      </div>
                      <div className="section4itemName">BABAR ALI</div>
                      <div className="section4itemHint">CO-FOUNDER</div>
                    </div>

                    <div onClick={() => setTeam(2)} className="section4item">
                      <div className="section4itemImage section4itemImage3">
                        <img src={t3} />
                      </div>
                      <div className="section4itemName">ASLIHAN SARIGÜL</div>
                      <div className="section4itemHint">CONCEPT DEVELOPER</div>
                    </div>

                    <div onClick={() => setTeam(3)} className="section4item">
                      <div className="section4itemImage section4itemImage4">
                        <img src={t4} />
                      </div>
                      <div className="section4itemName">DAVID TUNOLD</div>
                      <div className="section4itemHint">TALENT MANAGER</div>
                    </div>

                    <div className="teamSpacer"></div>

                    <div onClick={() => setTeam(4)} className="section4item">
                      <div className="section4itemImage section4itemImage5">
                        <img src={t5} />
                      </div>
                      <div className="section4itemName">MOHSIN BASHIR</div>
                      <div className="section4itemHint">ACCOUNTS & FINANCE</div>
                    </div>

                    <div onClick={() => setTeam(5)} className="section4item">
                      <div className="section4itemImage section4itemImage6">
                        <img src={t6} />
                      </div>
                      <div className="section4itemName">JAMES OOI</div>
                      <div className="section4itemHint">COMMUNITY MANAGER</div>
                    </div>

                    <div onClick={() => setTeam(6)} className="section4item">
                      <div className="section4itemImage section4itemImage7">
                        <img src={t7} />
                      </div>
                      <div className="section4itemName">SHRUTI KOHLI</div>
                      <div className="section4itemHint">
                        PARTNERSHIP ADVISOR
                      </div>
                    </div>

                    <div onClick={() => setTeam(7)} className="section4item">
                      <div className="section4itemImage section4itemImage8">
                        <img src={t8} />
                      </div>
                      <div className="section4itemName">KARIN VERI</div>
                      <div className="section4itemHint">
                        PARTNERSHIP ADVISOR
                      </div>
                    </div>

                    <div onClick={() => setTeam(8)} className="section4item">
                      <div className="section4itemImage section4itemImage9">
                        <img src={t9} />
                      </div>
                      <div className="section4itemName">VALERIE LEROY</div>
                      <div className="section4itemHint">BUSINESS ADVISOR</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section section5">
                <div className="sectionWrapper">
                  <div className="sectionSmallTitle">ROADMAP</div>
                  <div className="sectionBigTitle">
                    Prioritizing what matters
                  </div>
                  <div className="section3text">
                    We are a diverse team of talented people who love what they
                    do. We have people from all around the globe with a common
                    goal, to make Web 3.0 accessible to all.
                  </div>

                  <div class="section5masterWrapper">
                    <div className="section5outer">
                      <div
                        style={{ transform: `translateX(${path}px)` }}
                        className="section5itemsWrapper"
                      >
                        <div className="section5item">
                          <div className="section5itemTitle">Q4 2022</div>
                          <div className="section5itemLine section5itemLineDone">
                            <i class="fa-solid fa-circle-check"></i> Preliminary
                            Team Formation
                          </div>
                          <div className="section5itemLine section5itemLineDone">
                            <i class="fa-solid fa-circle-check"></i> Initial
                            Concepts
                          </div>
                          <div className="section5itemLine section5itemLineDone">
                            <i class="fa-solid fa-circle-check"></i> Preliminary
                            Market Research
                          </div>
                          <div className="section5itemLine section5itemLineNow">
                            <i class="fa-solid fa-circle-dot"></i> Pre-Seed
                            Round
                          </div>
                          <div className="section5itemLine section5itemLineNow">
                            <i class="fa-solid fa-circle-dot"></i> Economic
                            Research
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Tokenomics
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Whitepaper
                          </div>
                        </div>

                        <div className="section5item">
                          <div className="section5itemTitle">Q1 2023</div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Application
                            Wireframes
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Application
                            Development
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Website
                            Development
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Marketing
                            Exploration
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Seed / Private
                            Round
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Deploy Smart
                            Contracts
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Security Audit
                          </div>
                        </div>

                        <div className="section5item">
                          <div className="section5itemTitle">Q2 2023</div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Continued
                            Development
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Media
                            Partnerships
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Influencer
                            Engagement
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Preliminary
                            Marketing
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Presale A & B
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Legal Advice
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Progress
                            Analysis
                          </div>
                        </div>

                        <div className="section5item">
                          <div className="section5itemTitle">Q3 2023</div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i>Alpha Testing
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Hood Legends
                            Trailer
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Initiate
                            Marketing
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Launchpads
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Token
                            Generation Event
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Holders
                            Incentive
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> CEX Listing
                          </div>
                        </div>

                        <div className="section5item">
                          <div className="section5itemTitle">Q4 2023</div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Closed Beta
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Continued
                            Marketing
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Launch & Growth
                            Strategy
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Marketplace
                            Development
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Marketplace
                            Partnerships
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Secondary
                            Audits
                          </div>
                          <div className="section5itemLine">
                            <i class="fa-regular fa-circle"></i> Progress &
                            Growth Analysis
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="section5overlay">
                      {path >= 0 ? null : (
                        <div className="section5overlayLeft">
                          <i
                            onClick={() => moveRoad("left")}
                            class="fa-solid fa-caret-left"
                          ></i>
                        </div>
                      )}

                      {path <= -1200 ? null : (
                        <div className="section5overlayRight">
                          <i
                            onClick={() => moveRoad("right")}
                            class="fa-solid fa-caret-right"
                          ></i>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="section5legend">
                    <div className="section5legendItem section5legendItem1">
                      <i class="fa-solid fa-circle-check"></i> Completed
                    </div>
                    <div className="section5legendItem section5legendItem2">
                      <i class="fa-solid fa-circle-dot"></i> In-Progress
                    </div>
                    <div className="section5legendItem section5legendItem3">
                      <i class="fa-regular fa-circle"></i> Incomplete
                    </div>
                  </div>
                </div>
              </div>

              <div className="section section6">
                <div className="sectionWrapper">
                  <div className="section6title">hello@hoodlegends.io</div>

                  <div className="copyright">
                    COPYRIGHT HOOD LEGENDS 2022 - ALL RIGHTS RESERVED
                  </div>
                </div>
              </div>
            </div>

            <div className="headerWrapper">
              <div className="header">
                <a
                  target="_blank"
                  href="#"
                  className="headerLogo"
                  style={{
                    width: offset === 0 ? "220px" : "180px",
                  }}
                ></a>
                <div className="headerMenu">
                  <a
                    target="_blank"
                    href="#"
                    className="headerMenuSmallButton headerMenuSmallButtonActive"
                  >
                    INTRODUCTION
                  </a>

                  <a target="_blank" href="#" className="headerMenuSmallButton">
                    PITCH DECK
                  </a>

                  {/* <div className="headerSpacer"></div> */}

                  <a
                    target="_blank"
                    href="#"
                    className="headerMenuBigButton headerMenuBigButton1"
                  >
                    PRE-SEED COMING SOON
                  </a>
                  {/* <div className='headerMenuBigButton headerMenuBigButton2'>
                        CONNECT WALLET
                         </div> */}
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              document.body.scrollHeight <= offset + window.innerHeight
                ? "newHeaderBottom newHeaderBottomTra"
                : "newHeaderBottom"
            }
          >
            {document.body.scrollHeight <=
            offset + window.innerHeight ? null : (
              <div
                style={{ transform: `translateY(-${offset}px)` }}
                className="bodyWrapperEffect bodyWrapperEffectBottom"
              >
                <div className="dancer"></div>

                <div className="section section1">
                  <div className="sectionWrapper">
                    <div className="smokeWrapper">
                      <div className="smoke smoke1"></div>
                      <div className="smoke smoke1"></div>
                      <div className="smoke smoke1"></div>
                      <div className="smoke smoke1"></div>
                    </div>
                    <div className="section1main">
                      <div className="section1arrowLeft">
                        {forTalent ? null : (
                          <i
                            onClick={() => {
                              setForTalent(true);
                            }}
                            class="fa-solid fa-caret-left"
                          ></i>
                        )}
                      </div>

                      {forTalent ? (
                        <div className="section1image">
                          <div className="section1imageTalent"></div>
                        </div>
                      ) : null}

                      {forTalent ? null : (
                        <div className="section1image">
                          <div className="section1imageVoters"></div>
                        </div>
                      )}

                      <div className="section1Content">
                        <div className="section1ContentSwitcher">
                          <div
                            onClick={() => setForTalent(true)}
                            className={
                              forTalent
                                ? "section1ContentSwitcherItem section1ContentSwitcherItemActive"
                                : "section1ContentSwitcherItem"
                            }
                          >
                            COMPETE TO EARN
                          </div>
                          <div
                            onClick={() => setForTalent(false)}
                            className={
                              forTalent
                                ? "section1ContentSwitcherItem"
                                : "section1ContentSwitcherItem section1ContentSwitcherItemActive2"
                            }
                          >
                            VOTE TO EARN
                          </div>
                        </div>

                        {forTalent ? (
                          <div className="section1ContentTitle">
                            Join contests to earn rewards and title
                          </div>
                        ) : null}

                        {forTalent ? null : (
                          <div className="section1ContentTitle section1ContentTitleB">
                            Earn rewards for voting in contests
                          </div>
                        )}

                        {forTalent ? (
                          <div className="section1ContentText">
                            Hood Legends is a community driven, blockchain based
                            mobile application platform for artists such as
                            singers, dancers, magicians, comedians, actors, etc.
                            to compete with each other for rewards and title.
                          </div>
                        ) : null}

                        {forTalent ? null : (
                          <div className="section1ContentText section1ContentTextB">
                            As community, you can earn tokens for voting in
                            contests. We have designed an ecosystem that helps
                            you engage like never before, making Hood Legends a
                            one of a kind and the first ever talent platform for
                            community.
                          </div>
                        )}

                        <div className="section1ContentHint">
                          COMING SOON TO ANDROID & IOS
                        </div>
                      </div>

                      <div className="section1arrowRight">
                        {forTalent ? (
                          <i
                            onClick={() => {
                              setForTalent(false);
                            }}
                            class="fa-solid fa-caret-right"
                          ></i>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section section2">
                  <div className="sectionWrapper">
                    <div className="sectionSmallTitle">
                      TRUE WEB 3.0 IS HERE
                    </div>
                    <div className="sectionBigTitle">
                      The stage is now truly yours
                    </div>

                    <div className="section2video">
                      <iframe
                        src="https://www.youtube.com/embed/LQkRBM68Ocs?controls=0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>

                <div className="section section3">
                  <div className="sectionWrapper">
                    <div className="sectionSmallTitle">PLATFORM FEATURES</div>
                    <div className="sectionBigTitle">
                      Blockchain meets use-case
                    </div>

                    <div className="section3text">
                      We are solving a huge problem that many professional and
                      talented people go through. Our platform gives a fair and
                      equal chance to everyone.
                    </div>

                    <div className="section3itemsWrapper">
                      <div className="section3item">
                        <div className="section3itemTitle">
                          Stage for everyone
                        </div>
                        <div className="section3itemText">
                          Our platform is open to anyone who wishes to compete
                          and showcase their talent. We have no barrier to entry
                          so everyone gets a fair chance.
                        </div>
                      </div>

                      <div className="section3item section3item2">
                        <div className="section3itemTitle">
                          Community voting
                        </div>
                        <div className="section3itemText">
                          No more monopoly of judges, our decision makers are
                          the people themselves. Who wins or who loses is
                          entirely decided by the people.
                        </div>
                      </div>

                      <div className="section3item">
                        <div className="section3itemTitle">3-Way Economy</div>
                        <div className="section3itemText">
                          We have designed an ecosystem that rewards stakers
                          true value such as voting rights, viewing rights, etc.
                          instead of unsustainable returns.
                        </div>
                      </div>

                      <div className="section3item section3item2">
                        <div className="section3itemTitle">Marketplace</div>
                        <div className="section3itemText">
                          Our voters can enjoy exclusive rewards that will be
                          available only at our marketplace. We will offer both
                          digital and physical goods.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section section4">
                  <div className="sectionWrapper">
                    <div className="sectionSmallTitle">MEET THE TEAM</div>
                    <div className="sectionBigTitle">
                      Ready to change the world
                    </div>
                    <div className="section3text">
                      A super diverse team of talented people known to get
                      things done. We have people from all around the globe with
                      a common goal, to make Web 3.0 accessible to all.
                    </div>

                    <div className="section4itemsWrapper">
                      <div onClick={() => setTeam(0)} className="section4item">
                        <div className="section4itemImage section4itemImage1">
                          <img src={t1} />
                        </div>
                        <div className="section4itemName">HARIS HUSSAIN</div>
                        <div className="section4itemHint">FOUNDER & CEO</div>
                      </div>

                      <div onClick={() => setTeam(1)} className="section4item">
                        <div className="section4itemImage section4itemImage2">
                          <img src={t2} />
                        </div>
                        <div className="section4itemName">BABAR ALI</div>
                        <div className="section4itemHint">CO-FOUNDER</div>
                      </div>

                      <div onClick={() => setTeam(2)} className="section4item">
                        <div className="section4itemImage section4itemImage3">
                          <img src={t3} />
                        </div>
                        <div className="section4itemName">ASLIHAN SARIGÜL</div>
                        <div className="section4itemHint">
                          CONCEPT DEVELOPER
                        </div>
                      </div>

                      <div onClick={() => setTeam(3)} className="section4item">
                        <div className="section4itemImage section4itemImage4">
                          <img src={t4} />
                        </div>
                        <div className="section4itemName">DAVID TUNOLD</div>
                        <div className="section4itemHint">TALENT MANAGER</div>
                      </div>

                      <div className="teamSpacer"></div>

                      <div onClick={() => setTeam(4)} className="section4item">
                        <div className="section4itemImage section4itemImage5">
                          <img src={t5} />
                        </div>
                        <div className="section4itemName">MOHSIN BASHIR</div>
                        <div className="section4itemHint">
                          ACCOUNTS & FINANCE
                        </div>
                      </div>

                      <div onClick={() => setTeam(5)} className="section4item">
                        <div className="section4itemImage section4itemImage6">
                          <img src={t6} />
                        </div>
                        <div className="section4itemName">JAMES OOI</div>
                        <div className="section4itemHint">
                          COMMUNITY MANAGER
                        </div>
                      </div>

                      <div onClick={() => setTeam(6)} className="section4item">
                        <div className="section4itemImage section4itemImage7">
                          <img src={t7} />
                        </div>
                        <div className="section4itemName">SHRUTI KOHLI</div>
                        <div className="section4itemHint">
                          PARTNERSHIP ADVISOR
                        </div>
                      </div>

                      <div onClick={() => setTeam(7)} className="section4item">
                        <div className="section4itemImage section4itemImage8">
                          <img src={t8} />
                        </div>
                        <div className="section4itemName">KARIN VERI</div>
                        <div className="section4itemHint">
                          PARTNERSHIP ADVISOR
                        </div>
                      </div>

                      <div onClick={() => setTeam(8)} className="section4item">
                        <div className="section4itemImage section4itemImage9">
                          <img src={t9} />
                        </div>
                        <div className="section4itemName">VALERIE LEROY</div>
                        <div className="section4itemHint">BUSINESS ADVISOR</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section section5">
                  <div className="sectionWrapper">
                    <div className="sectionSmallTitle">ROADMAP</div>
                    <div className="sectionBigTitle">
                      Prioritizing what matters
                    </div>
                    <div className="section3text">
                      We are a diverse team of talented people who love what
                      they do. We have people from all around the globe with a
                      common goal, to make Web 3.0 accessible to all.
                    </div>

                    <div class="section5masterWrapper">
                      <div className="section5outer">
                        <div
                          style={{ transform: `translateX(${path}px)` }}
                          className="section5itemsWrapper"
                        >
                          <div className="section5item">
                            <div className="section5itemTitle">Q4 2022</div>
                            <div className="section5itemLine section5itemLineDone">
                              <i class="fa-solid fa-circle-check"></i>{" "}
                              Preliminary Team Formation
                            </div>
                            <div className="section5itemLine section5itemLineDone">
                              <i class="fa-solid fa-circle-check"></i> Initial
                              Concepts
                            </div>
                            <div className="section5itemLine section5itemLineDone">
                              <i class="fa-solid fa-circle-check"></i>{" "}
                              Preliminary Market Research
                            </div>
                            <div className="section5itemLine section5itemLineNow">
                              <i class="fa-solid fa-circle-dot"></i> Pre-Seed
                              Round
                            </div>
                            <div className="section5itemLine section5itemLineNow">
                              <i class="fa-solid fa-circle-dot"></i> Economic
                              Research
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Tokenomics
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Whitepaper
                            </div>
                          </div>

                          <div className="section5item">
                            <div className="section5itemTitle">Q1 2023</div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Application
                              Wireframes
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Application
                              Development
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Website
                              Development
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Marketing
                              Exploration
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Seed /
                              Private Round
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Deploy Smart
                              Contracts
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Security
                              Audit
                            </div>
                          </div>

                          <div className="section5item">
                            <div className="section5itemTitle">Q2 2023</div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Continued
                              Development
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Media
                              Partnerships
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Influencer
                              Engagement
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Preliminary
                              Marketing
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Presale A & B
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Legal Advice
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Progress
                              Analysis
                            </div>
                          </div>

                          <div className="section5item">
                            <div className="section5itemTitle">Q3 2023</div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Alpha Testing
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Hood Legends
                              Trailer
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Initiate
                              Marketing
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Launchpads
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Token
                              Generation Event
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Holders
                              Incentive
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> CEX Listing
                            </div>
                          </div>

                          <div className="section5item">
                            <div className="section5itemTitle">Q4 2023</div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Closed Beta
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Continued
                              Marketing
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Launch &
                              Growth Strategy
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Marketplace
                              Development
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Marketplace
                              Partnerships
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Secondary
                              Audits
                            </div>
                            <div className="section5itemLine">
                              <i class="fa-regular fa-circle"></i> Progress &
                              Growth Analysis
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="section5overlay">
                        {path >= 0 ? null : (
                          <div className="section5overlayLeft">
                            <i
                              onClick={() => moveRoad("left")}
                              class="fa-solid fa-caret-left"
                            ></i>
                          </div>
                        )}

                        {path <= -1200 ? null : (
                          <div className="section5overlayRight">
                            <i
                              onClick={() => moveRoad("right")}
                              class="fa-solid fa-caret-right"
                            ></i>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="section5legend">
                      <div className="section5legendItem section5legendItem1">
                        <i class="fa-solid fa-circle-check"></i> Completed
                      </div>
                      <div className="section5legendItem section5legendItem2">
                        <i class="fa-solid fa-circle-dot"></i> In-Progress
                      </div>
                      <div className="section5legendItem section5legendItem3">
                        <i class="fa-regular fa-circle"></i> Incomplete
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section section6">
                  <div className="sectionWrapper">
                    <div className="section6title">hello@hoodlegends.io</div>

                    <div className="copyright">
                      COPYRIGHT HOOD LEGENDS 2022 - ALL RIGHTS RESERVED
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div
              className="socialWrapper"
              style={{
                lineHeight:
                  document.body.scrollHeight <= offset + window.innerHeight
                    ? "60px"
                    : "46px",
                Height:
                  document.body.scrollHeight <= offset + window.innerHeight
                    ? "60px"
                    : "46px",
              }}
            >
              <a className={classFooter} href="https://t.me/hoodlegendsio">
                <i class="fa-brands fa-telegram"></i>
              </a>
              <a
                className={classFooter}
                href="https://discord.com/invite/fW49BbE5jX"
              >
                <i class="fa-brands fa-discord"></i>
              </a>
              <a
                className={classFooter}
                href="https://twitter.com/hoodlegendsio"
              >
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a
                className={classFooter}
                href="https://instagram.com/hoodlegendsio"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                className={classFooter}
                href="https://www.youtube.com/channel/UC6Earh4vsPPz1yAPFFhlVNg"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a
                className={classFooter}
                href="https://www.reddit.com/r/hoodlegendsio/"
              >
                <i class="fa-brands fa-reddit"></i>
              </a>
              <a
                className={classFooter}
                href="https://medium.com/@hoodlegendsio"
              >
                <i class="fa-brands fa-medium"></i>
              </a>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
