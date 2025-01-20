import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { category } from './category'
import { productSchema } from './products'
import { categorySchema } from './categories'
import { formSchema } from './contactForm'
import { userInfoSchema } from './userInfo'
import { orderSchema } from './orderDetail'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, productSchema, categorySchema, formSchema, userInfoSchema, orderSchema],
}
