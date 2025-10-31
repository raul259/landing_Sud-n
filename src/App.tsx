import { Logo } from "@/components/navbar-02/logo";
import { NavMenu } from "@/components/navbar-02/nav-menu";
import { NavigationSheet } from "@/components/navbar-02/navigation-sheet";
import { ThemeButton } from "@/components/ui/theme-button";
import { sharePage, sendEmailToRepresentative } from "@/components/navbar-02/navbar-02";
import Footer from "@/components/footer";
import { useScrollAnimation, useScrollAnimationGroup } from "@/hooks/use-scroll-animation";
import { BlurText } from "@/components/ui/blur-text";
import { ScrambledText } from "@/components/ui/scrambled-text";

const Navbar02Page = () => {
  const heroRef = useScrollAnimation<HTMLHeadingElement>();
  const heroTextRef = useScrollAnimation<HTMLParagraphElement>();
  const traicionRef = useScrollAnimationGroup<HTMLDivElement>();
  const dimensionesRef = useScrollAnimationGroup<HTMLDivElement>();
  const geografiaRef = useScrollAnimationGroup<HTMLDivElement>();
  const rostroRef = useScrollAnimationGroup<HTMLDivElement>();
  const complicidadRef = useScrollAnimationGroup<HTMLDivElement>();
  const accionRef = useScrollAnimationGroup<HTMLDivElement>();
  const finalRef = useScrollAnimationGroup<HTMLDivElement>();

  return (
    <>
      <div className="h-screen flex flex-col">
        <nav className="h-16 bg-transparent text-white shrink-0">
          <div className="h-full flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-full flex items-center w-full">
              {/* Logo a la izquierda */}
              <div>
                <Logo />
              </div>
              
              {/* Spacer que empuja el menú hacia la derecha */}
              <div className="flex-1"></div>
              
              {/* Desktop Menu y botón pegados a la derecha */}
              <div className="hidden md:flex items-center gap-8">
                <NavMenu />
                <ThemeButton />
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center gap-3">
                <ThemeButton />
                <NavigationSheet />
              </div>
            </div>
          </div>
        </nav>

        <div className="grow flex flex-col items-center justify-center text-white text-center px-4">
          <h1 ref={heroRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-center leading-tight animate-on-scroll fade-in">
            SUDÁN: ANATOMÍA <br />DEL SILENCIO
          </h1>
          <p ref={heroTextRef} className="max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto mt-6 sm:mt-8 md:mt-9 text-sm sm:text-base md:text-lg lg:text-xl text-center text-white/90 animate-on-scroll slide-up delay-200">
            La guerra más grande del mundo es la que hemos decidido ignorar. Esto no es un llamado <span className="hidden sm:inline"><br /></span> a tu compasión. Es un llamado a tu ira.
          </p>
        </div>
      </div>

      <div ref={traicionRef} className="bg-white dark:bg-gray-900 text-black dark:text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-7xl font-bold text-red-600 dark:text-red-400 text-start animate-on-scroll slide-left">
            La traición
          </h2>
          <p className="max-w-2xl  mt-6 text-lg text-start text-gray-700 dark:text-gray-300 animate-on-scroll slide-right delay-200">
            En 2019, una revolución popular llenó de esperanza a Sudán y derrocó a un dictador genocida. Soñaban con libertad, paz y justicia. Pero los guardianes de esa transición, el general del ejército Abdel Fattah al-Burhan y el señor de la guerra paramilitar Mohamed Hamdan Dagalo "Hemedti", devoraron la revolución desde dentro. Después de un golpe de estado en 2021, su alianza de conveniencia estalló en una guerra total por el poder en abril de 2023.<br /></p>

          <p className="max-w-2xl mt-6 text-lg text-start text-gray-700 dark:text-gray-300 animate-on-scroll slide-right delay-400"><strong>No es una guerra civil. Es una lucha mafiosa entre dos facciones militares que han tomado como rehenes a 48 millones de personas y el mundo les ha dado el regalo de su silencio.</strong>
          </p>
        </div>
      </div>

      {/*linea divisoria*/}
      <div className="bg-red-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <hr className="border-gray-200 dark:border-transparent" />
        </div>
      </div>

      <div className="bg-red-100 dark:bg-black/40 text-black dark:text-white py-16">
        <div ref={dimensionesRef} id="conflicto" className="max-w-7xl mx-auto px-6 lg:px-8">
          <BlurText 
            text="Dimensiones del conflicto"
            className="text-6xl font-bold text-red-600 dark:text-red-400 text-center mb-6"
            wordByWord={true}
          />
          <div className="animate-on-scroll slide-up delay-400">
            <BlurText 
              text="La población sudanesa sufre graves vulneraciones de derechos humanos. El conflicto está marcado por la violencia indiscriminada y ataques deliberados contra civiles y personal humanitario. Especialmente alarmante es el uso generalizado de la violencia sexual como arma de guerra, documentándose violaciones"
              className="max-w-14xl text-lg text-center text-gray-700 dark:text-gray-200"
              delay={600}
            />
          </div>
        </div>
      </div>

      {/*linea divisoria*/}
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <hr className="border-gray-200 dark:border-transparent" />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 text-black dark:text-white py-16">
        <div ref={geografiaRef} className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-6xl font-bold text-red-600 dark:text-red-400 text-start animate-on-scroll slide-left">
            Geografía del terror
          </h2>
          <p className="max-w-2xl mt-6 text-lg text-start text-gray-700 dark:text-gray-300 animate-on-scroll slide-right delay-200">
            La guerra ha devorado el país, transformándolo en un infierno planificado.<br />
          </p>

          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* --- Card 1 --- */}

              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 hover-lift animate-on-scroll scale-in">
                <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  Jartum y las ciudades
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Se han convertido en jaulas urbanas donde la lucha se desarrolla casa por casa. Barrios enteros son bombardeados hasta los cimientos. Los hospitales, los mercados y los puentes son objetivos militares. La vida civil ha sido declarada irrelevante.
                </p>
              </div>

              {/* --- Card 2 --- */}
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 hover-lift animate-on-scroll scale-in delay-200">
                <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  Darfur
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Es el eco del genocidio de los años 2000, pero con renovada crueldad. Las milicias Janjaweed, ahora bajo la bandera de las RSF de Hemedti, perpetran una limpieza étnica sistemática contra las comunidades no árabes. Diariamente se producen ejecuciones masivas, violaciones utilizadas como arma de guerra e incendios de aldeas enteras. El mundo, que prometió "Nunca más", observa una repetición en silencio.
                </p>
              </div>

              {/* --- Card 3 --- */}
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 hover-lift animate-on-scroll scale-in delay-400">
                <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  El hambre como arma
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Esto no es una crisis alimentaria; es una hambruna fabricada. Ambos bandos bloquean la ayuda humanitaria, saquean almacenes y destruyen cultivos. Millones de niños se enfrentan a la hambruna. Éste no es un efecto secundario de la guerra; es una de sus principales estrategias.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div >
      {/*linea divisoria*/}

      <div className="bg-white dark:bg-gray-900">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <hr className="border-gray-200 dark:border-transparent" />

        </div>

      </div>



      <div className="bg-white dark:bg-gray-900 text-black dark:text-white py-10">
        <div ref={rostroRef} id= "actua" className="max-w-7xl mx-auto px-6 lg:px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-on-scroll slide-left">
              <h2 className="text-6xl font-bold text-red-600 dark:text-red-400 text-start">
                El rostro del dolor
              </h2>
              <div className="mt-4 text-lg text-start text-gray-700 dark:text-gray-300 space-y-4">
                <p><strong>Vi cómo mataban a mi padre. A mi hermano le cortaron la garganta mientras nos gritaban que éramos 'perros' y que iban a 'limpiar' la tierra. Corrí durante días, bebiendo de los charcos, con los cadáveres de mis vecinos en el camino. Ahora, en un campo de refugiados, mis hijos lloran de hambre por las noches. Miro sus caras y me pregunto: ¿por qué nuestras vidas valen menos? ¿por qué el mundo no nos ve?</strong></p>
                <p className="text-sm italic"> — Testimonio anónimo de un sobreviviente de Darfur.</p>
              </div>
            </div>

            <div className="flex justify-center md:justify-end animate-on-scroll slide-right delay-200">
              <img
                src="niña-lagrimas.jpg"
                alt="Imagen de una niña sufriendo en Sudán"
                className="w-full md:w-auto h-auto max-h-[500px] object-cover rounded-lg shadow-lg hover-lift" />
            </div>
          </div>
        </div>
      </div>

      {/*linea divisoria*/}

      <div className="bg-white dark:bg-gray-900">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <hr className="border-gray-200 dark:border-transparent" />

        </div>

      </div>



      <div className="bg-red-100 dark:bg-black/40 text-black dark:text-white py-16">
        <div ref={complicidadRef} className="max-w-7xl mx-auto px-6 lg:px-8">
          <BlurText 
            text="Complicidad global"
            className="text-6xl font-bold text-red-600 dark:text-red-400 text-center mb-6"
            wordByWord={true}
          />

          <div className="max-w-9xl mt-6 text-lg text-center text-gray-700 dark:text-gray-200">
            <div className="animate-on-scroll slide-up delay-400">
              <BlurText 
                text="Esta catástrofe se ve alimentada por la inacción internacional. Las resoluciones de la ONU son inútiles. Los llamamientos a la ayuda humanitaria reciben una financiación vergonzosa. Y el apagón mediático global otorga a los criminales la impunidad que necesitan para seguir matando."
                className="mb-4"
                delay={600}
              />
            </div>

            <div className="animate-on-scroll scale-in delay-600">
              <BlurText 
                text="Cada día que Sudán no aparece en las noticias es una victoria para ellos."
                className="text-red-600 dark:text-red-400 font-bold"
                delay={1200}
                wordByWord={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/*linea divisoria*/}
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <hr className="border-gray-200 dark:border-transparent" />
        </div>
      </div>

      <div className="bg-black text-black py-16">
        <div ref={accionRef} id="tu-indiferencia" className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center animate-on-scroll fade-in">
            Tu indiferencia es una elección. Tu acción también.
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-center text-white animate-on-scroll slide-up delay-200">
            Has llegado al final. Ya no puedes decir que no lo sabías. Ahora tienes que elegir. El silencio te hace cómplice. La acción, por pequeña que sea, es resistencia.<br />
          </p>

          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* --- Card 1 --- */}

              <div className="bg-gray-700 rounded-lg shadow-lg p-6 relative hover-lift animate-on-scroll scale-in"
              >

                <div className="flex justify-center mb-4">

                  <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center text-white animate-float">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-megaphone-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25 25 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009l.496.008a64 64 0 0 1 1.51.048m1.39 1.081q.428.032.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a66 66 0 0 1 1.692.064q.491.026.966.06" />
                    </svg>
                  </div>
                </div>


                <h3 className="text-xl font-bold text-black dark:text-white mb-3 text-center">
                  1. ROMPE EL SILENCIO
                </h3>
                <p className="text-white dark:text-gray-200 text-center">
                  Comparte esta página. Habla de Sudán. Haz oír tu voz en las redes sociales para que el mundo se vea obligado a mirar. Haz de #DontForgetSudan algo más que un hashtag: conviértelo en una exigencia.
                </p>
                <div className="mt-10 flex justify-center">
                  <button
                    onClick={sharePage}
                    className="mx-auto w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-all duration-500 hover:scale-105"
                    type="button"
                  >
                    Compartir
                  </button>
                </div>
              </div>

              {/* --- Card 2 --- */}
              <div className="bg-gray-700 rounded-lg shadow-lg p-6 relative hover-lift animate-on-scroll scale-in delay-200">


                <div className="flex justify-center mb-4">

                  <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center text-white animate-float" style={{animationDelay: "1s"}}>

                    <svg xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-person-walking" viewBox="0 0 16 16">
                      <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z" />
                      <path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-black dark:text-white mb-3 text-center">
                  2. EXIGIR UNA ACCIÓN POLÍTICA
                </h3>
                <p className="text-white dark:text-gray-200 text-center">
                  Envía un correo electrónico a tus representantes políticos. Pídeles sanciones contra los señores de la guerra, un aumento de la ayuda humanitaria y una verdadera presión diplomática. Tu voz como ciudadano tiene poder.
                </p>
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={() => sendEmailToRepresentative()}
                    type="button"
                    className="w-36 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-3 rounded-md transition-all duration-500 hover:scale-105"
                  >
                    Enviar email
                  </button>
                </div>
              </div>


              {/* --- Card 3 --- */}
              <div className="bg-gray-700 rounded-lg shadow-lg p-6 relative hover-lift animate-on-scroll scale-in delay-400">

                <div className="flex justify-center mb-4">

                  <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center text-white animate-float" style={{animationDelay: "2s"}}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-envelope-paper-heart-fill" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="m3 7.5 3.5 2L8 8.75l1.5.75 3.5-2v-6A1.5 1.5 0 0 0 11.5 0h-7A1.5 1.5 0 0 0 3 1.5zM2 3.133l-.941.502A2 2 0 0 0 0 5.4v.313l2 1.173zm12 3.753 2-1.173V5.4a2 2 0 0 0-1.059-1.765L14 3.133zm-3.693 3.324L16 6.873v6.5zm5.634 4.274L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516M5.693 10.21 0 13.372v-6.5zM8 1.982C9.664.309 13.825 3.236 8 7 2.175 3.236 6.336.31 8 1.982" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-black dark:text-white mb-3 text-center">
                  3. APOYAR A LOS QUE AYUDAN
                </h3>
                <p className="text-white dark:text-gray-200 text-center">
                  Si puedes, haz un donativo a organizaciones como Médicos Sin Fronteras (MSF) o el Programa Mundial de Alimentos (PMA). Son la última línea de defensa para millones de personas.
                </p>
                <div className="mt-10 flex justify-center gap-3">
                  <a
                    href="https://www.msf.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-32 text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md inline-block transition-all duration-500 hover:scale-105"
                  >
                    MSF
                  </a>

                  <a
                    href="https://www.wfp.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-32 text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md inline-block transition-all duration-500 hover:scale-105"
                  >
                    WFP
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>



      {/*linea divisoria*/}

      <div className="bg-white dark:bg-gray-900" >

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <hr className="border-gray-200 dark:border-transparent" />

        </div>

      </div>



      <div className="bg-red-600 text-black py-24">
        <div ref={finalRef} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-on-scroll fade-in">
            <ScrambledText 
              text="Un día, esta guerra terminará. Y la historia nos preguntará a todos: ¿Dónde estabas cuando Sudán se desangraba?"
              className="max-w-5xl mx-auto mt-6 text-3xl text-center text-white"
              delay={200}
              scrambleDuration={3000}
            />
          </div>

          <div className="animate-on-scroll scale-in delay-600">
            <ScrambledText 
              text="No Dejes Que Gane El Silencio."
              className="text-6xl font-bold text-white text-center mt-6"
              delay={800}
              scrambleDuration={2500}
              finalDelay={1000}
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Navbar02Page;

