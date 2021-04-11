<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Jacey Huel II",
    tel: "233.190.8258 x432",
    address: "0410 Maybelle Manors",
    opening_hours: "08:00",
    description:
      "Nostrum consectetur odio ex ea. Officia aut ab et voluptates ullam eaque dolores. Et officiis odit voluptatem velit repellat accusamus ut veritatis. Ut ut dolor aliquid nisi. Molestiae autem a fuga debitis iure.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=47.867095179811315",
    viewCounts: 13,
    createdAt: "2021-04-07T14:21:46.000Z",
    updatedAt: "2021-04-10T15:19:59.000Z",
    CategoryId: 5,
    Category: {
      id: 5,
      name: "素食料理",
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-07T14:21:46.000Z",
    },
    Comments: [
      {
        id: 1,
        text: "Voluptate iure tenetur cumque nemo eum cum eos consequatur nam.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$haSnB7YRouloMuOkAR.svO8hrQoT6rfMsg1SZy2hOyfT36isvc8OK",
          isAdmin: false,
          image: null,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
        },
      },
      {
        id: 51,
        text: "Harum eos occaecati nam amet unde quis exercitationem ut.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$haSnB7YRouloMuOkAR.svO8hrQoT6rfMsg1SZy2hOyfT36isvc8OK",
          isAdmin: false,
          image: null,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
        },
      },
      {
        id: 101,
        text: "Vero laborum reprehenderit.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$r5sNq7DnH82Ly.n0/QjqgOczyBgR3sQ6Yk8NSrKpJtgcJ.Kl0n81K",
          isAdmin: true,
          image: null,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
        },
      },
    ],
  },
};

export default {
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        commentsLength: 0,
        viewCounts: 0,
      },
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);
      const { id, name, Category, Comments, viewCounts } = dummyData.restaurant;
      this.restaurant = {
        ...this.restaurant,
        id,
        name,
        categoryName: Category ? Category.name : "未分類",
        commentsLength: Comments.length,
        viewCounts,
      };
    },
  },
};
</script>
