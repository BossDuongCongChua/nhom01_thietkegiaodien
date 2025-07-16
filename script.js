// Global variables
let cart = [];
let searchHistory = [];
let currentLanguage = 'vi';
let orderHistory = [];

// Language translations
const translations = {
    vi: {
        home: 'Trang chủ',
        menu: 'Thực đơn',
        promotions: 'Khuyến mãi',
        contact: 'Liên hệ',
        searchPlaceholder: 'Tìm kiếm món ăn...',
        addToCart: 'Thêm',
        cart: 'Giỏ hàng',
        total: 'Tổng cộng',
        checkout: 'Thanh toán',
        close: 'Đóng',
        orderHistory: 'Lịch sử đơn hàng',
        bestSeller: 'Best Seller - Món ăn bán chạy nhất',
        familyCombo: 'Combo Gia Đình',
        coupleCombo: 'Combo Đôi',
        burger: 'Burger Bò',
        pizza: 'Pizza Hải Sản',
        chicken: 'Gà Rán',
        fries: 'Khoai Tây Chiên',
        feedback: 'Phản hồi chất lượng dịch vụ',
        name: 'Họ tên',
        email: 'Email',
        rating: 'Đánh giá dịch vụ',
        comment: 'Nhận xét',
        sendFeedback: 'Gửi phản hồi',
        contactInfo: 'Thông tin liên hệ',
        address: '123 Đường ABC, Quận 1, TP.HCM',
        phone: '0123 456 789',
        emailContact: 'info@fastfoodexpress.com',
        hours: '7:00 - 22:00 (Thứ 2 - Chủ nhật)',
        heroTitle: 'Thức ăn nhanh ngon nhất',
        heroSubtitle: 'Khám phá hương vị tuyệt vời với các món ăn được chế biến từ nguyên liệu tươi ngon nhất. Giao hàng nhanh chóng trong 30 phút.',
        viewMenu: 'Xem thực đơn',
        orderNow: 'Đặt hàng ngay',
        ourMenu: 'Thực đơn của chúng tôi',
        menuSubtitle: 'Khám phá các món ăn ngon nhất',
        promotions: 'Khuyến mãi hấp dẫn',
        promotionsSubtitle: 'Đừng bỏ lỡ những ưu đãi tuyệt vời',
        contactTitle: 'Liên hệ với chúng tôi',
        contactSubtitle: 'Chúng tôi luôn sẵn sàng phục vụ bạn',
        discount20: 'Giảm 20%',
        discountDesc: 'Cho tất cả các món ăn vào thứ 2 hàng tuần',
        gift: 'Tặng quà',
        giftDesc: 'Mua 2 combo tặng 1 ly nước ngọt miễn phí',
        freeShip: 'Miễn phí ship',
        freeShipDesc: 'Đơn hàng từ 200.000đ được miễn phí vận chuyển',
        daysLeft: 'Còn',
        days: 'ngày',
        excellent: '⭐⭐⭐⭐⭐ Rất tốt',
        good: '⭐⭐⭐⭐ Tốt',
        average: '⭐⭐⭐ Bình thường',
        poor: '⭐⭐ Kém',
        veryPoor: '⭐ Rất kém',
        commentPlaceholder: 'Hãy chia sẻ ý kiến của bạn...',
        selectRating: 'Chọn đánh giá',
        itemAdded: 'Đã thêm vào giỏ hàng!',
        itemRemoved: 'Đã xóa khỏi giỏ hàng!',
        feedbackSent: 'Cảm ơn phản hồi của bạn!',
        searchHistory: 'Lịch sử tìm kiếm',
        clearHistory: 'Xóa lịch sử',
        noItems: 'Không có món nào trong giỏ hàng',
        quantity: 'Số lượng',
        remove: 'Xóa',
        increase: 'Tăng',
        decrease: 'Giảm'
    },
    en: {
        home: 'Home',
        menu: 'Menu',
        promotions: 'Promotions',
        contact: 'Contact',
        searchPlaceholder: 'Search for food...',
        addToCart: 'Add',
        cart: 'Cart',
        total: 'Total',
        checkout: 'Checkout',
        close: 'Close',
        orderHistory: 'Order History',
        bestSeller: 'Best Seller - Most Popular Items',
        familyCombo: 'Family Combo',
        coupleCombo: 'Couple Combo',
        burger: 'Beef Burger',
        pizza: 'Seafood Pizza',
        chicken: 'Fried Chicken',
        fries: 'French Fries',
        feedback: 'Service Quality Feedback',
        name: 'Full Name',
        email: 'Email',
        rating: 'Service Rating',
        comment: 'Comment',
        sendFeedback: 'Send Feedback',
        contactInfo: 'Contact Information',
        address: '123 ABC Street, District 1, HCMC',
        phone: '0123 456 789',
        emailContact: 'info@fastfoodexpress.com',
        hours: '7:00 - 22:00 (Monday - Sunday)',
        heroTitle: 'Best Fast Food',
        heroSubtitle: 'Discover amazing flavors with dishes made from the freshest ingredients. Fast delivery within 30 minutes.',
        viewMenu: 'View Menu',
        orderNow: 'Order Now',
        ourMenu: 'Our Menu',
        menuSubtitle: 'Discover the best dishes',
        promotions: 'Amazing Promotions',
        promotionsSubtitle: 'Don\'t miss out on great offers',
        contactTitle: 'Contact Us',
        contactSubtitle: 'We are always ready to serve you',
        discount20: '20% Off',
        discountDesc: 'For all dishes every Monday',
        gift: 'Free Gift',
        giftDesc: 'Buy 2 combos get 1 free soft drink',
        freeShip: 'Free Shipping',
        freeShipDesc: 'Free shipping for orders over 200,000đ',
        daysLeft: 'Days left',
        days: 'days',
        excellent: '⭐⭐⭐⭐⭐ Excellent',
        good: '⭐⭐⭐⭐ Good',
        average: '⭐⭐⭐ Average',
        poor: '⭐⭐ Poor',
        veryPoor: '⭐ Very Poor',
        commentPlaceholder: 'Please share your opinion...',
        selectRating: 'Select rating',
        itemAdded: 'Added to cart!',
        itemRemoved: 'Removed from cart!',
        feedbackSent: 'Thank you for your feedback!',
        searchHistory: 'Search History',
        clearHistory: 'Clear History',
        noItems: 'No items in cart',
        quantity: 'Quantity',
        remove: 'Remove',
        increase: 'Increase',
        decrease: 'Decrease'
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadFromLocalStorage();
    showBestSellerPopup();
    addScrollToTopButton();
    initializeAnimations();
    initializeMenuFilter();
});

