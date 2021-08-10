 <template>
  <section>
    <ul>
      <li v-for="beer in beers" :key="beer.id">
        <img :src="beer.img" :alt="beer.name">
        <div class="data">
          <span>
            <p>{{beer.name}}</p>
            <p>{{beer.browar}}</p>
          </span>
          <p>{{beer.ocena}}/10</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data(){
    return{
      beers: [
        {id: '1233', name: "Potion #16", browar: "Browar Brokreacja", ocena: 7.5, img: 'https://untappd.akamaized.net/photos/2021_07_16/361456883d46be3a971d0e22574f63c0_640x640.jpg'},
        {id: '1234', name: "Potion #10", browar: "Browar Brokreacja", ocena: 6, img: 'https://piwneopinie.pl/wp-content/uploads/Potion_10_Brokreacja-1024x1024.jpg'},
        {id: '1235', name: "Hazy DiscoWisco", browar: "Pinta", ocena: 8, img: 'https://www.piwaswiata.com/images/hazydiscowisco.jpg'},
        {id: '1236', name: "Potion #16", browar: "Browar Brokreacja", ocena: 9.5, img: 'https://piwnezwiedzanie.pl/wp-content/uploads/2019/12/Fortuna-Komes-Ice-Barley-Wine-2-800x600.jpg'},
        {id: '1237', name: "Potion #16", browar: "Browar Brokreacja", ocena: 7.5, img: 'https://untappd.akamaized.net/photos/2021_07_16/361456883d46be3a971d0e22574f63c0_640x640.jpg'},
        {id: '1238', name: "Potion #10", browar: "Browar Brokreacja", ocena: 6, img: 'https://piwneopinie.pl/wp-content/uploads/Potion_10_Brokreacja-1024x1024.jpg'},
        {id: '1239', name: "Hazy DiscoWisco", browar: "Pinta", ocena: 8, img: 'https://www.piwaswiata.com/images/hazydiscowisco.jpg'},
        {id: '1240', name: "Potion #16", browar: "Browar Brokreacja", ocena: 9.5, img: 'https://piwnezwiedzanie.pl/wp-content/uploads/2019/12/Fortuna-Komes-Ice-Barley-Wine-2-800x600.jpg'},
        {id: '1233', name: "Potion #16", browar: "Browar Brokreacja", ocena: 7.5, img: 'https://untappd.akamaized.net/photos/2021_07_16/361456883d46be3a971d0e22574f63c0_640x640.jpg'},
        {id: '1234', name: "Potion #10", browar: "Browar Brokreacja", ocena: 6, img: 'https://piwneopinie.pl/wp-content/uploads/Potion_10_Brokreacja-1024x1024.jpg'},
        {id: '1235', name: "Hazy DiscoWisco", browar: "Pinta", ocena: 8, img: 'https://www.piwaswiata.com/images/hazydiscowisco.jpg'},
        {id: '1236', name: "Potion #16", browar: "Browar Brokreacja", ocena: 9.5, img: 'https://piwnezwiedzanie.pl/wp-content/uploads/2019/12/Fortuna-Komes-Ice-Barley-Wine-2-800x600.jpg'},
        {id: '1237', name: "Potion #16", browar: "Browar Brokreacja", ocena: 7.5, img: 'https://untappd.akamaized.net/photos/2021_07_16/361456883d46be3a971d0e22574f63c0_640x640.jpg'},
        {id: '1238', name: "Potion #10", browar: "Browar Brokreacja", ocena: 6, img: 'https://piwneopinie.pl/wp-content/uploads/Potion_10_Brokreacja-1024x1024.jpg'},
        {id: '1239', name: "Hazy DiscoWisco", browar: "Pinta", ocena: 8, img: 'https://www.piwaswiata.com/images/hazydiscowisco.jpg'},
        {id: '1240', name: "Potion #16", browar: "Browar Brokreacja", ocena: 9.5, img: 'https://piwnezwiedzanie.pl/wp-content/uploads/2019/12/Fortuna-Komes-Ice-Barley-Wine-2-800x600.jpg'},
        {id: '1233', name: "Potion #16", browar: "Browar Brokreacja", ocena: 7.5, img: 'https://untappd.akamaized.net/photos/2021_07_16/361456883d46be3a971d0e22574f63c0_640x640.jpg'},
        {id: '1234', name: "Potion #10", browar: "Browar Brokreacja", ocena: 6, img: 'https://piwneopinie.pl/wp-content/uploads/Potion_10_Brokreacja-1024x1024.jpg'},
        {id: '1235', name: "Hazy DiscoWisco", browar: "Pinta", ocena: 8, img: 'https://www.piwaswiata.com/images/hazydiscowisco.jpg'},
        {id: '1236', name: "Potion #16", browar: "Browar Brokreacja", ocena: 9.5, img: 'https://piwnezwiedzanie.pl/wp-content/uploads/2019/12/Fortuna-Komes-Ice-Barley-Wine-2-800x600.jpg'},
        {id: '1237', name: "Potion #16", browar: "Browar Brokreacja", ocena: 7.5, img: 'https://untappd.akamaized.net/photos/2021_07_16/361456883d46be3a971d0e22574f63c0_640x640.jpg'},
        {id: '1238', name: "Potion #10", browar: "Browar Brokreacja", ocena: 6, img: 'https://piwneopinie.pl/wp-content/uploads/Potion_10_Brokreacja-1024x1024.jpg'},
        {id: '1239', name: "Hazy DiscoWisco", browar: "Pinta", ocena: 8, img: 'https://www.piwaswiata.com/images/hazydiscowisco.jpg'},
        {id: '1240', name: "Potion #16", browar: "Browar Brokreacja", ocena: 9.5, img: 'https://piwnezwiedzanie.pl/wp-content/uploads/2019/12/Fortuna-Komes-Ice-Barley-Wine-2-800x600.jpg'},
      ]
    }
  }
}
</script>

<style scoped>
  section{
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  ul{
    list-style-type: none;
    display: flex;
    flex-direction: column;
  }

  li{
    background-color: rgb(255, 255, 255);
    margin: 1rem;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(49, 49, 49, 0.15);
  }

  .data{
    padding: 0 1rem 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
  }
  

  img{
    position: relative;
    max-width: calc(100% - 1rem);
    border-radius: 10px;
    margin: 0.5rem;
  }

  @media screen and (min-width:550px) and (max-width:768px){
    ul{
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }

    li{
      flex-basis: 40%;
    }
  }  
  
  @media screen and (min-width:769px) and (max-width:1024px){
    ul{
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }

    li{
      flex-basis: 25%;
    } 
  }    

  @media screen and (min-width:1024px){
    ul{
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }

    li{
      flex-basis: 21%;
    } 
  }  
</style>