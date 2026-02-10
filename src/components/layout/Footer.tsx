export default function Footer() {
  return (
    <footer className="mt-10 flex flex-col items-start justify-between gap-3 text-sm text-white/60 md:flex-row">
      <div>© {new Date().getFullYear()} Studio Software — P.IVA (inserire)</div>
      <div className="flex gap-4">
        <a className="hover:text-white" href="#servizi">
          Servizi
        </a>
        <a className="hover:text-white" href="#storia">
          Percorso
        </a>
        <a className="hover:text-white" href="#processo">
          Processo
        </a>
        <a className="hover:text-white" href="#faq">
          FAQ
        </a>
      </div>
    </footer>
  );
}
