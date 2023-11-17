import "./form.css";
import { categories } from "../Category";
import { useState } from "react";

function Form() {
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [videos, setVideos] = useState([]);
  const [errors, setErrors] = useState("");

  function onSave(e) {
    e.preventDefault();
    const newVideo = { url, category };
    setVideos([...videos, newVideo]);
    console.log(videos);
  }

  return (
    <div>
      <section className="formulario ">
        <h2>Cadasto de vídeos</h2>
        <form onSubmit={onSave}>
          <div>
            <label>URL do vídeo</label>
            <input
              type="text"
              placeholder="Digite a URL do vídeo"
              required="required"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div>
            <label>Categorias</label>
            <select
              required="required"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="-">Selecione uma categoria</option>
              {categories.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
          </div>
          <div>
            <button>Cadastrar</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Form;
