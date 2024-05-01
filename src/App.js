import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store, { initializeStore } from './stores/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import ProductDetails from './components/ProductDetails';
import PurchasedItems from './components/PurchasedItems';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />}></Route>
          <Route path='/productDetails/:id' element={<ProductDetails />}></Route>
          <Route path='/purchasedItems' element={<PurchasedItems />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
