

   import { baseApi } from './../../services/api'

   const loginApi = baseApi.injectEndpoints({
       endpoints: (builder) => ({
            login: builder.mutation({
    query:(payload) => ({
      url:"employee/login",
      method:"POST",
      body : payload
    }),
   }),
     overrideExisting: false,
   })
   })
   export const {  useLoginMutation} = loginApi;