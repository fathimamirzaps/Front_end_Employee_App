import { baseApi } from './../../services/api'

const createEmpApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createEmployee: builder.mutation({    
            query: (payload) => ({
              url: "employee",
              method: 'POST',
              body: payload,
            }),
            }),

  overrideExisting: false,
})
})
export const {useCreateEmployeeMutation} = createEmpApi;
