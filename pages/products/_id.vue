<template>
  <div class="container product-details bg-white p-4">
    <p class="name">{{ name }}</p>
    <p class="text-center">
      <ShareNetwork
        network="twitter"
        :url="url"
        :title="name"
        :hashtags="hashtags"
        class="mr-2"
      >
        Share on <i class="bi-twitter"></i>
      </ShareNetwork>
      <ShareNetwork
        network="facebook"
        :url="url"
        :title="name"
        :hashtags="hashtags"
      >
        Share on <i class="bi-facebook"></i>
      </ShareNetwork>
    </p>
    <div class="row">
      <div class="col-md-6">
        <b-carousel
          id="carousel-1"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333"
        >
          <b-carousel-slide
            v-for="(image, index) in images"
            :key="index"
            :img-src="require(`~/assets/images/products/${image}`)"
          ></b-carousel-slide>
        </b-carousel>
      </div>
      <div class="col-md-6">
        <PriceDetails
          v-if="!hasVariations"
          :price="price"
          :promos="promos"
          :shops="shops"
          :promo-shops="promoShops"
          :product-promos="productPromos"
          :stock="stock"
          :link="link"
        />
        <VariationPriceDetails
          v-else
          :price="price"
          :promos="promos"
          :shops="shops"
          :stock="stock"
          :link="link"
          :variations="variations"
        />
        <addons
          :name="name"
          :link="link"
          :shops="shops"
          :promos="promos"
          :products="products"
          :product-id="id"
        />
        <Promos
          additional-style-class="pt-2"
          :exclude-promos="[productPromoId]"
        />
      </div>
      <div class="col-md-12 pt-2">
        <p class="description mt-2">{{ description }}</p>
      </div>
    </div>
    <category-items
      :categories="categories"
      :name="name"
      :excluded-products="[id]"
    />
  </div>
</template>

<script>
import moment from 'moment'
import createPromoListWrapper from '../../models/promos'
import createVariations from '../../models/variation'
import CategoryItems from '~/components/CategoryItems.vue'
import Addons from '~/components/Addons.vue'

export default {
  components: { CategoryItems, Addons },
  async asyncData({ $content, params }) {
    const products = await $content('products').fetch()
    const shops = await $content('shops').fetch()

    if (!params.id) {
      return { product: null }
    }

    const filtered = products.filter((product) => product.id === params.id)
    if (!filtered.length) {
      return { product: null }
    }

    const product = filtered[0]
    const hashtags = product.tags.join(',') + ',jomigu,jomiguonlineshop'

    const variations = createVariations(product.variations)
    const stock = variations.isEmpty()
      ? product.stock
      : variations.getOverallStats().stock

    const now = moment().toDate()
    const promos = await $content('promos')
      .where({
        'start-date': { $lt: now },
        'end-date': { $gt: now },
      })
      .fetch()
    const promoListWrapper = createPromoListWrapper(promos)
    const activePromos = promoListWrapper.getProductActivePromos(product.promos)
    const productPromoId =
      activePromos.length > 0 ? activePromos[0].id : undefined
    const promoShops = activePromos.map((promo) => promo.shop)

    return {
      id: product.id,
      name: product.name,
      sharingImage: product.sharing_image || product.images[0],
      images: product.images,
      description: product.description,
      price: product.price,
      categories: product.categories,
      promos,
      products,
      activePromos,
      shops,
      promoShops,
      productPromos: product.promos,
      productPromoId,
      stock,
      variations: product.variations,
      hasVariations: !variations.isEmpty(),
      link: product.link,
      url: `${process.env.baseUrl}/products/${product.id}`,
      hashtags,
    }
  },

  head() {
    return {
      title: this.name,
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.name,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.url,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            process.env.baseUrl +
            require(`~/assets/images/products/${this.sharingImage}`),
        },
      ],
    }
  },
}
</script>

<style lang="scss">
p.price {
  span {
    color: var(--jomigu-price);
    font-weight: bold;
  }

  span.on-sale {
    color: var(--jomigu-color-2);
    font-size: smaller;
    font-weight: normal;
    text-decoration: line-through;
  }
}

.description {
  white-space: pre-line;
}

.product-shop {
  width: 25%;
}

.not-available {
  font-size: smaller;
}

.name {
  font-size: larger;
  font-weight: bold;
  text-align: center;
}

.btn-success {
  background-color: var(--jomigu-color-1);
  border-color: var(--jomigu-color-1);
}

.btn-primary {
  background-color: var(--jomigu-color-2);
  border-color: var(--jomigu-color-2);
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:not(:disabled):not(.disabled):active {
  color: var(--jomigu-color-1);
  background-color: var(--jomigu-color-2);
  border-color: var(--jomigu-color-2);
}

.btn-success:hover,
.btn-success:focus,
.btn-success:not(:disabled):not(.disabled):active {
  color: var(--jomigu-color-2);
  background-color: var(--jomigu-color-1);
  border-color: var(--jomigu-color-1);
}
</style>
