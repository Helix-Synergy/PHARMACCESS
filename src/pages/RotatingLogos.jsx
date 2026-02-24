import React, { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";
import { Link } from "react-router-dom";
// Images for agri
import img1 from "../assets/tracks/img1.webp";
import img2 from "../assets/tracks/img2.jpg"
import img3 from "../assets/tracks/img3.jpg";
import img4 from "../assets/tracks/img4.jpeg";
import img5 from "../assets/tracks/img5.jpg";
import img6 from "../assets/tracks/img6.webp"
import img7 from "../assets/tracks/img7.webp";
import img8 from "../assets/tracks/img8.avif"
import img9 from "../assets/tracks/img9.jpg";
import img10 from "../assets/tracks/img10.jpeg"
import img11 from "../assets/tracks/img11.avif";
import img12 from "../assets/tracks/img12.png"
import img13 from "../assets/tracks/img13.jpeg";
import img14 from "../assets/tracks/img14.jpg"
import img15 from "../assets/tracks/img15.jpg";
import img16 from "../assets/tracks/img16.jpg"
import img17 from "../assets/tracks/img17.webp"
import img18 from "../assets/tracks/img18.webp";
import img19 from "../assets/tracks/img19.jpg"
import img20 from "../assets/tracks/img20.jpg"

export const tracks = [
  {
    image: img1,
    title: "Public Health",
    description: (
      <>
        {" "}
        <Link
          to="/about-pharmaccess"
          className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Public Health
        </Link> focuses on protecting and improving population health through disease prevention, health promotion, policy development, and community interventions. It addresses health equity, environmental health, healthcare access, and preparedness for public health emergencies, strengthening resilient and sustainable healthcare systems globally.

      </>
    ),
  },

  {
    image: img2,
    title: "Health Sciences",
    description: (
      <>
        {" "}
        <Link
          to="/pharmaccess-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Health Sciences
        </Link>{" "} , integrate biological, clinical, and social sciences to understand health, disease, and healthcare delivery. This multidisciplinary field supports evidence-based practice, medical research, diagnostics, and health innovation, enabling improved patient outcomes, system efficiency, and informed healthcare decision-making.
      </>
    ),
  },

  {
    image: img3,
    title: "Nano Medicine",
    description: (
      <>
        {" "}
        <Link
          to="/pharmaccess-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Nano Medicine
        </Link> applies nanotechnology to diagnosis, drug delivery, and therapy at the molecular and cellular levels. It enables targeted treatments, enhanced bioavailability, reduced toxicity, and advanced imaging, transforming precision medicine and improving outcomes in cancer, infectious, and chronic diseases.
      </>
    ),
  },

  {
    image: img4,
    title: "RWE Strategy",
    description: (
      <>
        {" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Real-World Evidence (RWE)
        </Link>{" "}  Strategy focuses on generating and applying real-world data to support regulatory, clinical, and market access decisions. It integrates observational studies, digital health data, and analytics to demonstrate therapeutic value, optimize outcomes, and support evidence-based healthcare decisions.

      </>
    ),
  },

  {
    image: img5,
    title: "Pharmacology",
    description: (
      <>
        {" "}
        <Link
          to="/event_partners"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Pharmacology
        </Link>{" "} studies how drugs interact with biological systems, including mechanisms of action, therapeutic effects, and toxicity. It supports rational drug development, dose optimization, safety evaluation, and personalized medicine, bridging laboratory research with clinical application and patient care.

      </>
    ),
  },

  {
    image: img6,
    title: "Drug Development",
    description: (
      <>

        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Drug Development
        </Link>{" "}  encompasses the discovery, preclinical testing, clinical trials, and regulatory approval of new therapies. It integrates science, technology, and compliance to ensure safety, efficacy, and quality, accelerating the delivery of innovative medicines to address unmet medical needs.

      </>
    ),
  },

  {
    image: img7,
    title: "Vaccinology",
    description: (
      <>
        {" "}
        <Link
          to="/about-pharmaccess"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Vaccinology
        </Link>{" "}   focuses on the research, development, and evaluation of vaccines for infectious and emerging diseases. It combines immunology, molecular biology, and public health to enhance vaccine safety, efficacy, and accessibility, strengthening global disease prevention and pandemic preparedness.
      </>
    ),
  },

  {
    image: img8,
    title: "Biomedical Engineering",
    description: (
      <>
        {" "}
        <Link
          to="/pharmaccess-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Biomedical Engineering
        </Link>{" "}  applies engineering principles to healthcare challenges, developing medical devices, diagnostics, imaging systems, and biomaterials. It bridges technology and medicine to improve patient care, support innovation, and advance precision, efficiency, and safety in healthcare delivery.

      </>
    ),
  },

  {
    image: img9,
    title: "Design & Methodology",
    description: (
      <>
        {" "}
        <Link
          to="/about-pharmaccess"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >

        </Link>{" "} Design & Methodology emphasize robust research planning, study design, and analytical frameworks. It ensures scientific rigor, reproducibility, and regulatory compliance across clinical, translational, and real-world studies, enabling reliable data generation and evidence-based decision-making.

      </>
    ),
  },

  {
    image: img10,
    title: "Food Science",
    description: (
      <>
        {" "}
        <Link
          to="/about-pharmaccess"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Food Science
        </Link>{" "}  explores the composition, processing, safety, and nutritional quality of food. It supports innovation in food technology, functional foods, preservation methods, and sustainable production, ensuring food safety, quality, and improved public health outcomes.
      </>
    ),
  },

  {
    image: img11,
    title: "Chronic Disease",
    description: (
      <>
        {" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Chronic Disease
        </Link>  research addresses long-term conditions such as diabetes, cardiovascular disease, and autoimmune disorders. It focuses on prevention, early detection, therapeutic innovation, and care management strategies to improve quality of life and reduce healthcare burden
      </>

    ),
  },

  {
    image: img12,
    title: "Drug Safety",
    description: (
      <>
        {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Drug Safety
        </Link>{" "} focuses on identifying, evaluating, and minimizing risks associated with medicinal products. It integrates preclinical testing, clinical monitoring, post-marketing surveillance, and regulatory compliance to protect patients and ensure favorable benefit-risk profiles throughout a drug’s lifecycle.
      </>
    ),
  },

  {
    image: img13,
    title: "Clinical Trials",
    description: (
      <>
        {" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Clinical Trials
        </Link> evaluate the safety, efficacy, and performance of medical interventions in human subjects. They follow rigorous ethical and regulatory standards, generating evidence to support regulatory approval, clinical practice, and the advancement of innovative therapies.


      </>
    ),
  },

  {
    image: img14,
    title: "Pharmaceutical Analysis",
    description: (
      <>
        {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Pharmaceutical Analysis
        </Link>  involves the qualitative and quantitative assessment of drugs and formulations. It ensures product quality, purity, stability, and compliance through advanced analytical techniques, supporting regulatory approval and consistent manufacturing of safe and effective medicines.

      </>
    ),
  },

  {
    image: img15,
    title: "Pharmacovigilance",
    description: (
      <>
        {" "}
        <Link
          to="/pharmaccess-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Pharmacovigilance
        </Link> monitors and evaluates adverse drug reactions to ensure patient safety. It integrates real-world data, regulatory reporting, and risk management strategies to detect safety signals, maintain compliance, and optimize benefit-risk balance throughout the product lifecycle.

      </>
    ),
  },

  {
    image: img16,
    title: "Epidemiology",
    description: (
      <>
        {" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Epidemiology
        </Link> studies the distribution and determinants of diseases in populations. It supports public health planning, disease prevention, outbreak investigation, and policy development by analyzing patterns, risk factors, and health outcomes across diverse populations.
      </>
    ),
  },

  {
    image: img17,
    title: "Neuroscience",
    description: (
      <>
        {" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Neuroscience
        </Link>  explores the structure and function of the nervous system. It advances understanding of brain health, neurological disorders, and cognitive processes, enabling innovation in diagnostics, therapeutics, and interventions for mental and neurodegenerative diseases.

      </>
    ),
  },
  // Ethical

  {
    image: img18,
    title: "Cell & Gene Therapies",
    description: (
      <>
        {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Cell & Gene Therapies
        </Link>  use living cells and genetic material to treat or cure diseases at their source. This field drives transformative advances in oncology, rare diseases, and regenerative medicine, requiring innovative manufacturing, regulatory, and clinical strategies.

      </>
    ),
  },
  // Microbiome Engineering

  {
    image: img19,
    title: "Patient Safety",
    description: (
      <>
        {" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Patient Safety
        </Link>  focuses on preventing harm during healthcare delivery. It promotes quality improvement, risk management, clinical governance, and safety culture to enhance care outcomes, reduce medical errors, and ensure safe, patient-centered healthcare systems.
      </>
    ),
  },
  {
    image: img20,
    title: "Mental Health",
    description: (
      <>
        {" "}
        <Link
          to="/about-pharmaccess"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Mental Health
        </Link>{" "}  addresses emotional, psychological, and social well-being across the lifespan. It supports early intervention, innovative therapies, digital mental health tools, and integrated care models to improve outcomes and reduce stigma globally.

      </>
    ),
  },
];

const StaticTracks = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px rgba(44, 211, 35, 0.2);
          }
          50% {
            box-shadow: 0 0 18px 6px rgb(122,179,38);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style> */}

      <div className="relative mt-14">
        {/* Fixed Top-Right Button */}
        <div className="fixed top-[22%] right-[1%] z-50 transition-custom">
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed text-justify">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaticTracks;
