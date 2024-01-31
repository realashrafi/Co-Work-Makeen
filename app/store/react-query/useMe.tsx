import {useQuery} from "react-query";
import axios from "axios";

function useMe() {
    const {data} = useQuery({
        queryKey: ['Me'],
        queryFn: async function () {
            const token = localStorage?.getItem('userToken');
            const res = await axios.get('https://www.cowork.v1r.ir/api/v1/user/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                }
            })
            return res.data
        },
    })
    return {data}
}

export default useMe