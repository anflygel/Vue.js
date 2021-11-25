<template>
  <div class="itemobj">
    <div v-for="(item, idx) in items" :key="idx">
      <table>
        <tr>
          <td>{{ item.id }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.value }}</td>
          <td @click="onClickContextItem($event, item)" class="point">...</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    onClickContextItem(event) {
      console.log(event);
      const items = [
        {
          text: "Edit",
          action: () => {
            console.log("edit");
          },
        },
        {
          text: "Delete",
          action: () => {
            console.log("Delete");
          },
        },
      ];

      this.$context.show({ event, items });
    },
    actionDelete(id) {
      //mutation deleteItem
      console.log(id);
      this.$context.close();
    },
  },
};
</script>

<style lang="scss" scoped>
.itemobj {
  margin-left: 0px;
  font-family: sans-serif;
  font-size: 20px;
}

table {
  width: 100%; /* Ширина таблицы */
  background: white; /* Цвет фона таблицы */

  border-spacing: 1px; /* Расстояние между ячейками */
}

td,
th {
  text-align: center;
  background: rgb(209, 209, 209); /* Цвет фона ячеек */
  padding: 15px; /* Поля вокруг текста */
  width: 150px;
}

.point {
  width: 15px;
  cursor: pointer;
}
</style>