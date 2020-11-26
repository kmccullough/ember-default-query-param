import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {

  queryParams = {
    abc: { refreshModel: true },
  };

  validQueryParam = [
    'a',
    'b',
    'c',
  ];

  beforeModel(transition)  {
    const { abc } = transition.to.queryParams;
    if (!abc || !this.validQueryParam.includes(abc)) {
      this.replaceWith({
        queryParams: {
          abc: this.validQueryParam[0],
        },
      });
    }
  }

}
