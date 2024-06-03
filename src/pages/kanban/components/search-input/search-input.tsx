import React, { useState } from "react";
import i18n from "i18next";
import { useAppDispatch } from "../../../../hooks/redux";
// import {
//   delFilters,
//   setFilters,
// } from '../../../../__data__/reducers/kanban.slice';
import {
  SInputIcon,
  SInputContainer,
  SInputField,
  SInputClear,
} from "./search-input.styled";

interface SearchInputProps {}

export const SearchInput: React.FC<SearchInputProps> = (): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();

  const clearFilters = () => {
    // dispatch(delFilters('taskName'));
    setInputValue("");
  };

  const handleSubmit = () => {
    // if (inputValue !== '') {
    //   dispatch(setFilters({ key: 'taskName', value: inputValue }));
    // } else {
    //   dispatch(delFilters('taskName'));
    // }
  };

  return (
    <SInputContainer>
      <SInputIcon onClick={handleSubmit}>
        {/*<FontAwesomeIcon size={'2xs'} icon={faMagnifyingGlass} />*/}
      </SInputIcon>
      <SInputField
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        placeholder={i18n.t("pages.kanban.header.input.placeholder")}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />

      {inputValue !== "" && (
        <SInputClear>
          {/*<FontAwesomeIcon*/}
          {/*  onClick={() => {*/}
          {/*    clearFilters();*/}
          {/*  }}*/}
          {/*  icon={faClose}*/}
          {/*  size={'1x'}*/}
          {/*/>*/}
        </SInputClear>
      )}
    </SInputContainer>
  );
};
