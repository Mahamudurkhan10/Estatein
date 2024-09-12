import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Components/Provider/AuthProvider";
import useAxiosPublic from "../../../../Components/Hooks/useAxiosPublic";

const PaymentForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState();
    const [loading, setLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const price = 79;

    useEffect(() => {
        axiosPublic.post('/create-payment-intent', { price })
            .then(res => {
                setClientSecret(res.data.clientSecret);
            })
            .catch(err => console.error("Error creating payment intent:", err));
    }, [axiosPublic, price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);

        const card = elements.getElement(CardElement);
        if (!card) return;

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card });
        if (error) {
            setError(error.message);
            setLoading(false);
            return;
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                },
            },
        });

        if (confirmError) {
            setError(confirmError.message);
            setLoading(false);
            return;
        }

        if (paymentIntent?.status === 'succeeded') {
            setTransactionId(paymentIntent.id);

            const payment = {
                email: user?.email,
                price,
                transactionId: paymentIntent.id,
                date: new Date(),
            };

            const res = await axiosPublic.post('/payments', payment);
            if (res.data?.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Payment done successfully`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        }

        setLoading(false);
    };

    return (
        <div>
            <h1 className="text-4xl text-cyan-500 text-center mb-5"> Payment </h1>
            <div className="lg:w-3/4 mx-auto card p-12">
                <form className="ml-12" onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button className="btn btn-primary btn-sm mt-3" type="submit" disabled={!stripe || loading}>
                        {loading ? 'Processing...' : 'Pay'}
                    </button>
                    {error && <p className="text-red-600"> {error} </p>}
                    {transactionId && <p className="text-green-600"> Transaction ID: {transactionId} </p>}
                </form>
            </div>
        </div>
    );
};

export default PaymentForm;
