 <template>
  <section class="sorting-bar">
    <p>sortuj</p>
    <div class="sorting">
      <ul>
        <li>Cena</li>
        <li>BLG</li>
        <li>IBU</li>
        <li>Data wypicia</li>
        <li>A-Z</li>
        <li>Z-A</li>
        <li>Ocena</li>
      </ul>
    </div>
    <div class="addBtn">
      <base-button mode="filledBtn">Dodaj piwo</base-button>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .sorting-bar{
    width: 100%;
    min-height: 6rem;
    display: flex;
    flex-direction: row;
    margin: 2rem 0 1rem 0;
    position: relative;
  }

  .sorting-bar p{
    position: absolute;
    top: -0.8rem;
    left: 0.3rem;
  }

  .sorting{
    height: 100%;
    flex-grow: 1;
    margin: 0 1rem 0 0;
    padding: 1rem;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    /* box-shadow: 0 0 5px rgba(49, 49, 49, 0.15); */
    box-shadow: 0 0 5px rgba(100, 100, 100, 0.15);

  }

  ul{
    height: 100%;
    width: 100%;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }

  li{
    padding:0.3rem;
    cursor: pointer;
    padding: 0 0.5rem;
  }
</style>