// Initialize application
function initializeApp() {
    // Language selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            currentLanguage = this.value;
            translatePage();
            saveToLocalStorage();
        });
    }

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput) {
        searchInput.addEventListener('focus', showSearchHistory);
        searchInput.addEventListener('blur', hideSearchHistory);
        searchInput.addEventListener('input', function() {
            if (this.value.trim()) {
                showSearchHistory();
            } else {
                hideSearchHistory();
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }

    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const price = parseInt(this.getAttribute('data-price'));
            addToCart(name, price);
        });
    });

    // Add to cart buttons in popup
    const addToCartPopupButtons = document.querySelectorAll('.add-to-cart-popup');
    addToCartPopupButtons.forEach(button => {
        button.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const price = parseInt(this.getAttribute('data-price'));
            addToCart(name, price);
            
            // Close popup after adding to cart
            const modal = bootstrap.Modal.getInstance(document.getElementById('bestSellerModal'));
            if (modal) {
                modal.hide();
            }
        });
    });

    // Feedback form
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', handleFeedbackSubmit);
    }

    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Update cart count
    updateCartCount();
}

// Initialize menu filter
function initializeMenuFilter() {
    const categoryButtons = document.querySelectorAll('.menu-categories .btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter menu items
            filterMenuItems(category);
        });
    });
}

// Filter menu items
function filterMenuItems(category) {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        if (category === 'all' || itemCategory === category) {
            item.classList.remove('hidden');
            item.style.animation = 'fadeInUp 0.5s ease-out';
        } else {
            item.classList.add('hidden');
        }
    });
}

// Show best seller popup after 3 seconds
function showBestSellerPopup() {
    setTimeout(() => {
        const modal = new bootstrap.Modal(document.getElementById('bestSellerModal'));
        modal.show();
    }, 3000);
}

// Add scroll to top button
function addScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    document.body.appendChild(scrollBtn);

    // Show/hide scroll button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
}

