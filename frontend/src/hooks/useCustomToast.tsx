import { UseToastOptions, useToast } from '@chakra-ui/react'
import React from 'react'

import { ToastStatus } from 'config/types'

import Toast from 'components/Toast'

export default function useCustomToast(options?: UseToastOptions) {
  const chakraToast = useToast(options)

  function customToast(status: ToastStatus, title: string, description: string, toastId?: string) {
    return chakraToast({
      position: 'top-right',
      render: ({ onClose }: any) => <Toast status={status} title={title} description={description} onClose={onClose} />,
      id: toastId,
    })
  }

  function genericErrorToast() {
    return customToast(ToastStatus.ERROR, 'Oops!', 'Something went wrong, please try again!')
  }

  return {
    toast: customToast,
    genericErrorToast,
  }
}
