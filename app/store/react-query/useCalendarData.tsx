import {useQuery} from "react-query";
import axios from "axios";

const UseCalendarData = () => {
    const {data} = useQuery({
        queryKey:['calenderData'],
        queryFn:async function (){
            const token = localStorage?.getItem('userToken');
            const res = await axios.get('https://www.cowork.v1r.ir/api/v1/reservation/cowork?per_page=60',{
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                }
            })
            return res.data
        }
    })
    return {data}
};

export default UseCalendarData;