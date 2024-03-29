<template>
  <div>
    <div class="container featured">
      <img
        v-if="sharingImage !== undefined"
        :src="require(`~/assets/images/sharing/${sharingImage}`)"
        class="featured-image"
      />
      <p class="text-center bg-white mb-0">
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
    </div>
    <Products
      v-if="type !== 'addon'"
      filter="promo"
      :value="promoId"
      :promos="promos"
    />
    <Products
      v-if="type === 'addon'"
      title="Main Products"
      filter="addon-promo"
      :values="mainProducts"
      :promos="promos"
    />
    <Products
      v-if="type === 'addon'"
      title="Add-on Products"
      filter="addon-promo"
      :values="addonProducts"
      :promos="promos"
    />
    <Promos
      :exclude-promos="[promoId]"
      additional-style-class="px-3 pb-3 bg-white"
    />
  </div>
</template>

<script>
import createPromoListWrapper from '../../models/promos'

export default {
  async asyncData({ $content, params }) {
    const promoList = (await $content('promos').fetch()).filter(
      (p) => p.id === params.id
    )
    const promo = promoList[0]

    return {
      promoId: promo.id,
      name: promo.name,
      type: promo.type,
      mainProducts: promo['main-products'] || [],
      addonProducts: promo['addon-products'] || [],
      promoList,
      sharingImage: promo.sharing_image,
      description: `Jomigu Online Shop ${promo.name}`,
      url: `https://shop.jomigu.com/promos/${promo.id}`,
      hashtags: `${promo.hashtag},jomigu,jomiguonlineshop`,
      imageWidth: promo.image_width || 1200,
      imageHeight: promo.image_height || 630,
    }
  },

  head() {
    const title = this.name

    return {
      title,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.url,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'apple-mobile-web-app-title',
          property: 'apple-mobile-web-app-title',
          content: title,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            process.env.baseUrl +
            require(`~/assets/images/sharing/${this.sharingImage}`),
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: this.imageWidth,
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: this.imageHeight,
        },
      ],
    }
  },

  computed: {
    promos() {
      return createPromoListWrapper(this.promoList).getActivePromos()
    },
  },
}
</script>

<style lang="scss">
.featured {
  padding: 0;
}

.featured-image {
  width: 100%;
  padding: 0;
}
</style>
