import {Employee} from "@prisma/client"
import {api} from "./api"


export const employeesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllEmployees: builder.query<Employee[], void>({
            query: () => ({
                url: '/employees',
                method: 'GET',
            })
        }),
        getEmployee: builder.query<Employee, string>({
            query: (id) => ({
                url: `/employees/${id}`,
                method: 'GET',
                body: {id}
            })
        }),
        editEmployee: builder.mutation<string, Employee>({
            query: (employee) => ({
                url: `/employees/edit/${employee.id}`,
                method: 'PUT',
                //body: employee
            })
        }),
        addEmployee: builder.mutation<Employee, Employee>({
            query: (employee) => ({
                url: '/employees/add',
                method: 'POST',
                body: employee
            })
        }),
        removeEmployee: builder.mutation<string, string>({
            query: (id) => ({
                url: `/employees/remove/${id}`,
                method: 'POST',
                body: {id}
            })
        }),

    })
})
export const {
    useAddEmployeeMutation,
    useEditEmployeeMutation,
    useGetAllEmployeesQuery,
    useGetEmployeeQuery,
    useRemoveEmployeeMutation
} = employeesApi
export const {
    endpoints: {
        getAllEmployees,
        addEmployee,
        editEmployee,
        getEmployee,
        removeEmployee
    }
} = employeesApi