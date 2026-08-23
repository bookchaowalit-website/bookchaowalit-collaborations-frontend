---
name: Collaborations Field Folio
description: A botanical field folio for local collaboration notes.
colors:
  paper: "#f3eddf"
  ink: "#243027"
  moss: "#315344"
  leaf: "#8ea875"
  rose: "#c86f62"
  rule: "#c8bda9"
typography:
  display:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "clamp(44px, 7vw, 92px)"
    fontWeight: 500
    lineHeight: 0.9
  body:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "17px"
    lineHeight: 1.55
  label:
    fontFamily: "Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    letterSpacing: "0.18em"
rounded:
  none: "0"
spacing:
  row: "20px 0"
  section: "34px 0"
components:
  button-primary:
    backgroundColor: "{colors.moss}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "12px 15px"
  status-chip:
    backgroundColor: "transparent"
    textColor: "{colors.moss}"
    rounded: "{rounded.none}"
    padding: "5px 8px"
---

# Design System: Collaborations Field Folio

## Overview

**Creative North Star: "A botanical sequence folio."**

The interface treats local collaboration requests as specimens: a stem grows through the current-garden section, while each note is filed as a numbered specimen. The page is warm, quiet, and editorial, with a visible rule system rather than dashboard chrome.

**Key Characteristics:**
- Warm paper field with moss and rose ink.
- Thin folio rules and generous editorial whitespace.
- Botanical linework carries the first viewport.

## Colors

Paper is the ground, moss carries action and headings, leaf describes growth, and rose marks the human moment or status.

### Primary
- **Moss ink** (#315344): primary action and section emphasis.
- **Rose specimen** (#c86f62): highlighted phrase, numbering, and accent state.

### Neutral
- **Field paper** (#f3eddf): page background.
- **Deep ink** (#243027): primary type.
- **Pressed rule** (#c8bda9): dividers and quiet form strokes.

## Typography

**Display Font:** Georgia, Times New Roman, serif
**Body Font:** Georgia, Times New Roman, serif
**Label/Mono Font:** Arial, sans-serif

**Character:** Literary serif display and body copy are contrasted with compact uppercase labels.

### Hierarchy
- **Display** (500, clamp 44–92px, .9): opening thesis.
- **Headline** (500, clamp 28–48px, 1): section titles.
- **Body** (400, 14–17px, 1.55): context and note detail.
- **Label** (700, 11px, .18em, uppercase): folio metadata.

## Layout

The desktop shell is capped at 1240px with a responsive side gutter. The header uses a three-column folio index; the garden and workbench switch to a single column below 760px. Notes use a numbered list with title, status, and remove action rather than cards.

## Elevation & Depth

This system is flat by default. Depth comes from paper contrast, hairline rules, and a pressed-ring around the planting pin; there are no floating surfaces or drop shadows.

## Shapes

All controls are square and borderless except for a single bottom rule. Status chips are rectangular outlined labels. The botanical stem and specimen dots are the only rounded silhouettes.

## Components

### Buttons
- **Shape:** square (`0` radius).
- **Primary:** moss background with paper text, 12px × 15px padding.
- **Hover / Focus:** darker moss on hover; rose outline on keyboard focus.

### Cards / Containers
- **Corner Style:** no radius; content is separated by rules.
- **Background:** page paper only.
- **Border:** 1px folio rules.

### Inputs / Fields
- **Style:** transparent paper fields with a bottom rule.
- **Focus:** rule shifts to rose.

### Signature Component
- **Garden stem:** a thin leaf-green vertical line with four asymmetric leaf strokes and a ringed seed head.

## Do's and Don'ts

### Do:
- **Do** let notes read as a list, not a grid of equal cards.
- **Do** keep local-only honesty visible in the workbench and footer.
- **Do** reserve rose for emphasis and human status.

### Don't:
- **Don't** introduce rounded dashboard panels or generic hero metrics.
- **Don't** make the botanical motif decorative chrome detached from the note lifecycle.
- **Don't** canonize the temporary Unicode specimen glyphs or generic serif fallback as the final asset/font system.
