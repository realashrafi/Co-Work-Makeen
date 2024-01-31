import {useQuery} from "react-query";
import axios from "axios";

const UsePriceDefault = () => {
    const {data:priceDefault}= useQuery({
        queryKey:['priceDefault'],
        queryFn:async function(){
            const res= await axios.get('https://www.cowork.v1r.ir/api/v1/reservation/price/default',{
                headers:{
                    'Accept': 'application/json',
                }
            })
            return res
        }
    })
    return {priceDefault}
};

export default UsePriceDefault;