import PropType from "prop-types"
import { IoCloseSharp } from "react-icons/io5"

export default function InfoCountries({ data = {}, Modal, changeState }) {
  console.log(data)
  if (!data) {
    return
  }
  return (
    <div
      className={`w-full h-screen  flex justify-center items-center bg-black/80 z-30 fixed inset-0 ease-in transition-opacity duration-1000  ${Modal}`}>
      <div className="md:w-2/3 w-[90%] bg-white/85 z-50  p-5 rounded-lg shadow relative ease-in transition-opacity duration-3000">
        <div
          className="absolute top-3 right-5 bg-black text-white hover:bg-black/80 rounded "
          onClick={() => changeState("hidden")}>
          <IoCloseSharp className="text-3xl cursor-pointer" />
        </div>
        <div className="mt-5">
          <h1 className="text-lg font-bold text-center mb-2">
            {" "}
            # Découverte de la Beauté et de la Richesse de <br />
            <b className="text-3xl font-semibold">{data.name.common}</b>
          </h1>
          <div className="h-1 md:w-2/3 w-[100%] bg-black mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-6 mt-3">
            <div className="md:col-span-3">
              <img
                src={data.flags.svg}
                alt={`Drapeau de ${data.name.common}`}
                className="w-[300px] h-full sm:h-[300px] mx-auto bg-center object-contain"
              />
            </div>
            <div className="col-span-3 md:ml-4 md:mt-0 mt-3 text-center md:text-left text-zinc-700">
              <p className="text-lg font-semibold">{data.name.official}</p>
              <p className="text-lg font-bold">
                Population : {formaterPopulation(data.population)}
              </p>
              <details className="w-[300px] md:w-full p-2 bg-black/15 mx-auto duration-1000 transition-opacity rounded cursor-pointer">
                <summary className="text-lg font-bold">
                  Langues ({Object.keys(data.languages).length})
                </summary>
                <div className="text-lg font-semibold">
                  <ul>
                    {Object.entries(data.languages).map(([code, language]) => (
                      <li key={code}> {language} </li>
                    ))}
                  </ul>
                </div>
              </details>
              <h2 className="text-lg font-bold">Capitale : {data.capital}</h2>
              <h2 className="text-lg font-bold">Capitale : {data.capital}</h2>
              <h2 className="text-lg font-bold">Capitale : {data.capital}</h2>
              <h2 className="text-lg font-bold">Capitale : {data.capital}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function formaterPopulation(nombre) {
  // Formate le nombre selon les conventions de la langue française
  let nombreFormate = new Intl.NumberFormat("fr-FR").format(nombre)
  // Ajoute 'habitants' pour indiquer qu'il s'agit de la population
  return nombreFormate + " habitants"
}

// Utilisation de la fonction avec le nombre d'habitants

InfoCountries.propTypes = {
  data: PropType.object,
  Modal: PropType.string.isRequired,
  changeState: PropType.func.isRequired,
}