// Initialize animations
function initializeAnimations() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.menu-card, .promotion-card, .contact-info, .feedback-form');
    animateElements.forEach(el => observer.observe(el));
}

// Cart functionality
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }
    
    updateCartCount();
    updateCartDisplay();
    saveToLocalStorage();
    showToast(translations[currentLanguage].itemAdded, 'success');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    updateCartDisplay();
    saveToLocalStorage();
    showToast(translations[currentLanguage].itemRemoved, 'info');
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        removeFromCart(index);
    } else {
        updateCartCount();
        updateCartDisplay();
        saveToLocalStorage();
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = `<p class="text-muted">${translations[currentLanguage].noItems}</p>`;
        } else {
            cartItems.innerHTML = cart.map((item, index) => {
                // Map tên món ăn với hình ảnh tương ứng
                const imageMap = {
                    'Burger Bò': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                    'Burger Gà': 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                    'Burger Phô Mai': 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                    'Pizza Hải Sản': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                    'Pizza Pepperoni': 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                    'Pizza Margherita': 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                    'Gà Rán': 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                    'Gà Nướng': 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                    'Cánh Gà': 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                    'Khoai Tây Chiên': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                    'Salad Rau': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                    'Coca Cola': 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                    'Pepsi': 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                    'Trà Đá': 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                    'Combo Gia Đình': 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                    'Combo Đôi': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
                };
                
                const imageUrl = imageMap[item.name] || `https://via.placeholder.com/100x100/ff6b35/ffffff?text=${encodeURIComponent(item.name)}`;
                
                return `
                    <div class="cart-item">
                        <img src="${imageUrl}" alt="${item.name}">
                        <div class="cart-item-details">
                            <h6>${item.name}</h6>
                            <p class="text-muted">${item.price.toLocaleString()}đ</p>
                            <div class="cart-item-quantity">
                                <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                                <span>${item.quantity}</span>
                                <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                            </div>
                        </div>
                        <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${index})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;
            }).join('');
        }
    }
    
    if (cartTotal) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toLocaleString() + 'đ';
    }
}

// Search functionality
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    
    if (query) {
        // Add to search history
        if (!searchHistory.includes(query)) {
            searchHistory.unshift(query);
            if (searchHistory.length > 10) {
                searchHistory.pop();
            }
            saveToLocalStorage();
        }
        
        // Simulate search (in real app, this would search the database)
        showToast(`Tìm kiếm: "${query}"`, 'info');
        hideSearchHistory();
    }
}

function showSearchHistory() {
    const searchHistoryDiv = document.getElementById('searchHistory');
    if (searchHistoryDiv && searchHistory.length > 0) {
        searchHistoryDiv.innerHTML = `
            <div class="search-history-item" onclick="clearSearchHistory()">
                <i class="fas fa-trash me-2"></i>${translations[currentLanguage].clearHistory}
            </div>
            ${searchHistory.map(item => `
                <div class="search-history-item" onclick="selectSearchItem('${item}')">
                    <i class="fas fa-history me-2"></i>${item}
                </div>
            `).join('')}
        `;
        searchHistoryDiv.classList.add('show');
    }
}

function hideSearchHistory() {
    const searchHistoryDiv = document.getElementById('searchHistory');
    if (searchHistoryDiv) {
        setTimeout(() => {
            searchHistoryDiv.classList.remove('show');
        }, 200);
    }
}

function selectSearchItem(item) {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = item;
        performSearch();
    }
}

function clearSearchHistory() {
    searchHistory = [];
    saveToLocalStorage();
    hideSearchHistory();
}

// Feedback form
function handleFeedbackSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('customerName').value,
        email: document.getElementById('customerEmail').value,
        rating: document.getElementById('serviceRating').value,
        message: document.getElementById('feedbackMessage').value,
        date: new Date().toISOString()
    };
    
    // In a real app, this would be sent to the server
    console.log('Feedback submitted:', formData);
    
    // Show success message
    showToast(translations[currentLanguage].feedbackSent, 'success');
    
    // Reset form
    e.target.reset();
}

// Checkout functionality - Updated to redirect to order page
function handleCheckout() {
    if (cart.length === 0) {
        showToast('Giỏ hàng trống!', 'warning');
        return;
    }
    
    // Close cart modal
    const cartModal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
    if (cartModal) {
        cartModal.hide();
    }
    
    // Redirect to order page
    window.location.href = 'order.html';
}

// Language translation
function translatePage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update placeholders
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.placeholder = translations[currentLanguage].searchPlaceholder;
    }
    
    // Update form labels and placeholders
    const customerName = document.getElementById('customerName');
    const customerEmail = document.getElementById('customerEmail');
    const serviceRating = document.getElementById('serviceRating');
    const feedbackMessage = document.getElementById('feedbackMessage');
    
    if (customerName) {
        customerName.placeholder = translations[currentLanguage].name;
    }
    if (customerEmail) {
        customerEmail.placeholder = translations[currentLanguage].email;
    }
    if (serviceRating) {
        serviceRating.innerHTML = `
            <option value="">${translations[currentLanguage].selectRating}</option>
            <option value="5">${translations[currentLanguage].excellent}</option>
            <option value="4">${translations[currentLanguage].good}</option>
            <option value="3">${translations[currentLanguage].average}</option>
            <option value="2">${translations[currentLanguage].poor}</option>
            <option value="1">${translations[currentLanguage].veryPoor}</option>
        `;
    }
    if (feedbackMessage) {
        feedbackMessage.placeholder = translations[currentLanguage].commentPlaceholder;
    }
}

// Toast notifications
function showToast(message, type = 'info') {
    // Create toast container if it doesn't exist
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }
    
    const toast = document.createElement('div');
    toast.className = `toast show`;
    toast.innerHTML = `
        <div class="toast-header">
            <strong class="me-auto">${type === 'success' ? 'Thành công' : type === 'error' ? 'Lỗi' : 'Thông báo'}</strong>
            <button type="button" class="btn-close btn-close-white" onclick="this.parentElement.parentElement.remove()"></button>
        </div>
        <div class="toast-body">
            ${message}
        </div>
    `;
    
    toastContainer.appendChild(toast);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.remove();
        }
    }, 3000);
}

// Local storage functions
function saveToLocalStorage() {
    localStorage.setItem('fastfood_cart', JSON.stringify(cart));
    localStorage.setItem('fastfood_searchHistory', JSON.stringify(searchHistory));
    localStorage.setItem('fastfood_language', currentLanguage);
    localStorage.setItem('fastfood_orderHistory', JSON.stringify(orderHistory));
}

function loadFromLocalStorage() {
    const savedCart = localStorage.getItem('fastfood_cart');
    const savedSearchHistory = localStorage.getItem('fastfood_searchHistory');
    const savedLanguage = localStorage.getItem('fastfood_language');
    const savedOrderHistory = localStorage.getItem('fastfood_orderHistory');
    
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    
    if (savedSearchHistory) {
        searchHistory = JSON.parse(savedSearchHistory);
    }
    
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            languageSelect.value = currentLanguage;
        }
        translatePage();
    }
    
    if (savedOrderHistory) {
        orderHistory = JSON.parse(savedOrderHistory);
    }
    
    updateCartCount();
    updateCartDisplay();
}

// Countdown timer for promotions
function updateCountdown() {
    const countdownElements = document.querySelectorAll('[data-countdown]');
    countdownElements.forEach(element => {
        const targetDate = new Date(element.getAttribute('data-countdown'));
        const now = new Date();
        const difference = targetDate - now;
        
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const badge = element.querySelector('.badge');
            if (badge) {
                badge.textContent = `${translations[currentLanguage].daysLeft} ${days} ${translations[currentLanguage].days}`;
            }
        }
    });
}

// Update countdown every minute
setInterval(updateCountdown, 60000);
updateCountdown(); // Initial update

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal.show');
        modals.forEach(modal => {
            const modalInstance = bootstrap.Modal.getInstance(modal);
            if (modalInstance) {
                modalInstance.hide();
            }
        });
    }
});

// Add loading states
function showLoading(element) {
    const originalText = element.innerHTML;
    element.innerHTML = '<span class="loading"></span>';
    element.disabled = true;
    return originalText;
}

function hideLoading(element, originalText) {
    element.innerHTML = originalText;
    element.disabled = false;
}

// Export functions for global access
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.selectSearchItem = selectSearchItem;
window.clearSearchHistory = clearSearchHistory;
window.filterMenuItems = filterMenuItems; 