# MACRO CALCULUS `// RAW & CALCULATED`

Eine moderne, mobile-first **Progressive Web App (PWA)** für präzises Kochen, Massenverlust-/Quellfaktor-Berechnung ($F$), thermische Mikronährstoff-Retention, Equipment-Tara-Verwaltung und intelligentes Meal-Prep-Kühlschrank-Inventar.

Zu **100 % offline-fähig** im Browser (lokale Persistenz über **IndexedDB / Dexie.js**), ergänzt durch einen optionalen Online-**EAN-13 Barcode-Scanner** mit Anbindung an die **Open Food Facts API**.

---

## Kernfunktionen

### 1. Rezept-Labor, Massen-Faktor ($F$) & Portionierung
- **Schritt 1 (Roh-Einwaage & Garmethode):** Erfassung aller Zutaten im **rohen/trockenen Zustand** vor dem Kochen. Live-Summierung aller Makros und Mikronährstoffe.
- **Schritt 2 (Equipment-Tara & Auswiegen):** Auswahl des verwendeten Kochgeschirrs (z. B. *Afghan Kasan*, *Edelstahl-Suppentopf*, *Thermomix-Mixtopf*) und Eingabe des Bruttogewichts nach dem Kochen. Automatischer Abzug des Leergewichts ($\text{Netto} = \text{Brutto} - \text{Tara}$).
- **Schritt 3 (Massen-Faktor & Rückrechnung):**
  $$F = \frac{m_{\text{netto, gekocht}}}{m_{\text{roh, gesamt}}}$$
  Jede entnommene gekochte Portion ($m_{\text{gekocht}}$) wird über $m_{\text{roh}} = \frac{m_{\text{gekocht}}}{F}$ exakt auf die rohe Ausgangsmenge und jede einzelne Roh-Zutat zurückgerechnet.

### 2. Zubereitungsarten & Thermische Retention (Mikronährstoffe)
Berechnet hitze- und wasserlösliche Verluste für **Eisen (Fe)**, **Magnesium (Mg)**, **Zink (Zn)**, **Vitamin C** und **Vitamin B1 (Thiamin)** anhand konfigurierbarer Erhaltungsfaktoren (USDA / Bognár Richtwerte):
- `Schmoren / Druckkochen (Sud inkl.)` (z. B. Afghan Kasan / Schnellkochtopf)
- `Kochen in viel Wasser (Abgießen)`
- `Anbraten (Pfanne / Wok)`
- `Dämpfen (Schonend)`
- `Roh / Ungekocht / Kaltschale`

### 3. Kühlschrank- & Batch-Inventar (Meal-Prep-Tracker)
- Verwaltung aktiver Meal-Prep-Batches nach Lagerort (`Kühlschrank`, `Gefrierschrank`, `Vorratskammer`) inkl. automatischem **MHD-Tracking**.
- **Quick-Eat-Modus:**
  - `1 Portion verzehrt` (1-Klick-Abbuchung direkt ins Tages-Summary)
  - `Teller-Gewicht (g) abwiegen` (Interaktiver Kalkulator: rechnet gekochtes Tellergewicht live in Roh-Äquivalent und Einzelzutaten um)
  - `1-Klick Auftauen` (Transfer vom Gefrierschrank in den Kühlschrank mit aktualisiertem MHD)

### 4. Lokale Roh-Zutaten-Datenbank & EAN-13 Barcode-Scanner
- Ausgeliefert mit **30+ vorinstallierten Grundzutaten** im Roh-/Trockenzustand (Reis, Linsen, Haferflocken, Buchweizen, Rinderhack, Rindergulasch, Hühnerherzen, Hähnchenleber, Gemüse, Nüsse/Samen etc.) inkl. hinterlegter Makros & Mikronährstoffe pro 100g.
- Integrierter **EAN-13 Kamera-Scanner** + manuelle EAN-Suche & Textsuche über die kostenlose **Open Food Facts API**.

### 5. Tages-Summary, Ziel-Abgleich & JSON-Backup
- Tagesübersicht aller aufgenommenen Makros (Kalorien, Protein, Kohlenhydrate, Fett, Ballaststoffe) und retinierten Mikronährstoffe gegen individuell anpassbare Tagesziele.
- **Storno-Funktion:** Gelöschte Batch-Einträge im Tages-Log können das abgebuchte Gewicht automatisch wieder in den Kühlschrank-Batch zurückbuchen.
- Vollständiger **JSON-Export & -Import** der gesamten lokalen IndexedDB zur Datensicherung.

---

## Tech-Stack

- **Frontend:** React 18 + TypeScript + Tailwind CSS (Industrial-Monospace Dark UI, Tabular Nums)
- **Lokale Datenbank:** IndexedDB via [Dexie.js](https://dexie.org/) (`dexie` & `dexie-react-hooks`)
- **Barcode-Scanner:** `html5-qrcode` + Open Food Facts REST API v2
- **Build & PWA:** Vite 6 + Custom Offline Service Worker (`sw.js`) & Web App Manifest

---

## Lokale Installation & Start

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Entwicklungsserver starten
npm run dev

# 3. Produktions-Build erstellen (landet in ./dist)
npm run build
```

## Deployment (GitHub Pages / Vercel / Netlify)

Dieses Repository enthält bereits einen fertigen GitHub Actions Workflow (`.github/workflows/deploy.yml`) für **GitHub Pages**:
1. Repository auf GitHub erstellen und Code pushen.
2. Auf GitHub unter **Settings → Pages → Build and deployment** als Source **GitHub Actions** auswählen.
3. Bei jedem Push auf `main` wird die PWA automatisch gebaut und veröffentlicht.
