/* eslint-disable prettier/prettier */
import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'

interface DataProduct {
  Name: string;
  CategoryId: number | string;
  BrandId: number | string
}

export default class CatalogClient extends JanusClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(context, {
      ...options,
      headers: {
        ...options?.headers,
        VtexIdClientAutCookie: context.authToken,
      },
    })
  }

  public getSku = async (skuId: string) => {
    return this.http.get(`/api/catalog/pvt/stockkeepingunit/${skuId}`)
  }

  public getProduct(productId: number | string) {
    return this.http.get(`/api/catalog/pvt/product/${productId}`)
  }

  public updateProductLink(productId: number | string, LinkId: string, Product: DataProduct) {
    return this.http.put(`/api/catalog/pvt/product/${productId}`, {
      LinkId,
      Name: Product.Name,
      CategoryId: Product.CategoryId,
      BrandId: Product.BrandId,
    })
  }
}
