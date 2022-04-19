export default class Layer {
  constructor(name) {
    this.name = name;
    this.objects = [];
  }

  addObject(obj) {
    this.objects.push(obj);
  }
}
