const header = document.querySelector("header");

window.addEventListener("scroll", function(){
	header.classList.toggle("sticky", window.scrollY > 0);

})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}


window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
}

const sr = ScrollReveal ({
	distance: '30px', 
	duration: 2000,
	reset: true
})


sr.reveal('.home-text',{delay:100, origin:'left'});
sr.reveal('.home-img',{delay:100, origin:'right'});
sr.reveal('.container, .about, .menu, .contact',{delay:100, origin:'bottom'});

document.addEventListener('DOMContentLoaded', function() {
    
    function addCartControls() {
        document.querySelectorAll('.row').forEach(row => {
           
            if (row.querySelector('.cart-controls')) {
                return; 
            }

           
            const cartControls = document.createElement('div');
            cartControls.className = 'cart-controls';
            
            
            const quantityControls = document.createElement('div');
            quantityControls.className = 'quantity-controls';
            
            const decreaseBtn = document.createElement('button');
            decreaseBtn.className = 'quantity-btn decrease';
            decreaseBtn.textContent = '-';
            
            const quantityDisplay = document.createElement('span');
            quantityDisplay.className = 'quantity-display';
            quantityDisplay.textContent = '1';
            
            const increaseBtn = document.createElement('button');
            increaseBtn.className = 'quantity-btn increase';
            increaseBtn.textContent = '+';
            
            const addToCartBtn = document.createElement('button');
            addToCartBtn.className = 'add-to-cart-btn';
            addToCartBtn.innerHTML = '<i class="bx bx-cart"></i> Add to Cart';
            
            
            quantityControls.appendChild(decreaseBtn);
            quantityControls.appendChild(quantityDisplay);
            quantityControls.appendChild(increaseBtn);
            cartControls.appendChild(quantityControls);
            cartControls.appendChild(addToCartBtn);
            
            
            row.querySelector('.star').insertAdjacentElement('beforebegin', cartControls);
            
            
            decreaseBtn.addEventListener('click', () => {
                let quantity = parseInt(quantityDisplay.textContent);
                if (quantity > 1) {
                    quantityDisplay.textContent = quantity - 1;
                }
            });
            
            increaseBtn.addEventListener('click', () => {
                let quantity = parseInt(quantityDisplay.textContent);
                quantityDisplay.textContent = quantity + 1;
            });
            
            addToCartBtn.addEventListener('click', () => {
                const productName = row.querySelector('h4').textContent;
                const quantity = parseInt(quantityDisplay.textContent);
                showNotification(`Added ${quantity} ${productName} to cart`);
            });
        });
    }

    
    addCartControls();

    
    function showNotification(message) {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
});


//login From end
