import React, { useEffect } from 'react'
import { useState } from 'react'


const ImageComponent = () => {
    const [apiData, setApiData] = useState(null);


    useEffect(() => {
        const fetchImage = async () => {
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=O42i4uno6c2kebzqhLBIF3cD7Ld2q4wtrc8gWgy8`)
            const data = await response.json();
            console.log(data)
            setApiData(data);
        };

        fetchImage();
    },);





  return (
    <div>
        <img src={apiData.url} alt="" />
        <h5 className="">{imageData.title}</h5>
        <p className="">{imageData.explanation}</p>
    </div>
  )
}

export default ImageComponent


/**
 * Nome do arquivo: App.jsx
 * Data de criação: 26/11/2024
 * Autor: José Aldenir Almeida Gomes Filho
 * Matrícula: 01697549
 *
 * Descrição:
 * Este componente REACT é responsável por implementar as funcionalidades,
 * constantes, a url de API e seus parametros, e retornar para o usuario oque é solicitado ao sistema
 */