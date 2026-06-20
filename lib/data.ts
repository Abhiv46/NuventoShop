export interface Product {
  id: string; name: string; brand: string; price: number; originalPrice: number;
  discount: number; rating: number; reviews: number; image: string;
  category: string; tags: string[]; description: string; features: string[];
  affiliateUrl: string; affiliateSource: string; badge?: string; inStock: boolean;
}
export interface Category {
  id: string; name: string; slug: string; emoji: string;
  description: string; image: string;
}

export const categories: Category[] = [
  { id:'beauty',   name:'Beauty & Skincare',       slug:'beauty-skincare',       emoji:'✨', description:'Glow up with top skincare & makeup essentials',   image:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80' },
  { id:'fashion',  name:'Fashion & Clothing',       slug:'fashion-clothing',      emoji:'👗', description:'Kurtas, sarees, western wear & more',              image:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
  { id:'jewelry',  name:'Jewellery & Accessories',  slug:'jewellery-accessories', emoji:'💎', description:'Trendy earrings, necklaces, bangles & more',       image:'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80' },
  { id:'home',     name:'Home & Decor',             slug:'home-decor',            emoji:'🏡', description:'Beautiful home decor & kitchen essentials',        image:'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80' },
  { id:'wellness', name:'Health & Wellness',        slug:'health-wellness',       emoji:'🌿', description:'Vitamins, supplements & fitness products',         image:'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80' },
  { id:'bags',     name:'Bags & Handbags',          slug:'bags-handbags',         emoji:'👜', description:'Trendy handbags, clutches, totes & backpacks',     image:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80' },
  { id:'footwear', name:'Footwear',                 slug:'footwear',              emoji:'👠', description:'Heels, flats, sandals & ethnic footwear',          image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80' },
  { id:'baby',     name:'Baby & Kids',              slug:'baby-kids',             emoji:'👶', description:'Safe & fun products for your little ones',         image:'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&q=80' },
];

export const products: Product[] = [
  {
    id:'p001', name:"Lakme Absolute Skin Natural Mousse SPF 45 Foundation", brand:'Lakme',
    price:549, originalPrice:849, discount:35, rating:4.3, reviews:12840,
    image:'https://images.unsplash.com/photo-1560879311-370fd4561a0d?w=400&q=80',
    category:'beauty', tags:['foundation','makeup','SPF','lakme','skin'],
    description:'Lightweight mousse foundation with SPF 45 protection. Natural skin-like finish perfect for Indian skin tones with full coverage.',
    features:['SPF 45 sun protection','Lightweight mousse formula','12 shades for Indian skin','Full coverage finish','Long-lasting up to 12 hours'],
    affiliateUrl:'https://amzn.to/REPLACE_WITH_YOUR_LINK', affiliateSource:'amazon', badge:'bestseller', inStock:true,
  },
  {
    id:'p002', name:"Mamaearth Ubtan Face Wash with Turmeric & Saffron 100ml", brand:'Mamaearth',
    price:249, originalPrice:349, discount:29, rating:4.5, reviews:28650,
    image:'https://images.unsplash.com/photo-1629198726018-604230bdb091?w=400&q=80',
    category:'beauty', tags:['facewash','turmeric','natural','glow','mamaearth'],
    description:'Natural ubtan face wash with turmeric and saffron for a bright glowing complexion. Free from harmful chemicals, perfect for all skin types.',
    features:['Turmeric & Saffron formula','No parabens, SLS-free','Brightens and evens skin tone','Suitable for all skin types','Dermatologically tested'],
    affiliateUrl:'https://amzn.to/REPLACE_WITH_YOUR_LINK', affiliateSource:'amazon', badge:'trending', inStock:true,
  },
  {
    id:'p003', name:"WOW Apple Cider Vinegar Shampoo Sulfate Free 300ml", brand:'WOW Skin Science',
    price:379, originalPrice:599, discount:37, rating:4.2, reviews:45200,
    image:'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80',
    category:'beauty', tags:['shampoo','hair care','apple cider vinegar','wow','natural'],
    description:'WOW ACV Shampoo cleanses scalp deeply and promotes healthy hair growth. Sulfate-free formula safe for all hair types including color-treated.',
    features:['Apple Cider Vinegar formula','Sulfate & paraben free','Reduces hair fall','pH balanced formula','Safe for color-treated hair'],
    affiliateUrl:'https://amzn.to/REPLACE_WITH_YOUR_LINK', affiliateSource:'amazon', badge:'deal', inStock:true,
  },
  {
    id:'p004', name:"SUGAR Cosmetics 6-Shade Blush & Contour Palette", brand:'SUGAR Cosmetics',
    price:699, originalPrice:999, discount:30, rating:4.6, reviews:8900,
    image:'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=400&q=80',
    category:'beauty', tags:['blush','contour','SUGAR','palette','makeup'],
    description:'6-shade blush and contour palette for a perfectly sculpted look. Highly pigmented, easily blendable formula in both matte and shimmer finishes.',
    features:['6 shades in 1 palette','Highly pigmented formula','Matte and shimmer finish','Travel-friendly compact','100% vegan formula'],
    affiliateUrl:'https://www.nykaa.com/REPLACE_WITH_YOUR_LINK', affiliateSource:'nykaa', badge:'trending', inStock:true,
  },
  {
    id:'p005', name:"Biotique Bio Papaya Tan Removal Face Wash 150ml", brand:'Biotique',
    price:149, originalPrice:229, discount:35, rating:4.1, reviews:32100,
    image:'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&q=80',
    category:'beauty', tags:['facewash','tan removal','biotique','papaya','natural'],
    description:'Biotique Bio Papaya face wash enriched with pure papaya enzymes for tan removal and natural skin brightening. Gentle daily cleanser.',
    features:['Pure papaya enzyme extract','Removes sun tan naturally','Ideal for oily & combination skin','No harmful chemicals','Gentle daily use'],
    affiliateUrl:'https://amzn.to/REPLACE_WITH_YOUR_LINK', affiliateSource:'amazon', inStock:true,
  },
  {
    id:'p006', name:"Nykaa Eyes On Me Kajal Intense Black 0.35g", brand:'Nykaa Cosmetics',
    price:199, originalPrice:299, discount:33, rating:4.4, reviews:9420,
    image:'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&q=80',
    category:'beauty', tags:['kajal','eye makeup','nykaa','kohl','waterproof'],
    description:'Nykaa intense black kajal with smudge-proof formula. Glides on smoothly and lasts up to 16 hours without fading or smudging.',
    features:['Intense black pigmentation','16-hour long lasting wear','Waterproof & smudge-proof','Smooth effortless glide','Retractable twist design'],
    affiliateUrl:'https://www.nykaa.com/REPLACE_WITH_YOUR_LINK', affiliateSource:'nykaa', badge:'new', inStock:true,
  },
  {
    id:'p007', name:"Libas Women's Embroidered Straight Kurta Set", brand:'Libas',
    price:899, originalPrice:1799, discount:50, rating:4.3, reviews:5630,
    image:'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&q=80',
    category:'fashion', tags:['kurta','ethnic wear','embroidery','festive','women'],
    description:'Beautiful embroidered straight kurta with matching palazzo set. Perfect for festive occasions, family gatherings and casual ethnic outings.',
    features:['Premium soft cotton fabric','Intricate thread embroidery','Straight relaxed cut design','Includes kurta + palazzo set','Easy machine washable'],
    affiliateUrl:'https://www.myntra.com/REPLACE_WITH_YOUR_LINK', affiliateSource:'myntra', badge:'deal', inStock:true,
  },
  {
    id:'p008', name:"BIBA Women's Anarkali Suit Festive Collection", brand:'BIBA',
    price:1499, originalPrice:2999, discount:50, rating:4.5, reviews:3890,
    image:'https://images.unsplash.com/photo-1743229995505-d6374996df1c?w=400&q=80',
    category:'fashion', tags:['anarkali','ethnic','biba','festive','suit'],
    description:"BIBA's stunning Anarkali suit from the festive collection. Crafted with finest fabric and beautiful block prints for special occasions and celebrations.",
    features:['Festive quality fabric','Beautiful block print design','Flowy flared anarkali silhouette','Includes matching dupatta','Available sizes XS-3XL'],
    affiliateUrl:'https://www.myntra.com/REPLACE_WITH_YOUR_LINK', affiliateSource:'myntra', badge:'bestseller', inStock:true,
  },
  {
    id:'p009', name:"Meesho Floral Print Wrap Dress Summer Collection", brand:'Meesho',
    price:449, originalPrice:899, discount:50, rating:4.1, reviews:8920,
    image:'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80',
    category:'fashion', tags:['dress','western wear','floral','summer','casual'],
    description:'Trendy floral wrap dress perfect for summer outings, brunch dates and casual trips. Available in multiple vibrant print options.',
    features:['Breathable georgette fabric','Elegant wrap style design','Adjustable self-tie waist belt','Multiple vibrant floral prints','Free size fits XS-XL'],
    affiliateUrl:'https://www.meesho.com/REPLACE_WITH_YOUR_LINK', affiliateSource:'meesho', badge:'trending', inStock:true,
  },
  {
    id:'p010', name:"Zaveri Pearls Gold-Toned Kundan Earrings Set", brand:'Zaveri Pearls',
    price:399, originalPrice:799, discount:50, rating:4.4, reviews:12300,
    image:'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    category:'jewelry', tags:['earrings','kundan','ethnic jewelry','festive','gold'],
    description:'Exquisite Kundan drop earrings with lustrous gold tone finish. Perfect for weddings, festivals, and traditional celebrations.',
    features:['Premium quality Kundan stones','Beautiful gold-toned brass base','Hypoallergenic safe for sensitive ears','Elegant festive packaging','Nickel & lead free'],
    affiliateUrl:'https://amzn.to/REPLACE_WITH_YOUR_LINK', affiliateSource:'amazon', badge:'bestseller', inStock:true,
  },
  {
    id:'p011', name:"Priyaasi Silver Oxidised Choker Necklace & Earring Set", brand:'Priyaasi',
    price:549, originalPrice:1099, discount:50, rating:4.3, reviews:7840,
    image:'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
    category:'jewelry', tags:['necklace','choker','oxidised silver','boho','tribal'],
    description:'Stunning silver oxidised choker necklace with matching dangler earrings. Perfect for ethnic outfits and indo-western fusion looks.',
    features:['German silver oxidised finish','Complete set with matching earrings','Beautifully handcrafted design','Traditional tribal motifs','Comes in premium gift box'],
    affiliateUrl:'https://amzn.to/REPLACE_WITH_YOUR_LINK', affiliateSource:'amazon', badge:'trending', inStock:true,
  },
  {
    id:'p012', name:"Story@Home Floral 4PC Bed Sheet Set King Size", brand:'Story@Home',
    price:599, originalPrice:1299, discount:54, rating:4.2, reviews:15600,
    image:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80',
    category:'home', tags:['bedsheet','home decor','cotton','floral','king size'],
    description:'Beautiful 4-piece floral cotton bed sheet set. Soft, breathable and colorfast perfect for Indian climate. Easy to maintain.',
    features:['100% pure cotton fabric','Soft 220 thread count','King size 108x108 inches','Set of 1 flat sheet + 2 pillow covers','Easy machine washable'],
    affiliateUrl:'https://amzn.to/REPLACE_WITH_YOUR_LINK', affiliateSource:'amazon', badge:'deal', inStock:true,
  },
  {
    id:'p013', name:"Borosil Palladian Glass Water Bottle 750ml", brand:'Borosil',
    price:349, originalPrice:599, discount:42, rating:4.6, reviews:23100,
    image:'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80',
    category:'home', tags:['water bottle','glass','borosil','eco-friendly','kitchen'],
    description:'Premium borosilicate glass water bottle with secure stainless steel lid. BPA-free and dishwasher safe for eco-conscious daily use.',
    features:['Premium borosilicate glass','100% BPA-free and safe','750ml generous capacity','100% leak-proof lid','Dishwasher safe easy clean'],
    affiliateUrl:'https://amzn.to/REPLACE_WITH_YOUR_LINK', affiliateSource:'amazon', badge:'bestseller', inStock:true,
  },
  {
    id:'p014', name:"Himalayan Organics Plant-Based Biotin 10000mcg 120 Caps", brand:'Himalayan Organics',
    price:699, originalPrice:1299, discount:46, rating:4.4, reviews:18900,
    image:'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&q=80',
    category:'wellness', tags:['biotin','hair growth','supplements','vitamins','wellness'],
    description:'Plant-based Biotin 10000mcg supplement for healthy hair growth, glowing skin and stronger nails. 100% vegan formula with natural extracts.',
    features:['High potency 10000mcg Biotin','100% plant-based vegan formula','120 capsules 4 month supply','No fillers or artificial binders','FSSAI certified & approved'],
    affiliateUrl:'https://amzn.to/REPLACE_WITH_YOUR_LINK', affiliateSource:'amazon', badge:'trending', inStock:true,
  },
  {
    id:'p015', name:"Caprese Aster Medium Satchel Handbag Rose Pink", brand:'Caprese',
    price:1499, originalPrice:2999, discount:50, rating:4.5, reviews:4320,
    image:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80',
    category:'bags', tags:['handbag','satchel','caprese','rose','women','office'],
    description:'Caprese Aster satchel in beautiful rose pink. Premium faux leather with smart compartments for organized daily carry.',
    features:['Premium quality faux leather','Multiple organized compartments','Detachable adjustable shoulder strap','Polished gold-tone metal hardware','1 year manufacturer warranty'],
    affiliateUrl:'https://www.myntra.com/REPLACE_WITH_YOUR_LINK', affiliateSource:'myntra', badge:'new', inStock:true,
  },
  {
    id:'p016', name:"Bata Women's Embellished Block Heels Festive Sandals", brand:'Bata',
    price:799, originalPrice:1599, discount:50, rating:4.2, reviews:6780,
    image:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80',
    category:'footwear', tags:['heels','festive','bata','block heels','embellished','sandals'],
    description:"Gorgeous embellished block heel sandals from Bata's festive collection. Comfortable 3-inch block heel perfect for long events.",
    features:['Comfortable 3-inch block heel','Beautiful embellished ankle strap','Cushioned padded insole','Durable anti-slip outsole','Available in UK sizes 3-8'],
    affiliateUrl:'https://www.myntra.com/REPLACE_WITH_YOUR_LINK', affiliateSource:'myntra', badge:'bestseller', inStock:true,
  },
  {
    id:'p017', name:"LIBAS Women Cotton Blend Kurta Palazzo Set", brand:'LIBAS',
    price:2099, originalPrice:6799, discount:69, rating:4.3, reviews:2730,
    image:'https://images.unsplash.com/photo-1745313452052-0e4e341f326c?w=400&q=80',
    category:'fashion', tags:['kurta','palazzo','ethnic','libas','cotton','festive'],
    description:'Elegant white ethnic kurta palazzo set in cotton blend with delicate floral embroidery. Perfect for festive occasions and casual ethnic days.',
    features:['Cotton blend fabric','Floral embroidered detailing','Includes kurta, palazzo & dupatta','Available sizes XS-XXL','Comfortable everyday ethnic wear'],
    affiliateUrl:'https://fktr.in/jrhr3Lh', affiliateSource:'flipkart', badge:'trending', inStock:true,
  },
];

export const sourceLabels: Record<string, { label: string; color: string }> = {
  amazon:   { label: 'Amazon',   color: '#FF9900' },
  flipkart: { label: 'Flipkart', color: '#2874F0' },
  meesho:   { label: 'Meesho',   color: '#9C27B0' },
  myntra:   { label: 'Myntra',   color: '#FF3E6C' },
  nykaa:    { label: 'Nykaa',    color: '#FC2779' },
};

export const getProductById        = (id: string)  => products.find(p => p.id === id);
export const getProductsByCategory = (cat: string) => products.filter(p => p.category === cat);
export const getCategoryBySlug     = (slug: string) => categories.find(c => c.slug === slug);
export const getCategoryProductCount = (catId: string) => products.filter(p => p.category === catId).length;
export const getFeaturedProducts   = () => products.filter(p => p.badge === 'bestseller' || p.badge === 'trending').slice(0, 8);
export const getRelatedProducts    = (p: Product)  => products.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);
export const searchProducts        = (q: string)   => {
  const lq = q.toLowerCase().trim();
  if (!lq) return products;
  return products.filter(p =>
    p.name.toLowerCase().includes(lq) ||
    p.brand.toLowerCase().includes(lq) ||
    p.tags.some(t => t.includes(lq)) ||
    p.category.includes(lq)
  );
};
