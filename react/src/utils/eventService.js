import client from './client';

const eventListFields = `
  title,
  'slug': slug.current,
  preAmble,
  'category': category->title,
`;

export const getEvents = async () => {
  const data = await client.fetch(`*[_type == "event"]{${eventListFields}}`);
  return data;
};

export const getEvent = async (slug) => {
  const data = await client.fetch(
    `*[_type === "event" && slug.current == $slug]{${eventListFields}}`,
    { slug }
  );
  return data;
};
