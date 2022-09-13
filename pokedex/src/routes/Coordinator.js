export const goToBack = (navigate) => {
  navigate(-1);
};

export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToPokedex = (navigate) => {
  navigate("/pokedex");
};

export const goToDetailsPage = (navigate, id) => {
  navigate("/details-page/:id");
};
