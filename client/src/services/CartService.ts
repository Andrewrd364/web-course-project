import { ICartItem } from "../models/ICartItem";

// Определим интерфейс для работы с корзиной
interface CartServices {
    /**
     * Получить текущее состояние корзины в виде словаря, где ключ - productId, значение - количество товара.
     * @returns Объект типа Record<string, number>, представляющий корзину.
     */
    getCart(): Record<string, number>;

    /**
     * Установить состояние корзины из предоставленного словаря productId - quantity.
     * @param items Объект типа Record<string, number> с данными корзины для установки.
     */
    setCart(items: Record<string, number>): void;

    /**
     * Очистить содержимое корзины.
     */
    clearCart(): void;

    /**
     * Добавить указанное количество товара с указанным productId в корзину.
     * Если товар уже существует в корзине, количество будет увеличено на указанное значение.
     * Если товара нет в корзине, он будет добавлен с указанным количеством.
     * @param item Идентификатор товара, который требуется добавить в корзину.
     * @param quantity Количество товара для добавления в корзину.
     */
    addToCart(item: ICartItem): void;

    /**
     * Удалить товар с указанным productId из корзины.
     * @param dishId Идентификатор товара, который требуется удалить из корзины.
     */
    removeFromCart(dishId: string): void;

    /**
     * Увеличить количество товара с указанным productId в корзине на одну единицу.
     * Если товара нет в корзине, он будет добавлен с количеством 1.
     * @param dishId Идентификатор товара, количество которого нужно увеличить или добавить.
     */
    increaseQuantity(dishId: string): void;

    /**
     * Уменьшить количество товара с указанным productId в корзине на одну единицу.
     * Если товара нет в корзине или его количество равно 1, он будет удален из корзины.
     * @param dishId Идентификатор товара, количество которого нужно уменьшить.
     */
    decreaseQuantity(dishId: string): void;

    /**
     * Получить элемент корзины.
     * Если товара нет в корзине, будет возвращен 0.
     * @param dishId Идентификатор товара, который нужно получить.
     */
    getCartItem(dishId: string): ICartItem;

    /**
     * Получить количество всех товаров, имеющихся в корзине.
     * Если товаров нет в корзине, будет возвращен 0.
     */
    getTotalQuantity(): number
}

// Реализация интерфейса CartStorage с использованием localStorage
export const cartStorage: CartServices = {
    getCart() {
        const cartJson = localStorage.getItem("cart");
        return cartJson ? JSON.parse(cartJson) : {};
    },
    setCart(items) {
        localStorage.setItem("cart", JSON.stringify(items));
    },
    clearCart() {
        localStorage.removeItem("cart");
    },
    addToCart(item) {
        const cart = this.getCart();
        const newQuantity = cart[item.dishId]
            ? cart[item.dishId] + item.quantity
            : item.quantity;
        cart[item.dishId] = newQuantity;
        this.setCart(cart);
    },
    removeFromCart(dishId) {
        const cart = this.getCart();
        delete cart[dishId];
        this.setCart(cart);
    },
    increaseQuantity(dishId) {
        const cart = this.getCart();
        cart[dishId] = (cart[dishId] || 0) + 1;
        this.setCart(cart);
    },
    decreaseQuantity(dishId) {
        const cart = this.getCart();
        if (cart[dishId] && cart[dishId] > 0) {
            cart[dishId]--;
            if (cart[dishId] === 0) {
                delete cart[dishId];
            }
            this.setCart(cart);
        }
    },
    getCartItem(dishId) {
        const cart = this.getCart();
        const quantity = cart[dishId] || 0; // Если cart[dishId] не существует, вернет 0
        return { quantity: quantity, dishId: dishId };
    },

    getTotalQuantity() {
        const cart = this.getCart();
        return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
    }
};
