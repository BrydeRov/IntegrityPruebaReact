import React, { useEffect, useState } from 'react'
// Componentes
import AppLayout from '../../Layouts/AppLayout'
import axios from 'axios'
// Components
import BootstrapTable from '../../Components/BootstrapTable'


const Index = () => {
    const [data, setData] = useState();

    const getData = async () => {
        try {
            await axios.get('https://dummyjson.com/products')
                .then((response) => {
                    setData(response.data);
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <AppLayout>
            {data && <BootstrapTable data={data?.products} />}
        </AppLayout>
    )
}

export default Index
