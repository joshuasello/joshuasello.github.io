import type { CollectionEntry } from "astro:content";

export type ArticleEntry = CollectionEntry<"articles">;
export type ProjectEntry = CollectionEntry<"projects">;
export type ContentEntry = ArticleEntry | ProjectEntry;

export function by_newest(first_entry: ContentEntry, second_entry: ContentEntry) {
    return second_entry.data.date.valueOf() - first_entry.data.date.valueOf();
}

export function format_date(date: Date) {
    return new Intl.DateTimeFormat("en-ZA", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC"
    }).format(date);
}
