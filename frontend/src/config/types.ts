import { NextPage } from "next"
import { ReactElement, ReactNode } from "react"

export enum ToastStatus {
    ERROR = 'error',
    SUCCESS = 'success',
    WARNING = 'warning',
    NOTIFICATION = 'notification',
  }

/*
 * Layout
 */

export type PageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}


export type SWRHookResponse = {
  data: any
  error: string
  isLoading: boolean
  hasError: boolean
}