
import type { MarkdownHeading } from "astro";

export function renderTableOfContents(items: MarkdownHeading[], minDepth: number): string {
  if (items.length === 0) return "";

  let html = "";
  let i = 0;

  while (i < items.length) {
    const heading = items[i];

    if (heading.depth < minDepth) {
      break;
    }

    if (heading.depth === minDepth) {
      // Find all children (headings with greater depth that come before the next same-level heading)
      const children: MarkdownHeading[] = [];
      let j = i + 1;

      while (j < items.length && items[j].depth > minDepth) {
        children.push(items[j]);
        j++;
      }

      const childrenHtml =
        children.length > 0
          ? `<ul class="ml-4 mt-1">${renderTableOfContents(children, minDepth + 1)}</ul>`
          : "";

      html += `
        <li class="my-1">
          <a href="#${heading.slug}" class="text-foreground/80 hover:text-foreground transition-colors">
            ${heading.text}
          </a>
          ${childrenHtml}
        </li>
      `;

      i = j;
    } else {
      i++;
    }
  }

  return html;
}
