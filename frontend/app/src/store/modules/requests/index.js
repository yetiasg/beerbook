import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default{
    state(){
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
                {id: '1241', name: "Potion #16", browar: "Browar Brokreacja", ocena: 7.5, img: 'https://untappd.akamaized.net/photos/2021_07_16/361456883d46be3a971d0e22574f63c0_640x640.jpg'},
                {id: '1242', name: "Potion #10", browar: "Browar Brokreacja", ocena: 6, img: 'https://piwneopinie.pl/wp-content/uploads/Potion_10_Brokreacja-1024x1024.jpg'},
                {id: '1243', name: "Hazy DiscoWisco", browar: "Pinta", ocena: 8, img: 'https://www.piwaswiata.com/images/hazydiscowisco.jpg'},
                {id: '1244', name: "Potion #16", browar: "Browar Brokreacja", ocena: 9.5, img: 'https://piwnezwiedzanie.pl/wp-content/uploads/2019/12/Fortuna-Komes-Ice-Barley-Wine-2-800x600.jpg'},
                {id: '1245', name: "Potion #16", browar: "Browar Brokreacja", ocena: 7.5, img: 'https://untappd.akamaized.net/photos/2021_07_16/361456883d46be3a971d0e22574f63c0_640x640.jpg'},
                {id: '1246', name: "Potion #10", browar: "Browar Brokreacja", ocena: 6, img: 'https://piwneopinie.pl/wp-content/uploads/Potion_10_Brokreacja-1024x1024.jpg'},
                {id: '1247', name: "Hazy DiscoWisco", browar: "Pinta", ocena: 8, img: 'https://www.piwaswiata.com/images/hazydiscowisco.jpg'},
                {id: '1248', name: "Potion #16", browar: "Browar Brokreacja", ocena: 9.5, img: 'https://piwnezwiedzanie.pl/wp-content/uploads/2019/12/Fortuna-Komes-Ice-Barley-Wine-2-800x600.jpg'},
                {id: '1249', name: "Potion #16", browar: "Browar Brokreacja", ocena: 7.5, img: 'https://untappd.akamaized.net/photos/2021_07_16/361456883d46be3a971d0e22574f63c0_640x640.jpg'},
                {id: '1250', name: "Potion #10", browar: "Browar Brokreacja", ocena: 6, img: 'https://piwneopinie.pl/wp-content/uploads/Potion_10_Brokreacja-1024x1024.jpg'},
                {id: '1251', name: "Hazy DiscoWisco", browar: "Pinta", ocena: 8, img: 'https://www.piwaswiata.com/images/hazydiscowisco.jpg'},
                {id: '1252', name: "Potion #16", browar: "Browar Brokreacja", ocena: 9.5, img: 'https://piwnezwiedzanie.pl/wp-content/uploads/2019/12/Fortuna-Komes-Ice-Barley-Wine-2-800x600.jpg'},
                {id: '1253', name: "Potion #16", browar: "Browar Brokreacja", ocena: 7.5, img: 'https://untappd.akamaized.net/photos/2021_07_16/361456883d46be3a971d0e22574f63c0_640x640.jpg'},
                {id: '1254', name: "Potion #10", browar: "Browar Brokreacja", ocena: 6, img: 'https://piwneopinie.pl/wp-content/uploads/Potion_10_Brokreacja-1024x1024.jpg'},
                {id: '1255', name: "Hazy DiscoWisco", browar: "Pinta", ocena: 8, img: 'https://www.piwaswiata.com/images/hazydiscowisco.jpg'},
                {id: '1256', name: "Potion #16", browar: "Browar Brokreacja", ocena: 9.5, img: 'https://piwnezwiedzanie.pl/wp-content/uploads/2019/12/Fortuna-Komes-Ice-Barley-Wine-2-800x600.jpg'},
                {id: '1257', name: "Hazy DiscoWisco", browar: "Pinta", ocena: 8, img: 'https://www.piwaswiata.com/images/hazydiscowisco.jpg'},
                {id: '1258', name: "Hazy DiscoWisco", browar: "Pinta", ocena: 8, img: 'https://www.piwaswiata.com/images/hazydiscowisco.jpg'},
                {id: '1259', name: "Potion #10", browar: "Browar Brokreacja", ocena: 6, img: 'https://piwneopinie.pl/wp-content/uploads/Potion_10_Brokreacja-1024x1024.jpg'},
                {id: '1260', name: "Hazy DiscoWisco", browar: "Pinta", ocena: 8, img: 'https://www.piwaswiata.com/images/hazydiscowisco.jpg'},
                {id: '1261', name: "Potion #16", browar: "Browar Brokreacja", ocena: 9.5, img: 'https://piwnezwiedzanie.pl/wp-content/uploads/2019/12/Fortuna-Komes-Ice-Barley-Wine-2-800x600.jpg'},
                {id: '1262', name: "Potion #16", browar: "Browar Brokreacja", ocena: 7.5, img: 'https://untappd.akamaized.net/photos/2021_07_16/361456883d46be3a971d0e22574f63c0_640x640.jpg'},
                {id: '1263', name: "Potion #10", browar: "Browar Brokreacja", ocena: 6, img: 'https://piwneopinie.pl/wp-content/uploads/Potion_10_Brokreacja-1024x1024.jpg'},
                {id: '1264', name: "Hazy DiscoWisco", browar: "Pinta", ocena: 8, img: 'https://www.piwaswiata.com/images/hazydiscowisco.jpg'},
                {id: '1265', name: "Potion #16", browar: "Browar Brokreacja", ocena: 9.5, img: 'https://piwnezwiedzanie.pl/wp-content/uploads/2019/12/Fortuna-Komes-Ice-Barley-Wine-2-800x600.jpg'},
                {id: '1266', name: "Hazy DiscoWisco", browar: "Pinta", ocena: 8, img: 'https://www.piwaswiata.com/images/hazydiscowisco.jpg'},
                {id: '1267', name: "Hazy DiscoWisco", browar: "Pinta", ocena: 8, img: 'https://www.piwaswiata.com/images/hazydiscowisco.jpg'},

              ],
            currentPage: 1,
            perPage: 20,
            amountOfPages: null,
            amountOfBeers: null
        }
    },
    mutations,
    actions,
    getters
}