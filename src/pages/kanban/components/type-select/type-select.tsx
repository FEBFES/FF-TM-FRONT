import React, { useState } from "react";
import { useClickOutside } from "../../../../hooks/use-click-outside";
import { STaskType, STypeContainer } from "./type-select.styled";
// import {STypeElement} from './type-select.styled';

interface TypeSelectProps {
  curType: ITypeSelectType;
  setCurType: (type: ITypeSelectType) => void;
  direction: "bottom" | "top";
}
export type ITypeSelectType =
  | "NONE"
  | "RESEARCH"
  | "QUESTION"
  | "BUG"
  | "FEATURE";

const typeArr: ITypeSelectType[] = [
  "NONE",
  "RESEARCH",
  "QUESTION",
  "BUG",
  "FEATURE",
];

// todo - переделать
export const TypeSelect: React.FC<TypeSelectProps> = ({
  setCurType,
  curType,
  direction,
}): JSX.Element => {
  const [show, setShow] = useState(false);
  const { ref } = useClickOutside(setShow);

  return (
    <div>
      {show ? (
        <STypeContainer ref={ref} direction={direction}>
          {typeArr.map((taskType, i) => {
            return (
              <STaskType
                //Todo change to TypeElement or delete
                // <STypeElement
                key={i}
                onClick={() => {
                  setCurType(taskType);
                  setShow(false);
                }}
                type={curType}
              >
                {taskType}
                {/* // </STypeElement> */}
              </STaskType>
            );
          })}
        </STypeContainer>
      ) : (
        <div onClick={() => setShow(true)}>
          {typeArr.map((taskType, i) => {
            if (taskType === curType) {
              return (
                <STaskType type={curType} key={i}>
                  {taskType[0]}
                </STaskType>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};
