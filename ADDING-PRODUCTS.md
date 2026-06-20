# 🛍️ Naya Product Kaise Add Karein

Ye guide aapko sikhayegi ke `lib/data.ts` mein naya product kaise add karna hai —
bina coding background ke bhi.

## Step 1: Affiliate Link Lein

1. EarnKaro / Cuelinks app ya website kholein
2. Jis product ko promote karna hai, uska URL Flipkart/Amazon/Myntra/Nykaa/Meesho se copy karein
3. EarnKaro ke "Convert Link" box mein paste karein
4. Jo naya link mile (affiliate link), wahi copy kar lein — yehi `affiliateUrl` mein jayega

## Step 2: Product Photo Lein

- Best option: us product ki **official image ka URL** (jahan se bhi mil jaye, jaise
  brand ki website, ya Unsplash se related/generic photo)
- Agar Unsplash use kar rahe hain: unsplash.com pe jaake related photo dhoondein,
  us photo ko khol kar address bar se ya "..." → "Copy image address" se URL le sakte hain
- Agar koi bhi image na mile, koi tension nahi — website mein automatic fallback hai,
  "Image coming soon" dikha dega khud, broken nahi hoga

## Step 3: `lib/data.ts` Mein Naya Block Add Karein

`products` array ke andar, **akhri product ke baad** (closing `];` se pehle),
ye template copy-paste karke fill karein:

```ts
  {
    id:'p017', name:"Yahan Product Ka Pura Naam", brand:'Brand Ka Naam',
    price:499, originalPrice:799, discount:38, rating:4.4, reviews:1500,
    image:'https://yahan-image-ka-url-daalein.jpg',
    category:'beauty', tags:['tag1','tag2','tag3'],
    description:"Product ke baare mein 1-2 line mein bataein — kya khaas hai isme.",
    features:['Feature 1','Feature 2','Feature 3','Feature 4'],
    affiliateUrl:'https://yahan-apna-earnkaro-link-paste-karein', affiliateSource:'amazon', badge:'trending', inStock:true,
  },
```

### Har field ka matlab:

| Field | Kya daalna hai |
|---|---|
| `id` | Agla number — agar 16 products hain to `p017` |
| `name` | Product ka pura naam (jaisa Amazon/Flipkart pe dikhta hai) |
| `brand` | Sirf brand ka naam |
| `price` | Current/sale price (sirf number, ₹ ka sign nahi) |
| `originalPrice` | Bina discount wali price |
| `discount` | Kitna % off hai (number) |
| `rating` | Product ki rating (jaise 4.3) |
| `reviews` | Kitne reviews hain (approx number chalega) |
| `image` | Product image ka URL |
| `category` | In mein se ek: `beauty`, `fashion`, `jewelry`, `home`, `wellness`, `bags`, `footwear`, `baby` |
| `tags` | 3-5 search keywords, chhote letters mein |
| `description` | 1-2 sentence mein product ka summary |
| `features` | 4-5 bullet points, key highlights |
| `affiliateUrl` | Aapka EarnKaro/Cuelinks/Amazon/Flipkart affiliate link |
| `affiliateSource` | In mein se ek: `amazon`, `flipkart`, `myntra`, `nykaa`, `meesho` |
| `badge` | Optional — `bestseller`, `trending`, ya hata bhi sakte hain |
| `inStock` | `true` ya `false` |

## Step 4: Save aur Deploy

Agar aap khud GitHub pe edit kar rahe hain:
1. File save karein
2. Commit message likhein (jaise "Added new product")
3. Push karein — Vercel khud-ba-khud naya deployment bana dega 2-3 minute mein

Agar Claude se karwa rahe hain: bas product ka naam + EarnKaro link bhej dein,
baaki sab main fill kar dunga.

---

⚠️ **Yaad rahe**: Jab tak aapka affiliate account (EarnKaro/Amazon/Flipkart) approve
nahi hota, `affiliateUrl` mein placeholder hi rakhein. Placeholder links wale products
abhi bhi website pe dikhte hain, bas click karne pe real destination nahi jaate —
isliye approval milte hi sabko update kar lena zaroori hai.
