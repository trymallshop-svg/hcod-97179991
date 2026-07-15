export const WHATSAPP_NUMBER = "201011955896";
export const CONTACT_EMAIL = "info@hcod.tech";
export const PHONE_DISPLAY = "+20 10 11955896";

export const buildWhatsAppUrl = (message?: string) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

/** Scroll to the contact section and set a "source" hint for the form. */
export const openContactForm = (source?: string) => {
  if (source && typeof window !== "undefined") {
    window.sessionStorage.setItem("hcod_contact_source", source);
    window.dispatchEvent(new CustomEvent("hcod:contact-source", { detail: source }));
  }
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};
