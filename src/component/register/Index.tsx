/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { classList } from "../class";
import {
  Argree,
  ArgreeBox,
  Article,
  CollectDescription,
  InputBox,
  InputTitle,
  SearchDepartment,
  Section,
} from "../emotion/component";
import { css } from "@emotion/react";
import {
  SubTitle,
  Title,
  TextBox,
  SummitButton,
  EmailButton,
  EmailBox,
} from "./emotion/component";

import checkBox from "../../images/checkBox.svg";
import checkedBox from "../../images/checkedBox.svg";

const Index = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [department, setDepartment] = useState<string>("");
  const [userDepartmentCheck, setUserDepartmentCheck] = useState<
    boolean | null
  >(null);
  const [requireCheckBox, setRequireCheckBox] = useState<Boolean>(false);
  const [optionalCheckBox, setOptionalCheckBox] = useState<Boolean>(false);

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

  return (
    <Section>
      <Article>
        <Title text="팀 합류하기"></Title>
        <SubTitle text="팀 합류를 위해 인적사항을 기재해 주세요"></SubTitle>
      </Article>
      <Article>
        <InputTitle>이름</InputTitle>
        <InputBox
          type="text"
          name="이름"
          maxLength={15}
          // onChange={changeValue}
          // value={name}
          // tabIndex={tabIndex}
        />
        {/* {userNameCheck === false && (
          <ErrorDescription>이름을 제대로 입력해주세요</ErrorDescription>
        )}
        {userNameCheck && (
          <CollectDescription>
            이름이 정상적으로 입력되었습니다
          </CollectDescription>
        )} */}
      </Article>
      <Article>
        <InputTitle>학번 </InputTitle>
        <InputBox
          type="text"
          name="학번"
          maxLength={9}
          // onChange={changeValue}
          // value={id}
          // tabIndex={tabIndex}
        />
        {/* {userIDCheck === false && (
          <ErrorDescription>학번을 제대로 입력해주세요</ErrorDescription>
        )}
        {userIDCheck && (
          <CollectDescription>
            학번이 정상적으로 입력되었습니다
          </CollectDescription>
        )} */}
      </Article>
      <Article>
        <InputTitle>
          학과
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
          // onChange={changeValue}
          // value={department}
          // tabIndex={tabIndex}
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
        <InputTitle>생년월일</InputTitle>
        <InputBox
          type="number"
          name="생년월일"
          maxLength={30}
          // onChange={changeValue}
          // value={email}
          // tabIndex={tabIndex}
        />
        {/* {userEmailCheck === false && (
          <ErrorDescription>이메일을 제대로 입력해주세요</ErrorDescription>
        )}
        {userEmailCheck && (
          <CollectDescription>
            이메일이 정상적으로 입력되었습니다
          </CollectDescription>
        )} */}
      </Article>
      <Article>
        <InputTitle>이메일</InputTitle>
        <InputBox
          type="email"
          name="이메일"
          maxLength={30}
          // onChange={changeValue}
          // value={email}
          // tabIndex={tabIndex}
        />
        {/* {userEmailCheck === false && (
          <ErrorDescription>이메일을 제대로 입력해주세요</ErrorDescription>
        )}
        {userEmailCheck && (
          <CollectDescription>
            이메일이 정상적으로 입력되었습니다
          </CollectDescription>
        )} */}
        <EmailBox>
          <InputBox></InputBox>
          <EmailButton>이메일 확인</EmailButton>
        </EmailBox>
      </Article>
      <Article>
        <InputTitle>전화번호</InputTitle>
        <InputBox
          type="text"
          name="전화번호"
          maxLength={11}
          // onChange={changeValue}
          // value={phone}
          // tabIndex={tabIndex}
        />
        {/* {userPhoneCheck === false && (
          <ErrorDescription>연락처를 제대로 입력해주세요</ErrorDescription>
        )}
        {userPhoneCheck && (
          <CollectDescription>
            연락처가 정상적으로 입력되었습니다
          </CollectDescription>
        )} */}
      </Article>

      <Article>
        <SubTitle text="팀 합류를 위해 인적사항을 기재해 주세요"></SubTitle>
        <ArgreeBox>
          <Argree
            name="필수항목"
            src={requireCheckBox ? checkedBox : checkBox}
            text="개인정보 필수항목 수집 및 이용동의"
            onClick={() => {
              setRequireCheckBox(!requireCheckBox);
            }}
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
      <SummitButton name="제출하기">회원가입</SummitButton>
    </Section>
  );
};

export default Index;
