# Cartoon Style Guide - Recipe 3D App

**Style Name:** Modern Minimalist Flat Vector Illustration
**Created:** 2025-12-04

---

## Style Philosophy

> "Make it look like you're stepping into an illustrated cookbook - clean, professional, but clearly hand-drawn and stylized."

This style bridges the gap between realistic 3D and flat 2D illustration, creating a unique visual identity that's:
- **Professional** yet approachable
- **Modern** but timeless
- **3D** with 2D sensibility
- **Detailed** yet simple

---

## Visual Principles

### 1. Flat Colors with Depth
- Use solid base colors (no gradients within objects)
- Depth comes from **cel-shading** (3 distinct tones)
- Avoid realistic material complexity
- Think: "colored paper cutouts with shadows"

### 2. Clear Definition
- Every object has a **thin black outline**
- Outlines create separation and readability
- No blurry edges or soft transitions
- Think: "ink drawing filled with color"

### 3. Simplified Lighting
- Light source is **obvious** and directional
- Shadows are **clear** and purposeful
- No ambient occlusion or subtle fills
- Think: "stage lighting, not natural light"

### 4. Strategic Shine
- Reflections become **white dots or stripes**
- Metallic = flat color + white highlight
- Glass = solid color + white gleam
- Think: "cartoon sparkles, not ray tracing"

### 5. Clean Palette
- Maintain **whites and creams** as base
- Accent with **vibrant but not oversaturated** colors
- Use **consistent color temperature** (warm)
- Think: "Scandinavian minimalism meets illustration"

---

## Material Style Guide

### Countertops (Dark Stone/Granite)
**Style:** Flat dark with subtle highlight stripe

```
Base Color: #2d2d2d (dark gray)
Shading: 3-tone (dark → mid → light edge)
Outline: 0.025 black
Highlight: White stripe along top edge
Finish: Matte (no reflections)
```

**Visual:** Like a dark gray paper with a white marker line

---

### Cabinets (White)
**Style:** Clean white with minimal shadow

```
Base Color: #ffffff (pure white)
Shading: 3-tone (white → light gray → shadow)
Outline: 0.025 black
Highlight: None needed (already light)
Finish: Matte
```

**Visual:** Like white cardstock with gentle shadows

---

### Appliances (Metal)
**Style:** Solid gray/silver with white shine stripe

```
Base Color: #c0c0c0 (silver) or #4a4a4a (dark metal)
Shading: 3-tone gradient
Outline: 0.025 black
Highlight: White vertical or curved stripe
Finish: Flat (no metalness property)
```

**Visual:** Like a toy appliance or vector icon

---

### Glass (Lights, Shakers)
**Style:** Solid translucent color with white dot

```
Base Color: Light version of intended color
Shading: Minimal (2-tone max)
Outline: 0.02 black (thinner)
Highlight: Single white dot or crescent
Finish: Solid, no transmission
```

**Visual:** Like colored acrylic with cartoon shine

---

### Wood (Cutting Board, Books)
**Style:** Flat brown with darker grain suggestion

```
Base Color: #8b4513 (saddle brown)
Shading: 3-tone (brown → darker brown → shadow)
Outline: 0.025 black
Highlight: None (wood is matte)
Finish: Flat
Optional: Thin dark lines for wood grain
```

**Visual:** Like a brown marker drawing

---

### Fruit (Organic, Colorful)
**Style:** Vibrant solid colors with single white dot

```
Base Colors:
  - Orange: #ff8c00
  - Apple Red: #c41e3a
  - Apple Green: #8db600
  - Banana: #ffe135
Shading: 3-tone (bright → mid → dark side)
Outline: 0.02 black (thinner, organic shape)
Highlight: Single white dot on top
Finish: Slight sheen (cartoon style)
```

**Visual:** Like a children's book illustration

---

### Plants (Green, Organic)
**Style:** Layered green spheres with simple shading

