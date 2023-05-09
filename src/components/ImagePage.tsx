import React from 'react'
import queryString from 'query-string'
import { IAxiosCalendar } from './calendar.interface'
import Image from 'next/image'

interface ImagePageProps {
  image: IAxiosCalendar;
}

const ImagePage: React.FC<ImagePageProps> = ({ image }) => {
  // Obtén la descripción de la imagen de la URL
  const { description } = queryString.parse(window.location.search)

  return (
    <div>
      <h1>Image Page</h1>
      <p>Description: {description}</p>
      {/* Aquí puedes mostrar la imagen en pantalla completa */}
      <Image src={image.hdurl} alt={image.title} />
    </div>
  )
}

export default ImagePage
