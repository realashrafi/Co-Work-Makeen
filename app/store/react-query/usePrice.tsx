import {useQuery} from "react-query";
import axios from "axios";

const UsePrice = () => {
    const {data: price} = useQuery({
        queryKey: ['price'],
        queryFn: async function () {
            const token = localStorage?.getItem('userToken')
            const res = await axios.get('https://www.cowork.v1r.ir/api/v1/reservation/price/cowork', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            return res
        },
    })
    return {price}
};

export default UsePrice;