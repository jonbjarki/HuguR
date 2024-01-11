/**
 * Renders a modal overlay login/signup page
 */

import Modal from '@/components/common/modal';
import Auth from '@/components/auth/Auth';

export default function Login() {
  return (
    <Modal>
      <Auth />
    </Modal>
  );
}
