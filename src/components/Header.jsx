import "aos/dist/aos.css"
import PropTypes from "prop-types"
import { IoSearch } from "react-icons/io5"

export default function Header({ onSearch }) {
  return (
    <div>
      <div className="bg-black/90 text-white p-5 shadow-lg shadow-black/50 md:h-80 flex justify-center items-center flex-col">
        <h1
          data-aos="fade-down"
          data-aos-delay="200"
          className="animate-gradient bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
          Explorateur de Pays Africains
        </h1>

        <p
          className="text-md mt-6 text-gray-300 text-center"
          data-aos="zoom-in"
          data-aos-delay="400">
          {
            "Découvrez notre Explorateur des Pays Africains, une application qui vous permet d'explorer les merveilles de chaque pays africain. Parcourez une liste de nations triées par ordre alphabétique et embarquez pour un voyage éducatif à travers l'Afrique. Plongez dans la richesse culturelle, géographique et démographique de chaque pays. De l'Algérie au Zimbabwe, chaque pays vous offre des informations détaillées sur sa population, sa capitale, ses langues et bien plus encore. Explorez le continent sans quitter votre domicile !"
          }
        </p>
        <div className="mt-6 flex justify-center items-center gap-3 w-full md:w-1/2 flex-col sm:flex-row relative">
          <input
            type="text"
            placeholder="Rechercher un pays africain"
            data-aos="fade-up"
            data-aos-delay="600"
            className="p-2 bg-transparent ring w-full ring-white/50 rounded-lg focus:ring-white/90 pr-10"
            onChange={(e) => onSearch(e.target.value)}
          />
          <IoSearch
            className="text-2xl absolute right-2"
            data-aos="fade-up"
            data-aos-delay="600"
          />
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
}
