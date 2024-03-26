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
  count: 0,
  errorString: "",
});
