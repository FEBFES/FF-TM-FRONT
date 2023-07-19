import React from 'react';
import styles from './SettingsGeneralTab.module.css';
import comStyle from '../SettingsPage/commonStyle.module.css';
import { PlusIcon } from '../../assets/icons/UtilsIcons';
import { Title } from '../../ui/Typography';
import { Paragraph } from '../../ui/Typography/Paragraph/Paragraph';

interface GeneralTabProps {}

export const SettingsGeneralTab: React.FC<
  GeneralTabProps
> = (): JSX.Element => {
  return (
    <div>
      {/* todo i18next */}
      <Title className={comStyle.title}>Project</Title>
      {/* todo i18next */}
      <Paragraph className={comStyle.text}>
        Manage your project settings
      </Paragraph>

      <div className={comStyle.brLine} />

      {/* todo i18next */}
      <Title className={comStyle.subtitle}>Logo</Title>
      <label className={styles.fileInput_label} htmlFor="inputFIle">
        <div className={styles.fileInput_label_text}>
          <PlusIcon />
        </div>
      </label>

      {/*/!* todo i18next *!/*/}
      {/*<input id={'inputFIle'} className={styles.fileInput} type={'file'} />*/}
      {/*/!* todo i18next *!/*/}
      {/*<Paragraph className={comStyle.text}>Pick a logo for your project</Paragraph>*/}

      {/*<div className={comStyle.brLine} />*/}
      {/*/!* todo i18next *!/*/}
      {/*<Title className={comStyle.subtitle}>General</Title>*/}

      {/*<InputField placeholder={'...'} value={''} type="text" />*/}
      {/*/!* todo i18next *!/*/}
      {/*<Button theme={'default'} className={styles.updBtn}>*/}
      {/*  update*/}
      {/*</Button>*/}

      {/*<div className={comStyle.brLine} />*/}
      {/*/!* todo i18next *!/*/}
      {/*<Title className={comStyle.subtitle}>Delete project</Title>*/}
      {/*/!* todo i18next *!/*/}
      {/*<Paragraph className={comStyle.text}>if yout want delete blalblalblalba</Paragraph>*/}
      {/*/!* todo i18next *!/*/}
      {/*<Button theme={'danger'} className={styles.delBtn}>*/}
      {/*  delete this project*/}
      {/*</Button>*/}
    </div>
  );
};
