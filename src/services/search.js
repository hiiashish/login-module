import axios from "axios";

export const searchUserService = (request) => {
    const SEARCH_API_ENDPOINT = 'https://swapi.dev/api/planets/';
    // const parameters = {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // };
    return axios.get(SEARCH_API_ENDPOINT)
    .then(res => {
      return searchPlanet(res.data,request.searchTerm);
    })
}

async function searchPlanet(data,searchText){
    let searchResponse= {searchText, searchResult : []};
    if(searchText!==''){
      let result = await data.results.filter(item=>(item.name.toLowerCase().includes(searchText.toLowerCase())));
      // Sorting the data first on basis of populaion
      result.sort(function (firstIndex, secondIndex) {
        return  secondIndex.population-firstIndex.population ;
      });
      let searchResult= result.map(element => element.name);
      if(searchResult)
      {
          searchResponse.searchResult=[...searchResult];
      }
    }
   return searchResponse;
  }