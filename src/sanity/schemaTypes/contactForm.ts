import { defineField, defineType } from 'sanity';

export const formSchema = defineType({
  name: 'contactForm',
  title: 'Contact Form',
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
      name: 'subject',
      title: 'Subject',
      type: 'string',
      validation: (Rule) => Rule.max(255).warning('Subject should not exceed 255 characters'),
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(1000).error('Message must be between 10 and 1000 characters'),
    }),
  ],
});