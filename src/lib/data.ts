export const BUSINESS = {
  name: "Green House Cafe",
  nameHindi: "ग्रीन हाउस कैफे",
  tagline: "The little green house that never closes.",
  category: "Tiffin center & coffee house",
  area: "River View Colony · Koni · Bilaspur, Chhattisgarh",
  // PIN intentionally not shown: the two Google listings for this business
  // disagree (495001 vs 495009). The directions link resolves the ambiguity.
  address: "River View Colony, Koni, Bilaspur, Chhattisgarh, India",
  phoneDisplay: "+91 95892 64628",
  phoneHref: "tel:+919589264628",
  hours: "Open 24 hours · every day",
  hoursShort: "Open 24 hours",
  rating: "5.0",
  ratingLabel: "5.0-star rating on Google",
  plusCode: "44JG+G8 Bilaspur, Chhattisgarh",
  coordinates: "22.1313335, 82.1257748",
  mapsListing: "https://maps.app.goo.gl/NagLjbTe1cDkdwCZ7",
} as const;

// Straight-to-directions URL using the business's own listing data as the
// destination (no invented place ids).
export const DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Green+House+cafe%2C+River+View+Colony%2C+Koni%2C+Bilaspur%2C+Chhattisgarh";
