## REMWaste React Code Challenge: Skip select page

### Tools: Vite, React, Tailwind and Lucide icons

### Test locally:

1. Clone and run npm run dev
2. Connect to http://localhost:5173/

### Improvements: The overall structure of the page was maintained with the changes bellow

#### Header (multi page form progress):

- Original component breaks when its width becomes larger than the width of the viewport, and a horizontal scroll is needed to navigate the full component. This was reworked so that it remains responsive regardless of the width of the screen
- Removed text for lower viewport width, kept only the icons
- Highlighted the current step for better UX

#### Main (skip cards):

- Select button was removed as the whole card can be clicked in order for the user to select an option. The border highlight plus the footer info are enough for the user to see the current selected option
- Added additional info on the card for the following data properties: [allowed_on_road: true, allows_heavy_waste: true]

#### Footer (back/forth navigation)

- Redesigned selected skip option info (size, period, price)
