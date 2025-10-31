import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";

// BUTTON CARD1
export const sharePage = async () => {
  const shareData = {
    title: document.title || "SUDÁN: ANATOMÍA DEL SILENCIO",
    text: "Echa un vistazo a esta página",
    url: window.location.href,
  };
  try {
    if ((navigator as any).share) {
      await (navigator as any).share(shareData);
      return;
    }

    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(shareData.url);
      alert("Enlace copiado al portapapeles");
      return;
    }

    const ta = document.createElement("textarea");
    ta.value = shareData.url;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    alert("Enlace copiado al portapapeles");
  } catch (err) {
    console.error("Error al compartir:", err);
    alert("No se pudo compartir el enlace");
  }
};

// BUTTON CARD 2
export const sendEmailToRepresentative = () => {
  const subject = encodeURIComponent("Acción urgente ante la crisis en Sudán");
  const body = encodeURIComponent(
    `Estimado/a Representante:

Me dirijo a usted para solicitar una acción inmediata ante la crisis que se vive en Sudán. La comunidad internacional debe imponer sanciones a las facciones en conflicto, incrementar la ayuda humanitaria y ejercer una presión diplomática efectiva para poner fin a este conflicto.

El pueblo de Sudán no puede esperar más.

Atentamente,

[Su nombre]`
  );
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
};

const Navbar02Page = () => {
  return (
    <div className="min-h-screen bg-muted">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Logo />

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <NavMenu />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar02Page;