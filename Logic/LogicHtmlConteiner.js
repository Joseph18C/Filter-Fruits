const config = {
  logicHtmlConteiner: (img, id) => {
    const value = `
    <div class="fruits-conteinerInfo">
      <img src="${img}"" alt="">
      <h2>${id}</h2>
      <button class="btn btn5">
        <h4>Agregar al Carrito</h4>
      </button>
    </div>`;
    return value;
  },
  notFound: (err) => {
    const value = `
    <div class="fruits-conteinerInfo">
      <h2>No existe '${err}' </h2> 
      <img src="https://3.bp.blogspot.com/-DcbPWfAouCs/Vx6sKcooxdI/AAAAAAAAADQ/DncGCzgu9PkocuG5z8aO49sXxNOAMt0QACLcB/s1600/sticker-smiley-triste-pt.jpg" alt="" />     
    </div>`;
    return value;
  },
};
export default config;
