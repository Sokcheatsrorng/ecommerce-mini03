import { ecommerceApi } from "../api";

export const productApi = ecommerceApi.injectEndpoints({
    endpoints: (builder) => ({
		// get all products
		//                        <result type,         args type>
		getProducts: builder.query<any, { page: number; pageSize: number;  }>({
			query: ({ page = 1, pageSize = 10 }) =>
				`api/products/?page=${page}&page_size=${pageSize}`,
		}),
		// get single product
		getProductById: builder.query<any, number>({
			query: (id) => `api/products/${id}/`,
		}),
		// update a product
		updateProduct: builder.mutation<
			any,
			{ id: number; updatedProduct: object; }
		>({
			query: ({ id, updatedProduct }) => ({
				url: `/api/products/${id}/`,
				method: "PATCH",
				body: updatedProduct,
			}),
		}),
		 // create a product             // this any stand for result
		 createProduct: builder.mutation<any, { newProduct: object, accessToken: string }>({
            query: ({ newProduct}) => ({
                url: "/api/products/",
                method: "POST",
                body: newProduct, // no need .json.strintify() it auto generated
            }),
        }),
		// delete a product
		deleteProduct: builder.mutation<any, { id: number; accessToken: string }>({
            query: ({ id}) => ({
                url: `/api/products/${id}/`,
                method: "DELETE",
            }),
        }),

	})
})

export const {
	useGetProductsQuery,
	useGetProductByIdQuery,
	useUpdateProductMutation,
	useCreateProductMutation,
	useDeleteProductMutation
} = productApi;