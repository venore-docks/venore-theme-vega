import type { ThemeManifest } from "@venore/theme-sdk";

export const vegaManifest: ThemeManifest = {
  key: "vega",
  name: "Vega",
  version: "0.1.4",
  themeContractVersion: "7.0.0",
  // logoUrl real vem de contexts/settings (upload em /admin/settings/brand) — isto só declara os
  // valores padrão de exibição. Cor aproxima o âmbar/dourado de --primary no modo escuro
  // (variação de paleta do Aurora, mesmo hue-rotation, ver theme.css).
  brandAesthetics: { mode: "svg", size: 96, scrolledSize: 84, position: "left", color: "oklch(0.72 0.19 70)" },
  colorModes: ["light", "dark"],
};
