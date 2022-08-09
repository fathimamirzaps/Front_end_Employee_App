import { baseApi } from './../../services/api'

const EmpListApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getEmployee: builder.query({
            query: () => "employee",
            providesTags:['Employee']
          }),
          deleteEmployeeById : builder.mutation({
            query: (id) => ({
              url:`employee/${id}`,
              method :'DELETE'
      
            }),
            invalidatesTags:['Employee'],
      
          }),

  overrideExisting: false,
})
})
export const {  useDeleteEmployeeByIdMutation,
    useGetEmployeeQuery} = EmpListApi;
