interface PropsCabecalho {
  cabecalho: string;
}

function Cabecalho({ cabecalho }: PropsCabecalho) {
  return (
    <div className=" border-b-4 border-black mb-3 w-2/3 py-3 items-center justify-center flex ">
      <h1 className="text-4xl text-bold text-white"> {cabecalho}</h1>
    </div>
  );
}

export default Cabecalho;
