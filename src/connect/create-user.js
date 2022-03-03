const stripe = require('stripe')
const STRIPE_SECRET_KEY = 'sk_test_xxx'

const Stripe = stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2022-03-03'
})

const addNewCustomer = async (email) => {
  const customer = await Stripe.customers.create({
    email,
    description: 'New Customer'
  })

  return customer
}

const getCustomerByID = async (id) => {
  const customer = await Stripe.customers.retrieve(id)
  return customer
}

module.exports = {
  addNewCustomer,
	getCustomerByID
}