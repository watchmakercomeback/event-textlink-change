/* eslint-disable prettier/prettier */
import type { EventContext } from '@vtex/api'

import type { Clients } from '../clients'
import {
  haveSpecialCharaters,
  getLinkWithOutSpecialCharacters,
} from '../utils/catalog'

export async function skuChange(ctx: EventContext<Clients>) {
  try {
    const { clients } = ctx

    const { HasStockKeepingUnitModified, IdSku } = ctx.body

    if (HasStockKeepingUnitModified) {
      const { ProductId } = await clients.catalog.getSku(IdSku)

      // eslint-disable-next-line no-console
      console.log('Product id:', ProductId)

      const { LinkId, Name, CategoryId, BrandId } = await clients.catalog.getProduct(ProductId)

      // eslint-disable-next-line no-console
      console.log('Link Id:', LinkId)

      // eslint-disable-next-line no-console
      console.log('haveSpecialCharaters', haveSpecialCharaters(LinkId))

      if (haveSpecialCharaters(LinkId)) {
        const newLink = getLinkWithOutSpecialCharacters(LinkId)

        // eslint-disable-next-line no-console
        console.log('newLink', newLink)

        const newProduct = clients.catalog.updateProductLink(ProductId, newLink, { Name, CategoryId, BrandId })

        return newProduct
      }
    }

    return {}
  } catch (error) {
    console.error(error)

    return {}
  }
}
