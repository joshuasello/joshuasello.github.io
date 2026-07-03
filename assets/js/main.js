(function () {
    const data = window.portfolioData || {};

    function textElement(tagName, className, text) {
        const element = document.createElement(tagName);

        if (className) {
            element.className = className;
        }

        element.textContent = text;
        return element;
    }

    function linkElement(link) {
        const anchor = textElement("a", "", link.label);
        anchor.href = link.url;

        if (link.url && !link.url.startsWith("#") && !link.url.startsWith("mailto:")) {
            anchor.target = "_blank";
            anchor.rel = "noreferrer";
        }

        return anchor;
    }

    function renderResearch(items) {
        const container = document.querySelector('[data-render="research"]');
        if (!container) return;

        items.forEach((item) => {
            const article = document.createElement("article");
            article.className = "research-item";
            article.append(
                textElement("h3", "", item.title),
                textElement("p", "", item.description)
            );
            container.appendChild(article);
        });
    }

    function renderPublications(target, items) {
        const container = document.querySelector(`[data-render="${target}"]`);
        if (!container) return;

        items.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.className = "publication";

            const article = document.createElement("article");
            article.append(
                textElement("h3", "", item.title),
                textElement("p", "", item.authors),
                textElement("div", "pub-meta", item.venue)
            );

            if (item.links && item.links.length) {
                const links = document.createElement("div");
                links.className = "pub-links";
                item.links.forEach((link) => links.appendChild(linkElement(link)));
                article.appendChild(links);
            }

            listItem.append(textElement("div", "pub-year", item.year), article);
            container.appendChild(listItem);
        });
    }

    function renderUpdates(items) {
        const container = document.querySelector('[data-render="updates"]');
        if (!container) return;

        items.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.className = "news-item";
            listItem.append(
                textElement("div", "news-date", item.date),
                textElement("p", "", item.text)
            );
            container.appendChild(listItem);
        });
    }

    renderResearch(data.research || []);
    renderPublications("publications", data.publications || []);
    renderPublications("preprints", data.preprints || []);
    renderUpdates(data.updates || []);
})();
