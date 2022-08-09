import { baseApi } from './../../services/api'

const getEmpApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      updateEmployee: builder.mutation({
        query: ({id,...payload}) => ({
          url:`employee/${id}`,
          method : 'PUT',
          body: payload,
        }),
      }),
        getEmployeeById : builder.query({
            query: (id) => ({
              url: `employee/${id}`,
              
            }),
      
          }),
          

  overrideExisting: false,
})
})
export const {useGetEmployeeByIdQuery,  
  useUpdateEmployeeMutation} = getEmpApi;
