import React, { useEffect } from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const ImageComponent = () => {
    const [apiData, setApiData] = useState(null);
    const [date, setDate] = useState('2024-11-26');
    const [carregar, setCarregar] = useState(null);



    useEffect(() => {
        const fetchImage = async () => {
            setCarregar(true);
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=O42i4uno6c2kebzqhLBIF3cD7Ld2q4wtrc8gWgy8&date=${date}`)
            const data = await response.json();
            console.log(data)
            setApiData(data);
            setCarregar(false)
        };

        fetchImage();
    },[date]);





  return (
    <div className='container'>
        <h1 className='text-center'>ESCOLHA UMA DATA</h1>
        <input type='date' className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
        <hr />
        {carregar ? (
            <p className='text-center'>Carregando...</p>
        ) :apiData && (
            <div className="card">
            <div className="row">
                <div className="col-md-6">
                    <img src={apiData.url} className="img-fluid" alt="Imagem da NASA" />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h2 className="card-title">{apiData.title}</h2>
                        <p className="card-text">{apiData.explanation}</p>
                    </div>
                </div>
            </div>
        </div>
        )}

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
