import React, { useEffect } from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const ImageComponent = () => {
    const [apiData, setApiData] = useState(null);
    const [date, setDate] = useState('2024-11-26'); 



    useEffect(() => {
        const fetchImage = async () => {
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=O42i4uno6c2kebzqhLBIF3cD7Ld2q4wtrc8gWgy8&date=${date}`)
            const data = await response.json();
            console.log(data)
            setApiData(data);
        };

        fetchImage();
    },[date]);





  return (
    <div>
        <div>
        <input type='date' className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>


        <img src={apiData.url} alt="" />
        <h5 className="">{apiData.title}</h5>
        <p className="">{apiData.explanation}</p>
    </div>
  )
}

export default ImageComponent


/**
 * Nome do arquivo: ImageComponent.jsx
 * Data de criação: 26/11/2024
 * Autor: José Aldenir Almeida Gomes Filho
 * Matrícula: 01697549
 *
 * Descrição:
 * Este componente REACT é responsável por implementar as funcionalidades,
 * constantes, a url de API e seus parametros, e retornar para o usuario oque é solicitado ao sistema
 */
