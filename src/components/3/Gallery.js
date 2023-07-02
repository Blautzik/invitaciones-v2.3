import { great_vives, roboto } from '@/utils/fonts'
import {useState} from 'react'


export default function Gallery({imagenes, titulo}) {
  const [modalOpen, setModalOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openClose = (index) => {
    setModalOpen(!modalOpen)
    setIndex(index)
  }

  const handleScroll = () => {
    setModalOpen(false)
  }

  if (process.browser) {
    if(modalOpen === true) {
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'unset';
    }
  }

  

  const images = [
    imagenes[0].foto1,
    imagenes[0].foto2,
    imagenes[0].foto3,
    imagenes[0].foto4,
    imagenes[0].foto5,
    imagenes[0].foto6
    ]

    console.log(imagenes)



  return (
    <>
    <div className="flex flex-col items-center bg-[#f6f2e3] z-10 px-2">
    <h2 className={`${roboto.className} text-gray-600 text-4xl mb-10`} >{titulo}</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2  md:w-4/5 center">
        
      {images.map(e=> <div key={e} className='rounded md:hover:scale-[1.02] drop-shadow-2xl hover:z-10 transition-all' onClick={() => openClose(images.indexOf(e))}>
        <img className="rounded" key={e}  src={e} alt="" layout="fill"/>
        </div>
        )}
    </div>
    </div>
    {modalOpen ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-silver opacity-40"
                            onClick={() => openClose(0)}
                        ></div>
                        
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="flex relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <img src={images[index]} onClick={()=>openClose(0)} onScroll={handleScroll}/>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
    </>
  );
}
