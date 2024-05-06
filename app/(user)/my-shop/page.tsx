"use client"
import DataTable, {TableColumn} from "react-data-table-component"
import {ProductType} from "@/lib/definitions";
import {useGetProductsQuery} from "@/redux/service/product";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export default function ProductTable() {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const {data, isLoading} = useGetProductsQuery({
        page: 1,
        pageSize:1000,
    });

    useEffect(() => {
        setLoading(isLoading);
        if (data) {
            setProducts(data.results);
        }
    }, [data, isLoading]);

    const paginationComponent = {
        rowsPerPageText: "Rows per page",
        rangeSeparatorText: "of",
        selectAllRowsItem: true,
        selectAllRowsItemText: "All rows",
    };
    const columns: TableColumn<ProductType>[] = [
        {
            name: "ID",
            selector: row => row.id,
            sortable: true
        },
        {
            name: "Name",
            selector: (row) => row.title,
            sortable: true
        },
        {
            name: "Price",
            selector: (row) => row.price,
            sortable: true
        },
        {
            name: 'Category',
            selector: (row): any => row.category,
            sortable: true
        },
        {
            name: 'Image',
            selector: (row): any =>
                <div className="w-[50px] h-[90px] overflow-hidden rounded">
                    <img src={row.image} width={50} height={50} className="object-cover" alt={row.title}/>
                </div>,
        },
        {
            name: "Action",
            cell: (row) => {
                return (
                    <div className="flex justify-center items-center gap-2">
                        <span className="text-yellow-500 cursor-pointer" onClick={()=> router.push(`/product/${row.id}`)}>View</span>
                        <span className="text-blue-500 cursor-pointer">Edit</span>
                        <span className="text-red-500 cursor-pointer">Delete</span>
                    </div>
                );
            }
        },
    ]
    return (
        <>
            <main className="w-full lg:w-[65%] mx-auto md:w-[80%] container justify-center items-center">
                <h1 className="font-bold text-md md:text-2xl mt-4 mb-4 md:mb-8 text-center">
                    <span className="text-cyan-800">EBuy </span>
                    Products
                </h1>
                <DataTable
                    fixedHeader={true}
                    columns={columns}
                    data={products}
                    pagination={true}
                />
            </main>
        </>
    )
}
