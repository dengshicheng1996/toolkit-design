import standard from './standard'
import alert from './alert'
import confirm from './confirm'
import Modal from './Modal'

import './index.less'

const DefaultModal: typeof Modal & {
  standard: typeof standard
  alert: typeof alert
  confirm: typeof confirm
} = Modal as any

DefaultModal.standard = standard
DefaultModal.alert = alert
DefaultModal.confirm = confirm

export default DefaultModal
