# Ritchie Pools & Spas — Website Redesign

**Client:** Ritchie Pools & Spas, Kill Devil Hills, NC  
**Owner:** Tom Ritchie  
**Phone:** (252) 202-1509  
**Showroom:** 700 W Lake Dr, Kill Devil Hills, NC 27948  

---

## Project Structure

```
ritchie-pools-redesign/
├── index.html          ← Homepage
├── about.html          ← About Us / Tom Ritchie's story
├── pool-services.html  ← Pool Services + Products
├── spa-service.html    ← Spa Services
├── get-a-quote.html    ← Quote Request Form
├── gallery.html        ← Photo Gallery (filterable + lightbox)
├── contact.html        ← Contact + Map
├── css/
│   └── style.css       ← Shared design system
├── js/
│   └── main.js         ← Shared JS (nav, animations, mobile menu)
├── images/             ← Drop real photos here
└── README.md
```

---

## Design System

- **Primary font:** Playfair Display (serif, for headings)
- **Body font:** DM Sans
- **Colors:** Navy `#0a1628` · Aqua `#39c0e0` · Gold `#c8a96e` · Deep Blue `#0d2140`
- **Style:** Luxury coastal — premium but approachable

---

## Before Going Live — Checklist

### 1. Contact Form Setup (Formspree — Free)
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your Form ID (looks like: `xpzgkwqr`)
3. In `get-a-quote.html` and `contact.html`, replace `YOUR_FORM_ID` with your actual ID:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
4. Test with a real submission — responses go to whatever email you register with

### 2. Replace Placeholder Photos
- Drop real photos into `/images/` folder
- In `gallery.html`, replace Unsplash URLs with local paths: `images/your-photo.jpg`
- In `index.html`, `about.html`, `pool-services.html` — same for section images
- **Source:** Ritchie's Yelp profile has 77 existing photos to start with
- **Goal:** Replace all Unsplash photos before going live

### 3. Get Real Google Review Count & Link
- Google Maps listing: `https://www.google.com/maps/place/Ritchie+Pools+and+Spas/@35.6204769,-76.214774,17z`
- Update the review count in `index.html` testimonials section with actual number
- Update Google review link in footer across all pages

### 4. Fix the Google Maps Embed (contact.html)
- The iframe embed may need an API key for production
- Alternatively, link to Google Maps URL for the showroom address

### 5. Domain & Hosting (GitHub Pages — Free)
```bash
# Initialize git in this folder
git init
git add .
git commit -m "Initial commit — Ritchie Pools redesign"

# Create a repo on GitHub named: ritchie-pools-redesign
# Then push:
git remote add origin https://github.com/hollywood017/ritchie-pools-redesign.git
git branch -M main
git push -u origin main

# In GitHub repo: Settings → Pages → Deploy from branch → main → / (root)
# Site will be live at: https://hollywood017.github.io/ritchie-pools-redesign/
```

---

## Key Real Info Found During Research

- **Owner:** Tom Ritchie (grew up on OBX, family owned Rollason and Wood Realty)
- **Licensed Aspen Spas Dealer**
- **Founded:** January 1, 2005
- **BBB A+ Accredited Since:** May 11, 2017
- **Second phone:** (252) 256-2608
- **Fax:** (252) 491-5221
- **Mailing:** 205 Watersedge Drive, Kill Devil Hills, NC 27948
- **Showroom:** 700 W Lake Dr, Kill Devil Hills, NC 27948

---

## Phase 2 — AI Scheduling System
After the website is approved and live, next steps will include:
- Replacing the Excel/screenshot scheduling workflow
- Building a technician scheduling dashboard
- Automated weekly schedule texts to technicians
- Customer service request portal

*Discovery questions needed: How many techs? Jobs per week? How are jobs currently assigned? What happens when a tech calls out?*
