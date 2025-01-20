import { defineField, defineType } from 'sanity';

export const orderSchema = defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    defineField({
      name: 'orderId',
      title: 'Order ID',
      type: 'number',
      validation: (Rule) => Rule.required().error('Order ID is required'),
    }),
    defineField({
      name: 'userId',
      title: 'User ID',
      type: 'reference',
      to: [{ type: 'userInfo' }],
      validation: (Rule) => Rule.required().error('User ID is required'),
    }),
    defineField({
      name: 'cartItems',
      title: 'Cart Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'products' }],
        },
      ],
      validation: (Rule) => Rule.required().error('Cart items are required'),
    }),
  ],
});