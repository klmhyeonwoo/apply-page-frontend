/** @jsxImportSource @emotion/react */
import { useState, useEffect, useRef } from "react";
import { classList } from "../class";
import {
  ArgreeBox,
  Article,
  CollectDescription,
  InputTitle,
  Require,
  SearchDepartment,
  Section,
} from "../emotion/component";
import { css } from "@emotion/react";
import {
  Argree,
  SubTitle,
  Title,
  TextBox,
  SubmitButton,
  EmailButton,
  EmailBox,
  InputBox,
  ErrorDescription,
  Timer,
} from "./emotion/component";

import checkBox from "../../images/checkBox.svg";
import checkedBox from "../../images/checkedBox.svg";
import { useForm } from "react-hook-form";

const Index = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [department, setDepartment] = useState<string>("");
  const [userDepartmentCheck, setUserDepartmentCheck] = useState<
    boolean | null
  >(null);
  const [requireCheckBox, setRequireCheckBox] = useState<boolean>(false);
  const [optionalCheckBox, setOptionalCheckBox] = useState<boolean>(false);

  const [sentEmail, setSentEmail] = useState<boolean>(false);

  /* 학과를 검색하고, 사용자가 재검색을 하고 싶을 경우 해당 버튼을 누르면 기존 값들을 다시 false 값으로 바꿔줍니다 */
  const RevertDepartment = async () => {
    await setDepartment("");
    await setOpenSearch(false);
    await setUserDepartmentCheck(false);
  };

  /* 학과를 검색하고 누르면, 해당 값들을 참으로 넘겨줍니다. */
  const SearchCheck = async (item: string) => {
    await setDepartment(item);
    await setOpenSearch(true);
    await setUserDepartmentCheck(true);
  };

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventDepartment = event.target.value.replace(
      /[_/]|[0-9]|[\[\]{}()<>?|`~!@#$%^&*-+=,.;:\"'\\]/g,
      ""
    );
    setDepartment(eventDepartment);
  };

  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [reSend, setReSend] = useState<boolean>(true);
  const [timeOut, setTimeOut] = useState<boolean>(false);

  // 시간 계산
  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds < 30 && !reSend) {
        setReSend(true);
      }
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown);
          setTimeOut(true);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors, isSubmitted },
  } = useForm();

  // 이메일 전송
  const sendEmail = () => {
    console.log(getValues("email") + "으로 전송처리.");
    setSentEmail(true);
    setTimeOut(false);
    setReSend(false);
    setMinutes(2);
    setSeconds(59);
  };

  // 인증번호 확인
  const checkEmail = () => {};

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Section>
        <Article>
          <Title text="멋쟁이사자처럼 팀 합류하기"></Title>
          <SubTitle text="멋쟁이사자처럼 팀 합류를 위해 지원자님의 인적사항을 기재 받고 있어요"></SubTitle>
        </Article>

        <Article>
          <InputTitle>
            이름
            <Require />
          </InputTitle>
          <InputBox
            type="text"
            maxLength={15}
            register={register("name", { required: "이름을 입력해주세요." })}
          />
          {errors.name || !isSubmitted ? (
            <ErrorDescription>{errors?.name?.message}</ErrorDescription>
          ) : (
            <CollectDescription>
              이름이 정상적으로 입력되었습니다.
            </CollectDescription>
          )}
        </Article>

        <Article>
          <InputTitle>
            학번 <Require />
          </InputTitle>
          <InputBox
            type="number"
            register={register("studentId", {
              required: "학번을 입력해주세요.",
              minLength: {
                message: "학번을 모두 입력해주세요.",
                value: 9,
              },
              maxLength: {
                message: "9자리 학번을 입력해주세요.",
                value: 9,
              },
            })}
          />

          {errors.studentId || !isSubmitted ? (
            <ErrorDescription>{errors?.studentId?.message}</ErrorDescription>
          ) : (
            <CollectDescription>
              학번이 정상적으로 입력되었습니다.
            </CollectDescription>
          )}
        </Article>

        <Article>
          <InputTitle>
            학과
            <Require />
            {openSearch && (
              <span
                css={css`
                  margin-left: 1em;
                  color: #6b7684;
                  font-family: "Pretendard-Regular";
                  font-size: 14px;
                  letter-spacing: -0.03em;
                  // text-decoration: underline;
                  // text-underline-offset: 0.2em;
                  cursor: pointer;
                  margin-right: 0.8em;
                  transition: 0.4s all;
                  float: right;

                  &:hover {
                    opacity: 80%;
                  }
                `}
                onClick={RevertDepartment}
              >
                학과 재설정
              </span>
            )}
          </InputTitle>
          <InputBox
            type="text"
            name="학과"
            maxLength={10}
            disabled={openSearch}
            value={department}
            onChange={changeValue}
            // register={register("major")}
          />
          {!openSearch && department.length >= 1 && (
            <SearchDepartment>
              {classList.map((item, key) => {
                if (
                  department.length >= 1 &&
                  item.slice(0, department.length) === department
                ) {
                  return (
                    <div
                      css={css`
                        cursor: pointer;
                        transition: 0.4s all;
                        font-family: "Pretendard-Regular";
                        @media all and (min-width: 768px) and (max-width: 1099px) {
                          span {
                            font-size: 13px;
                          }
                          font-size: 13px;
                        }
                        font-size: 14.5px;
                        letter-spacing: -0.05em;
                        &:hover {
                          opacity: 80%;
                        }
                      `}
                      onClick={() => SearchCheck(item)}
                      key={key}
                    >
                      <span
                        css={css`
                          color: #4f85e8;
                          font-family: "Pretendard-Medium";
                        `}
                      >
                        {item.slice(0, department.length)}
                      </span>
                      <span
                        css={css`
                          color: #8b95a1;
                        `}
                      >
                        {item.slice(department.length, item.length)}
                      </span>
                    </div>
                  );
                }
              })}
            </SearchDepartment>
          )}
          {openSearch && (
            <CollectDescription>
              학과가 정상적으로 입력되었습니다
            </CollectDescription>
          )}

          {/* {/* <ErrorDescription>학과를 제대로 입력해주세요!</ErrorDescription> */}
        </Article>

        <Article>
          <InputTitle>
            생년월일 <Require />
          </InputTitle>
          <InputBox
            type="text"
            maxLength={10}
            register={register("birth", {
              required: "생년월일을 입력해주세요.",
              pattern: {
                value:
                  /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/,
                message: "1999-01-01 형식으로 입력해주세요.",
              },
            })}
          />
          {errors.birth || !isSubmitted ? (
            <ErrorDescription>{errors?.birth?.message}</ErrorDescription>
          ) : (
            <CollectDescription>
              생년월일이 정상적으로 입력되었습니다.
            </CollectDescription>
          )}
        </Article>

        <Article>
          <InputTitle>
            이메일 <Require />
          </InputTitle>
          <EmailBox>
            <InputBox
              type="email"
              maxLength={30}
              register={register("email", {
                required: "이메일을 입력해주세요.",
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "올바른 형식의 이메일을 입력해주세요.",
                },
              })}
            />
            <EmailButton disabled={errors.email || !reSend} onClick={sendEmail}>
              {sentEmail ? "이메일 재전송" : "이메일 보내기"}
            </EmailButton>
          </EmailBox>
          {errors.email || !isSubmitted ? (
            <ErrorDescription>{errors?.email?.message}</ErrorDescription>
          ) : (
            <CollectDescription>
              이메일이 정상적으로 입력되었습니다.
            </CollectDescription>
          )}
        </Article>

        {sentEmail && (
          <Article>
            <EmailBox>
              <InputBox
                type="number"
                register={register("certificationNumber", {
                  required: "인증번호를 입력해주세요.",
                })}
              ></InputBox>
              <Timer>
                {minutes} : {seconds}
              </Timer>
              <EmailButton
                disabled={errors.email || timeOut}
                onClick={checkEmail}
              >
                인증번호 확인
              </EmailButton>
              {errors.certificationNumber || !isSubmitted ? (
                <ErrorDescription>
                  {errors?.certificationNumber?.message}
                </ErrorDescription>
              ) : (
                <CollectDescription>
                  이메일이 정상적으로 인증되었습니다.
                </CollectDescription>
              )}
            </EmailBox>
          </Article>
        )}

        <Article>
          <InputTitle>
            전화번호 <Require />
          </InputTitle>
          <InputBox
            type="text"
            maxLength={13}
            register={register("phoneNumber", {
              required: "전화번호를 입력해주세요.",
              pattern: {
                value: /\d{3}-\d{3,4}-\d{4}/,
                message: "010-0000-0000 형식의 전화번호를 입력해주세요.",
              },
            })}
          />
          {errors.phoneNumber || !isSubmitted ? (
            <ErrorDescription>{errors?.phoneNumber?.message}</ErrorDescription>
          ) : (
            <CollectDescription>
              전화번호가 정상적으로 입력되었습니다.
            </CollectDescription>
          )}
        </Article>

        <Article>
          <SubTitle text="마지막으로 지원을 위해 다음 개인정보 관련 사항을 확인해주세요"></SubTitle>
          <ArgreeBox>
            <Argree
              name="필수항목"
              src={requireCheckBox ? checkedBox : checkBox}
              text="개인정보 필수항목 수집 및 이용동의"
              onClick={() => {
                setRequireCheckBox(!requireCheckBox);
              }}
              require={true}
            />
            <TextBox></TextBox>
          </ArgreeBox>
          <ArgreeBox>
            <Argree
              name="선택항목"
              src={optionalCheckBox ? checkedBox : checkBox}
              text="개인정보 선택항목 수집 및 이용 동의"
              onClick={() => {
                setOptionalCheckBox(!optionalCheckBox);
              }}
            />
            <TextBox></TextBox>
          </ArgreeBox>
        </Article>

        <SubmitButton name="제출하기" disabled={!requireCheckBox}>
          회원가입
        </SubmitButton>
      </Section>
    </form>
  );
};

export default Index;
