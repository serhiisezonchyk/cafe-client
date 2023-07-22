import React from 'react';
import {BsCheckCircleFill} from 'react-icons/bs'
import styles from './CategoryDescription.module.scss'

const CategoryDescription = ({ category }) => {
  return (
    <div className={styles.formHandler}>
      {category.map((obj, index) => (
        <div className={styles.eachCategory} key={index}>
          <div className={styles.price}>{obj.price} </div>
          <div className={styles.name}>{obj.name}</div>
          <div className={styles.list}>
            {obj.info.map((inf, index) => (
              <div className={styles.listItem} key={index}>
                <BsCheckCircleFill className={styles.listItemIcon}/>
                <div className={styles.listItemName}>{inf.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryDescription;
