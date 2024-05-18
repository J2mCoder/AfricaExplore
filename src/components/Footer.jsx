import { IoLogoFacebook, IoLogoGithub, IoLogoInstagram } from "react-icons/io5"

export default function Footer() {
  const navigateTo = (url) => {
    window.open(url, "_blank")
  }

  return (
    <div className="bg-black/90 text-white p-5 shadow-inner md:h-24 flex justify-between items-center">
      <p className="text-md">
        © {new Date().getFullYear()} Explorateur de Pays Africains par{" "}
        <b className="text-teal-500 text-xl">J2mCoder</b>. Tous droits réservés.
      </p>
      <div className="flex gap-4">
        <IoLogoFacebook
          className="text-2xl cursor-pointer"
          onClick={() => navigateTo("https://www.facebook.com/J2m22/")}
        />
        <IoLogoInstagram
          className="text-2xl cursor-pointer"
          onClick={() =>
            navigateTo("https://www.instagram.com/jeandedieu.mbumba/")
          }
        />
        <IoLogoGithub
          className="text-2xl cursor-pointer"
          onClick={() => navigateTo("https://github.com/J2mCoder")}
        />
      </div>
    </div>
  )
}
