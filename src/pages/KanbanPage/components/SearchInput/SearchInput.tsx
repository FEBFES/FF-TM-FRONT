import React, { useState } from 'react';
import styles from './SearchInput.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faClose } from '@fortawesome/free-solid-svg-icons';
import i18n from 'i18next';
import { useAppDispatch } from '../../../../hooks/redux';
import { delFilters, setFilters } from '../../store/kanban.slice';

interface SearchInputProps {}

export const SearchInput: React.FC<SearchInputProps> = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();

  const clearFilters = () => {
    dispatch(delFilters('taskName'));
    setInputValue('');
  };

  const handleSubmit = () => {
    if (inputValue !== '') {
      dispatch(setFilters({ key: 'taskName', value: inputValue }));
    } else {
      dispatch(delFilters('taskName'));
    }
  };

  return (
    <>
      <div className={styles.inputCont}>
        <div className={styles.inputIcon} onClick={handleSubmit}>
          <FontAwesomeIcon size={'2xs'} icon={faMagnifyingGlass} />
        </div>
        <input
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder={i18n.t('pages.kanban.header.input.placeholder')}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className={styles.input}
        />

        {inputValue !== '' && (
          <div className={styles.input_clear}>
            <FontAwesomeIcon
              onClick={() => {
                clearFilters();
              }}
              icon={faClose}
              size={'1x'}
            />
          </div>
        )}
      </div>
    </>
  );
};
