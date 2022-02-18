const { dbclient } = require('../helpers/database')
const { m, register } = require('../helpers/models')

const FashionItem = dbclient.db('fashion').collection('items')

class FashionItemModel {
  constructor(ctx, data) {
    this.data = data
    this.ctx = ctx
  }
  static search = async (ctx, filter, page=0, perpage=20) => {
    try {
      const q = {
        category: { $in: filter.categories }
      }
      const items = await FashionItem
        .find(q)
        .sort({ weight: -1 })
        .skip(page > 0 ? ( ( page - 1 ) * perpage) : 0)
        .limit(perpage)
        .toArray()
      return items
    } catch (e) {
      throw e
    }
  }
}

register('FashionItem', FashionItemModel)