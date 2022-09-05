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

  public getProductById = async (id: string) => {
    const url = `/api/catalog/pvt/product/${id}`

    return this.http.get(url)
  }
}
