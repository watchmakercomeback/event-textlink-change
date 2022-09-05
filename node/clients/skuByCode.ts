/* eslint-disable prettier/prettier */
import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class ProductByIDClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(`http://${context.account}.vtexcommercestable.com.br`, context, {
      ...options,
      headers: {
        VtexIdClientAutCookie: context.authToken,
      },
    })
  }

  public getSkuByCode = async (id: string, from: number, to: number) => {
    const url = `/api/catalog_system/pvt/products/GetProductAndSkuIds/${id}`

    return this.http.get(url)
  }
}
