const phone = "5519982075633";
const message =
  "Oi! Vi a promoção da Touti Americana Shopping: 5 perfumes por R$199,90, saindo R$39,98 cada. Quero montar meu kit pelo WhatsApp. Quais fragrâncias estão disponíveis hoje?";
const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  link.href = whatsappUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.addEventListener("click", () => {
    if (typeof fbq === "function") {
      const offer = {
        content_name: "Kit Touti Americana Shopping - 5 perfumes por R$199,90",
        content_category: "perfumes",
        value: 199.90,
        currency: "BRL"
      };
      fbq("track", "Lead", {
        ...offer,
        lead_type: "whatsapp"
      });
      fbq("trackCustom", "WhatsAppClick", {
        ...offer,
        destination_phone: phone
      });
    }
  });
});
