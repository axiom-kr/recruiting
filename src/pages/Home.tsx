import { ForwardedRef, forwardRef } from "react";
import { css } from "../../styled-system/css";

const Home = forwardRef<HTMLDivElement>(
  (_, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        className={css({
          height: `calc(100vh)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: "20px",
        })}
        ref={ref}
        id="home"
      >
        <span
          className={css({
            fontSize: ["64px", undefined, undefined, "128px"],
            color: "white",
            fontWeight: "black",
          })}
        >
          A<em className={css({ color: "#FF993A" })}>X</em>IOM.
        </span>
        <p
          className={css({
            mt: "40px",
            mb: "30px",
            fontSize: "14px",
            lg: { fontSize: "16px" },
            color: "white",
            fontWeight: "light",
            fontFamily: "gmarket",
            wordBreak: "keep-all",
          })}
        >
          Axiom은{" "}
          <em className={css({ color: "#FF993A" })}>창업의 심리적 장벽</em>을
          낮추고, 예비창업가들의{" "}
          <em className={css({ color: "#FF993A" })}>
            ‘글로벌 비즈니스 커넥션’
          </em>
          을 구축하여 국내 학생창업 활성화에 앞장 섭니다.
        </p>
        <p
          className={css({
            fontSize: "14px",
            lg: { fontSize: "16px" },
            color: "white",
            fontWeight: "light",
            fontFamily: "gmarket",
            wordBreak: "keep-all",
          })}
        >
          Axiom은 다양한 방면에서, 학생 창업의 사전준비 과정을 지원하는 키트와
          기업협업 멘토링 프로그램을 제공합니다.
        </p>
      </div>
    );
  }
);

export default Home;
