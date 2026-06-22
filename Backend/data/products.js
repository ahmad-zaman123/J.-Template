// Master product catalog for the J. storefront — consolidated from the original
// hardcoded frontend listing pages. Image URLs are the brand CDN assets.

const Q =
  "?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds";
const img = (path) => `https://www.junaidjamshed.com/media/catalog/product/${path}.jpg${Q}`;
const one = (path) => {
  const url = img(path);
  return { mainImage: url, images: [url] };
};

const products = [
  // ───────────────────────── KURTIS (women) ─────────────────────────
  { name: "CAMBRIC PRINTED KURTI", price: 2590, category: "kurti", size: "M", featured: true,
    description: "Soft cambric printed kurti for everyday elegance.", ...one("j/w/jws-24-3073_1_") },
  { name: "CAMBRIC PRINTED KURTI (BLUE)", price: 2590, category: "kurti", size: "M",
    description: "Soft cambric printed kurti in a cool blue palette.", ...one("j/w/jws-24-3072_1_") },
  { name: "CAMBRIC PRINTED KURTI (GREEN)", price: 2590, category: "kurti", size: "M",
    description: "Soft cambric printed kurti in fresh green tones.", ...one("j/w/jws-24-3071_1_") },
  { name: "CAMBRIC PRINTED KURTI (PINK)", price: 2590, category: "kurti", size: "M",
    description: "Soft cambric printed kurti in a delicate pink.", ...one("j/w/jws-24-3070_1_") },
  { name: "CAMBRIC PRINTED KURTI (RED)", price: 2590, category: "kurti", size: "M",
    description: "Soft cambric printed kurti in a bold red print.", ...one("j/w/jws-24-3069_1_") },

  // ───────────────────────── TROUSERS (accessories) ─────────────────────────
  { name: "CAMBRIC TROUSERS | JJLT W-24-8045", price: 1512, oldPrice: 1890, discount: "20%", category: "accessories", size: "M",
    description: "Comfortable cambric trousers to pair with your kurti.", ...one("j/l/jlt-24-8045_1_") },
  { name: "CAMBRIC TROUSERS | JJLT W-24-8044", price: 1512, oldPrice: 1890, discount: "20%", category: "accessories", size: "M",
    description: "Comfortable cambric trousers to pair with your kurti.", ...one("j/l/jlt-24-8044_1_") },
  { name: "CAMBRIC TROUSERS | JJLT W-24-8043", price: 1512, oldPrice: 1890, discount: "20%", category: "accessories", size: "M",
    description: "Comfortable cambric trousers to pair with your kurti.", ...one("j/l/jlt-24-8043_1_") },
  { name: "CAMBRIC TROUSERS | JJLT W-24-8041", price: 1512, oldPrice: 1890, discount: "20%", category: "accessories", size: "M",
    description: "Comfortable cambric trousers to pair with your kurti.", ...one("j/l/jlt-24-8041_1_") },
  { name: "CAMBRIC TROUSERS | JJLT W-24-8042", price: 1512, oldPrice: 1890, discount: "20%", category: "accessories", size: "M",
    description: "Comfortable cambric trousers to pair with your kurti.", ...one("j/l/jlt-24-8042_1_") },

  // ───────────────────────── FRAGRANCES ─────────────────────────
  { name: "BLOOM", price: 1900, category: "fragrance", size: "50ml",
    description: "A fresh floral fragrance.", ...one("b/l/bloom-01_1_1") },
  { name: "J. POUR FEMME", price: 1900, category: "fragrance", size: "50ml", featured: true,
    description: "An elegant signature scent for her.", ...one("p/o/pour-femme-j._1_1") },
  { name: "BEAUTIFUL", price: 5175, oldPrice: 6900, discount: "25%", category: "fragrance", size: "100ml",
    description: "A luxurious long-lasting eau de parfum.", ...one("b/o/bottle_1_1") },
  { name: "JANAN POUR FEMME", price: 5780, oldPrice: 6800, discount: "15%", category: "fragrance", size: "100ml",
    description: "A warm oriental fragrance for women.", ...one("j/a/janan_pour_femme_1__1") },
  { name: "BREEZE", price: 3525, oldPrice: 4700, discount: "25%", category: "fragrance", size: "100ml",
    description: "A light, breezy everyday scent.", ...one("b/r/breeze_2__1") },
  { name: "JANAN OUD", price: 2100, category: "fragrance", size: "50ml",
    description: "A rich oud-based fragrance.", ...one("j/a/janan_oud_1") },
  { name: "KHUMAR", price: 2100, category: "fragrance", size: "50ml",
    description: "An intense, captivating fragrance.", ...one("k/h/khumaar1_2_1_1") },
  { name: "ZARAR GOLD", price: 2100, category: "fragrance", size: "50ml",
    description: "A bold masculine fragrance.", ...one("z/a/zarar_gold_1__1_1") },
  { name: "ZARAR BLUE", price: 2100, category: "fragrance", size: "50ml",
    description: "A cool aquatic masculine fragrance.", ...one("z/a/zarar_bleu_1__1_1") },
  { name: "DEEP BLACK", price: 2100, category: "fragrance", size: "50ml",
    description: "A deep, woody evening fragrance.", ...one("d/e/deep_black_2__1") },

  // ───────────────────────── MEN'S CAPS (accessories) ─────────────────────────
  { name: "GREEN BLENDED MEN CAP", price: 1752, oldPrice: 2190, discount: "20%", category: "accessories",
    description: "Classic blended prayer cap in green.", ...one("0/0/0045-r2_1_") },
  { name: "BLACK BLENDED MEN CAP", price: 1752, oldPrice: 2190, discount: "20%", category: "accessories",
    description: "Classic blended prayer cap in black.", ...one("0/0/0030-r10_1_") },
  { name: "GREY BLENDED MEN CAP", price: 1752, oldPrice: 2190, discount: "20%", category: "accessories",
    description: "Classic blended prayer cap in grey.", ...one("0/0/0018-r66_1_") },
  { name: "BLUE BLENDED MEN CAP", price: 1752, oldPrice: 2190, discount: "20%", category: "accessories",
    description: "Classic blended prayer cap in blue.", ...one("_/j/_jj-cap-0002-r111_1_") },

  // ───────────────────────── MEN'S KURTAS (men) ─────────────────────────
  { name: "BLACK BLENDED KURTA", price: 3592, oldPrice: 4490, discount: "20%", category: "men", size: "M", featured: true,
    description: "Tailored blended kurta in classic black.", ...one("4/6/46496_1_") },
  { name: "GREY BLENDED KURTA", price: 3192, oldPrice: 3990, discount: "20%", category: "men", size: "M",
    description: "Tailored blended kurta in elegant grey.", ...one("4/7/47350_1_") },
  { name: "BLUE BLENDED KURTA", price: 3192, oldPrice: 3990, discount: "20%", category: "men", size: "M",
    description: "Tailored blended kurta in rich blue.", ...one("3/3/33102_1_") },
  { name: "BROWN BLENDED KURTA", price: 3192, oldPrice: 3990, discount: "20%", category: "men", size: "M",
    description: "Tailored blended kurta in warm brown.", ...one("j/j/jjk-sp-inr-a-45512_1__1") },
  { name: "MAROON COTTON KURTA", price: 4712, oldPrice: 5890, discount: "20%", category: "men", size: "M",
    description: "Premium cotton kurta in deep maroon.", ...one("j/j/jjk-33094_1_") },
  { name: "BLACK COTTON KURTA", price: 3380, category: "men", size: "M",
    description: "Everyday cotton kurta in black.", ...one("9/0/90441_3_") },
  { name: "SKY BLUE BLENDED KURTA", price: 3912, oldPrice: 4890, discount: "20%", category: "men", size: "M",
    description: "Tailored blended kurta in sky blue.", ...one("j/j/jjk-32937_1_") },

  // ───────────────────────── KIDS (3pc stitched) ─────────────────────────
  { name: "PINK KHADDI EMBROIDERED 3PC STITCHED", price: 3592, oldPrice: 4490, discount: "20%", category: "kids", size: "6-9", featured: true,
    description: "Embroidered 3-piece stitched suit for kids in pink.", ...one("2/4/24-1950_1_") },
  { name: "OFF WHITE KHADDI EMBROIDERED 3PC STITCHED", price: 3592, oldPrice: 4490, discount: "20%", category: "kids", size: "6-9",
    description: "Embroidered 3-piece stitched suit for kids in off white.", ...one("2/4/24-1949_1_") },
  { name: "LILAC KHADDI EMBROIDERED 3PC STITCHED", price: 3592, oldPrice: 4490, discount: "20%", category: "kids", size: "6-9",
    description: "Embroidered 3-piece stitched suit for kids in lilac.", ...one("2/4/24-1948_1_") },

  // ───────────────────────── UNSTITCHED ─────────────────────────
  { name: "EMBROIDERED VISCOSE | UF-719", price: 6990, category: "unstitched", featured: true,
    description: "Unstitched embroidered viscose 3-piece.", ...one("2/4/24-1799_1_") },
  { name: "EMBROIDERED VISCOSE | UF-718", price: 6990, category: "unstitched",
    description: "Unstitched embroidered viscose 3-piece.", ...one("2/4/24-1798_3_") },
  { name: "GREEN UNSTITCHED 3PC", price: 2952, oldPrice: 3690, discount: "20%", category: "unstitched",
    description: "Unstitched 3-piece suit in green.", ...one("3/2/32927_3_") },
];

module.exports = products;
