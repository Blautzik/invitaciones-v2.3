
'use client'
import React, { useState , useRef, useEffect} from "react";


const Collapsible = ({
    open,
    collapsibleClassName = "collapsible-card-edonec bg-black",
    headerClassName = "collapsible-header-edonec bg-black! text-white",
    titleClassName = "title-text-edonec",
    contentClassName = "collapsible-content-edonec bg-black text-white mt-0 p-0",
    contentContainerClassName = "collapsible-content-padding-edonec bg-black",
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

              <div className={titleClassName}>{header}</div>


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