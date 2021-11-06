import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const DUMMY_PRODUCT =[{id:1 ,name:'iPhone13 mini', price: 10000, description: 'iPhone whit smaller form factor'},
  {id:2 ,name:'iPhone13', price: 15000, description: 'iPhone 256GB OLED Display 2 back camery'},
  {id:3 ,name:'iPhone13 Pro', price: 20000, description: 'Pro like the name suggest'},
  {id:4 ,name:'iPhone13 Pro Max', price: 25000, description: 'like the Pro but Larger'} ,
];

 const listItem = DUMMY_PRODUCT.map(item=> <ProductItem id={item.id} name = {item.name} price = {item.price} description = {item.description} />)

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {listItem}
      </ul>
    </section>
  );
};

export default Products;
