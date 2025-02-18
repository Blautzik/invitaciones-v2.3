import { getGoogleDriveImageUrl } from "@/helpers";
import {
  great_vives,
  inter,
  roboto,
  playFair,
  twcen,
  minion,
  openSans,
  Vogue,
} from "../../utils/fonts";
import moment from "moment/moment";
import Countdown from "../15/Countdown";
import Link from "next/link";

const Header = ({
  coverImage,
  title,
  date,
  content,
  foto_pc,
  frase_portada,
  sin_ondas,
  mail,
  article,
}) => {
  let bg = "bg-[#FFF]";
  let font = minion.className;

  const imageStyle = {
    objectFit: "cover",
    objectPosition: "50% 5%",
    zIndex: 0,
    opacity: 0.95,
    backgroundColor: "#555",
  };

  const imageStylepc = {
    objectFit: "cover",
    objectPosition: "center",
    zIndex: 0,
    opacity: 0.95,
    backgroundColor: "#555",
  };

  let colorTexto = "text-slate-900";

  if (mail == "bzerrizuela@gmail.com") {
    foto_pc = getGoogleDriveImageUrl(
      "https://drive.google.com/file/d/1CKjeQGTl3-PGxTsYjPJ45sf8R2GfpcOG/view?usp=sharing"
    );
  }

  if (mail == "karina_1607@yahoo.com.ar") {
    foto_pc =
      "https://res.cloudinary.com/fedexx/image/upload/c_fill_pad,w_1500,h_1080,g_auto,b_gen_fill/v1727981418/Ornella-173_-_karina_celentano_h1fwhb.jpg";
  }

  const dateFormated = moment(date).format("DD-MM-YYYY");

  if (article.url == "Elsa-y-Flor") {
    imageStyle.objectPosition = "50% 50%";
  }

  if (article.url == "Lore-16-02") {
    content =
      "Te espero para compartir la alegría de esta día inolvidable y único";
  }

  if (article.url == "Tere-07-02") {
    frase_portada = "no";
  }

  if (article.url == "Malvi-28-02") {
    colorTexto = "text-secondary-800";
    sin_ondas = true;
    bg = "bg-amber-50";
    font = Vogue.className;
  }

  if (article.url == "Luisana-22-02") {
    content =
      "Te espero para compartir la alegría de esta noche única e inolvidable.";
  }

  if (article.url == "Bianqui-09-03") {
    imageStylepc.objectPosition = "50% 20%";
  }

  if (article.url == "Lucia-28-03") {
    imageStyle.objectPosition = "70% 50%";
  }


  if(article.url == "Martina-01-03"){
    content = "Hay momentos inolvidables que se atesoran en el corazón para siempre. Por esa razón quiero que compartas conmigo éste día tan especial"
  }

  return (
    <>
      <div className={`block md:hidden ${bg} `}>
        <div className="relative top-0 h-[60vh] w-full bg-cover bg-center md:hidden md:h-[70vh]">
          <div className="top-0 bg-slate-800"></div>
          <img
            src={coverImage}
            style={{ ...imageStyle, width: "100%", height: "100%" }}
            alt="portada"
          />
          {!sin_ondas && (
            <div
              className={`absolute bottom-0 left-0 z-50 h-24 w-full translate-y-1 bg-footer-texture bg-cover md:bg-none`}
            ></div>
          )}
        </div>

        <div className="w-full md:hidden ">
          <div className="flex w-full justify-center pt-14 md:hidden">
            <div className="flex w-full justify-center md:hidden">
              <span
                className={`mx-3 h-5 w-1/12 flex-grow-0 border-b border-b-[#3b1b55] md:hidden`}
              ></span>
              <h3
                className={`${playFair.className} flex-grow-1 md:hidden ${colorTexto} mb-6 text-2xl`}
              >
                {dateFormated}
              </h3>
              <span
                className={`mx-3 h-5 w-1/12 flex-grow-0 border-b border-b-[#3b1b55] md:hidden`}
              ></span>
            </div>
          </div>

          <div className=" text-center md:hidden">
            <h1
              className={`${font} ${colorTexto} ${
                title.length >= 6 ? "text-5xl" : "text-8xl"
              } text-center font-[100] leading-[0.7]`}
            >
              {title.toUpperCase()}
            </h1>
            <h3
              className={`${font} ${colorTexto} ${bg} mb-6 text-center text-3xl`}
            >
              {frase_portada
                ? frase_portada != "no" && frase_portada
                : "MIS 15 AÑOS"}
            </h3>
            {!(mail == "bzerrizuela@gmail.com") && (
              <>
                {content && (
                  <p
                    className={`${openSans.className} ${colorTexto} mx-7 mb-6 text-center text-xl`}
                  >
                    {content}
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="hidden h-[100vh] md:block">
        <div className="top-0 h-full w-full">
          <div className="hidden h-screen md:block">
            <img
              src={foto_pc}
              style={{ ...imageStylepc, width: "100%", height: "100%" }}
              alt="portada"
            />
          </div>
          <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-between">
            <div className="pt-8">
              <h1
                className={`${minion.className} ${colorTexto} ${
                  title.length >= 6 ? "text-5xl" : "text-8xl"
                } text-center font-[100] leading-[0.7]`}
              >
                {title.toUpperCase()}
              </h1>

              <h1
                className={`${minion.className} ${colorTexto} max-w-sm text-center text-5xl font-[200]`}
              >
                {frase_portada}
              </h1>
            </div>

            <div className="flex flex-col items-center">
              <h2
                className={`${openSans.className} ${colorTexto} max-w-xs text-center text-xl font-[100] tracking-widest`}
              >
                Faltan
              </h2>
              <Countdown date={date} texto={colorTexto} />
              <Link href="#info" scroll={false}>
                <button
                  className={`${openSans.className} mb-16 rounded-full bg-white px-9 py-3 text-center font-[900] text-gray-900`}
                >
                  MÁS INFO
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
