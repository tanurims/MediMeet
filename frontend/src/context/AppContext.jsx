import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext()


const AppContextProvider = (props) => {

    const currencySymbol = 'Rs.'

    const aboutUsData = {
    coreValues: [
      {
        icon: "Heart",
        title: "Compassionate Care",
        description:
          "We prioritize empathy and understanding in every patient interaction, ensuring healthcare feels human and personal.",
      },
      {
        icon: "Shield",
        title: "Trust & Security",
        description:
          "Your health information is protected with industry-leading security measures and complete privacy assurance.",
      },
      {
        icon: "Users",
        title: "Expert Network",
        description:
          "Connect with qualified healthcare professionals who are committed to your wellness and recovery.",
      },
      {
        icon: "Award",
        title: "Excellence",
        description:
          "We maintain the highest standards in healthcare delivery and patient satisfaction.",
      },
    ],

    stats: [
      { number: "50K+", label: "Happy Patients" },
      { number: "200+", label: "Expert Doctors" },
      { number: "15+", label: "Medical Specialties" },
      { number: "24/7", label: "Support Available" },
    ],


    }

    const value={
        doctors, 
        currencySymbol,
        aboutUsData
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
