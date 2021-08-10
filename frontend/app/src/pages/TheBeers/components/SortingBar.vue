 <template>
  <section class="sorting-bar">
    <div class="sorting">
      <h3>Sorting Bar</h3>
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
    height: 6rem;
    display: flex;
    flex-direction: row;
    margin: 1rem;
  }

  .sorting{
    height: 100%;
    flex-grow: 1;
    margin: 0 1rem 0 0;
    padding: 1rem;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(49, 49, 49, 0.15);
  }
</style>