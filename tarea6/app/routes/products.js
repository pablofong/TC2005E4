import Route from '@ember/routing/route';

export default class ProductsRoute extends Route {
    async model() {
        const response = await fetch('/data.json');
        const data = await response.json();
        return data;
      }
}

