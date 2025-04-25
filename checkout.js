document.addEventListener('DOMContentLoaded', () => {
    // Load order from localStorage
    const order = JSON.parse(localStorage.getItem('currentOrder') || '[]');
    displayOrderSummary(order);

    // Add form submission handler
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);
});

function displayOrderSummary(order) {
    const summaryContainer = document.getElementById('orderSummary');
    let total = 0;

    // Display each item
    order.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        summaryContainer.innerHTML += `
            <div class="order-item">
                <span>${item.name} x${item.quantity}</span>
                <span>$${itemTotal.toFixed(2)}</span>
            </div>
        `;
    });

    // Display total
    summaryContainer.innerHTML += `
        <div class="order-total">
            <span>Total:</span>
            <span>$${total.toFixed(2)}</span>
        </div>
    `;
}

function handleCheckout(event) {
    event.preventDefault();

    // Validate all form fields
    const form = event.target;
    if (!form.checkValidity()) {
        alert('Please fill in all required fields correctly.');
        return;
    }

    // Calculate delivery date (3 business days from now)
    const deliveryDate = calculateDeliveryDate();

    // Show success message
    alert(`Thank you for your purchase! Your order will be delivered by ${deliveryDate.toDateString()}.`);

    // Clear the cart and redirect to home page
    localStorage.removeItem('currentOrder');
    window.location.href = 'index.html';
}

function calculateDeliveryDate() {
    const date = new Date();
    let businessDays = 3;
    
    while (businessDays > 0) {
        date.setDate(date.getDate() + 1);
        if (date.getDay() !== 0 && date.getDay() !== 6) { // Skip weekends
            businessDays--;
        }
    }
    
    return date;
}
