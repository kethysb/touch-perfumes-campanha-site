const phone = "5519989191311";
const message =
  "Oi! Vi a promoção da Touti Americana Shopping: pague 4 e leve 5 perfumes por R$199,90. Quero montar meu kit com 1 perfume grátis. Quais fragrâncias estão disponíveis?";
const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  link.href = whatsappUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});
