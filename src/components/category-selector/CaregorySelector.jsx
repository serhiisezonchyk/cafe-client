import React, { useEffect } from 'react';
import data from '../../utils/data';
import CategoryDescription from '../category-description/CategoryDescription';
import styles from './CaregorySelector.module.scss'

const CaregorySelector = () => {
  const [index, setIndex] = React.useState(0);
  const [categories, setCategories] = React.useState([]);

  useEffect(()=>{
    console.log(data[0].services)
    setCategories(data[0].services)
  },[])

  const getCategory = (name)=>{
    const newCategory = data.find((obj)=>{
      return obj.name === name;
    });
    setCategories(newCategory.services);
  }
  return (
    <section className={styles.section}>
      <div className={styles.divHandler}>
        <div className={styles.introTextDiv}>
          <div className='text-orange font-semibold mb-3'>Наші ціни</div>
          <h2 className='h2 mb-3'>Розмір улюбленця?</h2>
          <p className='text-lg text-blue'>Оберіть категорію:</p>
        </div>

        <div className={styles.categories}>
          {data.map((item, idx) => {
            return (
              <div
              key={idx}
                onClick={() => {
                  setIndex(idx);
                  getCategory(item.name)
                }}
                className={styles.category}
              >
                <div className={styles.imageContainer}>
                  <img src={item.image} alt='' />
                </div>

                <h3>
                  {item.name}
                </h3>
                <div
                  className={`${
                    index === idx
                      ? 'border-b-4 border-orange transition-all relative'
                      : 'border-b-4 border-transparent'
                  } pb-4 mb-12`}
                >
                  <div className='hidden lg:block capitalize'>
                    {item.category}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <CategoryDescription category={categories}/>
      </div>
    </section>
  );
};

export default CaregorySelector;
