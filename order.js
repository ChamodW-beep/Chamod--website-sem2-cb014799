// Computer parts data
const computerParts = {
    processors: [
        { id: 'p1', name: 'AMD Ryzen 9 5950X', price: 799.99, image: 'https://www.tulipcom.lk/public/dbimages/product/1636027968_pdt_1.jpg' },
        { id: 'p2', name: 'Intel Core i9-12900K', price: 589.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ23BgLKRLc4QSaMgP38X_vBDeoDUQQTzRAJQ&s' },
        { id: 'p3', name: 'AMD Ryzen 7 5800X', price: 449.99, image: 'https://www.gamestreet.lk/images/products/2850.jpg' },
        { id: 'p4', name: 'Intel Core i7-12700K', price: 409.99, image: 'https://i0.wp.com/www.redlinetech.lk/wp-content/uploads/2021/12/58747_1050_INTEL-CORE-i7-12700K-PROCESSOR-e1669782981704.webp' },
        { id: 'p5', name: 'AMD Ryzen 5 5600X', price: 299.99, image: 'https://i0.wp.com/www.redlinetech.lk/wp-content/uploads/2021/01/amd-ryzen-5-5600x-3.7-ghz-6-core-am4-processor-sri-lanka_1-removebg-preview.webp' },
        { id: 'p6', name: 'Intel Core i5-12600K', price: 279.99, image: 'https://www.sense.lk/images/uploads/product/58750_1049_INTEL-CORE-i5-12600K-PROCESSOR.png' }
    ],
    graphics: [
        { id: 'g1', name: 'NVIDIA RTX 4090', price: 1599.99, image: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/geforce-ada-4090-web-og-1200x630.jpg' },
        { id: 'g2', name: 'AMD RX 7900 XTX', price: 999.99, image: 'https://m.media-amazon.com/images/I/81il2WdPPJL._SS400_.jpg' },
        { id: 'g3', name: 'NVIDIA GEFORCE RTX 5070', price: 1100.99, image: 'https://m.media-amazon.com/images/I/81il2WdPPJL._SS400_.jpg' },
        { id: 'g4', name: 'AMD RX 7900 XT', price: 899.99, image: 'https://images-cdn.ubuy.co.in/63d59f4d9332b84bea3d0c19-sapphire-21323-01-20g-amd-radeon-rx-7900.jpg' },
        { id: 'g5', name: 'NVIDIA RTX 4070', price: 599.99, image: 'https://www.nexxcom.lk/wp-content/uploads/2024/01/MSI-GeForce-RTX-4070-SUPER-12G-GAMING-X-SLIM.png' },
        { id: 'g6', name: 'AMD RX 6800 XT', price: 649.99, image: 'https://images-cdn.ubuy.co.in/63403ef00dbac1051c112c5c-msi-gaming-radeon-rx-6800-xt-16gb-gdrr6.jpg' }
    ],
    motherboards: [
        { id: 'm1', name: 'ASUS ROG Maximus Z690', price: 599.99, image: 'https://redtech.lk/wp-content/uploads/2022/08/ASUS-Z690-MAXIMUS-HERO-%E2%80%93-DDR5-Intel-Motherboard.png' },
        { id: 'm2', name: 'MSI MEG X570 ACE', price: 449.99, image: 'https://storage-asset.msi.com/global/picture/image/feature/mb/X570/ACE/X570-ACE.png' },
        { id: 'm3', name: 'GIGABYTE X570 AORUS', price: 389.99, image: 'https://static.gigabyte.com/StaticFile/Image/Global/d80d67727be49e1907ff93e35971ddb5/Product/22422' },
        { id: 'm4', name: 'ASRock B550 Steel Legend', price: 179.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQgmpyqgRS12tb66P-sEQkkZ8bg-A1qwyKbg&s' },
        { id: 'm5', name: 'ASUS TUF Gaming B550', price: 169.99, image: 'https://sltechie.lk/wp-content/uploads/2021/05/10.1.jpg.c2a9889b9a.989x800x800-300x300.png' },
        { id: 'm6', name: 'MSI MPG B550', price: 159.99, image: 'https://mskcomputers.lk/assets/uploads/af330f155df22181da8cf18d8afc672e.png' }
    ],
    memory: [
        { id: 'r1', name: 'G.SKILL Trident Z5 32GB', price: 219.99, image: 'https://redtech.lk/wp-content/uploads/2022/02/32GB-G.SKILL-Trident-Z5-RGB-DDR5-%E2%80%93-5600MHz-DESKTOP-RAM-Memory-Kit-16%C3%972.png' },
        { id: 'r2', name: 'Corsair Dominator 32GB', price: 199.99, image: 'https://redtech.lk/wp-content/uploads/2019/12/32-GB-Corsair-Dominator-Platinum-RGB-DDR4-3200MHz-RAM-Memory-Kit-16x2-1.png' },
        { id: 'r3', name: 'Crucial Ballistix 16GB', price: 89.99, image: 'https://img.overclockers.co.uk/media/image/MY20TCR_284463.jpg' },
        { id: 'r4', name: 'TeamGroup T-Force 16GB', price: 79.99, image: 'https://m.media-amazon.com/images/I/71yyY+Y29WL._AC_SL1500_.jpg' },
        { id: 'r5', name: 'Kingston FURY Beast 32GB', price: 149.99, image: 'https://m.media-amazon.com/images/I/61uXihcspuL._AC_UF894,1000_QL80_.jpg' },
        { id: 'r6', name: 'Corsair Vengeance RGB 32GB', price: 169.99, image: 'https://www.nexxcom.lk/wp-content/uploads/2023/10/CORSAIR-VENGEANCE-RGB-32GB-2X16-DDR5-DRAM-5600MHZ-C40-MEMORY-copy.png' }
    ],
    storage: [
        { id: 's1', name: 'Samsung 980 PRO 2TB', price: 299.99, image: 'https://www.gamestreet.lk/images/products/5425.jpg' },
        { id: 's2', name: 'WD Black SN850 1TB', price: 169.99, image: 'https://www.gamestreet.lk/images/products/6236.jpg' },
        { id: 's3', name: 'Crucial P5 1TB', price: 119.99, image: 'https://www.crucial.com/content/dam/crucial/ssd-products/P5/images/product/Crucial-p5-ssd-standing-up-on-white-cropped-Image.psd.transform/small-jpg/img.jpg' },
        { id: 's4', name: 'Seagate FireCuda 2TB', price: 259.99, image: 'https://m.media-amazon.com/images/I/71lWfuDR-uL.jpg' },
        { id: 's5', name: 'Intel 670p 1TB', price: 89.99, image: 'https://www.bargainhardware.co.uk/media/catalog/product/image/413559f9d/intel-1tb-670p-series-m-2-2280-nvme-ssd-new.webp?store=default_uk&image-type=image' },
        { id: 's6', name: 'ADATA XPG SX8200 1TB', price: 109.99, image: 'https://lifemobile.lk/wp-content/uploads/2021/04/Adata-XPG-SX8200-Pro-M.2-2280-1TB-PCIe-NVMe-Internal-SSD.jpg' }
    ]
};

// Cart to store selected items
let cart = [];

// Function to create part item HTML
function createPartItem(part) {
    return `
        <div class="part-item" data-id="${part.id}">
            <img src="${part.image}" alt="${part.name}" class="product-image">
            <h3>${part.name}</h3>
            <p class="price">$${part.price.toFixed(2)}</p>
            <div class="quantity-control">
                <input type="number" min="0" value="0" class="quantity-input">
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>
    `;
}

// Function to initialize the page
function initializePage() {
    // Populate each section with items
    for (const [category, items] of Object.entries(computerParts)) {
        const container = document.getElementById(category);
        items.forEach(item => {
            container.innerHTML += createPartItem(item);
        });
    }

    // Add event listeners
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', handleAddToCart);
    });

    document.getElementById('buyNow').addEventListener('click', navigateToCheckout);
    document.getElementById('addToFavorites').addEventListener('click', saveToFavorites);
    document.getElementById('applyFavorites').addEventListener('click', applyFavorites);
}

// Function to handle adding items to cart
function handleAddToCart(event) {
    const partItem = event.target.closest('.part-item');
    const partId = partItem.dataset.id;
    const quantity = parseInt(partItem.querySelector('.quantity-input').value);

    if (quantity <= 0) return;

    // Find the part details
    let part;
    for (const category of Object.values(computerParts)) {
        part = category.find(p => p.id === partId);
        if (part) break;
    }

    // Update cart
    const existingItem = cart.find(item => item.id === partId);
    if (existingItem) {
        existingItem.quantity = quantity;
    } else {
        cart.push({ ...part, quantity });
    }

    updateOrderTable();
}

// Function to update the order table
function updateOrderTable() {
    const tbody = document.getElementById('orderTableBody');
    tbody.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        tbody.innerHTML += `
            <tr data-id="${item.id}">
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td><button class="remove-item" onclick="removeItem('${item.id}')">×</button></td>
            </tr>
        `;
    });

    document.getElementById('totalPrice').textContent = `$${total.toFixed(2)}`;
}

// Function to remove item from cart
function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    updateOrderTable();
}

// Function to save order to favorites
function saveToFavorites() {
    if (cart.length > 0) {
        localStorage.setItem('favoriteOrder', JSON.stringify(cart));
        alert('Order saved to favorites!');
    } else {
        alert('Please add items to your cart first!');
    }
}

// Function to apply favorites
function applyFavorites() {
    const favoriteOrder = localStorage.getItem('favoriteOrder');
    if (favoriteOrder) {
        cart = JSON.parse(favoriteOrder);
        updateOrderTable();
        
        // Update quantity inputs
        cart.forEach(item => {
            const partItem = document.querySelector(`.part-item[data-id="${item.id}"]`);
            if (partItem) {
                partItem.querySelector('.quantity-input').value = item.quantity;
            }
        });
    } else {
        alert('No favorite order found!');
    }
}

// Function to navigate to checkout
function navigateToCheckout() {
    if (cart.length === 0) {
        alert('Please add items to your cart first!');
        return;
    }

    // Store cart data for checkout page
    localStorage.setItem('currentOrder', JSON.stringify(cart));
    window.location.href = 'checkout.html';
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);
