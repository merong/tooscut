import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

import { Logo } from "@/components/logo";

import { appName, gitConfig } from "./shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2 font-semibold tracking-tight">
          <Logo className="h-5 w-5" />
          {appName}
        </span>
      ),
      transparentMode: "top",
    },
    links: [
      { text: "Docs", url: "/docs", active: "nested-url" },
      { text: "Blog", url: "/blog", active: "nested-url" },
      {
        text: "GitHub",
        url: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
        external: true,
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
