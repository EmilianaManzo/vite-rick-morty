import { reactive } from 'vue' 

export const store = reactive({
  apiUrl: 'https://rickandmortyapi.com/api/character',
  nameUrl : 'https://rickandmortyapi.com/api/character/?name=',
  cardInfo: [],

  nameList : [],

  queryParam :{
    name: '',
  }

})
