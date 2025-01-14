import { getGoogleDriveImageUrl } from "@/helpers";
import { great_vives, inter, roboto, playFair, twcen, minion, openSans, Vogue } from "../../utils/fonts";
import moment from "moment/moment";
import Countdown from "../15/Countdown";
import Link from "next/link";

const Header = ({ coverImage, title, date, content, foto_pc, frase_portada, sin_ondas, mail, article }) => {

    let bg = "bg-[#FFF]"
    let font = minion.className

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
        foto_pc = getGoogleDriveImageUrl("https://drive.google.com/file/d/1CKjeQGTl3-PGxTsYjPJ45sf8R2GfpcOG/view?usp=sharing");
    }

    if (mail == "karina_1607@yahoo.com.ar") {
        foto_pc = "https://res.cloudinary.com/fedexx/image/upload/c_fill_pad,w_1500,h_1080,g_auto,b_gen_fill/v1727981418/Ornella-173_-_karina_celentano_h1fwhb.jpg";
    }

    const dateFormated = moment(date).format("DD-MM-YYYY");

    if (article.url == "Elsa-y-Flor") {
        imageStyle.objectPosition = "50% 50%";
    }

    if (article.url == "Lore-16-02") {
        content = "Te espero para compartir la alegría de esta día inolvidable y único";
    }

    if (article.url == "Tere-07-02") {
        frase_portada = "no";
    }

    if (article.url == "Malvi-28-02") {
        colorTexto = "text-secondary-800";
        sin_ondas = true;
        bg = "bg-amber-50"
        font = Vogue.className
    }


    if (article.url == "Luisana-22-02"){
        content = "Te espero para compartir la alegría de esta noche única e inolvidable."
    }

    return (
        <>
            <div className={`block md:hidden ${bg} `}>
                <div className="md:hidden relative top-0 w-full h-[60vh] md:h-[70vh] bg-center bg-cover">
                    <div className="top-0 bg-slate-800"></div>
                    <img
                        src={coverImage}
                        style={{ ...imageStyle, width: "100%", height: "100%" }}
                        alt="portada"
                    />
                    {!sin_ondas && (
                        <div
                            className={`absolute bottom-0 left-0 md:bg-none bg-cover bg-footer-texture translate-y-1 h-24 w-full z-50`}
                        ></div>
                    )}
                </div>

                <div className="w-full md:hidden ">
                    <div className="w-full md:hidden flex justify-center pt-14">
                        <div className="flex md:hidden w-full justify-center">
                            <span className={`border-b md:hidden flex-grow-0 w-1/12 border-b-[#3b1b55] h-5 mx-3`}></span>
                            <h3
                                className={`${playFair.className} md:hidden flex-grow-1 ${colorTexto} text-2xl mb-6`}
                            >
                                {dateFormated}
                            </h3>
                            <span className={`border-b md:hidden flex-grow-0 w-1/12 border-b-[#3b1b55] h-5 mx-3`}></span>
                        </div>
                    </div>

                    <div className=" md:hidden text-center">
                        <h1
                            className={`${font} ${colorTexto} ${
                                title.length >= 6 ? "text-5xl" : "text-8xl"
                            } font-[100] text-center leading-[0.7]`}
                        >
                            {title.toUpperCase()}
                        </h1>
                        <h3 className={`${font} ${colorTexto} ${bg} text-center text-3xl mb-6`}>
                            {frase_portada ? (frase_portada != "no" && frase_portada) : "MIS 15 AÑOS"}
                        </h3>
                        {!(mail == "bzerrizuela@gmail.com") && (
                            <>
                                {content && (
                                    <p
                                        className={`${openSans.className} ${colorTexto} text-center text-xl mb-6 mx-7`}
                                    >
                                        {content}
                                    </p>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="h-[100vh] hidden md:block">
                <div className="top-0 w-full h-full">
                    <div className="hidden md:block h-screen">
                        <img
                            src={foto_pc}
                            style={{ ...imageStylepc, width: "100%", height: "100%" }}
                            alt="portada"
                        />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center">
                        <div className="pt-8">
                            <h1
                                className={`${minion.className} ${colorTexto} ${
                                    title.length >= 6 ? "text-5xl" : "text-8xl"
                                } font-[100] text-center leading-[0.7]`}
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
                                className={`${openSans.className} ${colorTexto} max-w-xs text-center text-xl tracking-widest font-[100]`}
                            >
                                Faltan
                            </h2>
                            <Countdown date={date} texto={colorTexto} />
                            <Link href="#info" scroll={false}>
                                <button
                                    className={`${openSans.className} py-3 px-9 bg-white rounded-full text-gray-900 font-[900] text-center mb-16`}
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