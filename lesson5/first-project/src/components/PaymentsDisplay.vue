<template>
  <div class="itemobj">
    <div v-for="(item, idx) in items" :key="idx">
      <table>
        <tr>
          <td>{{ item.id }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.value }}</td>
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
</style>