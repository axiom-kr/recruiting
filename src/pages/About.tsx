import { ForwardedRef, forwardRef } from "react";
import { css } from "../../styled-system/css";

const About = forwardRef<HTMLDivElement>(
  (_, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          lg: { flexDirection: "row" },
          justifyContent: "center",
          gap: ["50px", "100px", "150px", "200px"],
        })}
        id="about"
        ref={ref}
      >
        <div
          className={css({
            position: "sticky",
            top: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
            lg: { height: `100vh`, fontSize: "72px" },
            fontSize: "36px",
            color: "white",
            fontWeight: "extrabold",
          })}
        >
          <div
            className={css({
              height: "108px",
              lg: { height: "216px" },
              width: "6px",
              backgroundColor: "#FF993A",
            })}
            id="about-line-vertical"
          />
          <div
            className={css({
              pl: "40px",
            })}
            id="why-axiom"
          >
            WHY
            <br />
            AXIOM?
          </div>
        </div>
        <div
          className={css({
            display: "flex",
            gap: "50vh",
            flexDirection: "column",
          })}
        >
          <div
            className={css({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              lg: { height: `100vh` },
              fontSize: "16px",
              color: "white",
              fontWeight: "light",
              fontFamily: "gmarket",
              lineHeight: "32px",
            })}
          >
            <p>
              Axiom은 실제 창업을 목표로 도전과 성장을 경험하고 싶은 분들을{" "}
              <br />
              위해, 창업 초기의 준비과정을 지원하는{" "}
              <em className={css({ color: "#FF993A" })}>
                특별한 단체
              </em>입니다. <br />
              <br />
              다양한 분야에서 꿈을 키우고 있는 학생들이 함께 모여 비즈니스에{" "}
              <br />
              대해 끊임없이 고민하고 협력하는 혁신적인 가치를 제공합니다.
            </p>
          </div>
          <div
            className={css({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              lg: { height: `100vh` },
              fontSize: "16px",
              color: "white",
              fontWeight: "light",
              fontFamily: "gmarket",
              lineHeight: "32px",
            })}
          >
            <p>
              <em
                className={css({
                  color: "#FF993A",
                  fontSize: "24px",
                  fontWeight: "extrabold",
                })}
              >
                글로벌한 시야
              </em>
              <br />
              Axiom의 프로그램은 국내외 대학생/현업자들간의 활발한 네트워킹을
              <br />
              바탕으로 글로벌 시장 동향에 대한{" "}
              <em
                className={css({
                  color: "#FF993A",
                })}
              >
                다양한 해석과 시각
              </em>
              을 갖추도록 합니다. <br />
              스타트업 종사자 강연, 북미 창업 문화와 분위기 등을 체감하고 보다
              큰 <br />
              vision과 동기를 자극합니다.
              <br />
              <br />
              Axiom을 통해 구축한 글로벌 네트워크는 앞으로 멘티들의 여정에서{" "}
              <br />꼭 필요한 동료이자 경쟁자로 발돋움할 것 입니다.
            </p>
          </div>
          <div
            className={css({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              lg: { height: `100vh` },
              fontSize: "16px",
              color: "white",
              fontWeight: "light",
              fontFamily: "gmarket",
              lineHeight: "32px",
            })}
          >
            <p>
              <em
                className={css({
                  color: "#FF993A",
                  fontSize: "24px",
                  fontWeight: "extrabold",
                })}
              >
                실전역량 강화
              </em>
              <br />
              Phase 1~4에 속하는 프로그램은 끊임 없이 변화하는 창업 환경에서의
              <br />
              실질적인 경험과, 유연하고 객관적인 사고를 함양하는 데 초점을 두고
              <br />
              있습니다. <br />
              <br />
              대학생들이 주로 약점을 보이는{" "}
              <em
                className={css({
                  color: "#FF993A",
                })}
              >
                사업의 수익성과 BM
              </em>
              을 중점적으로
              <br />
              고안하며, 객관적이고 합리적인 피봇팅을 위한 사고의 전환역량을{" "}
              <br />
              강화시킵니다.
            </p>
          </div>
          <div
            className={css({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              lg: { height: `100vh` },
              fontSize: "16px",
              color: "white",
              fontWeight: "light",
              fontFamily: "gmarket",
              lineHeight: "32px",
            })}
          >
            <p>
              <em
                className={css({
                  color: "#FF993A",
                  fontSize: "24px",
                  fontWeight: "extrabold",
                })}
              >
                창의성과 혁신을 위한 최적의 환경
              </em>
              <br />
              Axiom은 서로 다른 배경과 경험을 가진 학생들이 모여 <br />
              새로운 시각과 아이디어를 공유함으로써 혁신적 발상을 촉진합니다.{" "}
              <br />
              <br />
              국내를 넘어{" "}
              <em
                className={css({
                  color: "#FF993A",
                })}
              >
                더 큰 시장의 가능성
              </em>
              을 보고, 열린 소통과 효과적인 협업을
              <br /> 통해 논리력과 창의력을 최대한 발휘할 수 있도록 지원합니다.
              <br />
              <br />
              Axiom과 함께, 창의적 아이디어를 세계적 혁신으로 이끄는 여정에{" "}
              <br />
              함께 하세요!
            </p>
          </div>
        </div>
      </div>
    );
  }
);

export default About;
