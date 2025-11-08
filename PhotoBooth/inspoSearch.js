document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("inspirationInput");
    const resultsContainer = document.getElementById("inspirationResults");
    const UNSPLASH_ACCESS_KEY = "Axi-6VnFxSsrNOxRdy-t3zdSjseaiOaBEwKMPjNKQ9M";

    const allowedKeywords = [
        "photobooth", "360 booth", "studio booth", "event booth", "party booth",
        "wedding booth", "portrait booth", "fun booth", "wedding", "portrait",
        "photobooth", "studio", "360 booth", "event", "party", "fashion",
        "nature", "landscape", "photography"
    ];

    input.addEventListener("input", () => {
        const query = input.value.trim().toLowerCase();
        resultsContainer.innerHTML = "";

        if (!query) return;

        if (!allowedKeywords.some(keyword => query.includes(keyword))) {
            resultsContainer.innerHTML = "<p>Please use a photobooth-related keyword.</p>";
            return;
        }

        const safeQuery = `photobooth ${query}`;

        fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(safeQuery)}&per_page=12&client_id=${UNSPLASH_ACCESS_KEY}`)
            .then(res => res.json())
            .then(data => {
                if (!data.results || data.results.length === 0) {
                    resultsContainer.innerHTML = "<p>No results found. Try another photobooth keyword.</p>";
                    return;
                }

                data.results.forEach(photo => {
                    const card = document.createElement("div");
                    card.classList.add("result-card");
                    card.innerHTML = `
                        <img src="${photo.urls.small}" alt="${photo.alt_description || 'Photobooth'}">
                        <p>${photo.alt_description || "Untitled"}</p>
                    `;
                    resultsContainer.appendChild(card);
                });
            })
            .catch(err => {
                console.error("Error fetching Unsplash API:", err);
                resultsContainer.innerHTML = "<p>Error loading results.</p>";
            });
    });
});