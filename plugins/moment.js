import Vue from 'vue';
import moment from 'moment';
moment.locale('tr');

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('moment', moment);
};

Vue.filter('formatDate', (date, format) => {
  return moment(date).format(format);
});
