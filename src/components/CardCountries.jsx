import Aos from "aos"
import "aos/dist/aos.css"
import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import { FaEye } from "react-icons/fa"
import InfoCountries from "./InfoCountries"

export default function CardCountries({ countries }) {
  const [dataSelectCountry, setDataSelectCountry] = useState(null)
  const [modal, setModal] = useState("hidden") //

  function changeState(modalState) {
    setModal(modalState)
  }

  useEffect(() => {
    Aos.refresh()
  }, [])

  return (
    <>
      <InfoCountries
        data={dataSelectCountry}
        Modal={modal}
        changeState={changeState}
      />
      <div data-aos="fade-up" className="w-full p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {countries && countries.length > 0 ? (
            countries.map((country, index) => (
              <div
                key={country.name.common + index}
                data-aos="fade-up"
                className="text-white min-h-64 transition ease-out cursor-pointer relative flex justify-normal items-center p-0 shadow-lg shadow-black/60 rounded-lg overflow-hidden group"
                onClick={() => {
                  setDataSelectCountry(country)
                  setModal((currentModal) =>
                    currentModal === "hidden" ? "" : "hidden"
                  )
                }}>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-500 ease-in-out flex justify-center items-center">
                  <FaEye className="text-3xl hidden group-hover:block z-50" />
                </div>
                <p className="absolute top-0 bg-black text-white p-2 rounded-br-lg z-10 transition duration-500 ease-in-out group-hover:top-1/2 group-hover:translate-y-[-50%] group-hover:flex group-hover:justify-center">
                  {country.name.common}
                </p>
                <img
                  src={country.flags.svg}
                  alt={`Flag of ${country.name.common}`}
                  className="h-[100%] object-cover bg-no-repeat bg-cover"
                />
              </div>
            ))
          ) : (
            <div
              data-aos="fade-up"
              className="col-span-4 text-black h-[280px] w-full flex justify-center items-center">
              <p className="text-3xl mx-auto bg-black/80 p-4 text-white rounded-lg ">
                No countries found
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

CardCountries.propTypes = {
  countries: PropTypes.array.isRequired,
}
