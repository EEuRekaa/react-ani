import React from 'react'
import  { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const cardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find me in your Dream <br className='sm:block hidden' />Uwooghh</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, reiciendis.
      </p>
      <Button styles='mt-10' />
    </div>   

    <div className={layout.sectionImg}>
      <img src={card} alt="" className='w-[100%] h-[100%]' />
    </div>
  </section>
)

export default cardDeal