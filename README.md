# Zenith Gold Reference

Trainer sheet, damage calculator and Pokédex for Pokémon Zenith Gold, served by GitHub Pages.

| Page | What it is |
|---|---|
| `index.html` | Landing page: links, level caps, exporter how-to |
| `trainers.html` | Every trainer, split by split |
| `calc/` | Pokémon Null's damage calc with this game's data and every trainer set; its `#dex` tab is the Pokédex |
| `dex/` | Standalone Porydex / Pokémon Showdown dex with the same data |
| `soulgold_export.lua` | mGBA script: exports your party and PC boxes as Showdown sets |

Generated from the hack's source by its `design/` tools (`build_sheet.py`, `calc/build_null_calc.py`,
`dex/build_dex.py`, `calc/make_lua.py`, `site/assemble.py`).

Credits: SoulGold (Eemeliri and contributors) on RHH's pokeemerald-expansion; Pokémon Null 1.1's learnsets, abilities
and encounters; Pokémon Null's calc (nathanmelons, MIT) on Smogon's damage calculator (MIT); Porydex (lhearachel) and
the Pokémon Showdown dex (AGPL-3.0) with Astral's dark theme. Pokémon © Nintendo / Creatures / GAME FREAK.
