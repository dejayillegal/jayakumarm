# JAYAKUMAR M — Retro-Futurist Arcade Portfolio Design Guidelines

## Design Approach
**Aesthetic**: Retro arcade terminals merged with futuristic minimalism — a high-end experimental UI that feels like a CRT console from 2080. Tactile, pixel-perfect, yet elegant.

**Core Visual Language**: Arcade/Terminal fusion with black & white base, orange accent glow (#FF6B00), and subtle CRT scanline overlay texture.

## Typography System
- **Primary**: JetBrains Mono or IBM Plex Mono (monospace for all body text)
- **Display Titles**: Bitmap or pixel grid style fonts (VT323, Space Mono)
- **Hierarchy**: Large display titles with terminal-like formatting, monospace for all content

## Layout & Spacing
- **Grid**: Modular asymmetric composition with animated borders
- **Spacing**: Use Tailwind units of 4, 6, 8, 12 for consistent pixel-perfect alignment
- **Background**: Deep matte black with moving scanline noise texture, light glow effects near borders
- **Panels**: Subtle perspective transforms creating 3D depth (like floating on old CRT interface)

## Color Palette
- **Primary Black**: Deep matte black (#000000 or #0a0a0a)
- **Accent Orange**: Neon orange (#FF6B00) for highlights, glows, borders
- **Secondary**: Gray tones for subtle text
- **Highlight**: Lime green for special accents
- **All elements**: Glass-pixel aesthetic with translucent overlays

## Section Specifications

### Hero Section
- Large typewriter-animated headline with orange flicker effect and scanline glow
- Portrait card framed with neon orange circuit lines, corner highlights, pulsing data halo
- Floating translucent skill tags as glass-pixel pills: [Automation], [Architecture], [Quality • Reliability]
- Terminal-style CTA buttons with glitch animations
- Two-column layout: left for text, right for portrait + tags

### About Section
- Header styled as terminal command: `# ABOUT_ME {}`
- Three data cards (Focus, Method, Values) with "matrix decode" or "data-upload" reveal animations
- Grid layout with glowing orange outlines
- Each card appears with staggered entrance animation

### Projects Section — "/PROJECTS_RUN"
- Console command output aesthetic with boot entry style
- Two-column flexible grid with glowing outlines
- Each project card has:
  - Command-line inspired icons
  - Animated loading bars
  - Flicker/glitch reveal on entrance
  - Orange neon borders on hover with pixel particle drift
- 5 projects: thecueRoom, JobFinder Pro, C/No Voidline, GNSS Android Test App, plus one more

### Career Timeline — "/JOURNEY_LOG"
- Vertical timeline as data stream console
- Pulsing orange nodes on left, text logs on right
- Each entry slides in like terminal boot logs with flicker effect
- Covers 2009-2025 career history in chronological order

### Footer — "/CONTACT_ROOT"
- Minimal, center-aligned
- Neon orange divider line
- Live status pulse animation (⬤)
- Contact details: email, phone, LinkedIn, GitHub
- Sub-footer: "© 2025 Jayakumar M — Built with automation, art, and intent."

## Animations & Interactions
- **Typewriter effects**: Terminal-like text reveals
- **Cursor**: Retro orange pulse with trailing glow on hover
- **Transitions**: Pixel dissolve, soft flickers, data streaming effects, signal loss animations
- **Scroll reveals**: Terminal logs appearing progressively
- **Hover effects**: CRT clicks/hum sounds, orange glow trails, pixel particle drift
- **Motion**: Kinetic type, scroll-linked parallax, motion-blur trails inspired by eloyb.design
- **Easter egg**: Console overlay with command list on typing "help"

## Component Patterns
- **Buttons**: Terminal-style with glitch/flicker animations
- **Cards**: Glass-pixel aesthetic with glowing borders, perspective depth
- **Borders**: Animated, circuit-line inspired with corner highlights
- **Loading states**: Retro progress bars, data stream effects

## Visual Effects Layer
- CRT scanlines overlay (CSS blend mode)
- Dithering noise texture on background
- Light glow effects near borders and accents
- Pixel distortion on page transitions
- Cursor light path trails (orange → white → fade)

## Images
No hero image required. Use glowing portrait card with neon circuit frame instead. All visuals should embrace the terminal/arcade aesthetic through CSS effects and SVG graphics rather than photography.

## Accessibility Notes
Maintain high contrast between orange accents and black background. Ensure all interactive elements have clear focus states with orange glow. Animations should be performance-optimized and respect prefers-reduced-motion.