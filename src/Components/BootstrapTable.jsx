import React, { useEffect, useState } from 'react';
import BootstrapInput from './BootstrapInput';
import BootstrapSelect from './BootstrapSelect';
import { Delete, Search } from '@mui/icons-material';

const BootstrapTable = ({ data }) => {
    const [rows, setRows] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    // Variables paginacion
    const itemsPerPage = 4;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Formatear numero a formato de dolar
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    // Funcion para mostrar siguientes registros de tabla
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Obtener filas para tabla
    const getDataRows = () => {
        const extractedRows = Object.keys(data[0]);
        setRows(extractedRows);
    };

    // Obtener Categorias
    const getCategories = () => {
        let selectData = []
        data?.map(el => {
            const isInArray = selectData?.some(item => item == el?.category);
            if (!isInArray) { selectData.push(el?.category) };
            setCategories(selectData)
        })
    }

    // Filtros
    const searchFilter = (array) => {
        return array?.filter((el) =>
            rows.some((row) =>
                String(el[row]).toLowerCase().includes(search.toLowerCase())
            )
        );
    };

    const filterData = () => {
        setCurrentPage(1);
        let newData = data;

        if (selectedCategory) { newData = filterBySelected(newData) }
        newData = searchFilter(newData);
        setFilteredData(newData);
    };

    const filterBySelected = (array) => {
        if (!selectedCategory) { return array; }
        return array?.filter((el) => el?.category === selectedCategory);
    };

    useEffect(() => {
        getCategories();
        getDataRows();
        filterData();
    }, [data, selectedCategory, search]);

    return (
        <>
            <div className='d-flex flex-row'>
                <div className='w-75'>
                    <BootstrapInput
                        placeholder='Buscar . . .'
                        span={<Search />}
                        onChange={(event) => setSearch(event?.target?.value)}
                    />
                </div>
                <div className='d-flex flex-row h-50 w-25'>
                    <BootstrapSelect
                        label='Seleccionar categoría'
                        data={categories}
                        onChange={(event) => setSelectedCategory(event?.target?.value)}
                    />
                </div>
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        {rows?.filter((el) => el !== 'images' && el !== 'thumbnail')?.map((row, index) => {
                            return <th key={index} scope='col'>{row.toUpperCase()}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item) => {
                        return (
                            <tr key={item?.id} className='overflow-scroll' style={{ maxHeight: '10vh' }}>
                                <td>{item.id}</td>
                                <td className='flex flex-row flex-wrap w-25'>
                                    <img src={item?.images[0]} width='100' className='rounded' alt='Product Thumbnail' />
                                    <span className='ms-2'>{item.title}</span>
                                </td>
                                <td>{item.description}</td>
                                <td>{USDollar.format(item.price)}</td>
                                <td>{item.discountPercentage} %</td>
                                <td>{item.rating}</td>
                                <td>{item.stock}</td>
                                <td>{item.brand}</td>
                                <td>{item?.category}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <nav className='d-flex justify-content-center'>
                <ul className='pagination'>
                    {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((item, index) => {
                        return (
                            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                <a className='page-link' onClick={() => paginate(index + 1)} href='#'>
                                    {index + 1}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    );
};

export default BootstrapTable;
