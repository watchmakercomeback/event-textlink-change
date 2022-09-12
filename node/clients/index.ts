/* eslint-disable prettier/prettier */
import { IOClients } from '@vtex/api'

import CatalogClient from './catalog'

export class Clients extends IOClients {
  public get catalog() {
    return this.getOrSet('catalog', CatalogClient)
  }
}
