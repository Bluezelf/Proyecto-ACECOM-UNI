const CustomShadowClass = (airquality) =>{
    
    if (airquality < 300) {
        return "shadow-acGreen";
      } else if (airquality < 350) {
        return "shadow-acYellow";
      } else if (airquality < 400){
        return "shadow-acOrange";
      } else 
        return "shadow-acRed"
}

export default CustomShadowClass