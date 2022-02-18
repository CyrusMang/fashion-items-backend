const { m, register } = require('../helpers/models')

class FashionItem {
  constructor(ctx, data) {
    this.data = data
    this.ctx = ctx
  }
  static findByType = async (ctx, type) => {
    try {
      //
    } catch (e) {
      throw e
    }
  }
}

register('FashionItem', FashionItem)