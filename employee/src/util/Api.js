import axios from 'axios';

export default {
    search: function() {
       //dont change the gender :D
        return  axios.get('https://randomuser.me/api/?results=10&nat=us,fr&gender=male')
    }
}
