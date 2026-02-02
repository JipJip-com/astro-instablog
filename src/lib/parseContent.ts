import { getEntry, render } from "astro:content";

export async function getContent(slug:string) {
  const entry = await getEntry('pages', slug);

  if (!entry) {
    throw new Error(`Entry not found. slug=${slug}}`);
  }

  const { Content } = await render(entry);

  return {
    meta: entry.data,
    raw: entry.body ?? "",
    Content,
  };
};