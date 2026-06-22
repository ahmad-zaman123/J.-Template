import axios from "axios";

// Base URL: env override → localhost dev → production same-origin /api
const baseURL =
  process.env.REACT_APP_API_URL ||
  (typeof window !== "undefined" && window.location.hostname === "localhost"
    ? "http://localhost:5000/api"
    : "/api");

// Guest cart is keyed by a per-browser session id sent on every request.
const SESSION_KEY = "j_session_id";
const getSessionId = () => {
  let sid = localStorage.getItem(SESSION_KEY);
  if (!sid) {
    sid =
      (window.crypto?.randomUUID && window.crypto.randomUUID()) ||
      `s_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(SESSION_KEY, sid);
  }
  return sid;
};

const api = axios.create({ baseURL });
api.interceptors.request.use((config) => {
  config.headers["x-session-id"] = getSessionId();
  return config;
});

// Normalize a backend product into the field names the UI components use.
const mapProduct = (p) => ({
  _id: p._id,
  id: p._id,
  product_name: p.name,
  newprice: p.price,
  oldprice: p.oldPrice,
  discount: p.discount,
  img: p.mainImage,
  images: p.images || [],
  inStock: p.inStock,
  size: p.size,
  description: p.description,
  category: p.category,
  featured: p.featured,
});

// ---------- PRODUCTS ----------
export const fetchProducts = async (params = {}) => {
  const { data } = await api.get("/products", { params });
  return data.map(mapProduct);
};
export const fetchProductById = async (id) => {
  const { data } = await api.get(`/products/${id}`);
  return mapProduct(data);
};

// ---------- CART (server keyed by x-session-id) ----------
export const fetchCart = async () => {
  const { data } = await api.get("/cart");
  return data.map((item) => ({
    _id: item._id,
    quantity: item.quantity,
    product: item.product ? mapProduct(item.product) : null,
  }));
};
export const addCartItem = async (productId, quantity = 1) => {
  const { data } = await api.post("/cart", { productId, quantity });
  return {
    _id: data._id,
    quantity: data.quantity,
    product: data.product ? mapProduct(data.product) : null,
  };
};
export const removeCartItem = async (id) => {
  const { data } = await api.delete(`/cart/${id}`);
  return data;
};

// ---------- ORDERS ----------
export const createOrder = async (payload) => {
  const { data } = await api.post("/orders", { ...payload, sessionId: getSessionId() });
  return data;
};
export const fetchOrderById = async (id) => {
  const { data } = await api.get(`/orders/${id}`);
  return data;
};

// ---------- PAYMENTS ----------
export const fetchPaymentConfig = async () => {
  const { data } = await api.get("/payments/config");
  return data; // { safepay: boolean }
};
export const createSafepayCheckout = async (payload) => {
  const { data } = await api.post("/payments/safepay/checkout", {
    ...payload,
    sessionId: getSessionId(),
  });
  return data; // { orderId, checkoutUrl }
};

export { getSessionId };
export default api;
