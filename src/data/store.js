import { reactive } from 'vue' 

export const store = reactive({
  apiUrl: 'https://rickandmortyapi.com/api/character',
  cardInfo: [],

  queryParam :{
    name: '',
    page : 1

  },
  pageInfo:{
    pages: 0,
    itemsPerPage: 20
  }

})
