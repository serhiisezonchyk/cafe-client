import React from 'react'
import styles from './Order.module.scss'
const Order = () => {
  return (
    <section className={styles.section}>
        <div >
            <div>
                <form >
                    <h2 >Оформіть заявку:</h2>
                    <input type='text' placeholder='ПІБ'/>
                    <input type='text' placeholder='Email'/>
                    <input type='text' placeholder='Телефон'/>
                    <button >Надіслати</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Order
