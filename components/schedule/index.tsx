import React, { useState } from 'react';
import { FC } from 'react';
import styles from './styles.module.scss';
import {
  availableTime,
  time_1,
  time_2,
} from '@/components/schedule/constants/time';
import { useTranslation } from 'react-i18next';

const Schedule: FC = () => {
  const { t } = useTranslation();
  const [activeIndices1, setActiveIndices1] = useState<number[]>([]);
  const [activeIndices2, setActiveIndices2] = useState<number[]>([]);

  const handleItemClick1 = (index: number) => {
    if (activeIndices1.includes(index)) {
      const newActiveIndices = activeIndices1.filter((i) => i !== index);
      setActiveIndices1(newActiveIndices);
    } else {
      setActiveIndices1([...activeIndices1, index]);
    }
  };

  const handleItemClick2 = (index: number) => {
    if (activeIndices2.includes(index)) {
      const newActiveIndices = activeIndices2.filter((i) => i !== index);
      setActiveIndices2(newActiveIndices);
    } else {
      setActiveIndices2([...activeIndices2, index]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleMain}>{t('schedule.title' as any)}</div>
      <div className={styles.scheduleContainer}>
        <div>
          {time_1.map((timesArray, outerIndex) => (
            <div key={outerIndex}>
              <div>
                {timesArray.map((time, innerIndex) => {
                  const isTimeAvailable = availableTime.includes(time);
                  return (
                    <div
                      className={styles.timeBlock}
                      key={innerIndex}
                    >
                      <div
                        className={`${styles.oneTime} ${
                          innerIndex % 2 !== 0 ? styles.oneTimeSmall : ''
                        }`}
                      >
                        <div className={styles.text}> {time} </div>

                        <div
                          className={
                            innerIndex % 2 === 0
                              ? styles.timesLineSmall
                              : styles.timesLineBig
                          }
                        ></div>
                      </div>
                      <div
                        className={`${styles.rectangle} ${
                          activeIndices1.includes(
                            outerIndex * timesArray.length + innerIndex,
                          )
                            ? styles.activeRectangle
                            : isTimeAvailable
                            ? ''
                            : styles.inactiveRectangle
                        }`}
                        onClick={() =>
                          isTimeAvailable &&
                          handleItemClick1(
                            outerIndex * timesArray.length + innerIndex,
                          )
                        }
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div>
          {time_2.map((timesArray, outerIndex) => (
            <div key={outerIndex}>
              <div>
                {timesArray.map((time, innerIndex) => {
                  const isTimeAvailable = availableTime.includes(time);
                  return (
                    <div
                      className={styles.timeBlock}
                      key={innerIndex}
                    >
                      <div
                        className={`${styles.oneTime} ${
                          innerIndex % 2 !== 0 ? styles.oneTimeSmall : ''
                        }`}
                      >
                        <div className={styles.text}> {time} </div>

                        <div
                          className={
                            innerIndex % 2 === 0
                              ? styles.timesLineSmall
                              : styles.timesLineBig
                          }
                        ></div>
                      </div>
                      <div
                        className={`${styles.rectangle} ${
                          activeIndices2.includes(
                            outerIndex * timesArray.length + innerIndex,
                          )
                            ? styles.activeRectangle
                            : isTimeAvailable
                            ? ''
                            : styles.inactiveRectangle
                        }`}
                        onClick={() =>
                          isTimeAvailable &&
                          handleItemClick2(
                            outerIndex * timesArray.length + innerIndex,
                          )
                        }
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className={styles.buttonSearch}>
        <div className={styles.search}>{t('schedule.order' as any)}</div>
      </button>
    </div>
  );
};

export default Schedule;
