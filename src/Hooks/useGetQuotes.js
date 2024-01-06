import { useQuery } from "react-query"
import axios from "axios"

const API_KEY = 'O3KyOij58AcJWfzsT6Zr5w==JyAS9Fk3T93rEWkI'
const category = 'happiness'

export const useGetQuotes =()=> {
    const { isLoading, error, data, refetch } = useQuery('repoData', async() => {
        try{
           const newData = await axios({
                method: 'get',
                url: `https://api.api-ninjas.com/v1/quotes`,
                headers: {
                'X-Api-Key': API_KEY,
                'Content-Type': 'application/json',
                },
            })
            const Hdata = newData.data;
            return Hdata; 
        }catch (err) {
            console.log(err);
        }
     
})
return { isLoading, error, data, refetch };
}  