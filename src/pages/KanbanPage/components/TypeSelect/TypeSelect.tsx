import React, {useState} from "react";
import styles from "./TypeSelect.module.css"
import {useClickOutside} from "../../../../hooks/useClickOutside";
import classNames from "classnames";

interface TypeSelectProps {
    curType: ITypeSelectType;
    setCurType: (type: ITypeSelectType) => void;
}
export type ITypeSelectType = 'NONE' | 'RESEARCH' | 'QUESTION' | 'BUG' | 'FEATURE'

const typeArr: ITypeSelectType[] = ['NONE', 'RESEARCH', 'QUESTION', 'BUG', 'FEATURE']

export const TypeSelect: React.FC<TypeSelectProps> = ({
    setCurType,
    curType
}): JSX.Element => {
    const [show, setShow] = useState(false);
    const { ref } = useClickOutside(setShow);

    return <div>
        {show ? (
            <div ref={ref} className={styles.typeContainer}>
                {typeArr.map((taskType, i) => {
                    return (
                        <div
                            key={i}
                            onClick={() => {
                                setCurType(taskType);
                                setShow(false);
                            }}
                            className={styles.typeElement}
                        >
                            {taskType}
                        </div>
                    );
                })}
            </div>
        ) : (
            <div onClick={() => setShow(true)}>
                {typeArr.map((taskType, i) => {
                    if (taskType === curType) {
                        return <div
                            className={classNames(`${styles.taskType}`, {
                                [styles.taskType_f]: curType === 'FEATURE',
                                [styles.taskType_q]: curType === 'QUESTION',
                                [styles.taskType_b]: curType === 'BUG',
                                [styles.taskType_r]: curType === 'RESEARCH',
                            })}
                            key={i}
                        >
                            {taskType[0]}
                        </div>;
                    }
                    return;
                })}
            </div>
        )}
    </div>
}