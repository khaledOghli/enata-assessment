import app from '@/main.ts'
const swalOptions = {
  position: 'center',
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong! Try again',
  showConfirmButton: true,
  showCancelButton: false,
  allowOutsideClick: false,
  allowEscapeKey: false,
  showLoaderOnConfirm: true,
  showCloseButton: false,
  preConfirm: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 500)
    })
  },
  timer: undefined,
}
export const useSweetAlert = (options, confirmCallback, dismissedCallback, deniedCallback) => {
  app.config.globalProperties.$swal(Object.assign(swalOptions, options)).then((result) => {
    if (result.isConfirmed && confirmCallback)
      confirmCallback()
    else if (result.isDismissed && dismissedCallback)
      dismissedCallback()
    else if (result.isDenied && deniedCallback)
      deniedCallback()
  })
}
