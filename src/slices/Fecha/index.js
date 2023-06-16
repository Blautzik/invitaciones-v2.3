/**
 * @typedef {import("@prismicio/client").Content.FechaSlice} FechaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FechaSlice>} FechaProps
 * @param {FechaProps}
 */
const Fecha = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for fecha (variation: {slice.variation}) Slices
    </section>
  );
};

export default Fecha;
