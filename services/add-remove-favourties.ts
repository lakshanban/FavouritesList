const addRemoveFromFavourites = async (id: string): Promise<void> => {
  try {
    await fetch("/api/favourites", {
      method: "POST",
      body: JSON.stringify({ itemId: id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    alert("Something went while updating favourites list");
  }
};

export default addRemoveFromFavourites;
