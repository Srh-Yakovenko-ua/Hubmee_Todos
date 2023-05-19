import * as yup from 'yup'
export const addSchema = yup.object({
  text: yup.lazy(value =>
    !value
      ? yup.string().required('do not be empty').trim()
      : yup.string().min(2, 'at least 2 characters to add a task').trim()
  ),
})
export type AddSchemaType = yup.InferType<typeof addSchema>
