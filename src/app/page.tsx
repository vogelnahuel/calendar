'use client'
import { CalendarContainer } from '@/components/calendar/CalendarContainer'
import styles from './page.module.css'

export default function Home () {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <CalendarContainer />
      </div>
    </main>
  )
}
