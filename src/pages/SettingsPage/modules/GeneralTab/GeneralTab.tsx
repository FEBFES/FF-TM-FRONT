import React from 'react';
import styles from './GeneralTab.module.css';
import comStyle from '../../commonStyle.module.css';
import { PlusIcon } from '../../../../assets/icons/UtilsIcons';
import { InputField } from '../../../../ui/InputField/InputField';
import { Button } from '../../../../ui/Button/Button';

interface GeneralTabProps {}

export const GeneralTab: React.FC<GeneralTabProps> = (): JSX.Element => {
  return (
    <div>
      {/* todo i18next */}
      <h1 className={comStyle.title}>Project</h1>
      {/* todo i18next */}
      <p className={comStyle.text}>Manage your project settings</p>

      <div className={comStyle.brLine} />

      {/* todo i18next */}
      <h2 className={comStyle.subtitle}>Logo</h2>
      <label className={styles.fileInput_label} htmlFor="inputFIle">
        <div className={styles.fileInput_label_text}>
          <PlusIcon />
        </div>
      </label>

      {/* todo i18next */}
      <input id={'inputFIle'} className={styles.fileInput} type={'file'} />
      {/* todo i18next */}
      <p className={comStyle.text}>Pick a logo for your project</p>

      <div className={comStyle.brLine} />
      {/* todo i18next */}
      <h2 className={comStyle.subtitle}>General</h2>

      <InputField placeholder={'...'} value={''} type="text" />
      {/* todo i18next */}
      <Button theme={'default'} className={styles.updBtn}>
        update
      </Button>

      <div className={comStyle.brLine} />
      {/* todo i18next */}
      <h2 className={comStyle.subtitle}>Delete project</h2>
      {/* todo i18next */}
      <p className={comStyle.text}>if yout want delete blalblalblalba</p>
      {/* todo i18next */}
      <Button theme={'danger'} className={styles.delBtn}>
        delete this project
      </Button>
    </div>
  );
};
