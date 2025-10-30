import { Button } from "@/components/ui/button";
import { Logo } from "@/components/navbar-02/logo";
import { NavMenu } from "@/components/navbar-02/nav-menu";
import { NavigationSheet } from "@/components/navbar-02/navigation-sheet";
import { SunIcon } from "lucide-react";

const Navbar02Page = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <nav className="h-16 bg-transparent text-white flex-shrink-0">
          <div className="h-full flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-full grid grid-cols-3 items-center">

              <div className="justify-self-center">
                <Logo />
              </div>
              {/* Desktop Menu */}
              <div className="hidden md:block justify-self-center">
                <NavMenu />
              </div>

              <div className="flex items-center gap-3 justify-self-end">
                {/* <Button variant="outline" className="hidden sm:inline-flex">
                Sign In
              </Button> */}
                {/* <Button>Sign Up</Button> */}
                <Button size="icon" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white" >
                  <SunIcon />
                </Button>


                <div className="md:hidden">
                  <NavigationSheet />
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex-grow flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-9xl font-bold text-center">
            SUDÁN: ANATOMÍA <br />DEL SILENCIO
          </h1>
          <p className="max-w-7xl mx-auto mt-9 text-xl text-center text-white/90">
            La guerra más grande del mundo es la que hemos decidido ignorar. Esto no es un llamado <br /> a tu compasión. Es un llamado a tu ira.
          </p>
        </div>
      </div>

      <div className="bg-white text-black py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-7xl font-bold text-red-600 text-start">
            La traición
          </h2>
          <p className="max-w-2xl  mt-6 text-lg text-start text-gray-700">
            En 2019, una revolución popular llenó de esperanza a Sudán y derrocó a un dictador genocida. Soñaban con libertad, paz y justicia. Pero los guardianes de esa transición, el general del ejército Abdel Fattah al-Burhan y el señor de la guerra paramilitar Mohamed Hamdan Dagalo "Hemedti", devoraron la revolución desde dentro. Después de un golpe de estado en 2021, su alianza de conveniencia estalló en una guerra total por el poder en abril de 2023.<br /></p>

          <p className="max-w-2xl mt-6 text-lg text-start text-gray-700"><strong>No es una guerra civil. Es una lucha mafiosa entre dos facciones militares que han tomado como rehenes a 48 millones de personas y el mundo les ha dado el regalo de su silencio.</strong>
          </p>
        </div>
      </div>

      {/*linea divisoria*/}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <hr className="border-gray-200" />
        </div>
      </div>

      <div className="bg-white text-black py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-6xl font-bold text-red-600 text-center">
            Dimensiones del conflicto
          </h2>
          <p className="max-w-14xl  mt-6 text-lg text-center text-gray-700">
            La población sudanesa sufre graves vulneraciones de derechos humanos. El conflicto está marcado por la violencia indiscriminada y ataques deliberados contra civiles y personal humanitario. Especialmente alarmante es el uso generalizado de la violencia sexual como arma de guerra, documentándose violaciones y esclavitud sexual con un claro componente étnico y de género a manos de las Fuerzas de Apoyo Rápido (RSF) contra comunidades no árabes. También se han reportado matrimonios forzados e infantiles, así como el reclutamiento forzoso de niños y adolescentes.<br /></p>

          <p className="max-w-14xl mt-6 text-lg text-center text-gray-700"><strong>En este contexto, la crisis de desplazamiento forzado no ha dejado de agravarse: casi nueve millones de personas se han visto desplazadas forzosamente dentro del país, en lo que constituye el mayor éxodo interno jamás registrado a nivel global. Mientras, más de tres millones han huido en busca de refugio, principalmente a países vecinos como Egipto, Chad o Sudán del Sur, y a otros países cercanos como Libia, donde muchas personas sufren condiciones de esclavitud y tratos inhumanos y degradantes.</strong>
          </p>
        </div>
      </div>

      {/*linea divisoria*/}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <hr className="border-gray-200" />
        </div>
      </div>

      <div className="bg-white text-black py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-6xl font-bold text-red-600 text-start">
            Geografía del terror
          </h2>
          <p className="max-w-2xl mt-6 text-lg text-start text-gray-700">
            La guerra ha devorado el país, transformándolo en un infierno planificado.<br />
          </p>

          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* --- Card 1 --- */}

              <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-black mb-3">
                  Jartum y las ciudades
                </h3>
                <p className="text-gray-700">
                  Se han convertido en jaulas urbanas donde la lucha se desarrolla casa por casa. Barrios enteros son bombardeados hasta los cimientos. Los hospitales, los mercados y los puentes son objetivos militares. La vida civil ha sido declarada irrelevante.
                </p>
              </div>

              {/* --- Card 2 --- */}
              <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-black mb-3">
                  Darfur
                </h3>
                <p className="text-gray-700">
                  Es el eco del genocidio de los años 2000, pero con renovada crueldad. Las milicias Janjaweed, ahora bajo la bandera de las RSF de Hemedti, perpetran una limpieza étnica sistemática contra las comunidades no árabes. Diariamente se producen ejecuciones masivas, violaciones utilizadas como arma de guerra e incendios de aldeas enteras. El mundo, que prometió "Nunca más", observa una repetición en silencio.
                </p>
              </div>

              {/* --- Card 3 --- */}
              <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-black mb-3">
                  El hambre como arma
                </h3>
                <p className="text-gray-700">
                  Esto no es una crisis alimentaria; es una hambruna fabricada. Ambos bandos bloquean la ayuda humanitaria, saquean almacenes y destruyen cultivos. Millones de niños se enfrentan a la hambruna. Éste no es un efecto secundario de la guerra; es una de sus principales estrategias.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div >
      {/*linea divisoria*/}

      <div className="bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <hr className="border-gray-200" />

        </div>

      </div>



      <div className="bg-white text-black py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-7xl font-bold text-red-600 text-start">
                El rostro del dolor
              </h2>
              <div className="mt-4 text-lg text-start text-gray-700 space-y-4">
                <p><strong>Vi cómo mataban a mi padre. A mi hermano le cortaron la garganta mientras nos gritaban que éramos 'perros' y que iban a 'limpiar' la tierra. Corrí durante días, bebiendo de los charcos, con los cadáveres de mis vecinos en el camino. Ahora, en un campo de refugiados, mis hijos lloran de hambre por las noches. Miro sus caras y me pregunto: ¿por qué nuestras vidas valen menos? ¿por qué el mundo no nos ve?</strong></p>
                <p className="text-sm italic"> — Testimonio anónimo de un sobreviviente de Darfur.</p>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <img
                src="niña-lagrimas.jpg"
                alt="Imagen de una niña sufriendo en Sudán"
                className="w-full md:w-auto h-auto max-h-[500px] object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      {/*linea divisoria*/}

      <div className="bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <hr className="border-gray-200" />

        </div>

      </div>



      <div className="bg-red-100 text-black py-16">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <h2 className="text-6xl font-bold text-red-600 text-center">

            Complicidad global

          </h2>

          <div className="max-w-9xl mt-6 text-lg text-center text-gray-700">
            <p> Esta catástrofe se ve alimentada por la inacción internacional. Las resoluciones de la ONU son inútiles. Los llamamientos a la ayuda humanitaria reciben una financiación vergonzosa. Y el apagón mediático global otorga a los criminales la impunidad que necesitan para seguir matando.</p>

            <strong className="text-red-600 ">Cada día que Sudán no aparece en las noticias es una victoria para ellos.</strong>


          </div>

        </div>

      </div>
      {/*linea divisoria*/}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <hr className="border-gray-200" />
        </div>
      </div>

      <div className="bg-black text-black py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center">
            Tu indiferencia es una elección. Tu acción también.
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-center text-white">
            Has llegado al final. Ya no puedes decir que no lo sabías. Ahora tienes que elegir. El silencio te hace cómplice. La acción, por pequeña que sea, es resistencia.<br />
          </p>

          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* --- Card 1 --- */}

              <div className="bg-gray-700 rounded-lg shadow-lg p-6 relative"
              >
                {/* Contenedor para centrar el icono y el círculo */}
                <div className="flex justify-center mb-4">
                  {/* Círculo rojo */}
                  <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24" /* Tamaño ajustado */
                      height="24" /* Tamaño ajustado */
                      fill="currentColor" /* Hereda color blanco */
                      className="bi bi-megaphone-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25 25 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009l.496.008a64 64 0 0 1 1.51.048m1.39 1.081q.428.032.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a66 66 0 0 1 1.692.064q.491.026.966.06" />
                    </svg>
                  </div>
                </div>

                {/* Contenido original de la card */}
                <h3 className="text-xl font-bold text-black mb-3 text-center"> {/* Título centrado */}
                  1. ROMPE EL SILENCIO
                </h3>
                <p className="text-white text-center"> {/* Párrafo centrado */}
                  Comparte esta página. Habla de Sudán. Haz oír tu voz en las redes sociales para que el mundo se vea obligado a mirar. Haz de #DontForgetSudan algo más que un hashtag: conviértelo en una exigencia.
                </p>
              </div>

              {/* --- Card 2 --- */}
              <div className="bg-gray-700 rounded-lg shadow-lg p-6 relative">

                {/* Contenedor para centrar el icono y el círculo */}
                <div className="flex justify-center mb-4">
                  {/* Círculo rojo */}
                  <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center text-white">
                    {/* Pega aquí el SVG del icono para Card 2 */}
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

                <h3 className="text-xl font-bold text-black mb-3 text-center">
                  2. EXIGIR UNA ACCIÓN POLÍTICA
                </h3>
                <p className="text-white text-center">
                  Envía un correo electrónico a tus representantes políticos. Pídeles sanciones contra los señores de la guerra, un aumento de la ayuda humanitaria y una verdadera presión diplomática. Tu voz como ciudadano tiene poder.
                </p>
              </div>

              {/* --- Card 3 --- */}
              <div className="bg-gray-700 rounded-lg shadow-lg p-6 relative">

                {/* Contenedor para centrar el icono y el círculo */}
                <div className="flex justify-center mb-4">
                  {/* Círculo rojo */}
                  <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center text-white">
                    {/* Pega aquí el SVG del icono para Card 3 */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-envelope-paper-heart-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="m3 7.5 3.5 2L8 8.75l1.5.75 3.5-2v-6A1.5 1.5 0 0 0 11.5 0h-7A1.5 1.5 0 0 0 3 1.5zM2 3.133l-.941.502A2 2 0 0 0 0 5.4v.313l2 1.173zm12 3.753 2-1.173V5.4a2 2 0 0 0-1.059-1.765L14 3.133zm-3.693 3.324L16 6.873v6.5zm5.634 4.274L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516M5.693 10.21 0 13.372v-6.5zM8 1.982C9.664.309 13.825 3.236 8 7 2.175 3.236 6.336.31 8 1.982" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-black mb-3 text-center">
                  3. APOYAR A LOS QUE AYUDAN
                </h3>
                <p className="text-white text-center">
                  Si puedes, haz un donativo a organizaciones como Médicos Sin Fronteras (MSF) o el Programa Mundial de Alimentos (PMA). Son la última línea de defensa para millones de personas.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div >

      {/*linea divisoria*/}

      <div className="bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <hr className="border-gray-200" />

        </div>

      </div>



      <div className="bg-red-600 text-black py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <h2 className=" max-w-5xl mx-auto mt-6 text-3xl text-center text-white">

            Un día, esta guerra terminará. Y la historia nos preguntará a todos: ¿Dónde estabas cuando Sudán se desangraba?

          </h2>

          <h1 className="text-6xl font-bold text-white text-center mt-6">
            No Dejes Que Gane El Silencio.
          </h1>

        </div>

      </div>
    </>
  );
};

export default Navbar02Page;

