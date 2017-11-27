
export class App {

  configureRouter(config, router) {
    config.title = 'Contacts';
    config.map([
      { route: '',             moduleId: 'no-selection',   title: 'Select' },
      { route: 'contacts/:id', moduleId: 'contact-detail', name: 'contactss'}
    ]);
    this.router = router;
  }

  // constructor() {
  //   this.message = 'hello world'
  // }

  get fct() {
    alert("salut");
  }

  get chaine() {
    return "salut les gens";
  }

}

