class BaseService {
  constructor(model) {
    this.model = model;
  }

  async create(object) {
    return this.model.create(object);
  }

  async findById(id) {
    return this.model.findById(id);
  }

  async find(query = {}) {
    return this.model.find(query);
  }

  async update(id, object) {
    return this.model.findByIdAndUpdate(id, object, { new: true });
  }

  async deleteById(id) {
    return this.model.findByIdAndDelete(id);
  }
}

module.exports = BaseService;
