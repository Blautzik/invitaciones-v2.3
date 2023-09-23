
'use client'
import React, { useState , useRef, useEffect} from "react";
import { BiChevronDown } from "react-icons/bi";


const Collapsible = ({
    open,
    collapsibleClassName = "collapsible-card-edonec",
    headerClassName = "collapsible-header-edonec bg-violeta text-white",
    titleClassName = "title-text-edonec",
    contentClassName = "collapsible-content-edonec bg-violeta text-white mt-0 p-0",
    contentContainerClassName = "collapsible-content-padding-edonec",
    children,
    header
  }) => {


    const [isOpen, setIsOpen] = useState();
    const [height, setHeight] = useState(
      open ? undefined : 0
    );
    const ref = useRef(null);
    const handleFilterOpening = () => {
      setIsOpen((prev) => !prev);
    };


    useEffect(() => {
      if (!height || !isOpen || !ref.current) return undefined;

      const resizeObserver = new ResizeObserver((el) => {
        setHeight(el[0].contentRect.height);
      });
      resizeObserver.observe(ref.current);
      return () => {
        resizeObserver.disconnect();
      };
    }, [height, isOpen]);
    useEffect(() => {
      if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
      else setHeight(0);
    }, [isOpen]);
    return (
      <>
        <div className={collapsibleClassName}>
          <div>
            <div className={headerClassName} onClick={handleFilterOpening}>

              <div className=' w-full flex flex-row justify-between py-4 items-center'>
                <p>
                {header}
                </p>
                <BiChevronDown className="text-2xl"/>
              </div>


            </div>
          </div>
          <div className={contentClassName} style={{ height }}>
            <div ref={ref}>
              <div className={contentContainerClassName}>{children}</div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Collapsible;