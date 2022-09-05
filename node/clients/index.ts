/* eslint-disable prettier/prettier */
import type { ClientsConfig } from '@vtex/api';
import { IOClients } from '@vtex/api'

import productByIDClient from './productByIDClient'

const MEDIUM_TIMEOUT_MS = 2 * 1000

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {

  public get productByID() {
    return this.getOrSet('productByID', productByIDClient)
  }
}

export const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      retries: 2,
      timeout: MEDIUM_TIMEOUT_MS,
    },
  },
}
