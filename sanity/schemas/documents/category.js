const category = {
  title: 'Category',
  name: 'category',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Kategori',
      description: 'Dette er navnet på kategorien',
      validation: (Rule) => Rule.required(),
    },
  ]
}

export default category;