```
Base Color: #2d5016 (dark green) to #3d6b1f (mid green)
Shading: 3-tone per leaf cluster
Outline: 0.02 black (organic)
Highlight: White dot on each sphere
Finish: Matte
```

**Visual:** Like simplified topiary shapes

---

### Emissive (Lights, LEDs)
**Style:** Keep glowing but simplify halo

```
Base Material: meshBasicMaterial (no change)
Color: Pure, saturated (e.g., #ffffcc for bulb)
Glow: Soft halo (reduced intensity)
Outline: None (light sources don't have outlines)
```

**Visual:** Like a simple light sticker with glow

---

## Outline Specifications

### Thickness Guide:

| Object Size | Outline Thickness | Example |
|-------------|-------------------|---------|
| Large (island, counters) | 0.025 | Main structures |
| Medium (appliances, books) | 0.02 | Most objects |
| Small (fruit, utensils) | 0.015 | Detailed items |
| Tiny (clock hands, knife) | None | Too small |

### Outline Color:
- **Always:** Pure black (#000000)
- **Never:** Colored or gray outlines
- **Consistency:** Same thickness for similar-sized objects

### Outline Style:
- **Hard edges:** Sharp, clean lines
- **No gaps:** Continuous around entire object
- **Uniform:** Same thickness all around (not variable)

---

## Lighting Setup

### Main Light (Directional)
```
Purpose: Primary illumination & shadow casting
Position: [5, 8, 5] (upper right)
Intensity: 1.2 (stronger than realistic)
Color: White (#ffffff)
Shadows: Yes, medium-sharp edges
```

### Fill Light (Ambient)
```
Purpose: Fill in shadows, reduce contrast
Intensity: 0.6 (brighter than realistic)
Color: Warm white (#fffdf7)
```

### Accent Lights (Point) - Optional
```
Purpose: Pendant light glow
Count: 2 (over island only)
Intensity: 0.8 (reduced from realistic)
Color: Warm yellow (#ffeb9a)
Distance: 3 units
```

### Shadow Settings:
```
Bias: -0.001 (crisper edges)
Map Size: 2048x2048
Blur: Minimal (0.5 radius)
Opacity: 0.4
```

---

## Color Palette

### Primary (Kitchen Base)
```
Dark Counter:  #2d2d2d
White Cabinets: #ffffff
Cream Floor:    #f5f5f0
Light Gray BG:  #e8e8e8
```

### Accents (Warm Metals)
```
Gold/Brass:     #ffd700
Warm Glow:      #ffeb9a
Bronze:         #b8860b
```

### Materials (Natural)
```
Wood Brown:     #8b4513
Dark Wood:      #3d2817
Plant Soil:     #3d2817
```

### Metals (Cool)
```
Silver:         #c0c0c0
Dark Metal:     #4a4a4a
Chrome:         #e8e8e8
```

### Organics (Vibrant)
```
Orange:         #ff8c00
Red Apple:      #c41e3a
Green Apple:    #8db600
Banana Yellow:  #ffe135
Dark Green:     #2d5016
Mid Green:      #3d6b1f
```

### Indicators (Tech)
```
LED Green:      #00ff00
LED Red:        #ff0033
```

---

## Shading Model

### 3-Tone Cel-Shading

Each object has exactly **3 color bands**:

1. **Highlight** (facing light)
   - Brightest version of base color
   - 100% of base lightness
   - Sharp transition to midtone

2. **Midtone** (angled to light)
   - Base color
   - 70% of base lightness
   - Sharp transition to shadow

3. **Shadow** (away from light)
   - Darkest version of base color
   - 30% of base lightness
   - Sharp edge against midtone

**No gradients** between bands - transitions are immediate.

### Gradient Map Values:
```
Threshold 1: 0.3 (shadow/mid boundary)
Threshold 2: 0.7 (mid/highlight boundary)

Example:
- 0.0 - 0.3 → Shadow tone
- 0.3 - 0.7 → Midtone
- 0.7 - 1.0 → Highlight
```

---

## Background Treatment

### Environment
```
Type: Solid gradient
Top Color: #f8f8f8 (almost white)
Bottom Color: #e8e8e8 (light gray)
Style: Subtle, like paper background
```

### Fog (Optional)
```
Color: #f5f5f0 (cream)
Near: 12 (delayed)
Far: 25 (gentle)
Effect: Very subtle depth cue
```

### Shadows (Floor)
```
Type: Contact shadows
Opacity: 0.3 (lighter than realistic)
Blur: 1.5 (flatter)
Color: Black (#000000)
```

---

## Animation Considerations

### Moving Elements
- **Steam:** Keep animation, simplify shape
- **Clock hands:** Rotate if desired
- **Hover effects:** Can glow/scale

### Animation Style:
- **Smooth:** Use easing, not linear
- **Subtle:** Small movements (cartoon, not realistic)
- **Purposeful:** Every animation has clear intent

---

## Do's and Don'ts

### ✅ DO:
- Use pure, flat base colors
- Add thin, consistent outlines
- Keep 3-tone shading sharp
- Use white highlights strategically
- Maintain clean palette
- Simplify complex materials
- Keep geometry clean

### ❌ DON'T:
- Add realistic gradients within objects
- Use variable outline thickness
- Over-blend shadow transitions
- Add too many highlight dots
- Use muddy or gray colors
- Over-complicate materials
- Add unnecessary details

---

## Comparison: Realistic vs. Cartoon

| Aspect | Realistic (Before) | Cartoon (After) |
|--------|-------------------|-----------------|
| Materials | Standard/Physical | Toon |
| Shading | Smooth gradients | 3-tone bands |
| Outlines | None | Thin black |
| Highlights | Reflections | White dots/stripes |
| Shadows | Soft, blurred | Sharp, flat |
| Glass | Transparent | Solid + white dot |
| Metal | Reflective | Flat + white stripe |
| Lighting | Multiple soft | Few hard |
| Colors | Realistic hues | Flat, vibrant |
| Depth | Material properties | Shading + outlines |

---

## Quality Checklist

A well-executed cartoon style should have:

- [ ] **Consistent outline thickness** across similar objects
- [ ] **Clear 3-tone shading** on all surfaces
- [ ] **Strategic white highlights** (not too many)
- [ ] **Flat base colors** (no internal gradients)
- [ ] **Sharp shadow edges** (not blurred)
- [ ] **Clean palette** maintained throughout
- [ ] **Cohesive lighting** (obvious direction)
- [ ] **Readable at distance** (outlines help)
- [ ] **Smooth at close-up** (outlines not pixelated)
- [ ] **Performant** (60fps maintained)

---

## Troubleshooting

### Problem: Outlines look jagged
**Solution:** Increase outline smoothness, use antialiasing

### Problem: Colors look washed out
**Solution:** Increase saturation, check lighting intensity

### Problem: Shadows too harsh
**Solution:** Increase ambient light, reduce directional intensity

### Problem: Lost sense of depth
**Solution:** Check 3-tone gradient is working, adjust shadow opacity

### Problem: Objects blend together
**Solution:** Increase outline thickness, check black color is pure

### Problem: Performance drops
**Solution:** Check outline complexity, reduce shadow map size

---

## Inspiration Gallery (Text Descriptions)

### Apple Product Page:
- Clean white background
- Objects have subtle drop shadows
- Highlights are strategic white dots/stripes
- Colors are pure and vibrant
- Geometry is simple but elegant

### Monument Valley:
- Geometric, architectural
- Pastel but clear colors
- Strong outlines define shapes
- Shadows create depth
- Minimalist but detailed

### Kurzgesagt:
- Flat colors, no gradients
- Simple shading (1-2 tones)
- Bold outlines
- Vibrant, saturated palette
- Clear visual hierarchy

### Google Material Design 3D:
- Soft shadows underneath
- Flat colors with single highlight
- Geometric, clean shapes
- Minimal but purposeful
- Professional and modern

---

**This style guide should be referenced throughout development to ensure consistency.**
