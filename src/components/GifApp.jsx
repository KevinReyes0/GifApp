import { useState } from "react"
import { useGif } from "../hooks/useGif"

export const GifApp = () => {

  const {handleGetGif, arregloGifs} = useGif()
  const [categoria, setCategoria] = useState('')
  
  return (
    <>
        <form className="d-flex" onSubmit={(e) => {handleGetGif(categoria, e) }}>
          <input className="form-control me-2" type="text" onChange={(e/*evento*/) => {setCategoria(e.target.value)}}/>
          <input className="btn btn-outline-success" type ="submit" value="Buscar gif"/>
        </form>
        
        <div>
          {arregloGifs.map(({id, url})=>{
            return (
              <img key={id} src ={url}/>
            )
          })}
        </div>
    </>
  )
}
