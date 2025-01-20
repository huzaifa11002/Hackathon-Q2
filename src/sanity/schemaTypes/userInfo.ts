import { defineField, defineType } from 'sanity';

export const userInfoSchema = defineType({
  name: 'userInfo',
  title: 'User Info',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(255).error('Name must be between 3 and 255 characters'),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email().error('A valid email is required'),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(15).regex(/^[0-9]{10,15}$/, 'Contact number must be between 10 and 15 digits').error('Enter a valid phone number'),
    }),
    defineField({
      name: 'address1',
      title: 'Address Line 1',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(50).error('Address Line 1 must be between 3 and 50 characters'),
    }),
    defineField({
      name: 'address2',
      title: 'Address Line 2',
      type: 'string',
      validation: (Rule) => Rule.min(3).max(50).warning('Address Line 2 should be between 3 and 50 characters'),
    }),
    defineField({
      name: 'zipcode',
      title: 'Zipcode',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(10).regex(/^[0-9]{3,10}$/, 'Zipcode must contain 3 to 10 digits').error('Enter a valid zipcode'),
    }),
  ],
});