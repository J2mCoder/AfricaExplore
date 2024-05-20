import Aos from "aos"
import axios from "axios"
import { useEffect, useState } from "react"
import CardCountries from "./components/CardCountries"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Loader from "./components/Loader"

export default function App() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
    setTimeout(() => {
      axios
        .get("https://restcountries.com/v3.1/region/africa", {
          headers: {
            "Accept-Language": "fr",
          },
        })
        .then((res) => {
          res.data.sort((a, b) => {
            return a.name.common.localeCompare(b.name.common)
          })
          setCountries(res.data)
          setFilteredCountries(res.data)
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false)
          Aos.refresh()
        })
    }, 2000)
    return () => {
      Aos.refresh()
    }
  }, [])

  const handleSearch = (search) => {
    const filteredData = countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredCountries(filteredData)
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header onSearch={handleSearch} />
          <CardCountries countries={filteredCountries} />
          <Footer />
        </>
      )}
    </div>
  )
}
