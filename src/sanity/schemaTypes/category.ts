export const category = {
    name: "category",
    title: "Category",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Category Name",
            type: "string",
            validation: (rule: any) => rule.required()
        },
        {
            name: "image",
            title: "Featured Image",
            type: "image",
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200,
            },
            validation: (rule: any) => rule.required(),
        }
    ]
}