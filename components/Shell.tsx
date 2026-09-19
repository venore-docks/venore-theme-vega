import type { ThemeShellProps } from "@venore/theme-sdk";
import { HeaderSlot } from "./HeaderSlot";
import { FooterSlot } from "./FooterSlot";
import { ContentSlot } from "./ContentSlot";
import { SidebarLeftSlot } from "./SidebarLeftSlot";

// Pequena variação sobre o Aurora (mesma família — sidebar/tokens idênticos, já com a correção
// do rail colapsado): o rodapé sai de dentro da coluna de conteúdo e vira uma faixa full-width
// no rodapé da tela, por baixo de sidebar E conteúdo — como a status bar de um editor de código,
// em vez de indentado ao lado da sidebar. Header continua só sobre a coluna de conteúdo, igual
// ao Aurora.
export function Shell({
  header,
  footer,
  sidebarLeft,
  children,
  sidebarContextualEnabled,
  sidebarContextual,
  breadcrumbs,
  breadcrumbsJsonLd,
}: ThemeShellProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <div className="flex flex-1">
        <SidebarLeftSlot {...sidebarLeft} />
        <div className="flex min-w-0 flex-1 flex-col">
          <HeaderSlot {...header} />
          <ContentSlot
            sidebarContextualEnabled={sidebarContextualEnabled}
            sidebarContextual={sidebarContextual}
            breadcrumbs={breadcrumbs}
            breadcrumbsJsonLd={breadcrumbsJsonLd}
          >
            {children}
          </ContentSlot>
        </div>
      </div>
      <FooterSlot {...footer} />
    </div>
  );
}
