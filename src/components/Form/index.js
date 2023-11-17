import "./form.css";

function Form() {
  return (
    <section className="form">
      <h2>Cadasto de vídeos</h2>
      <form>
        <div>
          <label>URL do vídeo</label>
          <input
            type="text"
            placeholder="Digite a URL do vídeo"
            required="required"
          />
        </div>
        <div>
          <label>Categorias</label>
          <select>
            <option value="-">Selecione uma categoria</option>
          </select>
        </div>
        <div>
            <button>Cadastrar</button>
        </div>
      </form>
    </section>
  );
}

export default Form;
