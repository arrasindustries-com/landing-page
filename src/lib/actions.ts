export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function openEmail() {
  const email = "hello@studio-software.it";
  const subject = encodeURIComponent("Richiesta gestionale");
  const body = encodeURIComponent(
    "Ciao, vorrei una call per un gestionale.\n\nNome:\nAttivita:\nContatto:\nObiettivo:\n",
  );
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

export function openWhatsApp() {
  const phone = "393331234567";
  const text = encodeURIComponent(
    "Ciao! Vorrei informazioni per un gestionale su misura.",
  );
  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
}
