import { motion } from "framer-motion";
import { useState } from "react";

// Vi passer inn children som en prop, og har acess til den i Toggle componenten
// Children blir alt det du wrapper Toggle Rundt, det kan være et bilde, eller text osv...
const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(true);

  return (
    //   We have to add layout, to get AnimateSharedLayout to work
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      {/* hvis toggle er sant, render out the children, if not render out nothing */}
      {/* Vi legger til layout her for å unngå stretching av teksten */}
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
