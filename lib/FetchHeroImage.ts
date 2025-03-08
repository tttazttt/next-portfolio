export const fetchHeroImage = async (
  category: string = "painting",
  additionalKeywords: string[] = ["impressionism", "monet"]
) => {
  try {
    const searchQuery = `classification_title:${category} ${additionalKeywords.join(
      " "
    )}`;
    const queryObj = {
      q: searchQuery,
      limit: 100,
      page: 1,
      fields: [
        "id",
        "image_id",
        "title",
        "classification_title",
        "artist_title",
        "style_title",
        "subject_titles",
      ],
    };
    const encodedParams = encodeURIComponent(JSON.stringify(queryObj));

    const res = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?params=${encodedParams}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) throw new Error("Failed to fetch hero image");

    const data = await res.json();
    const artworks = data.data;

    if (artworks.length === 0) throw new Error("No artworks found");

    const randomArtwork = artworks[Math.floor(Math.random() * artworks.length)];
    const imageUrl = `https://www.artic.edu/iiif/2/${randomArtwork.image_id}/full/1024,/0/default.jpg`;

    return { imageUrl, title: randomArtwork.title };
  } catch (error) {
    console.error("Error fetching hero image:", error);
    return null;
  }
};
