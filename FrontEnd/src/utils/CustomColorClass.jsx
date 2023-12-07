
const CustomColorClass = (airquality) =>{

    if (airquality < 300) {
        return "text-acGreen";
      } else if (airquality < 350) {
        return "text-acYellow";
      } else if (airquality < 400){
        return "text-acOrange";
      } else 
        return "text-acRed"
};

export default CustomColorClass