import React, { useState, useMemo } from 'react'
import camera from '../../assets/camera.svg'
import './styles.css'

export default function New() {
  const [thumbnail, setThumbnail] = useState(null)
  const [company, setCompany] = useState('')
  const [techs, setTechs] = useState('')
  const [price, setPrice] = useState('')

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null
  }, [thumbnail])

  function handleSubmit() {

  }

  return(
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        style={{backgroundImage: `url(${preview})`}}
        className={thumbnail ? 'has-thumbnail' : ''}
      >
        <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
        <img src={camera} alt="Select Img"/>
      </label>

      <label htmlFor="company">EMPRESA *</label>
      <input
        id="company"
        placeholder="Sua empresa incrível"
        value={company}
        onChange={event => setCompany(event.target.value)}
      />

      <label htmlFor="techs">TECNOLOGIAS * <span>(separadas por vírgula)</span></label>
      <input
        id="techs"
        placeholder="Quais tecnologias usam?"
        value={techs}
        onChange={event => setTechs(event.target.value)}
      />

      <label htmlFor="price">VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span></label>
      <input
        id="price"
        placeholder="Valor cobrado por dia"
        value={price}
        onChange={event => setPrice(event.target.value)}
      />

      <button className="btn" type="Submit">Cadastrar</button>
    </form>
  )
}
