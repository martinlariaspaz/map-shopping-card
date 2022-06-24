# NPM Example

### Martin L. Arias Paz

## Example

``import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'do-product-card'`

```<ProductCard
        product={{ ...product }}
        initialValues={{
          count: 0,
          maxCount: 5,
          minCount: 0,
        }}
      >
        {(args) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
```
