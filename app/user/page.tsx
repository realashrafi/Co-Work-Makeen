import Interface from "@/app/user/components/Interface";


const dataOfFav = [
    {
        id: 1,
        title: 'علوم انسانی',
    }, {
        id: 2,
        title: 'هوش مصنوعی',
    }, {
        id: 3,
        title: 'هنر',
    }, {
        id: 4,
        title: 'برنامه نویسی',
    }, {
        id: 5,
        title: 'آمار و داده کاوی',
    }, {
        id: 6,
        title: 'مهندسی نرم افزار',
    }, {
        id: 7,
        title: 'رباتیک',
    }, {
        id: 8,
        title: 'مدیریت',
    },
]

const User = (e: any) => {


    //     e.preventDefault()
    //     const token: any = localStorage.getItem('token');
    //     const config = {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //             Accept: 'application/json',
    //         }
    //     }
    //      axios.get('https://www.cowork.v1r.ir/api/v1/user/me', config)
    //         .then((res) =>setResData(res.data))
    //         .catch((err) => console.error(err));
    //
    // console.log(resData)


    return (
       <div>
           <Interface/>
       </div>
    );
};

export default User;