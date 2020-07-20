import faker from "faker";

const allTags = [
  "health",
  "science",
  "gaming",
  "sports",
  "food",
  "comedy",
  "movies",
  "popular",
  "politics",
  "family",
];

const generateTags = () => {
  const times = faker.random.number({
    min: 1,
    max: 7,
  });
  const tags = [];

  for (let i = 0; i < times; i += 1) {
    let tag = faker.random.arrayElement(allTags);
    if (!tags.includes(tag)) {
      tags.push(tag);
    }
  }
  return tags;
};

const genaretePosts = (numb) => {
  const posts = [];
  for (let i = 0; i < numb; i += 1) {
    posts.push({
      id: faker.random.uuid(),
      createAdd: faker.date.recent(),
      text: faker.lorem.paragraph(10),
      author: {
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
      },
      tags: generateTags(),
    });
  }
  return posts;
};

console.log(JSON.stringify(genaretePosts(3)));
