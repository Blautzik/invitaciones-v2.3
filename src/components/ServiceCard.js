import React from 'react'
import {amatic, roboto} from '../utils/fonts';

const ServiceCard = ({ service }) => (
    <div className="flex flex-col items-center space-y-2">
      <div className="p-2 flex items-center justify-center rounded-full h-16 w-16">
        {service.icon}
      </div>
      <h2 className={`${amatic.className} text-slate-900  text-center font-bold text-3xl leading-[0.7]`}>{service.title}</h2>
      <p className={`${roboto.className} md:w-8/12 text-sm text-center`}>{service.description}</p>
    </div>
  );

export default ServiceCard