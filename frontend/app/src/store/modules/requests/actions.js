// import router from '../../../router';
// import config from '../../../config.js';

// // helpers----------------------------------------------
// const getJSON = async(url, options) =>{
//     const response = await fetch(url, options);
//     if (!response.ok) throw new Error(response.message);
//     const data = await response.json();
//     return data;
// };

const beers = [
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
  {id: '1239', name: "Hazy DiscoWisco", browar: "Pinta", ocena: 8, img: 'https://www.piwaswiata.com/images/hazydiscowisco.jpg'},
  {id: '1239', name: "Hazy DiscoWisco", browar: "Pinta", ocena: 8, img: 'https://www.piwaswiata.com/images/hazydiscowisco.jpg'},
  {id: '1234', name: "Potion #10", browar: "Browar Brokreacja", ocena: 6, img: 'https://piwneopinie.pl/wp-content/uploads/Potion_10_Brokreacja-1024x1024.jpg'},
  {id: '1235', name: "Hazy DiscoWisco", browar: "Pinta", ocena: 8, img: 'https://www.piwaswiata.com/images/hazydiscowisco.jpg'},
  {id: '1236', name: "Potion #16", browar: "Browar Brokreacja", ocena: 9.5, img: 'https://piwnezwiedzanie.pl/wp-content/uploads/2019/12/Fortuna-Komes-Ice-Barley-Wine-2-800x600.jpg'},
  {id: '1237', name: "Potion #16", browar: "Browar Brokreacja", ocena: 7.5, img: 'https://untappd.akamaized.net/photos/2021_07_16/361456883d46be3a971d0e22574f63c0_640x640.jpg'},
  {id: '1238', name: "Potion #10", browar: "Browar Brokreacja", ocena: 6, img: 'https://piwneopinie.pl/wp-content/uploads/Potion_10_Brokreacja-1024x1024.jpg'},
  {id: '1239', name: "Hazy DiscoWisco", browar: "Pinta", ocena: 8, img: 'https://www.piwaswiata.com/images/hazydiscowisco.jpg'},
  {id: '1240', name: "Potion #16", browar: "Browar Brokreacja", ocena: 9.5, img: 'https://piwnezwiedzanie.pl/wp-content/uploads/2019/12/Fortuna-Komes-Ice-Barley-Wine-2-800x600.jpg'},
  {id: '1239', name: "Hazy DiscoWisco", browar: "Pinta", ocena: 8, img: 'https://www.piwaswiata.com/images/hazydiscowisco.jpg'},
  {id: '1239', name: "Hazy DiscoWisco", browar: "Pinta", ocena: 8, img: 'https://www.piwaswiata.com/images/hazydiscowisco.jpg'},

]

export default{
  loadBeers(context){
    const amountOfBeers = beers.length
    context.commit('setAmountOfBeers', amountOfBeers)
    const perPage = context.state.perPage;
    const amountOfPages = Math.ceil(amountOfBeers / perPage)
    context.commit('setAmountOfPages', amountOfPages)
  }
}