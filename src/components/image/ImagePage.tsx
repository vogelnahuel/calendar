import React from 'react'
import Image from 'next/image'
import { IPageImage } from './image.interface'
import styles from './image.module.css'

const ImagePage = ({ dashboard }: IPageImage) => {
  return (
    <div className={styles.centerPage}>
      <div className={styles.widthPage}>
        <Image
          src={dashboard?.hdurl || ''}
          alt={dashboard?.title || ''}
          width={400}
          height={400}
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          style={{ width: '100%' }}
        />
        <p>Description: {dashboard.explanation}</p>
      </div>
    </div>
  )
}

export default ImagePage
