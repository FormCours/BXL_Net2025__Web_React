import style from './ProductList.module.css';
import clsx from 'clsx'; /* npm i clsx */

function ProductListItem({ name, description, price, on_sale }) {

    const formattedPrice = price.toLocaleString('fr-be', {
        style: 'currency',
        currency: 'EUR'
    })

    return (
        <article>
            {/* <p>{name} <span className={on_sale ? style['on-sale'] : ''}>{formattedPrice}</span></p> */}
            <p>{name} <span className={clsx(on_sale && style['on-sale'])}>{formattedPrice}</span></p>
            <p>{description || 'Aucune information.'}</p>
        </article>
    )
}

export default function ProductList({products = []}) {
    return (
        <section>
            {products.map(product => (
                <ProductListItem key={product.id} {...product} />
            ))}
        </section>
    )
} 


