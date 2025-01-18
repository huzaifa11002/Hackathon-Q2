import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { category } from './category'
import { productSchema } from './products'
import { categorySchema } from './categories'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, productSchema, categorySchema],
}
