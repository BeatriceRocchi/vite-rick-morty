import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://rickandmortyapi.com/api/character",
  queryParams: {
    page: 1,
    name: "",
    status: "",
    species: "",
  },
  cardList: [],
  statusList: [],
  speciesList: [],
  count: 0,
  pages: 0,
  errorString: "",
});
