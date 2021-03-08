import axios from 'axios';
import { showAlert } from './alert';
const stripe = Stripe('pk_test_mbBrgamflzAs6c8k5FxSGHwU00obdSpTTM');

export const bookTour = async (tourId) => {
  try {
    const session = await axios(
      `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`
    );

    console.log(session);

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
