import mock, { withDelay } from "@/fake-db/mock.js";

mock.onPost("api/product/category/list").reply(() => {
  const response = {
    data: {
      productCategories: [
        {
          id: 1,
          name: "name",
          description: "description",
          img: "http://fakeimg.pl/350x350/eee/000000/?text=fake"
        }
      ],
      allPages: 5,
      currentPage: 1,
      amount: 150
    },
    code: 200,
    msg: ""
  };
  return withDelay(500, [200, response]);
});

mock.onPost("api/product/list").reply(() => {
  const response = {
    data: {
      products: [
        {
          id: 1,
          name: "名稱",
          description: "描述",
          img: "http://fakeimg.pl/350x350/eee/000000/?text=fake"
        }
      ],
      categoryName: "種類名稱",
      categoryDescription: "種類描述",
      allPages: 5,
      currentPage: 1,
      amount: 150
    },
    code: 200,
    msg: ""
  };
  return withDelay(500, [200, response]);
});

mock.onPost("api/product/detail").reply(() => {
  const response = {
    data: {
      id: 1,
      name: "名稱",
      description: "描述",
      img: "http://fakeimg.pl/350x350/eee/000000/?text=fake",
      categoryName: "種類名稱",
      categoryId: 1,
      infos: "<div>...</div>"
    },
    code: 200,
    msg: ""
  };
  return withDelay(500, [200, response]);
});
