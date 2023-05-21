/** @jsxImportSource @emotion/react */

import React, { useEffect, useMemo, useState } from "react";
import { css } from "@emotion/react";
import { Button } from "./emotion";
import axios from "axios";

export default React.memo(function Test() {
  const [buttonState, setButtonState] = useState("프론트엔드");
  const [manyQuestion, setManyQuestion] = useState(0);
  const [questionInfo, setQuestionInfo] = useState([
    {
      id: 1,
      content: "프론트엔드 지원 동기를 말해주세요",
    },
  ]);
  const [content, setContent] = useState("");

  const [question, setQuestion] = useState<any>([]);

  const getPosition = (position: string) => {
    setButtonState(position);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert("버튼 눌림!");
    axios
      .post(
        "/BaseApplication_Q",
        JSON.stringify({
          part: "frontend",
          q_id: 0,
          question_str: content,
        }),
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then((res) => {
        alert("질문 등록 성공!");
        setQuestionInfo([
          ...questionInfo,
          { id: questionInfo.length + 1, content: content },
        ]);
        setQuestion([...question, ""]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   useEffect(() => {
  //     axios.get(`/BaseApplication_Q`).then((res) => {
  //       console.log(res);
  //     });
  //   }, []);

  return (
    <section
      css={css`
        position: absolute;

        margin-top: 1em;
        font-family: Pretendard-Medium;
        letter-spacing: -0.03em;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        display: flex;
        column-gap: 4em;
      `}
    >
      {/* 왼쪽 아티클 */}
      <article>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            row-gap: 1em;
          `}
        >
          <span> 현우의 기능 테스트 공간 </span>
          <div
            css={css`
              display: flex;
              column-gap: 1em;

              justify-content: center;
              align-items: center;
            `}
          >
            <Button
              onClick={() => getPosition("프론트엔드")}
              buttonState={buttonState}
              position="프론트엔드"
            />
            <Button
              onClick={() => getPosition("백엔드")}
              buttonState={buttonState}
              position="백엔드"
            />
            <Button
              onClick={() => getPosition("디자인")}
              buttonState={buttonState}
              position="디자인"
            />
          </div>

          <div>
            <input
              placeholder="추가하고 싶은 질문을 입력을 해주세요"
              onChange={handleChange}
              value={content}
              css={css`
                width: 15em;
              `}
            />
            <button onClick={handleSubmit}> 질문 추가 </button>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              row-gap: 0.3em;

              text-align: left;
            `}
          >
            {questionInfo.map((item) => {
              return (
                <span
                  css={css`
                    font-size: 14px;
                    font-family: Pretendard-Regular;
                  `}
                  key={item.id}
                >
                  {item.id}. {item.content}
                </span>
              );
            })}
          </div>
        </div>
      </article>
      <article>
        {" "}
        <div
          css={css`
            display: flex;
            flex-direction: column;
            row-gap: 1em;
          `}
        >
          <span> 생성된 질문에 대한 테스트 </span>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              text-align: left;
              row-gap: 0.5em;
            `}
          >
            {questionInfo.map((item) => {
              return (
                <div key={item.id}>
                  <span
                    css={css`
                      font-size: 14px;
                      font-family: Pretendard-Regular;
                    `}
                  >
                    {item.id}. {item.content}
                  </span>
                  <input
                    css={css`
                      width: 18em;
                    `}
                    onChange={(event) => {
                      console.log(question);
                      let data = [...question];
                      data[item.id - 1] = event.target.value;
                      setQuestion(data);
                    }}
                    placeholder="질문에 대한 답을 입력해주세요"
                  />
                </div>
              );
            })}
          </div>
          <button
            css={css`
              border-radius: 0.4em;
              border: none;
              height: 2.4em;
              cursor: pointer;
              transition: 0.4s all;
              background-color: black;
              color: white;

              &:hover {
                opacity: 80%;
              }
            `}
          >
            Confirm Question
          </button>
        </div>
      </article>
    </section>
  );
});
