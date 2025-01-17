function gerarDiaDaSemana () {

  const diaDaSemana = new Date().toLocaleDateString (undefined, {weekday: "long"});
  const data = new Date().toLocaleDateString ();
  const hora = new Date().toLocaleTimeString (undefined, {hour: "numeric", minute: "numeric"});
  const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;

  return dataCompleta;
}

export default gerarDiaDaSemana;