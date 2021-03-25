const event = {
  title: 'Event',
  name: 'event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      description: 'Dette er tittelen',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Dette er den unike URL-en',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      }
    },
    {
      name: 'preAmble',
      type: 'text',
      title: 'Ingress',
      description: 'Dette er ingressen',
    },
    {
      title: 'Kategori',
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}]
    }
  ],
  preview: {
    select: {
      title: 'Title',
      category: 'category.title'
    },
    prepare(selection) {
      const {title, category} = selection;
      return {
        title,
        subtitle: `Kategori: ${category}`
      }
    }
  }
};

export default event;